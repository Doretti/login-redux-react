/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './Main.module.css'

const Main = (props) => {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [goToProfile, setGoToProfile] = useState()

  const changeLogin = (ev) => setLogin(ev.target.value)
  const changePassword = (ev) => setPassword(ev.target.value)

  const submit = (e) => {
    e.preventDefault()
    localStorage.setItem('login', login)
    localStorage.setItem('password', password)
    setGoToProfile(true)
  }

  return (
    <form onSubmit={submit} className={s.mainForm}>
      <div className={s.input}>
        <label htmlFor='login'>login</label>
        <input value={login} onChange={changeLogin} placeholder='login' id='login' type="text" />
      </div>
      <div className={s.input}>
        <label htmlFor='password'>password</label>
        <input value={password} onChange={changePassword} placeholder='password' id='password' type="password" />
      </div>
      <button onClick={submit} disabled={!(props.main.accounts.some(acc => acc.login === login && acc.password === password))} className={s.loginBtn}>Login</button>
      { goToProfile ? <Redirect to={'/profile'}/> : null }
    </form>
  );
}

const mapStateToProps = (state) => ({
  main: state.main
})

export default connect(mapStateToProps,)(Main);
