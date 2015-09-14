'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoMainService = (function () {
    function TodoMainService(TodosService, TodoService, TodoVOService, TodoHelper) {
      _classCallCheck(this, TodoMainService);

      this.todosService = TodosService;
      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
      this.todoHelper = TodoHelper;
      this.todos;
      this.todo;
    }

    _createClass(TodoMainService, [{
      key: 'getTodos',
      value: function getTodos() {
        var _this = this;

        this.todos = this.todosService.getInstance();
        this.todos.todoVOItems = [];
        this.todos.todoItems.forEach(function (todoItem) {
          _this.todos.todoVOItems.push(_this.todoHelper.toTodoVO(todoItem));
        });
        return this.todos.todoVOItems;
      }
    }, {
      key: 'getTodo',
      value: function getTodo(id) {
        this.todos = this.todosService.getInstance();
        this.todos.todoItems.forEach(function (item) {
          item.id = id;
        });
      }
    }, {
      key: 'addTodo',

      // todoListとLocalStorageに新しいtodoItemを追加する
      value: function addTodo(title, priority, detail) {
        var todoItem = {
          id: Date.now().toString(),
          title: title,
          priority: priority,
          detail: detail,
          isDone: false
        };
        this.todos.add(todoItem);
      }
    }, {
      key: 'removeTodos',

      // todoListとLocalStorageからtodoItemを削除する
      value: function removeTodos(todoItemIds) {
        this.todos.remove(todoItemIds);
      }
    }, {
      key: 'updateTodo',
      value: function updateTodo(todoItem) {
        this.todoService.getInstance(todoItem.id, todoItem.title, todoItem.priority, todoItem.detail, todoItem.isDone).updateTodo();
      }
    }]);

    return TodoMainService;
  })();

  ;

  TodoMainService.$inject = ['TodosService', 'TodoService', 'TodoVOService', 'TodoHelper'];
  angular.module('todoApp').service('TodoMainService', TodoMainService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9NYWluU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQU07QUFDTCxjQUFZLENBQUM7O01BRVIsZUFBZTtBQUNQLGFBRFIsZUFBZSxDQUNOLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRTs0QkFEL0QsZUFBZTs7QUFFaEIsVUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDakMsVUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsVUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsVUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsVUFBSSxDQUFDLEtBQUssQ0FBQztBQUNYLFVBQUksQ0FBQyxJQUFJLENBQUM7S0FDWDs7aUJBUkUsZUFBZTs7YUFVVixvQkFBRzs7O0FBQ1QsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdDLFlBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUM1QixZQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDekMsZ0JBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBSyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakUsQ0FBQyxDQUFDO0FBQ0gsZUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztPQUMvQjs7O2FBRU0saUJBQUMsRUFBRSxFQUFFO0FBQ1YsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdDLFlBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSztBQUNyQyxjQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FBQztPQUNKOzs7OzthQUdNLGlCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO0FBQy9CLFlBQUksUUFBUSxHQUFHO0FBQ2IsWUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7QUFDekIsZUFBSyxFQUFFLEtBQUs7QUFDWixrQkFBUSxFQUFFLFFBQVE7QUFDbEIsZ0JBQU0sRUFBRSxNQUFNO0FBQ2QsZ0JBQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQTtBQUNELFlBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQzFCOzs7OzthQUdVLHFCQUFDLFdBQVcsRUFBRTtBQUN2QixZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUNoQzs7O2FBRVMsb0JBQUMsUUFBUSxFQUFFO0FBQ25CLFlBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUMxQixRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVEsQ0FBQyxLQUFLLEVBQ2QsUUFBUSxDQUFDLFFBQVEsRUFDakIsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsTUFBTSxDQUFDLENBQ2YsVUFBVSxFQUFFLENBQUM7T0FDakI7OztXQW5ERSxlQUFlOzs7QUFvRG5CLEdBQUM7O0FBRUYsaUJBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN6RixTQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztDQUN2RSxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvTWFpblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuIGNsYXNzIFRvZG9NYWluU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihUb2Rvc1NlcnZpY2UsIFRvZG9TZXJ2aWNlLCBUb2RvVk9TZXJ2aWNlLCBUb2RvSGVscGVyKSB7XHJcbiAgICAgIHRoaXMudG9kb3NTZXJ2aWNlID0gVG9kb3NTZXJ2aWNlO1xyXG4gICAgICB0aGlzLnRvZG9TZXJ2aWNlID0gVG9kb1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZPU2VydmljZSA9IFRvZG9WT1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb0hlbHBlciA9IFRvZG9IZWxwZXI7XHJcbiAgICAgIHRoaXMudG9kb3M7XHJcbiAgICAgIHRoaXMudG9kbztcclxuICAgIH07XHJcbiAgICAgICBcclxuICAgIGdldFRvZG9zKCkge1xyXG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgdGhpcy50b2Rvcy50b2RvVk9JdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLnRvZG9zLnRvZG9JdGVtcy5mb3JFYWNoKCh0b2RvSXRlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMudG9kb3MudG9kb1ZPSXRlbXMucHVzaCh0aGlzLnRvZG9IZWxwZXIudG9Ub2RvVk8odG9kb0l0ZW0pKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvZG9zLnRvZG9WT0l0ZW1zO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZ2V0VG9kbyhpZCkge1xyXG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgdGhpcy50b2Rvcy50b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpZDtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyB0b2RvTGlzdOOBqExvY2FsU3RvcmFnZeOBq+aWsOOBl+OBhHRvZG9JdGVt44KS6L+95Yqg44GZ44KLXHJcbiAgICBhZGRUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKSB7XHJcbiAgICAgIGxldCB0b2RvSXRlbSA9IHtcclxuICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICAgICAgZGV0YWlsOiBkZXRhaWwsXHJcbiAgICAgICAgaXNEb25lOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudG9kb3MuYWRkKHRvZG9JdGVtKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIHRvZG9MaXN044GoTG9jYWxTdG9yYWdl44GL44KJdG9kb0l0ZW3jgpLliYrpmaTjgZnjgotcclxuICAgIHJlbW92ZVRvZG9zKHRvZG9JdGVtSWRzKSB7XHJcbiAgICAgIHRoaXMudG9kb3MucmVtb3ZlKHRvZG9JdGVtSWRzKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHVwZGF0ZVRvZG8odG9kb0l0ZW0pIHtcclxuICAgICAgdGhpcy50b2RvU2VydmljZS5nZXRJbnN0YW5jZShcclxuICAgICAgICB0b2RvSXRlbS5pZCxcclxuICAgICAgICB0b2RvSXRlbS50aXRsZSxcclxuICAgICAgICB0b2RvSXRlbS5wcmlvcml0eSxcclxuICAgICAgICB0b2RvSXRlbS5kZXRhaWwsXHJcbiAgICAgICAgdG9kb0l0ZW0uaXNEb25lKVxyXG4gICAgICAgIC51cGRhdGVUb2RvKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgVG9kb01haW5TZXJ2aWNlLiRpbmplY3QgPSBbJ1RvZG9zU2VydmljZScsICdUb2RvU2VydmljZScsICdUb2RvVk9TZXJ2aWNlJywgJ1RvZG9IZWxwZXInXTtcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLnNlcnZpY2UoJ1RvZG9NYWluU2VydmljZScsIFRvZG9NYWluU2VydmljZSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9