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

interface ILoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}
const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const schema = useMemo(() => {
    return yup.object<ILoginFormValues>().shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.required')),
      password: yup.string().required(t('validation.required')),
      remember: yup.boolean().required()
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ILoginFormValues) => {
    navigate(RoutePath.Home);
    // call api
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen text-center'>
      <h1 className='text-base mb-3'>{t('login.signIn')}</h1>
      <span className='mb-7'>{t('login.description')}</span>
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
        <div className='flex justify-start mb-4'>
          <input type='checkbox' id='remember' {...register('remember')} />
          <label htmlFor='remember' className='ml-2'>
            {t('login.rememberMe')}
          </label>
        </div>
        <Button type='submit' fullWidth>
          {t('login.signIn')}
        </Button>
      </form>
      <p className='mt-7'>
        <Trans
          i18nKey={'login.dontHaveAccount'}
          components={{
            a: (
              <a
                href={RoutePath.Register}
                className='text-primary hover:underline'
              />
            )
          }}
        />
      </p>
    </div>
  );
};

export default LoginPage;
