import Mock from 'mockjs'

const Random = Mock.Random;

const addComment = function(){
  let commentList = []
  for(let i = 0; i < 10; i++){
    let newArticleList = {
      'id': i,
      'fromName': Random.cname(),
      'fromId': 10000 + i,
      'fromAvatar': Random.dataImage('30x30'),
      'time': Random.datetime(),
      'content': Random.csentence(20, 50),
      'likeNum': 0,
      'isLiked': false
    }
    commentList.push(newArticleList)
  }
  return {
    code: 200,
    commentList
  }
}

Mock.mock('/static/mock/comment/api', 'post', addComment)
