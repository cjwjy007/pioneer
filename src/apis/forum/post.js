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

export function sendNewReply(postId){
  return fetch({
    url: '/forum/newReply',
    method: 'post',
    data: postId
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

export function getPostOverview(postId){
  return fetch({
    url: '/forum/getPostOverview',
    method: 'post',
    data: {
      postId : postId
    }
  });
}


export function addToFavorite(postId){
  return fetch({
    url: '/forum/addToFavorite',
    method: 'post',
    data: {
      postId : postId
    }
  });
}

export function getMyPosts(){
  return fetch({
    url: '/forum/getMyPosts',
    method: 'post',
  });
}

export function getMyReply(){
  return fetch({
    url: '/forum/getMyReply',
    method: 'post',
  });
}

export function getMyFavorite(){
  return fetch({
    url: '/forum/getMyFavorite',
    method: 'post',
  });
}


