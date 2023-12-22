import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  Languages: "ru"|"en"
}

export const initialState:State = {
  Languages: 'en'
}

export const AppSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeLang:(state, action: PayloadAction<State>)=>{
        state.Languages = action.payload.Languages
    }
  }
})

export default AppSlice.reducer;
export const {changeLang } = AppSlice.actions
