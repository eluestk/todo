/// <reference path="../../typings/jquery/jquery.d.ts" />

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
      (() => {
        
      });
      
      // addボタンクリック
      $('.js-add').click(() => {
        if($inputText.val()) {
          
          let item = app.common.setItem($inputText.val(), $inputPriority.val(), $inputDetail.val());
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
        $('.js-checkbox:checked').parents('.js-list').remove();
        updateChecks();
      });
      
      
      // デバッグ用テストボタン
      $('.js-test').click(() => {
        let item = setItem('TEST', 1, 'very long text with unlimited length');
        localStorage.setItem(+new Date(), JSON.stringify(item));
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
            $todolist.append('<li class="js-list"><input type="checkbox" class="js-checkbox">' + item.title + '</input></li>');
          }
        }
      };  
    
  });
})();
