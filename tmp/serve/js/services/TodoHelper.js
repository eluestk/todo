'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoHelper = (function () {
    function TodoHelper(TodoService, TodoVOService) {
      _classCallCheck(this, TodoHelper);

      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
    }

    _createClass(TodoHelper, [{
      key: 'toTodoVO',
      value: function toTodoVO(todoItem) {
        return this.todoVOService.getInstance(todoItem.id, todoItem.title, todoItem.priority, todoItem.detail, todoItem.isDone);
      }
    }, {
      key: 'toTodo',
      value: function toTodo(todoVO) {
        return this.todoService.getInstance(todoVO.id, todoVO.title, todoVO.priority, todoVO.detail, todoVO.isDone);
      }
    }]);

    return TodoHelper;
  })();

  ;

  TodoHelper.$inject = ['TodoService', 'TodoVOService'];
  angular.module('todoApp').service('TodoHelper', TodoHelper);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9IZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxZQUFNO0FBQ0wsY0FBWSxDQUFDOztNQUVQLFVBQVU7QUFDSCxhQURQLFVBQVUsQ0FDRixXQUFXLEVBQUUsYUFBYSxFQUFFOzRCQURwQyxVQUFVOztBQUVaLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0tBQ3BDOztpQkFKRyxVQUFVOzthQU1OLGtCQUFDLFFBQVEsRUFBRTtBQUNqQixlQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUNuQyxRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVEsQ0FBQyxLQUFLLEVBQ2QsUUFBUSxDQUFDLFFBQVEsRUFDakIsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsTUFBTSxDQUNoQixDQUFDO09BQ0g7OzthQUVLLGdCQUFDLE1BQU0sRUFBRTtBQUNiLGVBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQ2pDLE1BQU0sQ0FBQyxFQUFFLEVBQ1QsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsUUFBUSxFQUNmLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FDZCxDQUFDO09BQ0g7OztXQXhCRyxVQUFVOzs7QUF5QmYsR0FBQzs7QUFFRixZQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3RELFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3RCxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb0hlbHBlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihUb2RvU2VydmljZSwgVG9kb1ZPU2VydmljZSkge1xyXG4gICAgICB0aGlzLnRvZG9TZXJ2aWNlID0gVG9kb1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZPU2VydmljZSA9IFRvZG9WT1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvVG9kb1ZPKHRvZG9JdGVtKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvZG9WT1NlcnZpY2UuZ2V0SW5zdGFuY2UoXHJcbiAgICAgICAgdG9kb0l0ZW0uaWQsXHJcbiAgICAgICAgdG9kb0l0ZW0udGl0bGUsXHJcbiAgICAgICAgdG9kb0l0ZW0ucHJpb3JpdHksXHJcbiAgICAgICAgdG9kb0l0ZW0uZGV0YWlsLFxyXG4gICAgICAgIHRvZG9JdGVtLmlzRG9uZVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdG9Ub2RvKHRvZG9WTykge1xyXG4gICAgICByZXR1cm4gdGhpcy50b2RvU2VydmljZS5nZXRJbnN0YW5jZShcclxuICAgICAgICB0b2RvVk8uaWQsXHJcbiAgICAgICAgdG9kb1ZPLnRpdGxlLFxyXG4gICAgICAgIHRvZG9WTy5wcmlvcml0eSxcclxuICAgICAgICB0b2RvVk8uZGV0YWlsLFxyXG4gICAgICAgIHRvZG9WTy5pc0RvbmVcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBUb2RvSGVscGVyLiRpbmplY3QgPSBbJ1RvZG9TZXJ2aWNlJywgJ1RvZG9WT1NlcnZpY2UnXTtcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLnNlcnZpY2UoJ1RvZG9IZWxwZXInLCBUb2RvSGVscGVyKTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=