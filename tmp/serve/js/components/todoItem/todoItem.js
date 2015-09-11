'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  'use strict';

  var TodoItemCtrl = (function () {
    function TodoItemCtrl() {
      _classCallCheck(this, TodoItemCtrl);

      alert('hgoe');
    }

    _createClass(TodoItemCtrl, [{
      key: 'updateChecks',
      value: function updateChecks(event) {
        alert(event);
      }
    }]);

    return TodoItemCtrl;
  })();

  ;
  TodoItemCtrl.$inject = [];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kb0l0ZW0vdG9kb0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxZQUFNO0FBQ0wsY0FBWSxDQUFDOztNQUVQLFlBQVk7QUFDTCxhQURQLFlBQVksR0FDRjs0QkFEVixZQUFZOztBQUVkLFdBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUNkOztpQkFIRyxZQUFZOzthQUlKLHNCQUFDLEtBQUssRUFBRTtBQUNsQixhQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDZDs7O1dBTkcsWUFBWTs7O0FBT2pCLEdBQUM7QUFDRixjQUFZLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFMUIsTUFBSSxRQUFRLEdBQUcsU0FBWCxRQUFRLEdBQVM7QUFDbkIsV0FBTztBQUNMLGNBQVEsRUFBRSxHQUFHO0FBQ2IsaUJBQVcsRUFBRSx1Q0FBdUM7QUFDcEQsZ0JBQVUsRUFBRSxZQUFZO0FBQ3hCLGtCQUFZLEVBQUUsSUFBSTtBQUNsQixXQUFLLEVBQUUsSUFBSTtBQUNYLHNCQUFnQixFQUFFO0FBQ2hCLGFBQUssRUFBRSxHQUFHO09BQ1g7S0FDRixDQUFDO0dBQ0gsQ0FBQzs7QUFFRixTQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDM0QsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy90b2RvSXRlbS90b2RvSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIGNsYXNzIFRvZG9JdGVtQ3RybCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgYWxlcnQoJ2hnb2UnKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2hlY2tzKGV2ZW50KSB7XHJcbiAgICAgIGFsZXJ0KGV2ZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIFRvZG9JdGVtQ3RybC4kaW5qZWN0ID0gW107XHJcbiAgXHJcbiAgbGV0IHRvZG9JdGVtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90b2RvSXRlbS90b2RvSXRlbS5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogVG9kb0l0ZW1DdHJsLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgIHNjb3BlOiB0cnVlLFxyXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB7XHJcbiAgICAgICAgbW9kZWw6ICc9J1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgYW5ndWxhci5tb2R1bGUoJ3RvZG9BcHAnKS5kaXJlY3RpdmUoJ3RvZG9JdGVtJywgdG9kb0l0ZW0pO1xyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==