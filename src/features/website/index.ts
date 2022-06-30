import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

type WebsiteState = {
  openMenu: boolean
}

// 站点状态信息
const websiteState: WebsiteState = {
  openMenu: true,
}

export const websiteSlice = createSlice({
  name: 'website',
  initialState: websiteState,
  reducers: {
    switchOpenMenu: (state) => {
      state.openMenu = !state.openMenu
    },
  },
})

const { actions, reducer } = websiteSlice
export const { switchOpenMenu } = actions
export const selectWebsite = (state: RootState) => state.website
export default reducer
