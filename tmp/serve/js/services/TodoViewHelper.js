'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  var TodoViewHelper = (function () {
    function TodoViewHelper() {
      _classCallCheck(this, TodoViewHelper);
    }

    _createClass(TodoViewHelper, [{
      key: 'getDoneIds',
      value: function getDoneIds(todos) {
        var doneTodos = todos.filter(function (todo) {
          return todo.isDone;
        });
        var doneIds = [];
        doneTodos.forEach(function (todo) {
          doneIds.push(todo.id);
        });
        return doneIds;
      }
    }, {
      key: 'removeTodo',
      value: function removeTodo(targetTodos, removeIds) {
        targetTodos = targetTodos.filter(function (todo) {
          var check = 0;
          removeIds.forEach(function (removeId) {
            if (todo.id === removeId) {
              check++;
            }
          });
          return !check;
        });
      }
    }]);

    return TodoViewHelper;
  })();

  angular.module('todoApp').service('TodoViewHelper', TodoViewHelper);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RvZG9WaWV3SGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBSTtNQUNHLGNBQWM7YUFBZCxjQUFjOzRCQUFkLGNBQWM7OztpQkFBZCxjQUFjOzthQUVSLG9CQUFDLEtBQUssRUFBRTtBQUNoQixZQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQ3JDLGlCQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0FBQ0gsWUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGlCQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQzFCLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QixDQUFDLENBQUM7QUFDSCxlQUFPLE9BQU8sQ0FBQztPQUNoQjs7O2FBRVMsb0JBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRTtBQUNqQyxtQkFBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDekMsY0FBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsbUJBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDOUIsZ0JBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7QUFBRSxtQkFBSyxFQUFFLENBQUE7YUFBRTtXQUN0QyxDQUFDLENBQUM7QUFDSCxpQkFBTyxDQUFDLEtBQUssQ0FBQztTQUNmLENBQUMsQ0FBQztPQUNKOzs7V0FyQkcsY0FBYzs7O0FBd0JwQixTQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztDQUNyRSxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9Ub2RvVmlld0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKT0+e1xyXG4gIGNsYXNzIFRvZG9WaWV3SGVscGVyIHtcclxuICAgIFxyXG4gICAgZ2V0RG9uZUlkcyh0b2Rvcykge1xyXG4gICAgICBsZXQgZG9uZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8uaXNEb25lO1xyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGRvbmVJZHMgPSBbXTtcclxuICAgICAgZG9uZVRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBkb25lSWRzLnB1c2godG9kby5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZG9uZUlkcztcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbW92ZVRvZG8odGFyZ2V0VG9kb3MsIHJlbW92ZUlkcykge1xyXG4gICAgICB0YXJnZXRUb2RvcyA9IHRhcmdldFRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xyXG4gICAgICAgIGxldCBjaGVjayA9IDA7XHJcbiAgICAgICAgcmVtb3ZlSWRzLmZvckVhY2goKHJlbW92ZUlkKSA9PiB7XHJcbiAgICAgICAgICBpZiAodG9kby5pZCA9PT0gcmVtb3ZlSWQpIHsgY2hlY2srKyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICFjaGVjaztcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfVxyXG4gIGFuZ3VsYXIubW9kdWxlKCd0b2RvQXBwJykuc2VydmljZSgnVG9kb1ZpZXdIZWxwZXInLCBUb2RvVmlld0hlbHBlcik7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9