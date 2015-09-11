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
        return this.todoService.getInstance(todoItem.id, todoItem.title, todoItem.priority, todoItem.detail, todoItem.isDone);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9IZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxZQUFNO0FBQ0wsY0FBWSxDQUFDOztNQUVQLFVBQVU7QUFDSCxhQURQLFVBQVUsQ0FDRixXQUFXLEVBQUUsYUFBYSxFQUFFOzRCQURwQyxVQUFVOztBQUVaLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0tBQ3BDOztpQkFKRyxVQUFVOzthQU1OLGtCQUFDLFFBQVEsRUFBRTtBQUNqQixlQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUNqQyxRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVEsQ0FBQyxLQUFLLEVBQ2QsUUFBUSxDQUFDLFFBQVEsRUFDakIsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsTUFBTSxDQUNoQixDQUFDO09BQ0g7OzthQUVLLGdCQUFDLE1BQU0sRUFBRTtBQUNiLGVBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQ2pDLE1BQU0sQ0FBQyxFQUFFLEVBQ1QsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsUUFBUSxFQUNmLE1BQU0sQ0FBQyxNQUFNLEVBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FDZCxDQUFDO09BQ0g7OztXQXhCRyxVQUFVOzs7QUF5QmYsR0FBQzs7QUFFRixZQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3RELFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3RCxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb0hlbHBlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihUb2RvU2VydmljZSwgVG9kb1ZPU2VydmljZSkge1xyXG4gICAgICB0aGlzLnRvZG9TZXJ2aWNlID0gVG9kb1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZPU2VydmljZSA9IFRvZG9WT1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvVG9kb1ZPKHRvZG9JdGVtKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvZG9TZXJ2aWNlLmdldEluc3RhbmNlKFxyXG4gICAgICAgIHRvZG9JdGVtLmlkLFxyXG4gICAgICAgIHRvZG9JdGVtLnRpdGxlLFxyXG4gICAgICAgIHRvZG9JdGVtLnByaW9yaXR5LFxyXG4gICAgICAgIHRvZG9JdGVtLmRldGFpbCxcclxuICAgICAgICB0b2RvSXRlbS5pc0RvbmVcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHRvVG9kbyh0b2RvVk8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9kb1NlcnZpY2UuZ2V0SW5zdGFuY2UoXHJcbiAgICAgICAgdG9kb1ZPLmlkLFxyXG4gICAgICAgIHRvZG9WTy50aXRsZSxcclxuICAgICAgICB0b2RvVk8ucHJpb3JpdHksXHJcbiAgICAgICAgdG9kb1ZPLmRldGFpbCxcclxuICAgICAgICB0b2RvVk8uaXNEb25lXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgVG9kb0hlbHBlci4kaW5qZWN0ID0gWydUb2RvU2VydmljZScsICdUb2RvVk9TZXJ2aWNlJ107XHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5zZXJ2aWNlKCdUb2RvSGVscGVyJywgVG9kb0hlbHBlcik7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9