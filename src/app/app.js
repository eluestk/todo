/// <reference path="../../typings/jquery/jquery.d.ts" />
var app = app || {};

(function() {
  'use strict';
  
  $(function() {
 
      const $todolist      = $('.js-todolist');
      const $inputText     = $('.js-text');
      const $inputPriority = $('.js-priority:checked');
      const $inputDetail   = $('.js-detail');
      const $numListed     = $('.js-num-listed');
      const $numChecked    = $('.js-num-checked');
      
      // 初期処理
      let todos = new app.common.Todos;
      for (let i = 0; i < todos.todoItems.length; i++) {
        $todolist.append('<li class="js-todoitem"><input type="checkbox" class="js-checkbox">' + todos.todoItems[i].title + '</input></li>');
      }
      
      // addボタンクリック
      $('.js-add').click(() => {
        if($inputText.val()) {
          
          let todoItem = new app.common.Todo(Date.now().toString(), $inputText.val(), $inputPriority.val(), $inputDetail.val());
          localStorage.setItem(Date.now().toString(), JSON.stringify(item));
          
          $inputText.val('');
          $inputDetail.val('');
          refreshList();
          updateChecks();
        } else {
          console.log('未入力です');
        }
      });
      
      // checkboxクリック
      $todolist.click((event) => {
        if ($(event.target).prop('checked')) {
          $(event.target).parent().css('text-decoration', 'line-through');
        } else {
          $(event.target).parent().css('text-decoration', 'none');
        }
        updateChecks();
      });
      
      // archiveボタンクリック
      $('.js-archive').click(() => {
        $('.js-checkbox:checked').parents('.js-todoitem').remove();
        updateChecks();
      });
      
      
      // デバッグ用テストボタン
      $('.js-test').click(() => {
        // // todos&localStorageに追加
        // todos.add(app.common.setItem('1','2','3'));
        // console.log(todos);
        
      });
      
      function updateChecks() {
        $numListed.text($('.js-todolist > li').length);
        $numChecked.text($('.js-checkbox:not(:checked)').length);
      };
      
      function refreshList() {
        for (var i = 0; i < localStorage.length; i++) {
          var itemKey = localStorage.key(i);
          
          if (/[0-9]{13}/.test(itemKey)) {
            var item = JSON.parse(localStorage.getItem(itemKey));
            $todolist.append('<li class="js-todoitem"><input type="checkbox" class="js-checkbox">' + item.title + '</input></li>');
          }
        }
      };  
    
  });
})();
