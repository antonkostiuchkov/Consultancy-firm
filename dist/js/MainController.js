angular.module('appName', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'templates/services.html'
      })
      .state('testemonials', {
        url: '/testemonials',
        templateUrl: 'templates/testemonials.html'
      });

  })

  .controller('appController', function () {

  });
