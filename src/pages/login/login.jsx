import { Link } from 'react-router-dom';
import * as S from './login.style';

function Login({ onClick }) {

    return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <Link to="/">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </Link>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <Link to="/">
           <S.ModalBtnEnter type="button" onClick={onClick} >
                Вход
            </S.ModalBtnEnter>
            </Link>
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

