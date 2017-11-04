import fetch from '../interceptors'


export function getPosts(forumInfo) {
  return fetch({
    url: '/forum/getForumList',
    method: 'post',
    forumInfo
  });
}
