'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoContainerCtrl = (function () {
    function TodoContainerCtrl(TodoMainService, TodoViewHelper) {
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
  TodoContainerCtrl.$inject = ['TodoMainService', 'TodoViewHelper'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kb0NvbnRhaW5lci90b2RvQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUCxpQkFBaUI7QUFDVixhQURQLGlCQUFpQixDQUNULGVBQWUsRUFBRSxjQUFjLEVBQUU7NEJBRHpDLGlCQUFpQjs7QUFFbkIsVUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsVUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDdEM7O2lCQUpHLGlCQUFpQjs7YUFLUix5QkFBRztBQUNkLFlBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsWUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsWUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDM0Q7OztXQVRHLGlCQUFpQjs7O0FBVXRCLEdBQUM7QUFDRixtQkFBaUIsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVsRSxNQUFJLGFBQWEsR0FBSSxTQUFqQixhQUFhLEdBQVU7QUFDekIsV0FBTztBQUNMLGNBQVEsRUFBRSxHQUFHO0FBQ2IsaUJBQVcsRUFBRSxpREFBaUQ7QUFDOUQsZ0JBQVUsRUFBRSxpQkFBaUI7QUFDN0Isa0JBQVksRUFBRSxJQUFJO0FBQ2xCLFdBQUssRUFBRSxJQUFJO0FBQ1gsZ0JBQVUsRUFBRSxJQUFJO0FBQ2hCLHNCQUFnQixFQUFFO0FBQ2hCLGFBQUssRUFBRSxHQUFHO09BQ1g7S0FDRixDQUFDO0dBQ0gsQUFBQyxDQUFBOztBQUVGLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztDQUNyRSxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3RvZG9Db250YWluZXIvdG9kb0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIGNsYXNzIFRvZG9Db250YWluZXJDdHJsIHtcclxuICAgIGNvbnN0cnVjdG9yKFRvZG9NYWluU2VydmljZSwgVG9kb1ZpZXdIZWxwZXIpIHtcclxuICAgICAgdGhpcy50b2RvTWFpblNlcnZpY2UgPSBUb2RvTWFpblNlcnZpY2U7XHJcbiAgICAgIHRoaXMudG9kb1ZpZXdIZWxwZXIgPSBUb2RvVmlld0hlbHBlcjtcclxuICAgIH1cclxuICAgIG9uQXJjaGl2ZVRvZG8oKSB7XHJcbiAgICAgIGNvbnN0IGRvbmVJZHMgPSB0aGlzLnRvZG9WaWV3SGVscGVyLmdldERvbmVJZHModGhpcy5tb2RlbC50b2Rvcyk7XHJcbiAgICAgIHRoaXMudG9kb01haW5TZXJ2aWNlLnJlbW92ZVRvZG8oZG9uZUlkcyk7XHJcbiAgICAgIHRoaXMudG9kb1ZpZXdIZWxwZXIucmVtb3ZlVG9kbyh0aGlzLm1vZGVsLnRvZG9zLCBkb25lSWRzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFRvZG9Db250YWluZXJDdHJsLiRpbmplY3QgPSBbJ1RvZG9NYWluU2VydmljZScsICdUb2RvVmlld0hlbHBlciddO1xyXG4gICAgICBcclxuICBsZXQgdG9kb0NvbnRhaW5lciA9ICgoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RvZG9Db250YWluZXIvdG9kb0NvbnRhaW5lci5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogVG9kb0NvbnRhaW5lckN0cmwsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgc2NvcGU6IHRydWUsXHJcbiAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcclxuICAgICAgICBtb2RlbDogJz0nXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSlcclxuICBcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLmRpcmVjdGl2ZSgndG9kb0NvbnRhaW5lcicsIHRvZG9Db250YWluZXIpO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==