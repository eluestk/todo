/// <reference path="../../typings/jquery/jquery.d.ts" />
'use strict';

var app = app || {};

(function () {
  'use strict';

  $(function () {
    var _this = this;

    var $todolist = $('.js-todolist');
    var $inputText = $('.js-text');
    var $inputPriority = $('.js-priority:checked');
    var $inputDetail = $('.js-detail');
    var $numListed = $('.js-num-listed');
    var $numChecked = $('.js-num-checked');

    // 初期処理
    var todos = new app.common.Todos();
    todos.todoItems.forEach(function (item) {
      return appendList(item);
    });
    // for (let i = 0; i < todos.todoItems.length; i++) {
    //   appendList(todos.todoItems[i])
    // }
    updateChecks();

    // addボタンクリック
    $('.js-add').click(function () {
      if ($inputText.val()) {

        var todoItem = new app.common.Todo(Date.now().toString(), $inputText.val(), $('.js-priority:checked').val(), $inputDetail.val());
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
    $todolist.click(function (event) {
      var $check = $(event.target);
      if ($check.prop('checked')) {
        $check.parent().css('text-decoration', 'line-through');
      } else {
        $check.parent().css('text-decoration', 'none');
      }
      updateChecks();
    });

    // archiveボタンクリック
    $('.js-archive').click(function () {
      // remove対象のidを基にlocalStorageから削除
      var removeList = [];
      var $checked = $('.js-checkbox:checked');

      $checked.each(function (index, checkbox) {
        removeList.push($(_this).val());
      });
      todos.remove(removeList);

      // 画面から削除
      $checked.parents('.js-todoitem').remove();
      updateChecks();
    });

    // デバッグ用テストボタン
    $('.js-test').click(function () {
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
      var priorityClass = toPriorityClass(todoItem.priority);
      $todolist.append('\n            <li class="js-todoitem ' + priorityClass + '">\n              <input id="todoitem-' + todoItem.id + '" type="checkbox" class="js-checkbox" value="' + todoItem.id + '">\n              <label for="todoitem-' + todoItem.id + '">\n                <a href="detail.html?id=' + todoItem.id + '" title="' + todoItem.detail + '">' + todoItem.title + '</a>\n              </label>\n            </li>\n          ');
    }

    function toPriorityClass(priority) {
      var priorityClass = undefined;
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
//# sourceMappingURL=data:application/json;base64,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OiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG52YXIgYXBwID0gYXBwIHx8IHt9O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuICAkKGZ1bmN0aW9uKCkge1xyXG4gXHJcbiAgICAgIGNvbnN0ICR0b2RvbGlzdCAgICAgID0gJCgnLmpzLXRvZG9saXN0Jyk7XHJcbiAgICAgIGNvbnN0ICRpbnB1dFRleHQgICAgID0gJCgnLmpzLXRleHQnKTtcclxuICAgICAgY29uc3QgJGlucHV0UHJpb3JpdHkgPSAkKCcuanMtcHJpb3JpdHk6Y2hlY2tlZCcpO1xyXG4gICAgICBjb25zdCAkaW5wdXREZXRhaWwgICA9ICQoJy5qcy1kZXRhaWwnKTtcclxuICAgICAgY29uc3QgJG51bUxpc3RlZCAgICAgPSAkKCcuanMtbnVtLWxpc3RlZCcpO1xyXG4gICAgICBjb25zdCAkbnVtQ2hlY2tlZCAgICA9ICQoJy5qcy1udW0tY2hlY2tlZCcpO1xyXG4gICAgICBcclxuICAgICAgLy8g5Yid5pyf5Yem55CGXHJcbiAgICAgIGxldCB0b2RvcyA9IG5ldyBhcHAuY29tbW9uLlRvZG9zO1xyXG4gICAgICB0b2Rvcy50b2RvSXRlbXMuZm9yRWFjaChpdGVtID0+IGFwcGVuZExpc3QoaXRlbSkpO1xyXG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLnRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgIGFwcGVuZExpc3QodG9kb3MudG9kb0l0ZW1zW2ldKVxyXG4gICAgICAvLyB9XHJcbiAgICAgIHVwZGF0ZUNoZWNrcygpO1xyXG4gICAgICBcclxuICAgICAgLy8gYWRk44Oc44K/44Oz44Kv44Oq44OD44KvXHJcbiAgICAgICQoJy5qcy1hZGQnKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgaWYoJGlucHV0VGV4dC52YWwoKSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgdG9kb0l0ZW0gPSBuZXcgYXBwLmNvbW1vbi5Ub2RvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0VGV4dC52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1wcmlvcml0eTpjaGVja2VkJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXREZXRhaWwudmFsKCkpO1xyXG4gICAgICAgICAgYXBwZW5kTGlzdCh0b2RvSXRlbSk7XHJcbiAgICAgICAgICB0b2Rvcy5hZGQodG9kb0l0ZW0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAkaW5wdXRUZXh0LnZhbCgnJyk7XHJcbiAgICAgICAgICAkaW5wdXREZXRhaWwudmFsKCcnKTtcclxuICAgICAgICAgIHVwZGF0ZUNoZWNrcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5pyq5YWl5Yqb44Gn44GZJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIGNoZWNrYm9444Kv44Oq44OD44KvXHJcbiAgICAgICR0b2RvbGlzdC5jbGljaygoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2sgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCRjaGVjay5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICRjaGVjay5wYXJlbnQoKS5jc3MoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGNoZWNrLnBhcmVudCgpLmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlQ2hlY2tzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgLy8gYXJjaGl2ZeODnOOCv+ODs+OCr+ODquODg+OCr1xyXG4gICAgICAkKCcuanMtYXJjaGl2ZScpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAvLyByZW1vdmXlr77osaHjga5pZOOCkuWfuuOBq2xvY2FsU3RvcmFnZeOBi+OCieWJiumZpFxyXG4gICAgICAgIGxldCByZW1vdmVMaXN0ID0gW107XHJcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCcuanMtY2hlY2tib3g6Y2hlY2tlZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRjaGVja2VkLmVhY2goKGluZGV4LCBjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgcmVtb3ZlTGlzdC5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvZG9zLnJlbW92ZShyZW1vdmVMaXN0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDnlLvpnaLjgYvjgonliYrpmaRcclxuICAgICAgICAkY2hlY2tlZC5wYXJlbnRzKCcuanMtdG9kb2l0ZW0nKS5yZW1vdmUoKTtcclxuICAgICAgICB1cGRhdGVDaGVja3MoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy8g44OH44OQ44OD44Kw55So44OG44K544OI44Oc44K/44OzXHJcbiAgICAgICQoJy5qcy10ZXN0JykuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgIC8vIC8vIHRvZG9zJmxvY2FsU3RvcmFnZeOBq+i/veWKoFxyXG4gICAgICAgIC8vIHRvZG9zLmFkZChhcHAuY29tbW9uLnNldEl0ZW0oJzEnLCcyJywnMycpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2Rvcyk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZnVuY3Rpb24gdXBkYXRlQ2hlY2tzKCkge1xyXG4gICAgICAgICRudW1MaXN0ZWQudGV4dCgkKCcuanMtdG9kb2xpc3QgPiBsaScpLmxlbmd0aCk7XHJcbiAgICAgICAgJG51bUNoZWNrZWQudGV4dCgkKCcuanMtY2hlY2tib3g6bm90KDpjaGVja2VkKScpLmxlbmd0aCk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAvLyBmdW5jdGlvbiByZWZyZXNoTGlzdCgpIHtcclxuICAgICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvLyAgICAgdmFyIGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIC8vICAgICBpZiAoL1swLTldezEzfS8udGVzdChpdGVtS2V5KSkge1xyXG4gICAgICAvLyAgICAgICB2YXIgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbUtleSkpO1xyXG4gICAgICAvLyAgICAgICAkdG9kb2xpc3QuYXBwZW5kKCc8bGkgY2xhc3M9XCJqcy10b2RvaXRlbVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImpzLWNoZWNrYm94XCI+JyArIGl0ZW0udGl0bGUgKyAnPC9pbnB1dD48L2xpPicpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfTsgIFxyXG4gICAgICBcclxuICAgICAgLy8gZnVuY3Rpb24gYXBwZW5kTGlzdChpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpIHtcclxuICAgICAgZnVuY3Rpb24gYXBwZW5kTGlzdCh0b2RvSXRlbSkge1xyXG4gICAgICAgIGxldCBwcmlvcml0eUNsYXNzID0gdG9Qcmlvcml0eUNsYXNzKHRvZG9JdGVtLnByaW9yaXR5KTsgICAgIFxyXG4gICAgICAgICR0b2RvbGlzdC5hcHBlbmQoYFxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJqcy10b2RvaXRlbSAke3ByaW9yaXR5Q2xhc3N9XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kb2l0ZW0tJHt0b2RvSXRlbS5pZH1cIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImpzLWNoZWNrYm94XCIgdmFsdWU9XCIke3RvZG9JdGVtLmlkfVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvaXRlbS0ke3RvZG9JdGVtLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImRldGFpbC5odG1sP2lkPSR7dG9kb0l0ZW0uaWR9XCIgdGl0bGU9XCIke3RvZG9JdGVtLmRldGFpbH1cIj4ke3RvZG9JdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgYCk7XHJcblxyXG4gICAgICB9XHJcbiBcclxuICAgICAgZnVuY3Rpb24gdG9Qcmlvcml0eUNsYXNzKHByaW9yaXR5KSB7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5Q2xhc3M7XHJcbiAgICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcclxuICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgIHByaW9yaXR5Q2xhc3MgPSBcInByaW9yaXR5LWhpZ2hcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1tZWRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICBwcmlvcml0eUNsYXNzID0gXCJwcmlvcml0eS1sb3dcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmlvcml0eUNsYXNzOyAgICAgXHJcbiAgICAgIH1cclxuICB9KTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9