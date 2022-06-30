import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

type AccountState = {
  token: string
}

// 用户账户信息
const accountState: AccountState = {
  token: '',
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: accountState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = ''
    },
  },
})

const { actions, reducer } = accountSlice
export const { setToken, removeToken } = actions
export const selectAccount = (state: RootState) => state.account
export default reducer
