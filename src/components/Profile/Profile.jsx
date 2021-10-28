import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {

  const login = localStorage.getItem('login')
  const password = localStorage.getItem('password')

  const isReal = props.main.accounts.some(acc => acc.login === login && acc.password === password)
  return isReal
    ?
    (
      <h1>{ login }</h1>
    )
    :
    (
      <Redirect to={'/'}/>
    )
}

const mapStateToProps = (state) => ({
  main: state.main
})

export default connect(mapStateToProps,)(Profile);
