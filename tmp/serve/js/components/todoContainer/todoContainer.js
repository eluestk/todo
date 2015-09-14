'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoContainerCtrl = (function () {
    function TodoContainerCtrl($scope, TodoMainService, TodoViewHelper) {
      _classCallCheck(this, TodoContainerCtrl);

      this.todoMainService = TodoMainService;
      this.todoViewHelper = TodoViewHelper;
    }

    _createClass(TodoContainerCtrl, [{
      key: 'onArchiveTodo',
      value: function onArchiveTodo() {
        var doneIds = this.todoViewHelper.getDoneIds(this.model.todos);
        this.todoMainService.removeTodo(doneIds);
        this.todoViewHelper.removeTodo(this.model.todos, doneIds);
      }
    }]);

    return TodoContainerCtrl;
  })();

  ;
  TodoContainerCtrl.$inject = ['$scope', 'TodoMainService', 'TodoViewHelper'];

  var todoContainer = function todoContainer() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoContainer/todoContainer.html',
      controller: TodoContainerCtrl,
      controllerAs: 'vm',
      scope: true,
      transclude: true,
      bindToController: {
        model: '='
      }
    };
  };

  angular.module('todoApp').directive('todoContainer', todoContainer);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kb0NvbnRhaW5lci90b2RvQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUCxpQkFBaUI7QUFDVixhQURQLGlCQUFpQixDQUNULE1BQU0sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFOzRCQURqRCxpQkFBaUI7O0FBRW5CLFVBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLFVBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0tBQ3RDOztpQkFKRyxpQkFBaUI7O2FBS1IseUJBQUc7QUFDZCxZQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLFlBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLFlBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzNEOzs7V0FURyxpQkFBaUI7OztBQVV0QixHQUFDO0FBQ0YsbUJBQWlCLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM7O0FBRTVFLE1BQUksYUFBYSxHQUFJLFNBQWpCLGFBQWEsR0FBVTtBQUN6QixXQUFPO0FBQ0wsY0FBUSxFQUFFLEdBQUc7QUFDYixpQkFBVyxFQUFFLGlEQUFpRDtBQUM5RCxnQkFBVSxFQUFFLGlCQUFpQjtBQUM3QixrQkFBWSxFQUFFLElBQUk7QUFDbEIsV0FBSyxFQUFFLElBQUk7QUFDWCxnQkFBVSxFQUFFLElBQUk7QUFDaEIsc0JBQWdCLEVBQUU7QUFDaEIsYUFBSyxFQUFFLEdBQUc7T0FDWDtLQUNGLENBQUM7R0FDSCxBQUFDLENBQUE7O0FBRUYsU0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQ3JFLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvdG9kb0NvbnRhaW5lci90b2RvQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgY2xhc3MgVG9kb0NvbnRhaW5lckN0cmwge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBUb2RvTWFpblNlcnZpY2UsIFRvZG9WaWV3SGVscGVyKSB7XHJcbiAgICAgIHRoaXMudG9kb01haW5TZXJ2aWNlID0gVG9kb01haW5TZXJ2aWNlO1xyXG4gICAgICB0aGlzLnRvZG9WaWV3SGVscGVyID0gVG9kb1ZpZXdIZWxwZXI7XHJcbiAgICB9XHJcbiAgICBvbkFyY2hpdmVUb2RvKCkge1xyXG4gICAgICBjb25zdCBkb25lSWRzID0gdGhpcy50b2RvVmlld0hlbHBlci5nZXREb25lSWRzKHRoaXMubW9kZWwudG9kb3MpO1xyXG4gICAgICB0aGlzLnRvZG9NYWluU2VydmljZS5yZW1vdmVUb2RvKGRvbmVJZHMpO1xyXG4gICAgICB0aGlzLnRvZG9WaWV3SGVscGVyLnJlbW92ZVRvZG8odGhpcy5tb2RlbC50b2RvcywgZG9uZUlkcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBUb2RvQ29udGFpbmVyQ3RybC4kaW5qZWN0ID0gWyckc2NvcGUnLCAnVG9kb01haW5TZXJ2aWNlJywgJ1RvZG9WaWV3SGVscGVyJ107XHJcbiAgICAgIFxyXG4gIGxldCB0b2RvQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdG9kb0NvbnRhaW5lci90b2RvQ29udGFpbmVyLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBUb2RvQ29udGFpbmVyQ3RybCxcclxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICBzY29wZTogdHJ1ZSxcclxuICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xyXG4gICAgICAgIG1vZGVsOiAnPSdcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KVxyXG4gIFxyXG4gIGFuZ3VsYXIubW9kdWxlKCd0b2RvQXBwJykuZGlyZWN0aXZlKCd0b2RvQ29udGFpbmVyJywgdG9kb0NvbnRhaW5lcik7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9