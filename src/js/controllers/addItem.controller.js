angular.module('todo').controller('ListController', function($state, storageService, $scope) {

  this.allTodos = storageService.get();

  $scope.processForm = function(item) {
    this.allTodos = storageService.get();
    $scope.formData = {
      item: item,
      checked: false,
      id: Date.now()
    };
    this.allTodos.push($scope.formData);
    storageService.set(this.allTodos);
    $state.go('todo.all');
  };

  $scope.toggleComplete = function(todoObj) {
    storageService.toggleComplete(todoObj);
  };
});
