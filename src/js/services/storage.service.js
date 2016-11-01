angular.module('todo').service('storageService', function(localStorageService) {

    function getTodos() {
        return localStorageService.get('localStorageTodos') || [];
    }

    function setTodos(allTodos) {
        localStorageService.set('localStorageTodos', allTodos);
    }

    function findItemById(items, id) {
        var returnId;
        items.forEach(function(item) {
            if (item.id === id) {
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

    function updateTotal(allTodos) {
        var count = 0;
        for (var index = 0; index < allTodos.length; index++) {
            if (allTodos[index].checked === false) {
                count++;
            }
        }
        return count;
    }

    function removeComplete(allTodos) {
      for (var index = 0; index < allTodos.length; index++) {
          if (allTodos[index].checked === true) {
              allTodos.splice(index,1);
          }
      }
      setTodos(allTodos);
      return allTodos;
    }

    function removeItem(item, array) {
      var index = array.indexOf(item);
      array.splice(index, 1);
      setTodos(allTodos);
      return array;
    }



    return {
        get: getTodos,
        set: setTodos,
        toggleComplete: toggleComplete,
        updateTotal: updateTotal,
        removeComplete: removeComplete,
        removeItem: removeItem
    };
});
