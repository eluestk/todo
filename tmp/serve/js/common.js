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
        var item = app.common.setItem(title, priority, detail);
        localStorage.setItem(this.id, JSON.stringify(item));
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
    getURLParam: function getURLParam(param) {
      var pageURL = window.location.search.substring(1);
      var URLvars = pageURL.split('&');
      for (var i = 0; i < URLvars.length; i++) {
        var paramName = URLvars[i].split('=');
        if (paramName[0] === param) {
          return paramName[1];
        }
      }
    },
    Todos: Todos,
    Todo: Todo
  };
})();
//# sourceMappingURL=data:application/json;base64,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aUJULEdBQUM7O0FBRUYsS0FBRyxDQUFDLE1BQU0sR0FBRzs7QUFFWCxXQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDakQsVUFBSSxJQUFJLEdBQUc7QUFDVCxhQUFLLEVBQUwsS0FBSztBQUNMLGdCQUFRLEVBQVIsUUFBUTtBQUNSLGNBQU0sRUFBTixNQUFNO09BQ1AsQ0FBQzs7QUFFRixhQUFPLElBQUksQ0FBQztLQUNiO0FBQ0QsV0FBTyxFQUFFLFNBQVMsT0FBTyxHQUFHLEVBRTNCO0FBQ0QsZUFBVyxFQUFFLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUN2QyxVQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxZQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLFlBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUMxQixpQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7T0FDRjtLQUNGO0FBQ0QsU0FBSyxFQUFMLEtBQUs7QUFDTCxRQUFJLEVBQUosSUFBSTtHQUNMLENBQUM7Q0FDSCxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYXBwIHx8IHt9O1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuICBjbGFzcyBUb2RvcyB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBsb2NhbFN0cmFnZeOBi+OCiWl0ZW3jgpLoqq3jgoBcclxuICAgICAgdGhpcy50b2RvSXRlbXMgPSBbXTtcclxuICAgICAgXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgIGlmICgvWzAtOV17MTN9Ly50ZXN0KGl0ZW1LZXkpKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbUtleSkpO1xyXG4gICAgICAgICAgbGV0IHRvZG9JdGVtID0gbmV3IFRvZG8oaXRlbUtleSwgaXRlbS50aXRsZSwgaXRlbS5wcmlvcml0eSwgaXRlbS5kZXRhaWwpO1xyXG4gICAgICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGQodG9kb0l0ZW0pIHtcclxuICAgICAgLy8gdG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44Gr5pu444GN6L6844KAXHJcbiAgICAgIGxldCBpdGVtID0gYXBwLmNvbW1vbi5zZXRJdGVtKHRvZG9JdGVtLnRpdGxlLCB0b2RvSXRlbS5wcmlvcml0eSwgdG9kb0l0ZW0uZGV0YWlsKTs7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG9JdGVtLmlkLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmUodG9kb0l0ZW1JZHMpIHtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44GL44KJ5raI44GZXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbUlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZG9JdGVtSWRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VG9kb3MoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvZG9JdGVtcztcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKSB7XHJcbiAgICAgIC8vIOWIneacn+WMllxyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcclxuICAgIH1cclxuICAgIHVwZGF0ZSh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICAvLyBUb2Rv44Kq44OW44K444Kn44Kv44OI44KS44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44Gu5YaF5a6544KS44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICAgIGxldCBpdGVtID0gYXBwLmNvbW1vbi5zZXRJdGVtKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgYXBwLmNvbW1vbiA9IHtcclxuICAgIC8vIGl0ZW3jgpLjgrvjg4Pjg4jjgZfjgb7jgZlcclxuICAgIHNldEl0ZW06IGZ1bmN0aW9uIHNldEl0ZW0odGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpIHtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZGV0YWlsXHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9LFxyXG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gZ2V0SXRlbSgpIHtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgZ2V0VVJMUGFyYW06IGZ1bmN0aW9uIGdldFVSTFBhcmFtKHBhcmFtKSB7XHJcbiAgICAgIGxldCBwYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgIGxldCBVUkx2YXJzID0gcGFnZVVSTC5zcGxpdCgnJicpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFVSTHZhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcGFyYW1OYW1lID0gVVJMdmFyc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgIGlmIChwYXJhbU5hbWVbMF0gPT09IHBhcmFtKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFyYW1OYW1lWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFRvZG9zLFxyXG4gICAgVG9kb1xyXG4gIH07XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==