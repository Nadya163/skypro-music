import { Link } from 'react-router-dom';
import * as S from './registration.style';


function Register() {
    return (
      <S.Wrapper>
        <S.ContainerSignup>
          <S.ModalBlock>
            <S.ModalFormLogin>
              <Link to="../">
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
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <S.ModalBtnSignupEnt type="button">
                <Link to="/">Зарегистрироваться</Link>
              </S.ModalBtnSignupEnt>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerSignup>
      </S.Wrapper>
    )
  }
  
  export default Register;
  