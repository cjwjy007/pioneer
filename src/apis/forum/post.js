import fetch from '../interceptors'


export function getPosts(forumInfo) {
  return fetch({
    url: '/forum/getForumList',
    method: 'post',
    data: forumInfo
  });
}

export function sendNewPost(newPost){
  return fetch({
    url: '/forum/newPost',
    method: 'post',
    data: newPost
  });
}

export function getPostDetail(postId){
  return fetch({
    url: '/forum/getPostDetail',
    method: 'post',
    data: {
      postId : postId
    }
  });
}


