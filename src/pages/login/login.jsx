import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './login.style'
import { LoginTodos } from '../../api';
import { useContext } from 'react';
import UserContext from '../../context';
import { useGetTokenMutation } from '../../apiServece';


function Login() {

  const [getToken] = useGetTokenMutation();
  const [errorMessage, setErrorMessage] = useState(null);
  const {changingUserData} = useContext(UserContext);

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const navigate = useNavigate();

    const handleLogin = ({email, password}) => {
      LoginTodos({
        email: email,
        password: password
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response));
          changingUserData(JSON.parse(localStorage.getItem('user')))
          navigate('/');
          reset();
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        getToken({email, password}).then(
          (token) => {
            console.log(token);
            localStorage.setItem('access', (token.data.access)),
            localStorage.setItem('refresh', (token.data.refresh))
            console.log(localStorage.getItem('access'));
          }
        )
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
           <S.ModalInputEnter type="submit"  disabled={!isValid}>Вход</S.ModalInputEnter >
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