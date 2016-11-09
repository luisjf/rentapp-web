angular
    .module('TenantService', ['ngResource', 'Config'])
    .factory('getTenants', getTenants)
    ;

function getTenants($resource, API_HOST){
    var t = $resource(API_HOST+'/tenants',{}, {
    	  search: {
    	    method: 'GET',
    	    // isArray: false,
          params: {
    	    	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ3ODY5NTgyNSwiZXhwIjoxNDc4Njk5NDI1LCJuYmYiOjE0Nzg2OTU4MjUsImp0aSI6IjhlNzc1M2EyOTQ1ZGJmMzY3ZDgwYzg0ZTVjNmM4YWQzIn0.kpISXmClJ64jE5OSfTbBCAf_Yb2hWNPfvNao09gyt5Q",
            }
    	  }
    	});
    	return t;
}
