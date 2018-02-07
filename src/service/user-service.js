/**
 * @Author: Sam958
 * @Date:   2018-02-07T12:31:33+08:00
 * @Last modified by:   Sam958
 * @Last modified time: 2018-02-07T12:42:19+08:00
 */
'use strict';

var _mm = require('util/mm.js');

var _user = {
  // 检查登录状态
  checkLogin : function(resolve, reject){
    _mm.request({
      url : _mm.getServerUrl('/user/get_user_info.do'),
      method : 'POST',
      success : resolve,
      error : reject
    });
  },
  //登出
  logout : function(resolve, reject){
    _mm.request({
      url : _mm.getServerUrl('/user/logout.do'),
      method : 'POST',
      success : resolve,
      error : reject
    });
  }
}
module.exports = _user;
