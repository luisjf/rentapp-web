angular
    .module('Contract', [])
    .controller('ContractCtrl', ContractCtrl);

  function ContractCtrl(){
    var vm = this;

    vm.hello = 'Hola Contract';
  }
