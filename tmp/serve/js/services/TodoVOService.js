'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoVO = function TodoVO(id, title, priority, detail, isDone) {
    _classCallCheck(this, TodoVO);

    this.id = id;
    this.title = title;
    this.priority = priority;
    this.detail = detail;
    this.isDone = isDone;
  };

  ;

  var TodoVOService = (function () {
    function TodoVOService() {
      _classCallCheck(this, TodoVOService);
    }

    _createClass(TodoVOService, [{
      key: 'getClass',
      value: function getClass() {
        return TodoVO;
      }
    }, {
      key: 'getInstance',
      value: function getInstance(id, title, priority, detail, isDone) {
        return new TodoVO(id, title, priority, detail, isDone);
      }
    }]);

    return TodoVOService;
  })();

  ;

  angular.module('todoApp').service('TodoVOService', TodoVOService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9WT1NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxZQUFNO0FBQ0wsY0FBWSxDQUFDOztNQUVQLE1BQU0sR0FDQyxTQURQLE1BQU0sQ0FDRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFOzBCQUQ3QyxNQUFNOztBQUVSLFFBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FDdEI7O0FBQ0YsR0FBQzs7TUFFSSxhQUFhO2FBQWIsYUFBYTs0QkFBYixhQUFhOzs7aUJBQWIsYUFBYTs7YUFDVCxvQkFBRztBQUNULGVBQU8sTUFBTSxDQUFDO09BQ2Y7OzthQUVVLHFCQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0MsZUFBTyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7T0FDeEQ7OztXQVBHLGFBQWE7OztBQVFsQixHQUFDOztBQUVGLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztDQUNuRSxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvVk9TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb1ZPIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgcHJpb3JpdHksIGRldGFpbCwgaXNEb25lKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsO1xyXG4gICAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNsYXNzIFRvZG9WT1NlcnZpY2Uge1xyXG4gICAgZ2V0Q2xhc3MoKSB7XHJcbiAgICAgIHJldHVybiBUb2RvVk87XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBnZXRJbnN0YW5jZShpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXRhaWwsIGlzRG9uZSkge1xyXG4gICAgICByZXR1cm4gbmV3IFRvZG9WTyhpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXRhaWwsIGlzRG9uZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5zZXJ2aWNlKCdUb2RvVk9TZXJ2aWNlJywgVG9kb1ZPU2VydmljZSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9