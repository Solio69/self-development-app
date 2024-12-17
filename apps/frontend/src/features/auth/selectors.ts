import { RootState } from '../../app/providers/store'

const userSelector = (state: RootState) => state.auth.user

const isAuthSelector = (state: RootState) => state.auth.isAuth

export { userSelector, isAuthSelector }
