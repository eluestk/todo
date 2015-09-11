'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var ListPageCtrl = (function () {
    function ListPageCtrl($scope, TodoMainService, TodoVOService, TodoViewHelper) {
      _classCallCheck(this, ListPageCtrl);

      this.title = 'TODO:List';
      this.todoMainService = TodoMainService;
      this.todoVoService = TodoVOService;
      this.todoViewHelper = TodoViewHelper;

      this.model = {
        todoInputForm: {
          confirmedTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          tempTodo: {
            title: '',
            priority: 1,
            detail: ''
          }
        },
        todos: this.todoMainService.getTodos()
      };

      $scope.$watch('vm.model.todoInputForm.confirmedTodo', function () {
        // this.model.todos.push(this.model.todoInputForm.confirmedTodo);
      });
    }

    _createClass(ListPageCtrl, [{
      key: 'addTodo',
      value: function addTodo() {

        if (this.model.tempTodo.title) {
          var title = this.model.tempTodo.title;
          var priority = this.model.tempTodo.priority;
          var detail = this.model.tempTodo.detail;
          this.model.confirmedTodo = this.model.tempTodo;
          this.model.tempTodo.title = '';
          this.model.tempTodo.priority = 1;
          this.model.tempTodo.detail = '';

          this.todoMainService.addTodo(title, priority, detail);
        } else {
          alert('件名を入力してください');
        }
      }
    }, {
      key: 'clrTodo',
      value: function clrTodo() {
        if (confirm('erase all data?')) localStorage.clear();
      }
    }, {
      key: 'updateChecks',
      value: function updateChecks() {
        console.log('update me!!!');
      }
    }, {
      key: 'setDummy',
      value: function setDummy() {
        var item = {
          title: 'TEST',
          priority: 1,
          detail: 'description goes here',
          isDone: false
        };
        localStorage.setItem(Date.now().toString(), JSON.stringify(item));
      }
    }]);

    return ListPageCtrl;
  })();

  ListPageCtrl.$inject = ['$scope', 'TodoMainService', 'TodoVOService', 'TodoViewHelper'];

  angular.module('todoApp').controller('ListPageCtrl', ListPageCtrl);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xpc3QvTGlzdFBhZ2VDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFDUCxZQUFZO0FBQ0wsYUFEUCxZQUFZLENBQ0osTUFBTSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFOzRCQURoRSxZQUFZOztBQUdkLFVBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLFVBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDOztBQUVyQyxVQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gscUJBQWEsRUFBRTtBQUNiLHVCQUFhLEVBQUU7QUFDYixpQkFBSyxFQUFFLEVBQUU7QUFDVCxvQkFBUSxFQUFFLENBQUM7QUFDWCxrQkFBTSxFQUFFLEVBQUU7V0FDWDtBQUNELGtCQUFRLEVBQUU7QUFDUixpQkFBSyxFQUFFLEVBQUU7QUFDVCxvQkFBUSxFQUFFLENBQUM7QUFDWCxrQkFBTSxFQUFFLEVBQUU7V0FDWDtTQUNGO0FBQ0QsYUFBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO09BQ3ZDLENBQUM7O0FBRUYsWUFBTSxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsRUFBRSxZQUFNOztPQUUzRCxDQUFDLENBQUM7S0FDSjs7aUJBM0JHLFlBQVk7O2FBNkJULG1CQUFHOztBQUVSLFlBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQzVCLGNBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUN0QyxjQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDNUMsY0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3hDLGNBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBQy9DLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDL0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQyxjQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQyxjQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZELE1BQU07QUFDTCxlQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEI7T0FDRjs7O2FBRU0sbUJBQUc7QUFDUixZQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUNyRDs7O2FBRVcsd0JBQUc7QUFDYixlQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO09BQzVCOzs7YUFFTyxvQkFBRztBQUNULFlBQUksSUFBSSxHQUFHO0FBQ1QsZUFBSyxFQUFFLE1BQU07QUFDYixrQkFBUSxFQUFFLENBQUM7QUFDWCxnQkFBTSxFQUFFLHVCQUF1QjtBQUMvQixnQkFBTSxFQUFFLEtBQUs7U0FDZCxDQUFBO0FBQ0Qsb0JBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUNuRTs7O1dBOURHLFlBQVk7OztBQWdFbEIsY0FBWSxDQUFDLE9BQU8sR0FBRyxDQUNyQixRQUFRLEVBQUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7O0FBRWpFLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztDQUNwRSxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJwYWdlcy9saXN0L0xpc3RQYWdlQ3RybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIGNsYXNzIExpc3RQYWdlQ3RybCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIFRvZG9NYWluU2VydmljZSwgVG9kb1ZPU2VydmljZSwgVG9kb1ZpZXdIZWxwZXIpIHtcclxuICAgICAgXHJcbiAgICAgIHRoaXMudGl0bGUgPSAnVE9ETzpMaXN0JztcclxuICAgICAgdGhpcy50b2RvTWFpblNlcnZpY2UgPSBUb2RvTWFpblNlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZvU2VydmljZSA9IFRvZG9WT1NlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZpZXdIZWxwZXIgPSBUb2RvVmlld0hlbHBlcjtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgdG9kb0lucHV0Rm9ybToge1xyXG4gICAgICAgICAgY29uZmlybWVkVG9kbzoge1xyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgICAgICAgICBkZXRhaWw6ICcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGVtcFRvZG86IHtcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogMSxcclxuICAgICAgICAgICAgZGV0YWlsOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9kb3M6IHRoaXMudG9kb01haW5TZXJ2aWNlLmdldFRvZG9zKClcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgICRzY29wZS4kd2F0Y2goJ3ZtLm1vZGVsLnRvZG9JbnB1dEZvcm0uY29uZmlybWVkVG9kbycsICgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLm1vZGVsLnRvZG9zLnB1c2godGhpcy5tb2RlbC50b2RvSW5wdXRGb3JtLmNvbmZpcm1lZFRvZG8pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvKCkge1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5tb2RlbC50ZW1wVG9kby50aXRsZSkge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMubW9kZWwudGVtcFRvZG8udGl0bGU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdGhpcy5tb2RlbC50ZW1wVG9kby5wcmlvcml0eTtcclxuICAgICAgICBsZXQgZGV0YWlsID0gdGhpcy5tb2RlbC50ZW1wVG9kby5kZXRhaWw7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maXJtZWRUb2RvID0gdGhpcy5tb2RlbC50ZW1wVG9kbztcclxuICAgICAgICB0aGlzLm1vZGVsLnRlbXBUb2RvLnRpdGxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5tb2RlbC50ZW1wVG9kby5wcmlvcml0eSA9IDE7XHJcbiAgICAgICAgdGhpcy5tb2RlbC50ZW1wVG9kby5kZXRhaWwgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRvZG9NYWluU2VydmljZS5hZGRUb2RvKHRpdGxlLCBwcmlvcml0eSwgZGV0YWlsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgn5Lu25ZCN44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNsclRvZG8oKSB7XHJcbiAgICAgIGlmKGNvbmZpcm0oJ2VyYXNlIGFsbCBkYXRhPycpKSBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHVwZGF0ZUNoZWNrcygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBtZSEhIScpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzZXREdW1teSgpIHtcclxuICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgdGl0bGU6ICdURVNUJyxcclxuICAgICAgICBwcmlvcml0eTogMSxcclxuICAgICAgICBkZXRhaWw6ICdkZXNjcmlwdGlvbiBnb2VzIGhlcmUnLFxyXG4gICAgICAgIGlzRG9uZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEYXRlLm5vdygpLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICAgIH1cclxuICB9XHJcbiAgTGlzdFBhZ2VDdHJsLiRpbmplY3QgPSBbXHJcbiAgICAnJHNjb3BlJywnVG9kb01haW5TZXJ2aWNlJywgJ1RvZG9WT1NlcnZpY2UnLCAnVG9kb1ZpZXdIZWxwZXInXTtcclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5jb250cm9sbGVyKCdMaXN0UGFnZUN0cmwnLCBMaXN0UGFnZUN0cmwpO1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=