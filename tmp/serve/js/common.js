'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var app = app || {};

(function () {
  'use strict';

  var Todos = (function () {
    function Todos() {
      _classCallCheck(this, Todos);

      // localStrageからitemを読む
      this.todoItems = [];

      for (var i = 0; i < localStorage.length; i++) {
        var itemKey = localStorage.key(i);
        if (/[0-9]{13}/.test(itemKey)) {
          var item = JSON.parse(localStorage.getItem(itemKey));
          var todoItem = new Todo(itemKey, item.title, item.priority, item.detail);
          this.todoItems.push(todoItem);
        }
      }
    }

    _createClass(Todos, [{
      key: 'add',
      value: function add(todoItem) {
        // todoItems.push(todoItem);
        this.todoItems.push(todoItem);
        // localStorageに書き込む
        var item = app.common.toLocalStorageTodo(todoItem.title, todoItem.priority, todoItem.detail);
        localStorage.setItem(todoItem.id, JSON.stringify(item));
      }
    }, {
      key: 'remove',
      value: function remove(todoItemIds) {
        // localStorageから消す
        for (var i = 0; i < todoItemIds.length; i++) {
          localStorage.removeItem(todoItemIds[i]);
        }
      }
    }]);

    return Todos;
  })();

  ;

  var Todo = (function () {
    function Todo(id, title, priority, detail) {
      _classCallCheck(this, Todo);

      // 初期化
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail = detail;
    }

    _createClass(Todo, [{
      key: 'update',
      value: function update(title, priority, detail) {
        // Todoオブジェクトをアップデートする
        this.title = title;
        this.priority = priority;
        this.detail = detail;
        // localStorageの内容をアップデートする
        var todo = app.common.toLocalStorageTodo(title, priority, detail);
        localStorage.setItem(this.id, JSON.stringify(todo));
      }
    }]);

    return Todo;
  })();

  ;

  app.common = {
    // itemをセットします
    toLocalStorageTodo: function toLocalStorageTodo(title, priority, detail) {
      var item = {
        title: title,
        priority: priority,
        detail: detail
      };

      return item;
    },
    getItem: function getItem() {},
    getURLParamValue: function getURLParamValue(targetParamName) {
      var searchStr = window.location.search.substring(1);
      var searchStrItems = searchStr.split('&');
      var targetParamValue = undefined;
      searchStrItems.forEach(function (searchStrItem) {
        var splitItem = searchStrItem.split('=');
        if (splitItem[0] === targetParamName) {
          targetParamValue = splitItem[1];
        }
      });
      if (!targetParamValue) throw new Error('idない');
      return targetParamValue;
    },
    Todos: Todos,
    Todo: Todo
  };
})();
//# sourceMappingURL=data:application/json;base64,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QUUsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUN2RSxVQUFJLElBQUksR0FBRztBQUNULGFBQUssRUFBTCxLQUFLO0FBQ0wsZ0JBQVEsRUFBUixRQUFRO0FBQ1IsY0FBTSxFQUFOLE1BQU07T0FDUCxDQUFDOztBQUVGLGFBQU8sSUFBSSxDQUFDO0tBQ2I7QUFDRCxXQUFPLEVBQUUsU0FBUyxPQUFPLEdBQUcsRUFFM0I7QUFDRCxvQkFBZ0IsRUFBRSxTQUFTLGdCQUFnQixDQUFDLGVBQWUsRUFBRTtBQUMzRCxVQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsVUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxVQUFJLGdCQUFnQixZQUFBLENBQUM7QUFDckIsb0JBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhLEVBQUs7QUFDeEMsWUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxZQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxlQUFlLEVBQUU7QUFDcEMsMEJBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO09BQ0YsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsYUFBTyxnQkFBZ0IsQ0FBQztLQUN6QjtBQUNELFNBQUssRUFBTCxLQUFLO0FBQ0wsUUFBSSxFQUFKLElBQUk7R0FDTCxDQUFDO0NBQ0gsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFwcCB8fCB7fTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb3Mge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgLy8gbG9jYWxTdHJhZ2XjgYvjgolpdGVt44KS6Kqt44KAXHJcbiAgICAgIHRoaXMudG9kb0l0ZW1zID0gW107XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpdGVtS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgICBpZiAoL1swLTldezEzfS8udGVzdChpdGVtS2V5KSkge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1LZXkpKTtcclxuICAgICAgICAgIGxldCB0b2RvSXRlbSA9IG5ldyBUb2RvKGl0ZW1LZXksIGl0ZW0udGl0bGUsIGl0ZW0ucHJpb3JpdHksIGl0ZW0uZGV0YWlsKTtcclxuICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkKHRvZG9JdGVtKSB7XHJcbiAgICAgIC8vIHRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBq+abuOOBjei+vOOCgFxyXG4gICAgICBsZXQgaXRlbSA9IGFwcC5jb21tb24udG9Mb2NhbFN0b3JhZ2VUb2RvKHRvZG9JdGVtLnRpdGxlLCB0b2RvSXRlbS5wcmlvcml0eSwgdG9kb0l0ZW0uZGV0YWlsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb0l0ZW0uaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJlbW92ZSh0b2RvSXRlbUlkcykge1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2XjgYvjgonmtojjgZlcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtSWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9kb0l0ZW1JZHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICAvLyDliJ3mnJ/ljJZcclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpIHtcclxuICAgICAgLy8gVG9kb+OCquODluOCuOOCp+OCr+ODiOOCkuOCouODg+ODl+ODh+ODvOODiOOBmeOCi1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBruWGheWuueOCkuOCouODg+ODl+ODh+ODvOODiOOBmeOCi1xyXG4gICAgICBsZXQgdG9kbyA9IGFwcC5jb21tb24udG9Mb2NhbFN0b3JhZ2VUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgYXBwLmNvbW1vbiA9IHtcclxuICAgIC8vIGl0ZW3jgpLjgrvjg4Pjg4jjgZfjgb7jgZlcclxuICAgIHRvTG9jYWxTdG9yYWdlVG9kbzogZnVuY3Rpb24gdG9Mb2NhbFN0b3JhZ2VUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKSB7XHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGRldGFpbFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSxcclxuICAgIGdldEl0ZW06IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIGdldFVSTFBhcmFtVmFsdWU6IGZ1bmN0aW9uIGdldFVSTFBhcmFtVmFsdWUodGFyZ2V0UGFyYW1OYW1lKSB7XHJcbiAgICAgIGxldCBzZWFyY2hTdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcclxuICAgICAgbGV0IHNlYXJjaFN0ckl0ZW1zID0gc2VhcmNoU3RyLnNwbGl0KCcmJyk7XHJcbiAgICAgIGxldCB0YXJnZXRQYXJhbVZhbHVlO1xyXG4gICAgICBzZWFyY2hTdHJJdGVtcy5mb3JFYWNoKChzZWFyY2hTdHJJdGVtKSA9PiB7XHJcbiAgICAgICAgbGV0IHNwbGl0SXRlbSA9IHNlYXJjaFN0ckl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgICBpZiAoc3BsaXRJdGVtWzBdID09PSB0YXJnZXRQYXJhbU5hbWUpIHtcclxuICAgICAgICAgIHRhcmdldFBhcmFtVmFsdWUgPSBzcGxpdEl0ZW1bMV07XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXRhcmdldFBhcmFtVmFsdWUpIHRocm93IG5ldyBFcnJvcignaWTjgarjgYQnKTtcclxuICAgICAgcmV0dXJuIHRhcmdldFBhcmFtVmFsdWU7XHJcbiAgICB9LFxyXG4gICAgVG9kb3MsXHJcbiAgICBUb2RvXHJcbiAgfTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9