import fetch from '../interceptors'


export function login(userInfo) {
 return fetch({
   url: '/user/login',
   method: 'post',
   userInfo
 });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post',
  });
}
