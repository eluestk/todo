/// <reference path="../../typings/jquery/jquery.d.ts" />
'use strict';

var app = app || {};

(function () {
  'use strict';

  $(function () {
    var _this = this;

    var $todolist = $('.js-todolist');
    var $inputText = $('.js-text');
    var $inputDetail = $('.js-detail');
    var $numListed = $('.js-num-listed');
    var $numChecked = $('.js-num-checked');

    // 初期処理
    var todos = new app.common.Todos();
    todos.todoItems.forEach(function (item) {
      return appendList(item);
    });
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

    function updateChecks() {
      $numListed.text($('.js-todolist > li').length);
      $numChecked.text($('.js-checkbox:not(:checked)').length);
    };

    function appendList(todoItem) {
      var priorityClass = toPriorityClass(todoItem.priority);
      $todolist.append('\n            <li class="js-todoitem ' + priorityClass + '">\n              <input id="todoitem-' + todoItem.id + '" type="checkbox" class="js-checkbox" value="' + todoItem.id + '">\n              <label for="todoitem-' + todoItem.id + '">\n                <a href="detail.html?id=' + todoItem.id + '" title="' + todoItem.detail + '">' + todoItem.title + '</a>\n              </label>\n            </li>\n          ');
    }

    function toPriorityClass(priority) {
      var priorityClass = undefined;
      switch (priority) {
        case '0':
          priorityClass = 'priority-high';
          break;
        case '1':
          priorityClass = 'priority-med';
          break;
        case '2':
          priorityClass = 'priority-low';
          break;
      }
      return priorityClass;
    }
  });
})();
//# sourceMappingURL=data:application/json;base64,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QztLQUNoQixDQUFDLENBQUM7O0FBRUgsYUFBUyxZQUFZLEdBQUc7QUFDdEIsZ0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsaUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUQsQ0FBQzs7QUFFRixhQUFTLFVBQVUsQ0FBQyxRQUFRLEVBQUU7QUFDNUIsVUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2RCxlQUFTLENBQUMsTUFBTSwyQ0FDYSxhQUFhLDhDQUNkLFFBQVEsQ0FBQyxFQUFFLHFEQUFnRCxRQUFRLENBQUMsRUFBRSwrQ0FDckUsUUFBUSxDQUFDLEVBQUUsb0RBQ04sUUFBUSxDQUFDLEVBQUUsaUJBQVksUUFBUSxDQUFDLE1BQU0sVUFBSyxRQUFRLENBQUMsS0FBSyxpRUFHdkYsQ0FBQztLQUVOOztBQUVELGFBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRTtBQUNqQyxVQUFJLGFBQWEsWUFBQSxDQUFDO0FBQ2pCLGNBQVEsUUFBUTtBQUNmLGFBQUssR0FBRztBQUNOLHVCQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ2hDLGdCQUFNO0FBQUEsQUFDUixhQUFLLEdBQUc7QUFDTix1QkFBYSxHQUFHLGNBQWMsQ0FBQztBQUMvQixnQkFBTTtBQUFBLEFBQ1IsYUFBSyxHQUFHO0FBQ04sdUJBQWEsR0FBRyxjQUFjLENBQUM7QUFDL0IsZ0JBQU07QUFBQSxPQUNUO0FBQ0QsYUFBTyxhQUFhLENBQUM7S0FDdEI7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxudmFyIGFwcCA9IGFwcCB8fCB7fTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgJChmdW5jdGlvbigpIHtcclxuIFxyXG4gICAgICBjb25zdCAkdG9kb2xpc3QgICAgICA9ICQoJy5qcy10b2RvbGlzdCcpO1xyXG4gICAgICBjb25zdCAkaW5wdXRUZXh0ICAgICA9ICQoJy5qcy10ZXh0Jyk7XHJcbiAgICAgIGNvbnN0ICRpbnB1dERldGFpbCAgID0gJCgnLmpzLWRldGFpbCcpO1xyXG4gICAgICBjb25zdCAkbnVtTGlzdGVkICAgICA9ICQoJy5qcy1udW0tbGlzdGVkJyk7XHJcbiAgICAgIGNvbnN0ICRudW1DaGVja2VkICAgID0gJCgnLmpzLW51bS1jaGVja2VkJyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyDliJ3mnJ/lh6bnkIZcclxuICAgICAgbGV0IHRvZG9zID0gbmV3IGFwcC5jb21tb24uVG9kb3M7XHJcbiAgICAgIHRvZG9zLnRvZG9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4gYXBwZW5kTGlzdChpdGVtKSk7XHJcbiAgICAgIHVwZGF0ZUNoZWNrcygpO1xyXG4gICAgICBcclxuICAgICAgLy8gYWRk44Oc44K/44Oz44Kv44Oq44OD44KvXHJcbiAgICAgICQoJy5qcy1hZGQnKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgaWYoJGlucHV0VGV4dC52YWwoKSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgdG9kb0l0ZW0gPSBuZXcgYXBwLmNvbW1vbi5Ub2RvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0VGV4dC52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1wcmlvcml0eTpjaGVja2VkJykudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXREZXRhaWwudmFsKCkpO1xyXG4gICAgICAgICAgYXBwZW5kTGlzdCh0b2RvSXRlbSk7XHJcbiAgICAgICAgICB0b2Rvcy5hZGQodG9kb0l0ZW0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAkaW5wdXRUZXh0LnZhbCgnJyk7XHJcbiAgICAgICAgICAkaW5wdXREZXRhaWwudmFsKCcnKTtcclxuICAgICAgICAgIHVwZGF0ZUNoZWNrcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5pyq5YWl5Yqb44Gn44GZJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIGNoZWNrYm9444Kv44Oq44OD44KvXHJcbiAgICAgICR0b2RvbGlzdC5jbGljaygoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2sgPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCRjaGVjay5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICRjaGVjay5wYXJlbnQoKS5jc3MoJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGNoZWNrLnBhcmVudCgpLmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlQ2hlY2tzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgLy8gYXJjaGl2ZeODnOOCv+ODs+OCr+ODquODg+OCr1xyXG4gICAgICAkKCcuanMtYXJjaGl2ZScpLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAvLyByZW1vdmXlr77osaHjga5pZOOCkuWfuuOBq2xvY2FsU3RvcmFnZeOBi+OCieWJiumZpFxyXG4gICAgICAgIGxldCByZW1vdmVMaXN0ID0gW107XHJcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCcuanMtY2hlY2tib3g6Y2hlY2tlZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRjaGVja2VkLmVhY2goKGluZGV4LCBjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgcmVtb3ZlTGlzdC5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvZG9zLnJlbW92ZShyZW1vdmVMaXN0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDnlLvpnaLjgYvjgonliYrpmaRcclxuICAgICAgICAkY2hlY2tlZC5wYXJlbnRzKCcuanMtdG9kb2l0ZW0nKS5yZW1vdmUoKTtcclxuICAgICAgICB1cGRhdGVDaGVja3MoKTtcclxuICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICBmdW5jdGlvbiB1cGRhdGVDaGVja3MoKSB7XHJcbiAgICAgICAgJG51bUxpc3RlZC50ZXh0KCQoJy5qcy10b2RvbGlzdCA+IGxpJykubGVuZ3RoKTtcclxuICAgICAgICAkbnVtQ2hlY2tlZC50ZXh0KCQoJy5qcy1jaGVja2JveDpub3QoOmNoZWNrZWQpJykubGVuZ3RoKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGZ1bmN0aW9uIGFwcGVuZExpc3QodG9kb0l0ZW0pIHtcclxuICAgICAgICBsZXQgcHJpb3JpdHlDbGFzcyA9IHRvUHJpb3JpdHlDbGFzcyh0b2RvSXRlbS5wcmlvcml0eSk7ICAgICBcclxuICAgICAgICAkdG9kb2xpc3QuYXBwZW5kKGBcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwianMtdG9kb2l0ZW0gJHtwcmlvcml0eUNsYXNzfVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG9pdGVtLSR7dG9kb0l0ZW0uaWR9XCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJqcy1jaGVja2JveFwiIHZhbHVlPVwiJHt0b2RvSXRlbS5pZH1cIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kb2l0ZW0tJHt0b2RvSXRlbS5pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJkZXRhaWwuaHRtbD9pZD0ke3RvZG9JdGVtLmlkfVwiIHRpdGxlPVwiJHt0b2RvSXRlbS5kZXRhaWx9XCI+JHt0b2RvSXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIGApO1xyXG5cclxuICAgICAgfVxyXG4gXHJcbiAgICAgIGZ1bmN0aW9uIHRvUHJpb3JpdHlDbGFzcyhwcmlvcml0eSkge1xyXG4gICAgICAgIGxldCBwcmlvcml0eUNsYXNzO1xyXG4gICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XHJcbiAgICAgICAgICBjYXNlICcwJzpcclxuICAgICAgICAgICAgcHJpb3JpdHlDbGFzcyA9ICdwcmlvcml0eS1oaWdoJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgcHJpb3JpdHlDbGFzcyA9ICdwcmlvcml0eS1tZWQnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICBwcmlvcml0eUNsYXNzID0gJ3ByaW9yaXR5LWxvdyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJpb3JpdHlDbGFzczsgICAgIFxyXG4gICAgICB9XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==