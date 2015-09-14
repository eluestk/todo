'use strict';

(function () {
  var module = angular.module('todoApp');

  module.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/list', {
      controller: 'ListPageCtrl',
      controllerAs: 'vm',
      templateUrl: '/app/pages/list/list.html'
    }).when('/detail', {
      controller: 'DetailPageCtrl',
      controllerAs: 'vm',
      templateUrl: '/app/pages/detail/detail.html'
    }).otherwise({
      redirectTo: '/list'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBTTtBQUNMLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRXpDLFFBQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUs7QUFDbkQsa0JBQWMsQ0FDWCxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2IsZ0JBQVUsRUFBRSxjQUFjO0FBQzFCLGtCQUFZLEVBQUUsSUFBSTtBQUNsQixpQkFBVyxFQUFFLDJCQUEyQjtLQUN6QyxDQUFDLENBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNmLGdCQUFVLEVBQUUsZ0JBQWdCO0FBQzVCLGtCQUFZLEVBQUUsSUFBSTtBQUNsQixpQkFBVyxFQUFFLCtCQUErQjtLQUM3QyxDQUFDLENBQ0QsU0FBUyxDQUFDO0FBQ1QsZ0JBQVUsRUFBRSxPQUFPO0tBQ3BCLENBQUMsQ0FBQzs7QUFFTCxxQkFBaUIsQ0FBQyxTQUFTLENBQUM7QUFDMUIsYUFBTyxFQUFFLElBQUk7QUFDYixpQkFBVyxFQUFFLEtBQUs7S0FDbkIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICBjb25zdCBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgndG9kb0FwcCcpO1xyXG4gIFxyXG4gIG1vZHVsZS5jb25maWcoKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikgPT4ge1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy9saXN0Jywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMaXN0UGFnZUN0cmwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvcGFnZXMvbGlzdC9saXN0Lmh0bWwnXHJcbiAgICAgIH0pXHJcbiAgICAgIC53aGVuKCcvZGV0YWlsJywge1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdEZXRhaWxQYWdlQ3RybCcsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9wYWdlcy9kZXRhaWwvZGV0YWlsLmh0bWwnXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vdGhlcndpc2Uoe1xyXG4gICAgICAgIHJlZGlyZWN0VG86ICcvbGlzdCdcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgcmVxdWlyZUJhc2U6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoKTtcclxuICBcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9