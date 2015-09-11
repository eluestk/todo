/// <reference path="../services/TodoService.js" />
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
        var item = app.common.toLocalStorageTodo(todoItem.title, todoItem.priority, todoItem.detail);
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
    }]);

    return Todos;
  })();

  ;

  angular.module('todoApp').service('TodoService', [Todos]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL19Ub2Rvc1NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUCxLQUFLO0FBRUUsYUFGUCxLQUFLLEdBRUs7NEJBRlYsS0FBSzs7O0FBSVAsVUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O0FBRXBCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLFlBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsWUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzdCLGNBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGNBQUksUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pFLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO09BQ0Y7S0FDRjs7aUJBZEcsS0FBSzs7YUFlTixhQUFDLFFBQVEsRUFBRTs7QUFFWixZQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFOUIsWUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdGLG9CQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ3pEOzs7YUFDSyxnQkFBQyxXQUFXLEVBQUU7O0FBRWxCLGFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLHNCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO09BQ0Y7OztXQTNCRyxLQUFLOzs7QUE0QlYsR0FBQzs7QUFFRixTQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBRTNELENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL19Ub2Rvc1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vc2VydmljZXMvVG9kb1NlcnZpY2UuanNcIiAvPlxyXG4oKCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuICBjbGFzcyBUb2RvcyB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBsb2NhbFN0cmFnZeOBi+OCiWl0ZW3jgpLoqq3jgoBcclxuICAgICAgdGhpcy50b2RvSXRlbXMgPSBbXTtcclxuICAgICAgXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xyXG4gICAgICAgIGlmICgvWzAtOV17MTN9Ly50ZXN0KGl0ZW1LZXkpKSB7XHJcbiAgICAgICAgICBsZXQgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbUtleSkpO1xyXG4gICAgICAgICAgbGV0IHRvZG9JdGVtID0gbmV3IFRvZG8oaXRlbUtleSwgaXRlbS50aXRsZSwgaXRlbS5wcmlvcml0eSwgaXRlbS5kZXRhaWwpO1xyXG4gICAgICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGQodG9kb0l0ZW0pIHtcclxuICAgICAgLy8gdG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44Gr5pu444GN6L6844KAXHJcbiAgICAgIGxldCBpdGVtID0gYXBwLmNvbW1vbi50b0xvY2FsU3RvcmFnZVRvZG8odG9kb0l0ZW0udGl0bGUsIHRvZG9JdGVtLnByaW9yaXR5LCB0b2RvSXRlbS5kZXRhaWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2RvSXRlbS5pZCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKHRvZG9JdGVtSWRzKSB7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBi+OCiea2iOOBmVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1JZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0b2RvSXRlbUlkc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGFuZ3VsYXIubW9kdWxlKCd0b2RvQXBwJykuc2VydmljZSgnVG9kb1NlcnZpY2UnLCBbVG9kb3NdKTtcclxuICBcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=