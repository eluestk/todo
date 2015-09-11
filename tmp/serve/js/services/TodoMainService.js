'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoMainService = (function () {
    function TodoMainService(TodosService, TodoVOService, TodoHelper) {
      _classCallCheck(this, TodoMainService);

      this.todosService = TodosService;
      this.todoVOService = TodoVOService;
      this.todoHelper = TodoHelper;
      this.todos;
      this.todo;
    }

    _createClass(TodoMainService, [{
      key: 'getTodos',
      value: function getTodos() {
        this.todos = this.todosService.getInstance();
        return this.todos.todoItems;
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

      // todoListとLocalStorageのtodoItemを更新する
      value: function updateTodo(todoItem) {}
    }]);

    return TodoMainService;
  })();

  ;

  TodoMainService.$inject = ['TodosService', 'TodoVOService', 'TodoHelper'];
  angular.module('todoApp').service('TodoMainService', TodoMainService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9NYWluU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQU07QUFDTCxjQUFZLENBQUM7O01BRVIsZUFBZTtBQUNQLGFBRFIsZUFBZSxDQUNOLFlBQVksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFOzRCQURsRCxlQUFlOztBQUVoQixVQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUNqQyxVQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxVQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixVQUFJLENBQUMsS0FBSyxDQUFDO0FBQ1gsVUFBSSxDQUFDLElBQUksQ0FBQztLQUNYOztpQkFQRSxlQUFlOzthQVNWLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdDLGVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7T0FDN0I7OzthQUVNLGlCQUFDLEVBQUUsRUFBRTtBQUNWLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QyxZQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDckMsY0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDZCxDQUFDLENBQUM7T0FDSjs7Ozs7YUFHTSxpQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUMvQixZQUFJLFFBQVEsR0FBRztBQUNiLFlBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ3pCLGVBQUssRUFBRSxLQUFLO0FBQ1osa0JBQVEsRUFBRSxRQUFRO0FBQ2xCLGdCQUFNLEVBQUUsTUFBTTtBQUNkLGdCQUFNLEVBQUUsS0FBSztTQUNkLENBQUE7QUFDRCxZQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUMxQjs7Ozs7YUFHVSxxQkFBQyxXQUFXLEVBQUU7QUFDdkIsWUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEM7Ozs7O2FBR1Msb0JBQUMsUUFBUSxFQUFFLEVBRXBCOzs7V0F6Q0UsZUFBZTs7O0FBMENuQixHQUFDOztBQUVGLGlCQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMxRSxTQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztDQUN2RSxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvTWFpblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuIGNsYXNzIFRvZG9NYWluU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihUb2Rvc1NlcnZpY2UsIFRvZG9WT1NlcnZpY2UsIFRvZG9IZWxwZXIpIHtcclxuICAgICAgdGhpcy50b2Rvc1NlcnZpY2UgPSBUb2Rvc1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZPU2VydmljZSA9IFRvZG9WT1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb0hlbHBlciA9IFRvZG9IZWxwZXI7XHJcbiAgICAgIHRoaXMudG9kb3M7XHJcbiAgICAgIHRoaXMudG9kbztcclxuICAgIH07XHJcbiAgICAgICBcclxuICAgIGdldFRvZG9zKCkge1xyXG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgcmV0dXJuIHRoaXMudG9kb3MudG9kb0l0ZW1zO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZ2V0VG9kbyhpZCkge1xyXG4gICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgdGhpcy50b2Rvcy50b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uaWQgPSBpZDtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyB0b2RvTGlzdOOBqExvY2FsU3RvcmFnZeOBq+aWsOOBl+OBhHRvZG9JdGVt44KS6L+95Yqg44GZ44KLXHJcbiAgICBhZGRUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKSB7XHJcbiAgICAgIGxldCB0b2RvSXRlbSA9IHtcclxuICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICAgICAgZGV0YWlsOiBkZXRhaWwsXHJcbiAgICAgICAgaXNEb25lOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudG9kb3MuYWRkKHRvZG9JdGVtKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIHRvZG9MaXN044GoTG9jYWxTdG9yYWdl44GL44KJdG9kb0l0ZW3jgpLliYrpmaTjgZnjgotcclxuICAgIHJlbW92ZVRvZG9zKHRvZG9JdGVtSWRzKSB7XHJcbiAgICAgIHRoaXMudG9kb3MucmVtb3ZlKHRvZG9JdGVtSWRzKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIHRvZG9MaXN044GoTG9jYWxTdG9yYWdl44GudG9kb0l0ZW3jgpLmm7TmlrDjgZnjgotcclxuICAgIHVwZGF0ZVRvZG8odG9kb0l0ZW0pIHtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgVG9kb01haW5TZXJ2aWNlLiRpbmplY3QgPSBbJ1RvZG9zU2VydmljZScsICdUb2RvVk9TZXJ2aWNlJywgJ1RvZG9IZWxwZXInXTtcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLnNlcnZpY2UoJ1RvZG9NYWluU2VydmljZScsIFRvZG9NYWluU2VydmljZSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9