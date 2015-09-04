"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  // 'use strict';
  this.app = this.app || {};
  app.common = {
    // itemをセットします
    setItem: function setItem(title, priority, detail) {
      var item = {
        title: title,
        priority: priority,
        detail: detail
      };

      return item;
    },
    getItem: function getItem() {},
    Todos: Todos,
    Todo: Todo
  };

  var Todos = (function () {
    function Todos() {
      _classCallCheck(this, Todos);

      // localStrageからitemを読む
      // this.todoItems = '';
      this.todoItems = [];
      for (var i = 0; i < localStorage.length; i++) {
        var itemKey = localStorage.key(i);
        if (/[0-9]{13}/.test(itemKey)) {
          var item = JSON.parse(localStorage.getItem(itemKey));
          this.todoItems.push(item);
        }
      }
    }

    _createClass(Todos, [{
      key: "add",
      value: function add(todoItem) {
        // todoItems.push(todoItem);
        this.todoItems.push(todoItem);
        // localStorageに書き込む
        localStorage.setItem(Date.now().toString(), JSON.stringify(todoItem));
      }
    }, {
      key: "remove",
      value: function remove(todoItemId) {
        // for();
        // localStorageから消す
      }
    }, {
      key: "getTodos",
      value: function getTodos() {
        return this.todoItems;
      }
    }]);

    return Todos;
  })();

  var Todo = (function () {
    function Todo(id, title, descrption, priority) {
      _classCallCheck(this, Todo);

      //
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.description;
    }

    _createClass(Todo, [{
      key: "update",
      value: function update(title, description, priority) {
        //
        // localStorageもアップデートする
      }
    }]);

    return Todo;
  })();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQVc7O0FBRVYsTUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUMxQixLQUFHLENBQUMsTUFBTSxHQUFHOztBQUVYLFdBQU8sRUFBRSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtBQUNqRCxVQUFJLElBQUksR0FBRztBQUNULGFBQUssRUFBTCxLQUFLO0FBQ0wsZ0JBQVEsRUFBUixRQUFRO0FBQ1IsY0FBTSxFQUFOLE1BQU07T0FDUCxDQUFDOztBQUVGLGFBQU8sSUFBSSxDQUFDO0tBQ2I7QUFDRCxXQUFPLEVBQUUsU0FBUyxPQUFPLEdBQUcsRUFFM0I7QUFDRCxTQUFLLEVBQUwsS0FBSztBQUNMLFFBQUksRUFBSixJQUFJO0dBQ0wsQ0FBQzs7TUFJSSxLQUFLO0FBQ0UsYUFEUCxLQUFLLEdBQ0s7NEJBRFYsS0FBSzs7OztBQUlQLFVBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLFlBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsWUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzdCLGNBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO09BQ0Y7S0FDRjs7aUJBWkcsS0FBSzs7YUFhTixhQUFDLFFBQVEsRUFBRTs7QUFFWixZQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFOUIsb0JBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztPQUN2RTs7O2FBQ0ssZ0JBQUMsVUFBVSxFQUFFOzs7T0FHbEI7OzthQUNPLG9CQUFHO0FBQ1QsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDO09BQ3ZCOzs7V0F6QkcsS0FBSzs7O01BNEJMLElBQUk7QUFDRyxhQURQLElBQUksQ0FDSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7NEJBRHpDLElBQUk7OztBQUdOLFVBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2IsVUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsVUFBSSxDQUFDLFdBQVcsQ0FBQztLQUNsQjs7aUJBUEcsSUFBSTs7YUFRRixnQkFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTs7O09BR3BDOzs7V0FYRyxJQUFJOztDQWNYLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAvLyAndXNlIHN0cmljdCc7XHJcbiAgdGhpcy5hcHAgPSB0aGlzLmFwcCB8fCB7fTtcclxuICBhcHAuY29tbW9uID0ge1xyXG4gICAgLy8gaXRlbeOCkuOCu+ODg+ODiOOBl+OBvuOBmVxyXG4gICAgc2V0SXRlbTogZnVuY3Rpb24gc2V0SXRlbSh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkZXRhaWxcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKCkge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBUb2RvcyxcclxuICAgIFRvZG9cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNsYXNzIFRvZG9zIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBsb2NhbFN0cmFnZeOBi+OCiWl0ZW3jgpLoqq3jgoBcclxuICAgICAgLy8gdGhpcy50b2RvSXRlbXMgPSAnJztcclxuICAgICAgdGhpcy50b2RvSXRlbXMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgaWYgKC9bMC05XXsxM30vLnRlc3QoaXRlbUtleSkpIHtcclxuICAgICAgICAgIHZhciBpdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtS2V5KSk7XHJcbiAgICAgICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkKHRvZG9JdGVtKSB7XHJcbiAgICAgIC8vIHRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZeOBq+abuOOBjei+vOOCgFxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEYXRlLm5vdygpLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmUodG9kb0l0ZW1JZCkge1xyXG4gICAgICAvLyBmb3IoKTtcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44GL44KJ5raI44GZXHJcbiAgICB9XHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JwdGlvbiwgcHJpb3JpdHkpIHtcclxuICAgICAgLy8gXHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xyXG4gICAgICAvLyBcclxuICAgICAgLy8gbG9jYWxTdG9yYWdl44KC44Ki44OD44OX44OH44O844OI44GZ44KLXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=