export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getUserBalance = state => state.auth.balance;
export const getToken = state => state.auth.token;
export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
export const getError = state => state.auth.error;
