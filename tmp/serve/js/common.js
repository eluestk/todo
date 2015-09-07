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
        var item = app.common.setItem(todoItem.title, todoItem.priority, todoItem.detail);;
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
//# sourceMappingURL=data:application/json;base64,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LEVBQUUsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUN2RSxVQUFJLElBQUksR0FBRztBQUNULGFBQUssRUFBTCxLQUFLO0FBQ0wsZ0JBQVEsRUFBUixRQUFRO0FBQ1IsY0FBTSxFQUFOLE1BQU07T0FDUCxDQUFDOztBQUVGLGFBQU8sSUFBSSxDQUFDO0tBQ2I7QUFDRCxXQUFPLEVBQUUsU0FBUyxPQUFPLEdBQUcsRUFFM0I7QUFDRCxvQkFBZ0IsRUFBRSxTQUFTLGdCQUFnQixDQUFDLGVBQWUsRUFBRTtBQUMzRCxVQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsVUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxVQUFJLGdCQUFnQixZQUFBLENBQUM7QUFDckIsb0JBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhLEVBQUs7QUFDeEMsWUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxZQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxlQUFlLEVBQUU7QUFDcEMsMEJBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO09BQ0YsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsYUFBTyxnQkFBZ0IsQ0FBQztLQUN6QjtBQUNELFNBQUssRUFBTCxLQUFLO0FBQ0wsUUFBSSxFQUFKLElBQUk7R0FDTCxDQUFDO0NBQ0gsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFwcCB8fCB7fTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb3Mge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgLy8gbG9jYWxTdHJhZ2XjgYvjgolpdGVt44KS6Kqt44KAXHJcbiAgICAgIHRoaXMudG9kb0l0ZW1zID0gW107XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpdGVtS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgICBpZiAoL1swLTldezEzfS8udGVzdChpdGVtS2V5KSkge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1LZXkpKTtcclxuICAgICAgICAgIGxldCB0b2RvSXRlbSA9IG5ldyBUb2RvKGl0ZW1LZXksIGl0ZW0udGl0bGUsIGl0ZW0ucHJpb3JpdHksIGl0ZW0uZGV0YWlsKTtcclxuICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkKHRvZG9JdGVtKSB7XHJcbiAgICAgIC8vIHRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBq+abuOOBjei+vOOCgFxyXG4gICAgICBsZXQgaXRlbSA9IGFwcC5jb21tb24uc2V0SXRlbSh0b2RvSXRlbS50aXRsZSwgdG9kb0l0ZW0ucHJpb3JpdHksIHRvZG9JdGVtLmRldGFpbCk7O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2RvSXRlbS5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKHRvZG9JdGVtSWRzKSB7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBi+OCiea2iOOBmVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1JZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0b2RvSXRlbUlkc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKSB7XHJcbiAgICAgIC8vIOWIneacn+WMllxyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICAvLyBUb2Rv44Kq44OW44K444Kn44Kv44OI44KS44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44Gu5YaF5a6544KS44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICAgIGxldCB0b2RvID0gYXBwLmNvbW1vbi50b0xvY2FsU3RvcmFnZVRvZG8odGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmlkLCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBhcHAuY29tbW9uID0ge1xyXG4gICAgLy8gaXRlbeOCkuOCu+ODg+ODiOOBl+OBvuOBmVxyXG4gICAgdG9Mb2NhbFN0b3JhZ2VUb2RvOiBmdW5jdGlvbiB0b0xvY2FsU3RvcmFnZVRvZG8odGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpIHtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZGV0YWlsXHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9LFxyXG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbSgpIHtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgZ2V0VVJMUGFyYW1WYWx1ZTogZnVuY3Rpb24gZ2V0VVJMUGFyYW1WYWx1ZSh0YXJnZXRQYXJhbU5hbWUpIHtcclxuICAgICAgbGV0IHNlYXJjaFN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICBsZXQgc2VhcmNoU3RySXRlbXMgPSBzZWFyY2hTdHIuc3BsaXQoJyYnKTtcclxuICAgICAgbGV0IHRhcmdldFBhcmFtVmFsdWU7XHJcbiAgICAgIHNlYXJjaFN0ckl0ZW1zLmZvckVhY2goKHNlYXJjaFN0ckl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgc3BsaXRJdGVtID0gc2VhcmNoU3RySXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICAgIGlmIChzcGxpdEl0ZW1bMF0gPT09IHRhcmdldFBhcmFtTmFtZSkge1xyXG4gICAgICAgICAgdGFyZ2V0UGFyYW1WYWx1ZSA9IHNwbGl0SXRlbVsxXTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghdGFyZ2V0UGFyYW1WYWx1ZSkgdGhyb3cgbmV3IEVycm9yKCdpZOOBquOBhCcpO1xyXG4gICAgICByZXR1cm4gdGFyZ2V0UGFyYW1WYWx1ZTtcclxuICAgIH0sXHJcbiAgICBUb2RvcyxcclxuICAgIFRvZG9cclxuICB9O1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=