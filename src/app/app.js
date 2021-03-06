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
      todos.todoItems.forEach(item => appendList(item));
      // for (let i = 0; i < todos.todoItems.length; i++) {
      //   appendList(todos.todoItems[i])
      // }
      updateChecks();
      
      // addボタンクリック
      $('.js-add').click(() => {
        if($inputText.val()) {
          
          let todoItem = new app.common.Todo(
                                              Date.now().toString(),
                                              $inputText.val(),
                                              $('.js-priority:checked').val(),
                                              $inputDetail.val());
          appendList(todoItem);
          todos.add(todoItem);
          
          $inputText.val('');
          $inputDetail.val('');
          updateChecks();
        } else {
          console.log('未入力です');
        }
      });
      
      // checkboxクリック
      $todolist.click((event) => {
        const $check = $(event.target);
        if ($check.prop('checked')) {
          $check.parent().css('text-decoration', 'line-through');
        } else {
          $check.parent().css('text-decoration', 'none');
        }
        updateChecks();
      });
      
      // archiveボタンクリック
      $('.js-archive').click(() => {
        // remove対象のidを基にlocalStorageから削除
        let removeList = [];
        const $checked = $('.js-checkbox:checked');
        
        $checked.each((index, checkbox) => {
          removeList.push($(this).val());
        });
        todos.remove(removeList);
        
        // 画面から削除
        $checked.parents('.js-todoitem').remove();
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
      
      // function refreshList() {
      //   for (var i = 0; i < localStorage.length; i++) {
      //     var itemKey = localStorage.key(i);
          
      //     if (/[0-9]{13}/.test(itemKey)) {
      //       var item = JSON.parse(localStorage.getItem(itemKey));
      //       $todolist.append('<li class="js-todoitem"><input type="checkbox" class="js-checkbox">' + item.title + '</input></li>');
      //     }
      //   }
      // };  
      
      // function appendList(id, title, priority, detail) {
      function appendList(todoItem) {
        let priorityClass = toPriorityClass(todoItem.priority);     
        $todolist.append(`
            <li class="js-todoitem ${priorityClass}">
              <input id="todoitem-${todoItem.id}" type="checkbox" class="js-checkbox" value="${todoItem.id}">
              <label for="todoitem-${todoItem.id}">
                <a href="detail.html?id=${todoItem.id}" title="${todoItem.detail}">${todoItem.title}</a>
              </label>
            </li>
          `);

      }
 
      function toPriorityClass(priority) {
        let priorityClass;
         switch (priority) {
          case "0":
            priorityClass = "priority-high";
            break;
          case "1":
            priorityClass = "priority-med";
            break;
          case "2":
            priorityClass = "priority-low";
            break;
        }
        return priorityClass;     
      }
  });
})();
