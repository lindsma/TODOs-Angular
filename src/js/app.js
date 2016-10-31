  var todo =  angular.module('todo', ['ui.router', 'LocalStorageModule']);

  todo.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise = '/';

    $stateProvider.state('todo', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('todo.active', {
      url: 'active',
      controller: 'ListController as list',
      templateUrl: './src/templates/active.html'
    }).state('todo.completed', {
      url: 'completed',
      controller: 'ListController as list',
      templateUrl: './src/templates/completed.html'
    }).state('todo.all', {
      url: 'all',
      controller: 'ListController as list',
      templateUrl: './src/templates/all.html'
    });

  });
