/**
 * @Author: Sam958
 * @Date:   2018-02-07T16:24:25+08:00
 * @Last modified by:   Sam958
 * @Last modified time: 2018-02-07T16:53:21+08:00
 */
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
  var type = _mm.getUrlParam('type') || 'default',
    $element = $('.' + type + '-success');
  // 显示对应的提示元素
  $element.show();
})
