import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/baseUI/button/Button";
import ErrorMessage from "components/baseUI/errorMessage/ErrorMessage";
import Icon from "components/baseUI/icon";
import Input from "components/baseUI/input/Input";
import { RoutePath } from "constants/routes";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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
        .email(t("validation.email"))
        .required(t("validation.required")),
      password: yup.string().required(t("validation.required")),
      remember: yup.boolean().required(),
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ILoginFormValues) => {
    navigate(RoutePath.Home);
    // call api
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-base mb-3">{t("login.title")}</h1>
      <span className="text-secondary-light dark:text-secondary-dark mb-3">
        {t("login.description")}
      </span>
      <form
        className="w-full max-w-md bg-secondary-light dark:bg-secondary-dark p-8  rounded-md shadow-md text-left"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col align-top mb-3">
          <label htmlFor="email" className="mb-1">
            {t("login.email")}
          </label>
          <Input
            prefixIcon={<Icon icon="user-solid" size={16} />}
            isError={!!errors.email}
            type="text"
            id="email"
            refRegister={register("email")}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>
        <div className="flex flex-col align-top mb-3">
          <label htmlFor="password" className="mb-1">
            {t("login.password")}
          </label>
          <Input
            prefixIcon={<Icon icon="lock-solid" size={16} />}
            isError={!!errors.password}
            type="password"
            id="password"
            refRegister={register("password")}
          />
          <ErrorMessage message={errors.password?.message} />
        </div>
        <div className="flex justify-start mb-3">
          <input type="checkbox" id="remember" {...register("remember")} />
          <label htmlFor="remember" className="ml-2">
            {t("login.rememberMe")}
          </label>
        </div>
        <Button type="submit" fullWidth>
          {t("login.title")}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
