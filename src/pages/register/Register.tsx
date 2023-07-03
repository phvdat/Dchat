import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/baseUI/button/Button';
import ErrorMessage from 'components/baseUI/errorMessage/ErrorMessage';
import Icon from 'components/baseUI/Icon';
import Input from 'components/baseUI/input/Input';
import PasswordInput from 'components/baseUI/input/PasswordInput';
import { RoutePath } from 'constants/routes';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

interface IRegisterFormValues {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const schema = useMemo(() => {
    return yup.object<IRegisterFormValues>().shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.required')),
      userName: yup.string().required(t('validation.required')),
      password: yup
        .string()
        .required(t('validation.required'))
        .min(6, t('validation.password', { min: 6 })),
      confirmPassword: yup
        .string()
        .required(t('validation.required'))
        .oneOf([yup.ref('password')], t('validation.confirmPassword'))
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IRegisterFormValues) => {
    navigate(RoutePath.Login);
    // call api
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen text-center'>
      <h1 className='text-base mb-3'>{t('login.signUp')}</h1>
      <span className='text-secondary-light dark:text-secondary-dark mb-7'>
        {t('login.descriptionSignUp')}
      </span>
      <form
        className='w-full max-w-md bg-secondary-light dark:bg-secondary-dark px-8 py-10  rounded-md shadow-md text-left'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col align-top mb-4'>
          <label htmlFor='email' className='mb-2'>
            {t('login.email')}
          </label>
          <Input
            prefixIcon={<Icon icon='mail-solid' size={16} />}
            isError={!!errors.email}
            type='text'
            id='email'
            refRegister={register('email')}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>
        <div className='flex flex-col align-top mb-4'>
          <label htmlFor='userName' className='mb-2'>
            {t('login.userName')}
          </label>
          <Input
            prefixIcon={<Icon icon='user-solid' size={16} />}
            isError={!!errors.userName}
            type='text'
            id='userName'
            refRegister={register('userName')}
          />
          <ErrorMessage message={errors.userName?.message} />
        </div>
        <div className='flex flex-col align-top mb-4'>
          <label htmlFor='password' className='mb-2'>
            {t('login.password')}
          </label>
          <PasswordInput
            prefixIcon={<Icon icon='lock-solid' size={16} />}
            isError={!!errors.password}
            type='password'
            id='password'
            refRegister={register('password')}
          />
          <ErrorMessage message={errors.password?.message} />
        </div>
        <div className='flex flex-col align-top mb-4'>
          <label htmlFor='confirmPassword' className='mb-2'>
            {t('login.confirmPassword')}
          </label>
          <PasswordInput
            prefixIcon={<Icon icon='lock-solid' size={16} />}
            isError={!!errors.confirmPassword}
            type='password'
            id='confirmPassword'
            refRegister={register('confirmPassword')}
          />
          <ErrorMessage message={errors.confirmPassword?.message} />
        </div>
        <div className='mt-5'>
          <Button type='submit' fullWidth>
            {t('login.signUp')}
          </Button>
        </div>
      </form>
      <p className='mt-7'>
        <Trans
          i18nKey={'login.haveAccount'}
          components={{
            a: (
              <a
                href={RoutePath.Login}
                className='text-primary hover:underline'
              />
            )
          }}
        />
      </p>
    </div>
  );
};

export default RegisterPage;
