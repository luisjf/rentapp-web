angular
    .module('Local', [])
    .controller('LocalCtrl', LocalCtrl);

  function LocalCtrl(){
    var vm = this;

    vm.hello = 'Hola Local';
  }
