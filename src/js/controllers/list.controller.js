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
    $scope.updateTotal();
  };

  $scope.toggleComplete = function(todoObj) {
    storageService.toggleComplete(todoObj);
    $scope.updateTotal();
  };

  $scope.updateTotal = function() {
    this.allTodos = storageService.get();
    this.count = storageService.updateTotal(this.allTodos);
    return this.count;
  };

  $scope.removeComplete = function() {
    this.allTodos = storageService.get();
    this.allTodos = storageService.removeComplete(this.allTodos);
    storageService.set(this.allTodos);
    console.log('in list');
  };

  $scope.updateTotal();
});
