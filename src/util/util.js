export function setCookie(cname, cvalue, exdays){
  var exdate = new Date()
  exdate.setTime(exdate.getTime() + exdays)
  var expires = "expires=" + exdate.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + ((exdays == null) ? "" : expires)
}

export function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

export function delCookie(name){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

export function checkLogin(){
  if(!getCookie('session')){
    alert('请先登录！')
    return false
  }else{
    return true
  }
}