angular
    .module('TenantService', ['ngResource', 'Config'])
    .factory('getTenants', getTenants)
    ;

function getTenants($resource, API_HOST){
    var t = $resource(API_HOST+'/tenants',{}, {
    	  search: {
    	    method: 'GET',
    	    // isArray: false,
    	  }
    	});
    	return t;
}
