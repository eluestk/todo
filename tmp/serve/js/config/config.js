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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQU07QUFDTCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUV6QyxRQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFLO0FBQ25ELGtCQUFjLENBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNiLGdCQUFVLEVBQUUsY0FBYztBQUMxQixrQkFBWSxFQUFFLElBQUk7QUFDbEIsaUJBQVcsRUFBRSwyQkFBMkI7S0FDekMsQ0FBQyxDQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDZixnQkFBVSxFQUFFLGdCQUFnQjtBQUM1QixrQkFBWSxFQUFFLElBQUk7QUFDbEIsaUJBQVcsRUFBRSwrQkFBK0I7S0FDN0MsQ0FBQyxDQUNELFNBQVMsQ0FBQztBQUNULGdCQUFVLEVBQUUsT0FBTztLQUNwQixDQUFDLENBQUM7O0FBRUwscUJBQWlCLENBQUMsU0FBUyxDQUFDO0FBQzFCLGFBQU8sRUFBRSxJQUFJO0FBQ2IsaUJBQVcsRUFBRSxLQUFLO0tBQ25CLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6ImNvbmZpZy9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xyXG4gIGNvbnN0IG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd0b2RvQXBwJyk7XHJcbiAgXHJcbiAgbW9kdWxlLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSA9PiB7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAud2hlbignL2xpc3QnLCB7XHJcbiAgICAgICAgY29udHJvbGxlcjogJ0xpc3RQYWdlQ3RybCcsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9wYWdlcy9saXN0L2xpc3QuaHRtbCdcclxuICAgICAgfSlcclxuICAgICAgLndoZW4oJy9kZXRhaWwnLCB7XHJcbiAgICAgICAgY29udHJvbGxlcjogJ0RldGFpbFBhZ2VDdHJsJyxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3BhZ2VzL2RldGFpbC9kZXRhaWwuaHRtbCdcclxuICAgICAgfSlcclxuICAgICAgLm90aGVyd2lzZSh7XHJcbiAgICAgICAgcmVkaXJlY3RUbzogJy9saXN0J1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICByZXF1aXJlQmFzZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4gIFxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=