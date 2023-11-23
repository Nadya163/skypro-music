import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './login.style'
import { LoginTodos } from '../../api';


function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      await LoginTodos(data);
        localStorage.setItem('user', JSON.stringify(data)); 
        reset();
        navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      console.log("Произошла ошибка:", error);
    }
  };
  
    return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin onSubmit={handleSubmit(handleLogin)}>
            <Link to="">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </Link>
            <S.ModalInput
              {...register("email", {
                required: "Поле обязательно к заполнению.",
              })}
              type="email"
              placeholder="Почта"
            />
            {errors?.login && <S.ErrorMessage>{errors?.login?.message}</S.ErrorMessage>}
            <S.ModalInput
              {...register("password", {
                required: "Поле обязательно к заполнению.",
                onChange: ((event) => event.target.value)
              })}
              type="password"
              placeholder="Пароль"
            />
            <div>{errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}</div>
           <S.ModalInputEnter type="submit" value="Вход" disabled={!isValid} />
            <Link to="/registration">
              <S.ModalBtnSignup type="button" >
                 Зарегистрироваться 
              </S.ModalBtnSignup>
              </Link>
            </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
    )
}

export default Login;