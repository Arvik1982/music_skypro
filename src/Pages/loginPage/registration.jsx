import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { login, registration } from "../../api";

export default function AuthPageReg({ isLoginMode, setUserName, setUserPass,setUser,user, setIsLoginMode }) {
  const [error, setError] = useState(null);
  let responseStatus;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [placeholderUser, setPlaceholderUser]  =useState('Почта');
  const [placeholderPass, setPlaceholderPass]  =useState('Пароль');
  const [placeholderRepeat, setPlaceholderRepeat]  =useState('Повторите пароль')
  setUserName(email)
  setUserPass(password)
  
  const handleLogin = async ({ email, password }) => {
    if (email===""||password===""){
      setPlaceholderPass('заполните поле ввода')
      setPlaceholderUser('заполните поле ввода')}
    else{
    login(email,password).then((data)=>{c
      setError(data.detail)
      ;})
    
  }
  };

  const handleRegister = async () => {
    if (email===""||password===""||repeatPassword===""){
      setPlaceholderPass('заполните поле ввода')
      setPlaceholderUser('заполните поле ввода')
      setPlaceholderRepeat('заполните поле ввода')
      }
    else{
    registration(email,password,email)
    .then((response)=>{

    if (response.status!==201){
    responseStatus=false
    let data = response.json()
    
    return data}
    else{ 
    responseStatus=true
    let data = response.json()
    
    return data}})
    
    .then((data)=>{
      if(responseStatus===false){
      let errArr=[]
      errArr.push(data.username,data.email,data.password)
      let index = errArr.indexOf(undefined)
      errArr.splice(index,1)
      
      let errString = errArr.join(' / ')
      ;setError(errString);}

      else{
        localStorage.setItem('user', data.username)
        setIsLoginMode(true)
        
      }

    })
    
    }

    
    // alert(`Выполняется регистрация: ${email} ${password}`);
    // setError("Неизвестная ошибка входа");
    //}

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
                placeholder={placeholderUser}
                value={email}
                onChange={(event) => {
                setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder={placeholderPass}
                value={password}
                onChange={(event) => {
                setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/login">
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
                placeholder={placeholderUser}
                value={email}
                onChange={(event) => {
                setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder={placeholderPass}
                value={password}
                onChange={(event) => {
                setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder={placeholderRepeat}
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton  onClick={handleRegister}> 
              <Link to='/registration'></Link>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}