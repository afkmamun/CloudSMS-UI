angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])


.service('ApiService', function ($http) {
	this.callApi = function (req) 
	{
		return $http(req);
  	};
})


;