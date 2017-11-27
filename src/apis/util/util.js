import fetch from '../interceptors'


export function getUserIcon(type,userInfo) {
  return fetch({
    url: '/util/getUserIcon',
    method: 'post',
    data: {
      type: type,
      userInfo : userInfo
    }
  });
}



