import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './registration.style';
import { SignupTodos } from '../../api';
import UserContext from '../../context';


function Register() { 
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const {changingUserData} = useContext(UserContext);

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: "onBlur"
  });

    const handleRegister = async (data) => {
    try {
      await SignupTodos(data);
      localStorage.setItem('user', JSON.stringify(data));
      changingUserData(localStorage.getItem('user'));
      reset();
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Произошла ошибка:", error);
    }
  };

  const validPassword = (value) => {
    const password = watch("password");
    if (value === password) {
      return true;
    } else {
      return false;
    }
  };

    return (
      <S.Wrapper>
        <S.ContainerSignup>
          <S.ModalBlock>
            <S.ModalFormLogin onSubmit={handleSubmit(handleRegister)}>
              <Link to="/login">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </Link>
              <S.ModalInput
                {...register("email", {
                  required: "Поле обязательно к заполнению.",
                  onChange: ((event) => event.target.value)
                })}
                type="email"
                placeholder="Почта"
              />
              <S.ErrorMessage>
              {errors?.email && <S.ErrorMessage>{errors?.email?.message}</S.ErrorMessage>}
                </S.ErrorMessage>
              <S.ModalInput
              {...register("password", {
                required: "Поле обязательно к заполнению.",
                onChange: ((event) => event.target.value)
              })}
                type="password"
                placeholder="Пароль"
              />
              {errors?.password && <S.ErrorMessage>{errors?.password?.message}</S.ErrorMessage>}
              <S.ModalInput
                {...register("repeatPassword", {
                    required: "Поле обязательно к заполнению.",
                    onChange: ((event) => event.target.value),
                    validate: validPassword
                })}
                type="password"
                placeholder="Повторите пароль"
              />
              {errors?.repeatPassword && (
                  <S.ErrorMessage>{errors?.repeatPassword?.message || "Пароли не совпадают."}</S.ErrorMessage>
                )}
              <div>{errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}</div>
              <S.ModalImputSignupEnt type="submit" value="Зарегистрироваться" disabled={!isValid} />
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSignup>
      </S.Wrapper>
    )
  }
  
  export default Register;
  