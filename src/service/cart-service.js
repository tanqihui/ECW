/**
 * @Author: Sam958
 * @Date:   2018-02-07T12:45:03+08:00
 * @Last modified by:   Sam958
 * @Last modified time: 2018-02-07T14:25:45+08:00
 */
'use strict';

var _mm = require('util/mm.js');

var _cart = {
  // 获取购物车数量
  getCartCount : function(resolve, reject){
    _mm.request({
      url : _mm.getServerUrl('/cart/get_cart_product_count.do'),
      success : resolve,
      error : reject
    });
  }
}
module.exports = _cart;
