import api from '../utils/api';

const Login = {
  state: {
    users: [],
    error: '',
    user: []
  },
  getters: {

  },
  actions: {
    getCurrentUsers (context){
      return api.get(`http://localhost:10005/users`)
        .then(response => context.commit('GET_CURRENT_USERS',response))
        .catch(error => context.commit('API_FAILURE',error))
    },
    addUserToTable(context,data){
      return api.post(`http://localhost:10005/users`,data)
        .then(resource => context.commit('POST_USER_TO_TABLE',resource.data))
        .catch(error => context.commit('API_FAILURE',error))
    },
    login(context,data){
      return api.post(`http://localhost:10005/users/login`,data)
        .then(resource => contex.commit('LOGIN_IN_DATA',resource.data))
        .catch(error => context.commit('API_FAILURE',error))
    }
  },
  mutations: {
    ['GET_CURRENT_USERS'](state, users){
      state.users = users;
    },
    ['API_FAILURE'](state, message){
      state.error = message
    },
    ['LOGIN_IN_DATA'](state,user){
      state.user = user;
    }
  }
}

export default Login;