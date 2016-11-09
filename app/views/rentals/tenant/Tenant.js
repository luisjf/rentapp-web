angular
    .module('Tenant', ['TenantService'])
    .controller('TenantCtrl', TenantCtrl);

TenantCtrl.$inject = ['getTenants'];

  function TenantCtrl(getTenants){
    var vm = this;

    vm.hello = 'Hola Tenant';
    vm.tenants = getTenants.search();

  }
