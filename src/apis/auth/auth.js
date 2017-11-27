import fetch from '../interceptors'


export function login(userInfo) {
 return fetch({
   url: '/user/login',
   method: 'post',
   data: userInfo
 });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post',
  });
}

export function register(userInfo) {
  return fetch({
    url: '/user/register',
    method: 'post',
    data: userInfo
  });
}
