import fetch from '../interceptors'


export function getPosts(forumInfo) {
  return fetch({
    url: '/forum/getForumList',
    method: 'post',
    forumInfo
  });
}

export function sendNewPost(newPost){
  return fetch({
    url: '/forum/newPost',
    method: 'post',
    newPost
  });
}
