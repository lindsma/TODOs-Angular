angular.module('todo').service('storageService', function(localStorageService) {

  function getTodos() {
    return localStorageService.get('localStorageTodos') || [];
  }

  function setTodos(allTodos) {
    localStorageService.set('localStorageTodos', allTodos);
  }

  function findItemById(items, id) {
    var returnId;
    items.forEach(function (item) {
      if(item.id === id) {
        returnId = item;
      }
    });
    return returnId;
  }

  function toggleComplete(todoObj) {
    todoObj.checked = !todoObj.checked;
    var allTodos = getTodos();
    var itemUpdate = findItemById(allTodos, todoObj.id);
    angular.copy(todoObj, itemUpdate);
    setTodos(allTodos);

  }
  return {
    get: getTodos,
    set: setTodos,
    toggleComplete: toggleComplete
  };
});
