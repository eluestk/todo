'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var app = app || {};

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
        var item = app.common.setItem(todoItem.title, todoItem.priority, todoItem.detail);;
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
    }, {
      key: 'getTodos',
      value: function getTodos() {
        return this.todoItems;
      }
    }]);

    return Todos;
  })();

  ;

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

  app.common = {
    // itemをセットします
    toLocalStorageTodo: function toLocalStorageTodo(title, priority, detail) {
      var item = {
        title: title,
        priority: priority,
        detail: detail
      };

      return item;
    },
    getItem: function getItem() {},
    getURLParamValue: function getURLParamValue(targetParamName) {
      var searchStr = window.location.search.substring(1);
      var searchStrItems = searchStr.split('&');
      var targetParamValue = undefined;
      searchStrItems.forEach(function (searchStrItem) {
        var splitItem = searchStrItem.split('=');
        if (splitItem[0] === targetParamName) {
          targetParamValue = splitItem[1];
        }
      });
      if (!targetParamValue) throw new Error('idない');
      return targetParamValue;
    },
    Todos: Todos,
    Todo: Todo
  };
})();
//# sourceMappingURL=data:application/json;base64,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Y3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIGNsYXNzIFRvZG9zIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIC8vIGxvY2FsU3RyYWdl44GL44KJaXRlbeOCkuiqreOCgFxyXG4gICAgICB0aGlzLnRvZG9JdGVtcyA9IFtdO1xyXG4gICAgICBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXRlbUtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgICAgICAgaWYgKC9bMC05XXsxM30vLnRlc3QoaXRlbUtleSkpIHtcclxuICAgICAgICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtS2V5KSk7XHJcbiAgICAgICAgICBsZXQgdG9kb0l0ZW0gPSBuZXcgVG9kbyhpdGVtS2V5LCBpdGVtLnRpdGxlLCBpdGVtLnByaW9yaXR5LCBpdGVtLmRldGFpbCk7XHJcbiAgICAgICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZCh0b2RvSXRlbSkge1xyXG4gICAgICAvLyB0b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XHJcbiAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2Xjgavmm7jjgY3ovrzjgoBcclxuICAgICAgbGV0IGl0ZW0gPSBhcHAuY29tbW9uLnNldEl0ZW0odG9kb0l0ZW0udGl0bGUsIHRvZG9JdGVtLnByaW9yaXR5LCB0b2RvSXRlbS5kZXRhaWwpOztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb0l0ZW0uaWQsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJlbW92ZSh0b2RvSXRlbUlkcykge1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2XjgYvjgonmtojjgZlcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtSWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9kb0l0ZW1JZHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIHByaW9yaXR5LCBkZXRhaWwpIHtcclxuICAgICAgLy8g5Yid5pyf5YyWXHJcbiAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKSB7XHJcbiAgICAgIC8vIFRvZG/jgqrjg5bjgrjjgqfjgq/jg4jjgpLjgqLjg4Pjg5fjg4fjg7zjg4jjgZnjgotcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsO1xyXG4gICAgICAvLyBsb2NhbFN0b3JhZ2Xjga7lhoXlrrnjgpLjgqLjg4Pjg5fjg4fjg7zjg4jjgZnjgotcclxuICAgICAgbGV0IHRvZG8gPSBhcHAuY29tbW9uLnRvTG9jYWxTdG9yYWdlVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuaWQsIEpTT04uc3RyaW5naWZ5KHRvZG8pKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGFwcC5jb21tb24gPSB7XHJcbiAgICAvLyBpdGVt44KS44K744OD44OI44GX44G+44GZXHJcbiAgICB0b0xvY2FsU3RvcmFnZVRvZG86IGZ1bmN0aW9uIHRvTG9jYWxTdG9yYWdlVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRldGFpbCkge1xyXG4gICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkZXRhaWxcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBnZXRJdGVtOiBmdW5jdGlvbiBnZXRJdGVtKCkge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBnZXRVUkxQYXJhbVZhbHVlOiBmdW5jdGlvbiBnZXRVUkxQYXJhbVZhbHVlKHRhcmdldFBhcmFtTmFtZSkge1xyXG4gICAgICBsZXQgc2VhcmNoU3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgIGxldCBzZWFyY2hTdHJJdGVtcyA9IHNlYXJjaFN0ci5zcGxpdCgnJicpO1xyXG4gICAgICBsZXQgdGFyZ2V0UGFyYW1WYWx1ZTtcclxuICAgICAgc2VhcmNoU3RySXRlbXMuZm9yRWFjaCgoc2VhcmNoU3RySXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBzcGxpdEl0ZW0gPSBzZWFyY2hTdHJJdGVtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgaWYgKHNwbGl0SXRlbVswXSA9PT0gdGFyZ2V0UGFyYW1OYW1lKSB7XHJcbiAgICAgICAgICB0YXJnZXRQYXJhbVZhbHVlID0gc3BsaXRJdGVtWzFdO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCF0YXJnZXRQYXJhbVZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoJ2lk44Gq44GEJyk7XHJcbiAgICAgIHJldHVybiB0YXJnZXRQYXJhbVZhbHVlO1xyXG4gICAgfSxcclxuICAgIFRvZG9zLFxyXG4gICAgVG9kb1xyXG4gIH07XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==