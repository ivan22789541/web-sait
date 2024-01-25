import React, { useState } from 'react'
import './Auth.css'
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/const";
import { login, registration } from './http/userAPI';


const Admin = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const click = async () => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response)
    }
  }

  return (
    <div className='auth'>
      <input type="email"
        placeholder='Введите email'
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <input type="password"
        placeholder='Введите пароль'
        value={password}
        onChange={e => setPassword(e.target.value)} />
      {isLogin ?
        <div>
          Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
        </div> :
        <div>
          Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
        </div>
      }
      <button type='sumbit' onClick={click}>
        {isLogin ? 'Войти' : 'Регистрация'}
      </button>
    </div>
  )
}

export default Admin
