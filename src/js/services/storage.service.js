angular.module('todo').service('storageService', function(localStorageService) {

  function getTodos() {
    return localStorageService.get('localStorageTodos') || [];
  }

  function setTodos(allTodos) {
    localStorageService.set('localStorageTodos', allTodos);
  }

  function toggleComplete(todoObj) {
    todoObj.checked = !todoObj.checked;
  }
  return {
    get: getTodos,
    set: setTodos,
    toggleComplete: toggleComplete
  };
});
