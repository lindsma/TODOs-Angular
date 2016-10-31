angular.module('todo').controller('AddItemController', function($state, storageService, $scope) {

  this.allTodos = [];

  $scope.processForm = function(item) {
    this.allTodos = storageService.get();
    $scope.formData = {
      item: item
    };
    this.allTodos.push($scope.formData);
    storageService.set(this.allTodos);
  };
});
