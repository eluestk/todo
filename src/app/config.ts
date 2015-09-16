(() => {
  const module = angular.module('todoApp');
  
  module.config((
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider) => {
    $routeProvider
      .when('/list', {
        controller: 'ListPageCtrl',
        controllerAs: 'vm',
        templateUrl: '/app/pages/list/list.html'
      })
      .when('/detail', {
        controller: 'DetailPageCtrl',
        controllerAs: 'vm',
        templateUrl: '/app/pages/detail/detail.html'
      })
      .otherwise({
        redirectTo: '/list'
      });
  });
})();
  
