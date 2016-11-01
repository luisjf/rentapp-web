angular
    .module('Tenant', [])
    .controller('TenantCtrl', TenantCtrl);

  function TenantCtrl(){
    var vm = this;

    vm.hello = 'Hola Tenant';
  }
