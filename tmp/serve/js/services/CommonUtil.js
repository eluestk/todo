'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  var CommonUtil = (function () {
    function CommonUtil() {
      _classCallCheck(this, CommonUtil);
    }

    _createClass(CommonUtil, [{
      key: 'toLocalStorageTodo',
      value: function toLocalStorageTodo() {}
    }, {
      key: 'setDummyData',
      value: function setDummyData() {
        localStorage.setItem('1234567890123', JSON.stringify({
          title: 'TEST',
          priority: '1',
          detail: 'detail'
        }));
      }
    }]);

    return CommonUtil;
  })();

  angular.module('todoApp').service('CommonUtil', [CommonUtil]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0NvbW1vblV0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxZQUFNO01BRUMsVUFBVTthQUFWLFVBQVU7NEJBQVYsVUFBVTs7O2lCQUFWLFVBQVU7O2FBRUssOEJBQUcsRUFFckI7OzthQUVXLHdCQUFHO0FBQ2Isb0JBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDbkQsZUFBSyxFQUFFLE1BQU07QUFDYixrQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDLENBQUM7T0FDTDs7O1dBWkcsVUFBVTs7O0FBZWhCLFNBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Q0FFL0QsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoic2VydmljZXMvQ29tbW9uVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XHJcbiAgXHJcbiAgY2xhc3MgQ29tbW9uVXRpbCB7XHJcbiAgICBcclxuICAgIHRvTG9jYWxTdG9yYWdlVG9kbyAoKSB7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgc2V0RHVtbXlEYXRhKCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnMTIzNDU2Nzg5MDEyMycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB0aXRsZTogJ1RFU1QnLFxyXG4gICAgICAgIHByaW9yaXR5OiAnMScsXHJcbiAgICAgICAgZGV0YWlsOiAnZGV0YWlsJ1xyXG4gICAgICB9KSk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpLnNlcnZpY2UoJ0NvbW1vblV0aWwnLCBbQ29tbW9uVXRpbF0pO1xyXG4gIFxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==