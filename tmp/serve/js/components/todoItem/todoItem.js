'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoItemCtrl = function TodoItemCtrl($scope, TodoMainService, TodoHelper) {
    var _this = this;

    _classCallCheck(this, TodoItemCtrl);

    this.todoMainService = TodoMainService;
    this.todoHelper = TodoHelper;

    $scope.$watch(function () {
      return _this.model.isDone;
    }, function (newVal, oldVal) {
      if (newVal !== oldVal) {
        _this.todoMainService.updateTodo(_this.todoHelper.toTodo(_this.model));
      }
    });
  };

  ;

  TodoItemCtrl.$inject = ['$scope', 'TodoMainService', 'TodoHelper'];

  var todoItem = function todoItem() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoItem/todoItem.html',
      controller: TodoItemCtrl,
      controllerAs: 'vm',
      scope: true,
      bindToController: {
        model: '='
      }
    };
  };

  angular.module('todoApp').directive('todoItem', todoItem);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kb0l0ZW0vdG9kb0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUCxZQUFZLEdBQ0wsU0FEUCxZQUFZLENBQ0osTUFBTSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUU7OzswQkFEN0MsWUFBWTs7QUFHaEIsUUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7O0FBRTNCLFVBQU0sQ0FBQyxNQUFNLENBQUMsWUFBTTtBQUNsQixhQUFPLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUMxQixFQUFFLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUNyQixVQUFLLE1BQU0sS0FBSyxNQUFNLEVBQUc7QUFDdkIsY0FBSyxlQUFlLENBQUMsVUFBVSxDQUFDLE1BQUssVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7T0FDckU7S0FDRixDQUFDLENBQUM7R0FDSjs7QUFDRixHQUFDOztBQUVGLGNBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7O0FBRW5FLE1BQUksUUFBUSxHQUFHLFNBQVgsUUFBUSxHQUFTO0FBQ25CLFdBQU87QUFDTCxjQUFRLEVBQUUsR0FBRztBQUNiLGlCQUFXLEVBQUUsdUNBQXVDO0FBQ3BELGdCQUFVLEVBQUUsWUFBWTtBQUN4QixrQkFBWSxFQUFFLElBQUk7QUFDbEIsV0FBSyxFQUFFLElBQUk7QUFDWCxzQkFBZ0IsRUFBRTtBQUNoQixhQUFLLEVBQUUsR0FBRztPQUNYO0tBQ0YsQ0FBQztHQUNILENBQUM7O0FBRUYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQzNELENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvdG9kb0l0ZW0vdG9kb0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuICBjbGFzcyBUb2RvSXRlbUN0cmwge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBUb2RvTWFpblNlcnZpY2UsIFRvZG9IZWxwZXIpIHtcclxuICAgIFxyXG4gICAgdGhpcy50b2RvTWFpblNlcnZpY2UgPSBUb2RvTWFpblNlcnZpY2U7XHJcbiAgICB0aGlzLnRvZG9IZWxwZXIgPSBUb2RvSGVscGVyO1xyXG4gICAgXHJcbiAgICAgICRzY29wZS4kd2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmlzRG9uZTtcclxuICAgICAgfSwgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcbiAgICAgICAgaWYgKChuZXdWYWwgIT09IG9sZFZhbCkpIHtcclxuICAgICAgICAgIHRoaXMudG9kb01haW5TZXJ2aWNlLnVwZGF0ZVRvZG8odGhpcy50b2RvSGVscGVyLnRvVG9kbyh0aGlzLm1vZGVsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBUb2RvSXRlbUN0cmwuJGluamVjdCA9IFsnJHNjb3BlJywgJ1RvZG9NYWluU2VydmljZScsICdUb2RvSGVscGVyJ107XHJcbiAgXHJcbiAgbGV0IHRvZG9JdGVtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90b2RvSXRlbS90b2RvSXRlbS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogVG9kb0l0ZW1DdHJsLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIHNjb3BlOiB0cnVlLFxyXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB7XHJcbiAgICAgICAgbW9kZWw6ICc9J1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5kaXJlY3RpdmUoJ3RvZG9JdGVtJywgdG9kb0l0ZW0pO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==