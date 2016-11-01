angular
    .module('Property', [])
    .controller('PropertyCtrl', PropertyCtrl);

  function PropertyCtrl(){
    var vm = this;

    vm.hello = 'Hola Property';
  }
