angular
    .module('Login', ['LoginService'])
    .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = [];

  function LoginCtrl(){
    var vm = this;

    vm.hello = 'Hola Login';
  }
