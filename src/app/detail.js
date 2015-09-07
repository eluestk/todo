/// <reference path="../../typings/jquery/jquery.d.ts" />
var app = app || {};

(function() {
  'use strict';
  
  $(function() {
  
    const $inputText     = $('.js-text');
    const $inputPriority = $('.js-priority');
    const $inputDetail   = $('.js-detail');
    
    // 初期処理
    let itemKey = app.common.getURLParamValue('id');
    let item = JSON.parse(localStorage.getItem(itemKey));
    let todoItem = new app.common.Todo(
                                        itemKey,
                                        item.title,
                                        item.priority,
                                        item.detail);
    
    $inputText.val(todoItem.title);
    $inputPriority.val([todoItem.priority]);
    $inputDetail.val(todoItem.detail);
    
    // saveボタンクリック
    $('.js-save').click(() => {
      todoItem.update(
                        $inputText.val(),
                        $('.js-priority:checked').val(),
                        $inputDetail.val());
      alert('saved!');
    });
    
    // backボタンクリック
    $('.js-back').click(() => {
      location.href = '/';
    });
  });
})();