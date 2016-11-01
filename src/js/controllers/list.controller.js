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
    this.allTodos = storageService.get();
    $state.reload();
  };

  $scope.toggleComplete = function(todoObj) {
    storageService.toggleComplete(todoObj);
    $scope.updateTotal(this.allTodos);
    $state.reload();
  };

  $scope.updateTotal = function() {
    this.allTodos = storageService.get();
    this.count = storageService.updateTotal(this.allTodos);
    return this.count;
  };

  $scope.removeComplete = function() {
    this.allTodos = storageService.get();
    this.allTodos = storageService.removeComplete(this.allTodos);
    $state.reload();
  };

  $scope.removeItem = function(item) {
    this.allTodos = storageService.get();
    this.allTodos = storageService.removeItem(item, this.allTodos);
    $state.reload();
  };

  $scope.updateTotal();
});
