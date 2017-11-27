import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {login, logout, register} from './apis/auth/auth.js';
import {getUserIcon} from './apis/util/util';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      state: {
        id: -1,
        name: null,
        token: null,
        role: -1
      },
      actions: {
        getUserIcon(store,type,userInfo){
          return getUserIcon(type,userInfo);
        },
        cookieLogin(store) {
          if (Cookies.get('token')) {
            const token = Cookies.get('token');
            const userInfo = Cookies.getJSON('userInfo');
            store.commit('LOGIN', {
              id: userInfo.id,
              name: userInfo.name,
              token: token,
              role: userInfo.role
            })
          }
        },
        commitRegister(store, userInfo) {
          register(userInfo).then(response => {
            this.commit('navigator/pop');
            this.dispatch('auth/commitLogin', {
              username: userInfo.username,
              password: userInfo.password
            })
          }, response => {
          })
        },
        commitLogin(store, userInfo) {
          login(userInfo).then(response => {
            const token = response.data.token;
            const userInfo = response.data;
            Cookies.set('token', token);
            Cookies.set('userInfo', userInfo);
            store.commit('LOGIN', {
              id: userInfo.id,
              name: userInfo.name,
              token: token,
              role: userInfo.role
            })
            this.commit('navigator/pop');
            this.commit('navigator/pushNextPage');
          }, response => {
          })
        },
        commitLogout(store) {
          logout().then(response => {
            Cookies.remove('token');
            Cookies.remove('userInfo');
            store.commit('LOGOUT');
            this.commit('navigator/cleanNextPage');
          }, response => {
          })
        }
      },
      mutations: {
        LOGIN(state, action) {
          state.id = action.id;
          state.name = action.name;
          state.token = action.token;
          state.role = action.role;
        },
        LOGOUT(state) {
          state.id = -1;
          state.name = null;
          state.token = null;
          state.role = -1;
        }
      }
    },
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {},
        nextPage: null,
      },
      mutations: {
        push(state, page) {
          state.stack.push(page);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        setNextPage(state, page) {
          state.nextPage = page;
        },
        cleanNextPage(state) {
          state.nextPage = null;
        },
        pushNextPage(state) {
          if (state.nextPage) {
            state.stack.push(state.nextPage);
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        },
        options(state, newOptions = {}) {
          state.options = newOptions;
        }
      }
    },

    splitter: {
      namespaced: true,
      state: {
        open: false
      },
      mutations: {
        toggle(state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen
          } else {
            state.open = !state.open
          }
        }
      }
    },

    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 1
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    }
  }
})
