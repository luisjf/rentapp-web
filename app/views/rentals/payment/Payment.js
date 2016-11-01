angular
    .module('Payment', [])
    .controller('PaymentCtrl', PaymentCtrl);

  function PaymentCtrl(){
    var vm = this;

    vm.hello = 'Hola Payment';
  }
