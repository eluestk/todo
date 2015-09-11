'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var Todos = (function () {
    function Todos(Todo) {
      _classCallCheck(this, Todos);

      // localStrageからitemを読む
      this.todoItems = [];
      this.Todo = Todo;

      for (var i = 0; i < localStorage.length; i++) {
        var id = localStorage.key(i);
        if (/[0-9]{13}/.test(id)) {
          var item = JSON.parse(localStorage.getItem(id));
          var todoItem = new Todo(id, item.title, item.priority, item.detail, item.isDone);
          this.todoItems.push(todoItem);
        }
      }
    }

    _createClass(Todos, [{
      key: 'add',
      value: function add(todo) {
        // todoItems.push(todoItem);
        var todoItem = new this.Todo(todo.id, todo.title, todo.priority, todo.detail, todo.isDone);
        this.todoItems.push(todoItem);
        // localStorageに書き込む
        var item = this.toLocalStorageTodo(todoItem.title, todoItem.priority, todoItem.detail, todoItem.isDone);
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
      key: 'toLocalStorageTodo',
      value: function toLocalStorageTodo(title, priority, detail, isDone) {
        var item = {
          title: title,
          priority: priority,
          detail: detail,
          isDone: isDone
        };
        return item;
      }
    }]);

    return Todos;
  })();

  ;

  var TodosService = (function () {
    function TodosService(TodoService) {
      _classCallCheck(this, TodosService);

      this.todoService = TodoService;
    }

    _createClass(TodosService, [{
      key: 'getClass',
      value: function getClass() {
        return Todos;
      }
    }, {
      key: 'getInstance',
      value: function getInstance() {
        return new Todos(this.todoService.getClass());
      }
    }]);

    return TodosService;
  })();

  ;

  TodosService.$inject = ['TodoService'];
  angular.module('todoApp').service('TodosService', TodosService);
})();
//# sourceMappingURL=data:application/json;base64,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OztBQUVGLGNBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2QyxTQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7Q0FDakUsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2VydmljZXMvVG9kb3NTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb3MgeyAgICBcclxuICAgIGNvbnN0cnVjdG9yKFRvZG8pIHtcclxuICAgICAgLy8gbG9jYWxTdHJhZ2XjgYvjgolpdGVt44KS6Kqt44KAXHJcbiAgICAgIHRoaXMudG9kb0l0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuVG9kbyA9IFRvZG87XHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpZCA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgaWYgKC9bMC05XXsxM30vLnRlc3QoaWQpKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpKTtcclxuICAgICAgICAgIGxldCB0b2RvSXRlbSA9IG5ldyBUb2RvKGlkLCBpdGVtLnRpdGxlLCBpdGVtLnByaW9yaXR5LCBpdGVtLmRldGFpbCwgaXRlbS5pc0RvbmUpO1xyXG4gICAgICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgYWRkKHRvZG8pIHtcclxuICAgICAgLy8gdG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICBsZXQgdG9kb0l0ZW0gPSBuZXcgdGhpcy5Ub2RvKHRvZG8uaWQsIHRvZG8udGl0bGUsIHRvZG8ucHJpb3JpdHksIHRvZG8uZGV0YWlsLCB0b2RvLmlzRG9uZSk7XHJcbiAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2Xjgavmm7jjgY3ovrzjgoBcclxuICAgICAgbGV0IGl0ZW0gPSB0aGlzLnRvTG9jYWxTdG9yYWdlVG9kbyh0b2RvSXRlbS50aXRsZSwgdG9kb0l0ZW0ucHJpb3JpdHksIHRvZG9JdGVtLmRldGFpbCwgdG9kb0l0ZW0uaXNEb25lKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb0l0ZW0uaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICAgIH07XHJcbiAgICByZW1vdmUodG9kb0l0ZW1JZHMpIHtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44GL44KJ5raI44GZXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbUlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZG9JdGVtSWRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRvTG9jYWxTdG9yYWdlVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCwgaXNEb25lKSB7XHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGRldGFpbCxcclxuICAgICAgICBpc0RvbmVcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgY2xhc3MgVG9kb3NTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFRvZG9TZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMudG9kb1NlcnZpY2UgPSBUb2RvU2VydmljZTtcclxuICAgIH1cclxuICAgIGdldENsYXNzKCkge1xyXG4gICAgICByZXR1cm4gVG9kb3M7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBUb2Rvcyh0aGlzLnRvZG9TZXJ2aWNlLmdldENsYXNzKCkpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIFRvZG9zU2VydmljZS4kaW5qZWN0ID0gWydUb2RvU2VydmljZSddO1xyXG4gIGFuZ3VsYXIubW9kdWxlKCd0b2RvQXBwJykuc2VydmljZSgnVG9kb3NTZXJ2aWNlJywgVG9kb3NTZXJ2aWNlKTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=