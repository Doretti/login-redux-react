/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  accounts: [
    {
      login: 'developer21',
      password: '123456'
    }
  ]
}

export default (state = initialState, action) => {

  switch (action.type) {
    default: return state
  }
}