'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoItemCtrl = function TodoItemCtrl() {
    _classCallCheck(this, TodoItemCtrl);

    // this.model = null;
    this.test = 'hogehogeg';
  };

  ;

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

  angular.module('todoApp').directive('todoItem', [todoItem]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kb0l0ZW0vdG9kb0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsWUFBTTtBQUNMLGNBQVksQ0FBQzs7TUFFUCxZQUFZLEdBQ0wsU0FEUCxZQUFZLEdBQ0Y7MEJBRFYsWUFBWTs7O0FBR2QsUUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUE7R0FDeEI7O0FBQ0YsR0FBQzs7QUFFRixNQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVEsR0FBUztBQUNuQixXQUFPO0FBQ0wsY0FBUSxFQUFFLEdBQUc7QUFDYixpQkFBVyxFQUFFLHVDQUF1QztBQUNwRCxnQkFBVSxFQUFFLFlBQVk7QUFDeEIsa0JBQVksRUFBRSxJQUFJO0FBQ2xCLFdBQUssRUFBRSxJQUFJO0FBQ1gsc0JBQWdCLEVBQUU7QUFDaEIsYUFBSyxFQUFFLEdBQUc7T0FDWDtLQUNGLENBQUM7R0FDSCxDQUFDOztBQUVGLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Q0FDN0QsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy90b2RvSXRlbS90b2RvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIGNsYXNzIFRvZG9JdGVtQ3RybCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgLy8gdGhpcy5tb2RlbCA9IG51bGw7XHJcbiAgICAgIHRoaXMudGVzdCA9ICdob2dlaG9nZWcnXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBsZXQgdG9kb0l0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RvZG9JdGVtL3RvZG9JdGVtLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBUb2RvSXRlbUN0cmwsXHJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgc2NvcGU6IHRydWUsXHJcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcclxuICAgICAgICBtb2RlbDogJz0nXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLmRpcmVjdGl2ZSgndG9kb0l0ZW0nLCBbdG9kb0l0ZW1dKTtcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=