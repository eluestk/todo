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
      key: 'update',
      value: function update(title, priority, detail, isDone) {
        // Todoオブジェクトをアップデートする
        this.title = title;
        this.priority = priority;
        this.detail = detail;
        this.isDone = isDone;
        // localStorageの内容をアップデートする
        var todo = app.common.toLocalStorageTodo(title, priority, detail, isDone);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUixJQUFJO0FBQ0ksYUFEUixJQUFJLENBQ0ssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTs0QkFEOUMsSUFBSTs7O0FBR0wsVUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7aUJBUkUsSUFBSTs7YUFTRCxnQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7O0FBRXRDLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixZQUFJLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFFLG9CQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ3JEOzs7V0FsQkUsSUFBSTs7O0FBbUJSLEdBQUM7O01BRUksV0FBVzthQUFYLFdBQVc7NEJBQVgsV0FBVzs7O2lCQUFYLFdBQVc7O2FBQ1Asb0JBQUc7QUFDVCxlQUFPLElBQUksQ0FBQztPQUNiOzs7YUFFVSxxQkFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQy9DLGVBQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQ3REOzs7V0FQRyxXQUFXOzs7QUFRaEIsR0FBQztBQUNGLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztDQUMvRCxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXRhaWwsIGlzRG9uZSkge1xyXG4gICAgICAvLyDliJ3mnJ/ljJZcclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XHJcbiAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsLCBpc0RvbmUpIHtcclxuICAgICAgLy8gVG9kb+OCquODluOCuOOCp+OCr+ODiOOCkuOCouODg+ODl+ODh+ODvOODiOOBmeOCi1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XHJcbiAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2Xjga7lhoXlrrnjgpLjgqLjg4Pjg5fjg4fjg7zjg4jjgZnjgotcclxuICAgICAgbGV0IHRvZG8gPSBhcHAuY29tbW9uLnRvTG9jYWxTdG9yYWdlVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCwgaXNEb25lKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgY2xhc3MgVG9kb1NlcnZpY2Uge1xyXG4gICAgZ2V0Q2xhc3MoKSB7XHJcbiAgICAgIHJldHVybiBUb2RvO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZ2V0SW5zdGFuY2UoaWQsIHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsLCBpc0RvbmUpIHtcclxuICAgICAgcmV0dXJuIG5ldyBUb2RvKGlkLCB0aXRsZSwgcHJpb3JpdHksIGRldGFpbCwgaXNEb25lKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLnNlcnZpY2UoJ1RvZG9TZXJ2aWNlJywgVG9kb1NlcnZpY2UpO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==