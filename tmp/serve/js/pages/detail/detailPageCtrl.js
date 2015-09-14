'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var DetailPageCtrl = (function () {
    function DetailPageCtrl($scope, $routeParams, TodoMainService, TodoHelper) {
      _classCallCheck(this, DetailPageCtrl);

      this.title = 'TODO:Detail';
      this.todoMainService = TodoMainService;
      this.todoHelper = TodoHelper;

      this.itemId = $routeParams.id;

      this.model = {
        tempTodo: {
          title: '',
          priority: 1,
          detail: '',
          isDone: false
        },
        todo: this.todoMainService.getTodo(this.itemId)
      };
    }

    _createClass(DetailPageCtrl, [{
      key: 'initInput',
      value: function initInput() {
        this.todoMainService.getTodo(this.itemId);
        this.model.ids;
      }
    }, {
      key: 'updateTodo',
      value: function updateTodo() {
        this.todoMainService;
      }
    }]);

    return DetailPageCtrl;
  })();

  ;

  DetailPageCtrl.$inject = ['$scope', '$routeParams', 'TodoMainService', 'TodoHelper'];
  angular.module('todoApp').controller('DetailPageCtrl', DetailPageCtrl);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbC9EZXRhaWxQYWdlQ3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQU07QUFDTCxjQUFZLENBQUM7O01BRVAsY0FBYztBQUNQLGFBRFAsY0FBYyxDQUNOLE1BQU0sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRTs0QkFEM0QsY0FBYzs7QUFFaEIsVUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7QUFDM0IsVUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsVUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7O0FBRTdCLFVBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQzs7QUFFOUIsVUFBSSxDQUFDLEtBQUssR0FBRztBQUNYLGdCQUFRLEVBQUU7QUFDUixlQUFLLEVBQUUsRUFBRTtBQUNULGtCQUFRLEVBQUUsQ0FBQztBQUNYLGdCQUFNLEVBQUUsRUFBRTtBQUNWLGdCQUFNLEVBQUUsS0FBSztTQUNkO0FBQ0QsWUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7T0FDaEQsQ0FBQTtLQUVGOztpQkFsQkcsY0FBYzs7YUFvQlQscUJBQUc7QUFDVixZQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsWUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7T0FDaEI7OzthQUVTLHNCQUFHO0FBQ1gsWUFBSSxDQUFDLGVBQWUsQ0FBQztPQUN0Qjs7O1dBM0JHLGNBQWM7OztBQTZCbkIsR0FBQzs7QUFFRixnQkFBYyxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUE7QUFDcEYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FHeEUsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoicGFnZXMvZGV0YWlsL0RldGFpbFBhZ2VDdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgRGV0YWlsUGFnZUN0cmwge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm91dGVQYXJhbXMsIFRvZG9NYWluU2VydmljZSwgVG9kb0hlbHBlcikge1xyXG4gICAgICB0aGlzLnRpdGxlID0gJ1RPRE86RGV0YWlsJztcclxuICAgICAgdGhpcy50b2RvTWFpblNlcnZpY2UgPSBUb2RvTWFpblNlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb0hlbHBlciA9IFRvZG9IZWxwZXI7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLml0ZW1JZCA9ICRyb3V0ZVBhcmFtcy5pZDtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgdGVtcFRvZG86IHtcclxuICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgICAgICAgZGV0YWlsOiAnJyxcclxuICAgICAgICAgIGlzRG9uZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZG86IHRoaXMudG9kb01haW5TZXJ2aWNlLmdldFRvZG8odGhpcy5pdGVtSWQpXHJcbiAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGluaXRJbnB1dCgpIHtcclxuICAgICAgdGhpcy50b2RvTWFpblNlcnZpY2UuZ2V0VG9kbyh0aGlzLml0ZW1JZCk7XHJcbiAgICAgIHRoaXMubW9kZWwuaWRzO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdXBkYXRlVG9kbygpIHtcclxuICAgICAgdGhpcy50b2RvTWFpblNlcnZpY2U7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfTtcclxuICBcclxuICBEZXRhaWxQYWdlQ3RybC4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvdXRlUGFyYW1zJywgJ1RvZG9NYWluU2VydmljZScsICdUb2RvSGVscGVyJ11cclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLmNvbnRyb2xsZXIoJ0RldGFpbFBhZ2VDdHJsJywgRGV0YWlsUGFnZUN0cmwpO1xyXG4gICAgICBcclxuICBcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9