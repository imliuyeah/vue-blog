import Mock from 'mockjs'

const loginByUsername = function(options){
  let params = JSON.parse(options.body)
  let username = params.username
  let password = params.password
  // 如果用户名为admin且密码为123则登录成功
  if(username == 'admin' && password == "123"){
    return {
      code: 1,
      session: 123,
      nick: 'Dell',
      uid: '10000'
    }
  }else{
    return {
      code: 0
    }
  }
}

Mock.mock('/static/mock/login/api', 'post', loginByUsername)
