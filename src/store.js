import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {login, logout} from './apis/login/auth.js';

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
        commitLogin(store, userInfo) {
          login(userInfo).then(response => {
            const token = response.data.token;
            Cookies.set('token', token);
            store.commit('LOGIN', {
              id: response.data.id,
              name: response.data.name,
              token: token,
              role: response.data.role
            })
            this.commit('navigator/pop');
            this.commit('navigator/pushNextPage');
          }, response => {
          })
        },
        commitLogout(store) {
          logout().then(response => {
            Cookies.remove('token');
            store.commit('LOGOUT')
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
          if(state.nextPage){
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
