'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var DetailPageCtrl = (function () {
    function DetailPageCtrl($scope, $routeParams, TodoMainService, TodoVOService) {
      _classCallCheck(this, DetailPageCtrl);

      this.title = 'TODO:Detail';
      this.todoMainService = TodoMainService;
      this.todoVoService = TodoVOService;

      this.itemId = $routeParams.id;

      this.model = {
        tempTodo: {
          title: '',
          priority: 1,
          detail: ''
        },
        todo: this.todoMainService.getTodo(this.itemId)
      };

      $scope.model = this.model;
    }

    _createClass(DetailPageCtrl, [{
      key: 'updateTodo',
      value: function updateTodo() {
        // this.todoMainService;
      }
    }]);

    return DetailPageCtrl;
  })();

  ;

  DetailPageCtrl.$inject = ['$scope', '$routeParams', 'TodoMainService', 'TodoVOService'];
  angular.module('todoApp').controller('DetailPageCtrl', DetailPageCtrl);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbC9EZXRhaWxQYWdlQ3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxDQUFDLFlBQU07QUFDTCxjQUFZLENBQUM7O01BRVAsY0FBYztBQUNQLGFBRFAsY0FBYyxDQUNOLE1BQU0sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRTs0QkFEOUQsY0FBYzs7QUFFaEIsVUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7QUFDM0IsVUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsVUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7O0FBRW5DLFVBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQzs7QUFFOUIsVUFBSSxDQUFDLEtBQUssR0FBRztBQUNYLGdCQUFRLEVBQUU7QUFDUixlQUFLLEVBQUUsRUFBRTtBQUNULGtCQUFRLEVBQUUsQ0FBQztBQUNYLGdCQUFNLEVBQUUsRUFBRTtTQUNYO0FBQ0QsWUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7T0FDaEQsQ0FBQTs7QUFFRCxZQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FFM0I7O2lCQW5CRyxjQUFjOzthQXFCUixzQkFBRzs7T0FFWjs7O1dBdkJHLGNBQWM7OztBQXlCbkIsR0FBQzs7QUFFRixnQkFBYyxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDdkYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FHeEUsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoicGFnZXMvZGV0YWlsL0RldGFpbFBhZ2VDdHJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgRGV0YWlsUGFnZUN0cmwge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm91dGVQYXJhbXMsIFRvZG9NYWluU2VydmljZSwgVG9kb1ZPU2VydmljZSkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gJ1RPRE86RGV0YWlsJztcclxuICAgICAgdGhpcy50b2RvTWFpblNlcnZpY2UgPSBUb2RvTWFpblNlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZvU2VydmljZSA9IFRvZG9WT1NlcnZpY2U7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLml0ZW1JZCA9ICRyb3V0ZVBhcmFtcy5pZDtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgdGVtcFRvZG86IHtcclxuICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgICAgICAgZGV0YWlsOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9kbzogdGhpcy50b2RvTWFpblNlcnZpY2UuZ2V0VG9kbyh0aGlzLml0ZW1JZClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJHNjb3BlLm1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB1cGRhdGVUb2RvKCkge1xyXG4gICAgICAvLyB0aGlzLnRvZG9NYWluU2VydmljZTtcclxuICAgIH1cclxuICAgIFxyXG4gIH07XHJcbiAgXHJcbiAgRGV0YWlsUGFnZUN0cmwuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb3V0ZVBhcmFtcycsICdUb2RvTWFpblNlcnZpY2UnLCAnVG9kb1ZPU2VydmljZSddXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5jb250cm9sbGVyKCdEZXRhaWxQYWdlQ3RybCcsIERldGFpbFBhZ2VDdHJsKTtcclxuICAgICAgXHJcbiAgXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==