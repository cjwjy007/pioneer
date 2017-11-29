import Vue from 'vue'
import Vuex from 'vuex'
import {login, logout, register} from './apis/auth/auth.js';
import {getUserIcon} from './apis/util/util';
import storage from './services/storage';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    history: {
      namespaced: true,
      actions:{
        pushBrowsingHistory(store, postInfo) {
          let history = storage.getObject('browsingHistory');
          if (!history) {
            history = [];
          }
          if(history.indexOf(postInfo) === -1){
            history.push(postInfo);
          }
          storage.setObject('browsingHistory', history);
        },
        clearBrowsingHistory(store){
          storage.removeObject('browsingHistory');
        }
      }
    },
    auth: {
      namespaced: true,
      state: {
        id: -1,
        name: null,
        token: null,
        role: -1
      },
      actions: {
        getUserIcon(store, userInfo) {
          return getUserIcon(userInfo.type, userInfo.info);
        },
        cookieLogin(store) {
          if (storage.getVar('token')) {
            const token = storage.getVar('token');
            const userInfo = storage.getObject('userInfo');
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
            storage.setVar('token', token);
            storage.setObject('userInfo', userInfo);
            store.commit('LOGIN', {
              id: userInfo.id,
              name: userInfo.name,
              token: token,
              role: userInfo.role
            });
            this.commit('navigator/pop');
            this.commit('navigator/pushNextPage');
          }, response => {
          })
        },
        commitLogout(store) {
          logout().then(response => {
            storage.removeVar('token');
            storage.removeObject('userInfo');
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
