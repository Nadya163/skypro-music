import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './registration.style';
import { SignupTodos } from '../../api';
import UserContext from '../../context';
import { useGetTokenMutation } from '../../apiServece';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/redux/authSlice';


function Register() { 
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [getToken] = useGetTokenMutation();
  const navigate = useNavigate();
  const {changingUserData} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const responseToken = () => {
    getToken({ email, password })
      .unwrap()
      .then((token) => {
        dispatch(
          setAuth({
            access: token.access,
            refresh: token.refresh,
            user: JSON.parse(localStorage.getItem("user")),
          })
        );
      })
      .catch((error) => {
        return error;
      })
  };

    const handleRegister = async () => {
      await SignupTodos({
        email: email,
        password: password,
        username: username
      })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response));
        changingUserData(JSON.parse(localStorage.getItem('user')))
        navigate('/');
        reset();
      }).catch((error) => {
        setError(error.message);
      })
    .finally(() => {
      responseToken();
    });
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
                {...register("username", {
                  required: "Поле обязательно к заполнению.",
                  onChange: (event) => {
                    setUsername(event.target.value);
                  }
                })}
                type="text"
                placeholder="Никнейм"
              />
              <S.ModalInput
                {...register("email", {
                  required: "Поле обязательно к заполнению.",
                  onChange: (event) => {
                    setEmail(event.target.value);
                  }
                })}
                type="email"
                placeholder="Почта"
              />
              <S.error>
              {errors?.email && <S.error>{errors?.email?.message}</S.error>}
                </S.error>
              <S.ModalInput
              {...register("password", {
                required: "Поле обязательно к заполнению.",
                onChange: (event) => {
                    setPassword(event.target.value)
                  }
              })}
                type="password"
                placeholder="Пароль"
              />
              {errors?.password && <S.error>{errors?.password?.message}</S.error>}
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
                  <S.error>{errors?.repeatPassword?.message || "Пароли не совпадают."}</S.error>
                )}
              <div>{error && <S.error>{error}</S.error>}</div>
              <S.ModalImputSignupEnt type="submit" value="Зарегистрироваться" disabled={!isValid} />
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSignup>
      </S.Wrapper>
    )
  }
  
  export default Register;
  