import { styled } from 'styled-components';

export const ErrorMessage = styled.span`
color: red;
`;

export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
`;

export const ContainerSignup = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalBlock = styled.div`
position: absolute;
z-index: 2;
left: calc(50% - (366px/2));
top: calc(50% - (439px/2));
opacity: 1;
`;

export const ModalFormLogin = styled.form`
width: 366px;
/*height: 439px;*/
background-color: #FFFFFF;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 43px 44px 47px 40px;

& input:first-child {
    margin-bottom: 30px;
}
`;

export const ModalLogo = styled.div`
width: 140px;
height: 21px;
background-color: transparent;
& img {
    width: 140px;
    height: auto;
  }
`;

export const ModalInput = styled.input`
width: 100%;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #D0CECE;
padding: 8px 1px;
margin-right: 3px;
margin-top: 30px;
&::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
&:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
&::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
&::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
`;

export const ModalBtnSignupEnt = styled.button`
width: 278px;
height: 62px;
background-color: #580EA2;
border-radius: 6px;
margin-left: 4px;
border: none;
margin-top: 30px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
& a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
`;

export const ModalImputSignupEnt = styled.input`
width: 278px;
height: 62px;
background-color: #580ea2;
border-radius: 6px;
margin-left: 4px;
border: none;
margin-top: 60px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
letter-spacing: -0.054px;
cursor: pointer;
&: hover {
    background-color: #3f007d;
}
&:disabled {
  background-color: #ccc;
}
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
`;