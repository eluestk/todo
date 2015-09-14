'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var Todo = (function () {
    function Todo(id, title, priority, detail, isDone) {
      _classCallCheck(this, Todo);

      // 初期化
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail = detail;
      this.isDone = isDone;
    }

    _createClass(Todo, [{
      key: 'updateTodo',
      value: function updateTodo() {
        // localStorageの内容をアップデートする
        var todo = {
          title: this.title,
          priority: this.priority,
          detail: this.detail,
          isDone: this.isDone };
        localStorage.setItem(this.id, JSON.stringify(todo));
      }
    }]);

    return Todo;
  })();

  ;

  var TodoService = (function () {
    function TodoService() {
      _classCallCheck(this, TodoService);
    }

    _createClass(TodoService, [{
      key: 'getClass',
      value: function getClass() {
        return Todo;
      }
    }, {
      key: 'getInstance',
      value: function getInstance(id, title, priority, detail, isDone) {
        return new Todo(id, title, priority, detail, isDone);
      }
    }]);

    return TodoService;
  })();

  ;
  angular.module('todoApp').service('TodoService', TodoService);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUixJQUFJO0FBQ0ksYUFEUixJQUFJLENBQ0ssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTs0QkFEOUMsSUFBSTs7O0FBR0wsVUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7aUJBUkUsSUFBSTs7YUFVRyxzQkFBRzs7QUFFWCxZQUFJLElBQUksR0FBRztBQUNULGVBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUNqQixrQkFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLGdCQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDbkIsZ0JBQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUM7QUFDdkIsb0JBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7T0FDckQ7OztXQWxCRSxJQUFJOzs7QUFtQlIsR0FBQzs7TUFFSSxXQUFXO2FBQVgsV0FBVzs0QkFBWCxXQUFXOzs7aUJBQVgsV0FBVzs7YUFDUCxvQkFBRztBQUNULGVBQU8sSUFBSSxDQUFDO09BQ2I7OzthQUVVLHFCQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDL0MsZUFBTyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7T0FDdEQ7OztXQVBHLFdBQVc7OztBQVFoQixHQUFDO0FBQ0YsU0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQy9ELENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL1RvZG9TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgcHJpb3JpdHksIGRldGFpbCwgaXNEb25lKSB7XHJcbiAgICAgIC8vIOWIneacn+WMllxyXG4gICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICB0aGlzLmRldGFpbCA9IGRldGFpbDtcclxuICAgICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVRvZG8oKSB7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBruWGheWuueOCkuOCouODg+ODl+ODh+ODvOODiOOBmeOCi1xyXG4gICAgICBsZXQgdG9kbyA9IHtcclxuICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcclxuICAgICAgICBkZXRhaWw6IHRoaXMuZGV0YWlsLFxyXG4gICAgICAgIGlzRG9uZTogdGhpcy5pc0RvbmV9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmlkLCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XHJcbiAgICB9XHJcbiAgfTsgICAgXHJcbiAgICBcclxuICBjbGFzcyBUb2RvU2VydmljZSB7XHJcbiAgICBnZXRDbGFzcygpIHtcclxuICAgICAgcmV0dXJuIFRvZG87XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBnZXRJbnN0YW5jZShpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXRhaWwsIGlzRG9uZSkge1xyXG4gICAgICByZXR1cm4gbmV3IFRvZG8oaWQsIHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsLCBpc0RvbmUpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGFuZ3VsYXIubW9kdWxlKCd0b2RvQXBwJykuc2VydmljZSgnVG9kb1NlcnZpY2UnLCBUb2RvU2VydmljZSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9