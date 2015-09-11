'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

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
        var todo = app.common.toLocalStorageTodo(title, priority, detail);
        localStorage.setItem(this.id, JSON.stringify(todo));
      }
    }]);

    return Todo;
  })();

  ;

  angular.module('todoApp').service('TodoService', [Todo]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL19Ub2RvU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQU07QUFDTCxjQUFZLENBQUM7O01BRVIsSUFBSTtBQUNJLGFBRFIsSUFBSSxDQUNLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTs0QkFEdEMsSUFBSTs7O0FBR0wsVUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7aUJBUEUsSUFBSTs7YUFRRCxnQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTs7QUFFOUIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLFlBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsRSxvQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUNyRDs7O1dBaEJFLElBQUk7OztBQWlCUixHQUFDOztBQUVGLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FFMUQsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2VydmljZXMvX1RvZG9TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICAvLyDliJ3mnJ/ljJZcclxuICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpIHtcclxuICAgICAgLy8gVG9kb+OCquODluOCuOOCp+OCr+ODiOOCkuOCouODg+ODl+ODh+ODvOODiOOBmeOCi1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBruWGheWuueOCkuOCouODg+ODl+ODh+ODvOODiOOBmeOCi1xyXG4gICAgICBsZXQgdG9kbyA9IGFwcC5jb21tb24udG9Mb2NhbFN0b3JhZ2VUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5pZCwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5zZXJ2aWNlKCdUb2RvU2VydmljZScsIFtUb2RvXSk7XHJcbiAgXHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9