  var todo =  angular.module('todo', ['ui.router', 'LocalStorageModule']);

  todo.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise = '/';

    $stateProvider.state('todo', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('todo.add', {
      url: 'add',
      // controller: listCtlr,
      templateUrl: './todo/add/add.html'
    });

  });
