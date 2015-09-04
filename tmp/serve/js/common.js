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
        localStorage.setItem(Date.now().toString(), JSON.stringify(todoItem));
      }
    }, {
      key: 'remove',
      value: function remove(todoItemId) {
        // for(); TODO
        // localStorageから消す
        for (var i = 0; i < 1; i++) {}
      }
    }, {
      key: 'getTodos',
      value: function getTodos() {
        return this.todoItems;
      }
    }]);

    return Todos;
  })();

  ;

  var Todo = (function () {
    function Todo(id, title, priority, descrption) {
      _classCallCheck(this, Todo);

      // 初期化
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail;
    }

    _createClass(Todo, [{
      key: 'update',
      value: function update(title, priority, detail) {
        // Todoオブジェクトをアップデートする
        this.title = title;
        this.priority = priority;
        this.detail = detail;
        // localStorageの内容をアップデートする
        var item = app.common.setItem(title, priority, detail);
        localStorage.setItem(this.id, item);
      }
    }]);

    return Todo;
  })();

  ;

  app.common = {
    // itemをセットします
    setItem: function setItem(title, priority, detail) {
      var item = {
        title: title,
        priority: priority,
        detail: detail
      };

      return item;
    },
    getItem: function getItem() {},
    Todos: Todos,
    Todo: Todo
  };
})();
//# sourceMappingURL=data:application/json;base64,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LENBQUM7S0FDYjtBQUNELFdBQU8sRUFBRSxTQUFTLE9BQU8sR0FBRyxFQUUzQjtBQUNELFNBQUssRUFBTCxLQUFLO0FBQ0wsUUFBSSxFQUFKLElBQUk7R0FDTCxDQUFDO0NBQ0gsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFwcCB8fCB7fTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb3Mge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgLy8gbG9jYWxTdHJhZ2XjgYvjgolpdGVt44KS6Kqt44KAXHJcbiAgICAgIHRoaXMudG9kb0l0ZW1zID0gW107XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpdGVtS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcclxuICAgICAgICBpZiAoL1swLTldezEzfS8udGVzdChpdGVtS2V5KSkge1xyXG4gICAgICAgICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1LZXkpKTtcclxuICAgICAgICAgIGxldCB0b2RvSXRlbSA9IG5ldyBUb2RvKGl0ZW1LZXksIGl0ZW0udGl0bGUsIGl0ZW0ucHJpb3JpdHksIGl0ZW0uZGV0YWlsKTtcclxuICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkKHRvZG9JdGVtKSB7XHJcbiAgICAgIC8vIHRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBq+abuOOBjei+vOOCgFxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEYXRlLm5vdygpLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmUodG9kb0l0ZW1JZCkge1xyXG4gICAgICAvLyBmb3IoKTsgVE9ET1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2XjgYvjgonmtojjgZlcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXNjcnB0aW9uKSB7XHJcbiAgICAgIC8vIOWIneacn+WMllxyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbDtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICAvLyBUb2Rv44Kq44OW44K444Kn44Kv44OI44KS44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44Gu5YaF5a6544KS44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICAgIGxldCBpdGVtID0gYXBwLmNvbW1vbi5zZXRJdGVtKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBhcHAuY29tbW9uID0ge1xyXG4gICAgLy8gaXRlbeOCkuOCu+ODg+ODiOOBl+OBvuOBmVxyXG4gICAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbSh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkZXRhaWxcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKCkge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBUb2RvcyxcclxuICAgIFRvZG9cclxuICB9O1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=