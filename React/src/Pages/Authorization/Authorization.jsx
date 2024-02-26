import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../component/ui/Button/Button';
import Input from '../../component/ui/Input/Input';
import { AuthContext } from '../../context/AuthContext';
import classes from './Authorization.module.css';
import { putUserData } from '../../context/dataToCookie';
import { loginURL, signupURL } from '../../context/urlContext';

const Authorization = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("") 
  const [isRegister, setIsRegister] = useState(false)

  const {isAuth,setIsAuth} = useContext(AuthContext)


  
  
  function clearInput() {
    setEmail("")
    setPassword("")
    setUsername("")
  }

  async function registerHandler() {
    let data = {
      "username": username,
      "password": password,
      "email": email
    }

    await axios.post(signupURL,data)
    .then((response) => {
      console.log(response.data)
      if (!response.data.token) {
        if(response.data.username) {
          alert("Пользователь с такими именем уже существует")
        } else if (response.data.email) {
          alert("Введите коректный email")
        } else if (response.data.password) {
          alert(response.data.password)
        }
      } else {

        setIsRegister(false)
      }

    })
    .catch((error) => console.log(error.data));

    clearInput()
  }
  async function loginHandler() {
    let data = {
      "username": username,
      "password": password
    }

    await axios.post(loginURL,data)
    .then((response) => {
      setIsAuth(true)
      putUserData(response.data)
      navigate('/profile')
    })
    .catch((error) => console.log(error.data.email));
    clearInput();
  }



  return (
    <div className={classes.auth}>
      <div className={classes.wrap}>
        <p>Войти</p>
        <form className={classes.form} onSubmit={(e) => {e.preventDefault()}}>
          <Input id={"username"} value={username} onChange={setUsername} label={"Введите имя пользователя: "} placeholder={"Username"} type={"text"}  />
          {isRegister && <Input id={"email"} value={email} onChange={setEmail} label={"Введите email:"} placeholder={"simple@simple.com"} type={"email"}  />}
          <Input id={"password"} value={password} onChange={setPassword} label={"Введите пароль:"} placeholder={"Пароль"} type={"password"}  />
          <Link className={classes.link} to={"/"}>Забыли пароль?</Link>
          <div className={classes.buttons}>
            {isRegister ? 
            <Button onClick={() => { registerHandler()}} style={"button-small"}>Зарегистрироваться</Button>: 
            <Button onClick={() => { loginHandler() }} style={"button-small"}>Войти</Button>
            }
            {isRegister ? 
            <Button onClick={() => { setIsRegister(false) }} style={"button-small"}>Войти</Button>: 
            <Button onClick={() => { setIsRegister(true) }} style={"button-small"}>Зарегистрироваться</Button>
            }
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Authorization