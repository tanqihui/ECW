/**
 * @Author: Sam958
 * @Date:   2018-02-12T16:32:16+08:00
 * @Last modified by:   Sam958
 * @Last modified time: 2018-02-28T21:23:59+08:00
 */
'use strict';

var _mm = require('util/mm.js');

var _product = {
  // 获取商品列表
  getProductList : function(listParam, resolve, reject){
    _mm.request({
      url     : _mm.getServerUrl('/product/list.do'),
      data    : listParam, // 发送到服务器的数据
      success : resolve, //成功后后端返回的提示信息
      error   : reject // 失败后后端返回的提示信息
    });
  },
  // 获取商品详细信息
  getProductDetail : function(productId, resolve, reject){
    _mm.request({
      url     : _mm.getServerUrl('/product/detail.do'),
      data    : {
        productId : productId
      }, // 发送到服务器的数据
      success : resolve, //成功后后端返回的提示信息
      error   : reject // 失败后后端返回的提示信息
    });
  }
}
module.exports = _product;
