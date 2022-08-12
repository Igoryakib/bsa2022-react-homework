const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUsername = (state) => state.auth.user.fullName;
const getUserId = (state) => state.auth.user.id;

export {getUsername, getIsAuthenticated, getUserId};