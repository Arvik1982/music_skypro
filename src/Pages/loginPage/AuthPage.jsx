import { Link, Navigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { login } from "../../api";

export default function AuthPage({isLoginMode, setIsLoginMode, setUser  }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  let responseOk;
  const handleLogin = async ({ email, password }) => {
    login(email,password).then((response)=>{if (response.ok){
      
      
      let data = response.json()
      responseOk=true
      return(data)
    }else{
      let data = response.json()
      console.log(data)
      return(data)
    }}).then((data)=>{
        
      if (!responseOk){
        
        console.log(data)
        setError(data.detail)
      }else{
      console.log(data)  
      
      
      localStorage.setItem('userName',data.username)
      setUser(true)
      // return window.location.href='/'
      return <Navigate to="/" replace={true}/>
    }
      
      
    })
    
    alert(`Выполняется вход: ${email} ${password}`);
    
    
  };

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
    setError("Неизвестная ошибка регистрации");
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
            
              <S.PrimaryButton onClick={() => {handleLogin({ email, password })}}>
                Войти
              </S.PrimaryButton>
            
              <Link onClick={()=>setIsLoginMode(false)} to="/login">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}