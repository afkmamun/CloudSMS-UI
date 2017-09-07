angular.module('app.controllers', [])


.controller('loginCtrl', ['$scope','$http', '$stateParams','ApiService', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams,ApiService,$state) {

	var username=$scope.username;
	var password=$scope.password;

	$scope.onInputChange=function(input)
	{
		//console.log(input);
	}

	$scope.login=function(input)
	{

		$state.go('menu.home'); 
		var data1 = {
			username: input.username,
			password: input.password
		};


	 	var req = 
		{
		    method: 'POST',
		    url: "http://localhost/sms/modules/customers/login",
		    data: data1,
		    dataType: 'json',
		    headers: { "Content-Type": "application/json" }
		   
		}	
		
       /*
       * Check if user exists or not
       *
       **/
        // ApiService.callApi(req).then(function(response){
        //     //do something with response
        //     var data = response.data;
        //     console.log(data.error);
        //     if(!data.error)
	       //  {
	       //  	$state.go('menu.home'); 
	       //  }
        // }).catch(function(response){
        // 	//handle the error
        // 	data.error=true;
        // 	console.log("Unexpected Error.");
        // });

	
	
	}

	//

	

}])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('customersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('vendorsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('routingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('billingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('filtersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('balanceCtrl', ['$scope', '$stateParams', 'ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ApiService) {

	$scope.nameid=[{}];
	$scope.customers=[{}];
	$scope.input={};
	$scope.currentBalance=0;
	$scope.input.balance=0;
	var id=null;
	var Type;
	//$scope.selected = $scope.nameid[0];

	$scope.changedNameIdValue=function (naid)
	{
		//console.log(naid);
		//.log(naid.id);

		//$scope.input.username=vendor.username;
		//$scope.naid=naid.name;
		//$scope.input.tp=naid.tp;
		try
		{
			id=naid.id;
			//$scope.input.balance=naid.balance;
			$scope.currentBalance=naid.balance;
			$scope.input.tp=naid.tp;

		}
		catch(err)
		{
			id=0;
			$scope.balance=0;
			$scope.input.balance=0;
			$scope.input.tp="";

		}
		
	}

	$scope.changedTypeValue=function(type)
	{

		console.log(type);
		Type=type;
		$scope.currentBalance=0;

		var data = {
        	type:type
        };
        if(type=="Customer")
        {
			var req = 
			{
				method: 'GET',
				url: "http://localhost/sms/modules/customers/all",
				data: data,
				dataType: 'json',
				headers: { "Content-Type": "application/json" } 
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data);
				if(!data.error)
				{
					
					$scope.naid=data.customers;
					//$scope.item=data.customers[0];
					//$scope.changedNameIdValue(data.customers[0]);
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
			});
        }
        else if(type=="Vendor")
        {
			var req = 
			{
				method: 'GET',
				url: "http://localhost/sms/modules/vendors/all",
				data: data,
				dataType: 'json',
				headers: { "Content-Type": "application/json" } 
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data.error);
				if(!data.error)
				{
					$scope.naid=data.vendors;
					//$scope.item=$scope.naid[0];
					//$scope.changedNameIdValue(data.vendors[0]);
					
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
			});
        }
    }

    $scope.save=function(input)
  	{
  		console.log(Type);
  		console.log(input.balance);
  		console.log(id);
  	}


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('addCustomerCtrl', ['$scope', '$stateParams','$ionicPopup','$ionicLoading', 'ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup, $ionicLoading,ApiService) 
{
	$scope.form={};
	$scope.input={};


	$scope.submit=function(input)
	{
		

		//console.log(input);
		var data = {
			username: input.username,
			password: input.password,
			name : input.name,
			phone : input.phone,
			email : input.email
		};

		if(input.username!=""&&input.password!=""&&input.name!=""&&input.phone!=""&&input.email!="")
		{


			var req = 
			{
				method: 'POST',
				url: "http://localhost/sms/modules/customers/createcustomer",
				data: data,
				dataType: "json",
				headers: { "Content-Type": "application/json" } 
			}	

			// Setup the loader
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: false,
				maxWidth: 200,
				showDelay: 0
			});

			ApiService.callApi(req).then(function(response){
				//do something with response
				var data = response.data;
				console.log(data);
				$ionicLoading.hide();
				if(!data.error)
				{

					console.log(data);
					var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: data.message
					});

					alertPopup.then(function(res) {
					// Custom functionality....
						$scope.input={
							name:"",
							username:"",
							password:"",
							phone:"",
							email:""

						};
					  	//}
					});

					//$state.go('menu.home'); 
				}
				else
				{
					console.log(data);
					var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: data.message
					});

					alertPopup.then(function(res) {
					// Custom functionality....
					});
				}
			}).catch(function(response)
			{
				$ionicLoading.hide();
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
				var alertPopup = $ionicPopup.alert({
					title: 'Message',
					template: "Invalid Input/Missing Fields"
				});

				alertPopup.then(function(res) {
				// Custom functionality....
				});

			});
		}
		else
		{
			var alertPopup = $ionicPopup.alert({
				title: 'Message',
				template: "Invalid Input/Missing Fields"
			});

			alertPopup.then(function(res) {
			// Custom functionality....
			});
		}

	}


}])
   
.controller('addVendorCtrl', ['$scope', '$stateParams', '$ionicPopup','$ionicLoading', 'ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup,$ionicLoading, ApiService) {

	$scope.submit=function(input)
	{
		console.log(input);
		//console.log(input);
		var data = {
			name : input.name,
			tp : input.tp,
			balance : input.balance
		};

		console.log(data);

		if(input.name!=""&&input.tp!=""&&input.balance!="")
		{


			var req = 
			{
				method: 'POST',
				url: "http://localhost/sms/modules/vendors/createvendor",
				data: data,
				dataType: "json",
				headers: { "Content-Type": "application/json" } 
			}	

			// Setup the loader
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				showBackdrop: false,
				maxWidth: 200,
				showDelay: 0
			});

			ApiService.callApi(req).then(function(response){
				//do something with response
				var data = response.data;
				console.log(data);
				$ionicLoading.hide();
				if(!data.error)
				{

					console.log(data);
					var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: data.message
					});

					alertPopup.then(function(res) {
					// Custom functionality....
					});

					//$state.go('menu.home'); 
				}
				else
				{
					console.log(data);
					var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: data.message
					});

					alertPopup.then(function(res) {
					// Custom functionality....
					});
				}
			}).catch(function(response)
			{
				$ionicLoading.hide();
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
				var alertPopup = $ionicPopup.alert({
					title: 'Message',
					template: "Invalid Input/Missing Fields"
				});

				alertPopup.then(function(res) {
				// Custom functionality....
				});

			});
		}
		else
		{
			var alertPopup = $ionicPopup.alert({
				title: 'Message',
				template: "Invalid Input/Missing Fields"
			});

			alertPopup.then(function(res) {
			// Custom functionality....
			});
		}

	}


}])
   
.controller('addRoutingCtrl', ['$scope', '$stateParams','$state', 'ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state, ApiService) {

	$scope.customers=[{}];
	$scope.prefixs={};
	var req = 
	{
		method: 'GET',
		url: "http://localhost/sms/modules/customers/all",
		dataType: 'json',
		headers: { "Content-Type": "application/json" } 
	}	
	ApiService.callApi(req).then(function(response){
	//do something with response
		var data = response.data;
		console.log(data.error);
		if(!data.error)
		{
			$scope.customers=data.customers;
			//$scope.customer=data.customers[0];
			//$state.go('menu.home'); 
		}
		}).catch(function(response){
		//handle the error
		data.error=true;
		console.log("Unexpected Error.");
	});

	$scope.changedCustomer=function(customer)
	{
		var req = 
		{
			method: 'GET',
			url: "http://localhost/sms/modules/common/billing_branch_rate/customer/"+customer.id,
			dataType: 'json',
			headers: { "Content-Type": "application/json" } 
		}	
		ApiService.callApi(req).then(function(response){
		//do something with response
			var data = response.data;
			//console.log(data.error);
			if(!data.error)
			{
				$scope.prefixs=data.result;
				//$scope.customer=data.customers[0];
				
			}
			}).catch(function(response){
			//handle the error
			//data.error=true;
			console.log("Unexpected Error.");
		});
	}
	$scope.onClickPrefix=function(prefix)
	{
		console.log(prefix);
		$state.go('menu.AddPrefixRouting', { prefix: prefix.prefix }); 
	}





}])

.controller('routingPrefixCtrl', ['$scope', '$stateParams','$state', 'ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state, ApiService) {
	$scope.vendors={};
	$scope.allowables={};
	$scope.allow={};
	$scope.title=$stateParams.prefix;
	//console.log($stateParams);

	

	var req = 
	{
		method: 'GET',
		url: "http://localhost/sms/modules/common/billing_branch_rate/vendor",
		dataType: 'json',
		headers: { "Content-Type": "application/json" } 
	}	
	ApiService.callApi(req).then(function(response){
	//do something with response
		var data = response.data;
		//console.log(data.error);
		if(!data.error)
		{
			//$scope.prefixs=data.result;
			console.log(data.result);
			$scope.vendors=data.result;
			//$scope.customer=data.customers[0];
			
		}
		}).catch(function(response){
		//handle the error
		//data.error=true;
		console.log("Unexpected Error.");
	});

	$scope.checkPrefix=function(prefix)
	{
		//console.log(prefix.prefix);
		if(angular.equals(prefix.prefix,$stateParams.prefix))
		{
			//console.log("True");
			return true;
		}
		else
		{
			//console.log("False");
			return false;
		}
	}
	$scope.toggleFilter = function(item) {
  		//item.toggle = !item.toggle;
  		
	};

	$scope.done=function()
	{
		console.log($scope.allowables);
	}


}])
   
.controller('addBillingCtrl', ['$scope', '$stateParams', 'ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,  $stateParams, ApiService) 
{
	$scope.fields = [{id: 'field1'}];
	$scope.nameid=[{}];
	var Type;
	//$scope.selected = $scope.nameid[0];

	$scope.changedNameIdValue=function (naid)
	{
		console.log(naid.id);
	}

	$scope.changedTypeValue=function(type)
	{
		console.log(type);
		Type=type;

		var data = {
        	type:type
        };
        if(type=="Customer")
        {
			var req = 
			{
				method: 'GET',
				url: "http://localhost/sms/modules/customers/all",
				data: data,
				dataType: 'json',
				headers: { "Content-Type": "application/json" } 
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data.error);
				if(!data.error)
				{
					
					var index=0;
					angular.forEach(data.customers, function(customer)
					{
						if(customer.routingid>0)
						{
							 data.customers.splice(index, 1);   
						}
						index++;
					});
					$scope.nameid=data.customers;
					$scope.naid=$scope.nameid[0];
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
			});
        }
        else if(type=="Vendor")
        {
			var req = 
			{
				method: 'GET',
				url: "http://www.colorboxbd.com/sms/modules/vendors/billing/:type",
				data: data,
				dataType: 'json',
				headers: { "Content-Type": "application/json" } 
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data.error);
				if(!data.error)
				{
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
			});
        }
    }

	$scope.addNewField=function()
	{
		var newItemNo = $scope.fields.length+1;
   		$scope.fields.push({'id':'field'+newItemNo});
	}

	$scope.removeField = function() {
    	var lastItem = $scope.fields.length-1;
    	$scope.fields.splice(lastItem);
  	};
  	$scope.submit=function(rate_chart)
  	{
  	// 	var prefix_rate=[{}];
  	// 	var i = 0;
  	// 	if($scope.fields.length>=0)
  	// 	{
  			
  	// 		angular.forEach($scope.fields, function(field) {
			//  prefix_rate[i]["prefix"]=field.prefix;
  	// 			prefix_rate[i]["rate"]=field.rate;   
  	// 			i++;        
			// });
  	// 		console.log(prefix_rate);
  	// 	}

  		var data=
  		{
  			type: Type,
  			rate_chart: rate_chart,
  			prefix_rate:$scope.fields
  		}
  		//console.log($scope.rate_chart);
  		//console.log($scope.fields);
  		var req = 
			{
				method: 'POST',
				url: "http://localhost/sms/modules/common/addbilling",
				data: data,
				dataType: 'json',
				headers: { "Content-Type": "application/json" } 
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				
				if(!data.error)
				{
					console.log(data);
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error");
			});
  	}


}])
   
.controller('editCustomerCtrl', ['$scope', '$stateParams', '$ionicPopup','$ionicLoading','ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup,$ionicLoading, ApiService) 
{

	$scope.customers=[{}];
	$scope.input={};
	var req = 
	{
		method: 'GET',
		url: "http://localhost/sms/modules/customers/all",
		dataType: 'json',
		headers: { "Content-Type": "application/json" } 
	}	
	ApiService.callApi(req).then(function(response){
	//do something with response
		var data = response.data;
		//console.log(data.error);
		if(!data.error)
		{
			//console.log(data);
			$scope.customers=data.customers;
			//$scope.item=data.customers[0];
			//$scope.changedNameIdValue(data.customers[0]);



			//$state.go('menu.home'); 
		}
		}).catch(function(response){
		//handle the error
		response.error=true;
		console.log("Unexpected Error.");
	});

	$scope.changedNameIdValue=function(customer)
	{
		$scope.input.username=customer.username;
		$scope.input.name=customer.name;
		$scope.input.password=customer.password;
		$scope.input.phone=customer.phone;
		$scope.input.email=customer.email;
		//console.log(customer);
		/*var req = 
		{
			method: 'GET',
			url: "http://localhost/sms/modules/customers/customer/"+customer.username,
		}	
		ApiService.callApi(req).then(function(response){
		//do something with response
			var data = response.data.customer;
			//console.log(data.error);
			if(!response.data.error)
			{
				//console.log(data);
				// $scope.$apply(function () {
	   //          $scope.input.name = "Timeout called!";
	   //     		 });
				
				$scope.input.username=data.username;
				$scope.input.name=data.name;
				$scope.input.password=data.password;
				$scope.input.phone=data.phone;
				$scope.input.email=data.email;
				//$scope.input.password=data.password;

				//$state.go('menu.home'); 
			}
			}).catch(function(response){
			//handle the error
			//data.error=true;
			console.log(response.data);
			console.log("Unexpected Error.");
		});*/

	}

	$scope.save=function(input)
	{
		console.log(input);
		var data = {
			
        	username: input.username,
        	password: input.password,
        	name : input.name,
        	phone : input.phone,
        	email : input.email
        };
        console.log(data);
		var req = 
		{
			method: 'POST',
			url: "http://localhost/sms/modules/customers/updatecustomer",
			data: data,
			
			headers: { "Content-Type": "application/json" } 
		}	
		ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data);
				if(!data.error)
				{
					console.log(data);
					var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: data.message
					});

					alertPopup.then(function(res) {
					// Custom functionality....
					});
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
				var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: "Invalid Input/Missing Fields"
					});
		});
	}



}])
   
.controller('editVendorCtrl', ['$scope', '$stateParams','$ionicLoading','$ionicPopup', 'ApiService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicLoading,$ionicPopup, ApiService) {

	$scope.vendors=[{}];
	$scope.input={};
	var req = 
	{
		method: 'GET',
		url: "http://localhost/sms/modules/vendors/all",
		dataType: 'json',
		headers: { "Content-Type": "application/json" } 
	}	
	ApiService.callApi(req).then(function(response){
	//do something with response
		var data = response.data;
		//console.log(data.error);
		if(!data.error)
		{
			//console.log(data);
			$scope.vendors=data.vendors;
			$scope.item=data.vendors[0];
			$scope.changedNameIdValue(data.vendors[0]);



			//$state.go('menu.home'); 
		}
		}).catch(function(response){
		//handle the error
		response.error=true;
		console.log("Unexpected Error.");
	});

	$scope.changedNameIdValue=function(vendor)
	{
		console.log(vendor);
		//$scope.input.username=vendor.username;
		$scope.input.name=vendor.name;
		$scope.input.tp=vendor.tp;
		$scope.input.balance=vendor.balance;
	}
	$scope.save=function(input)
	{
		console.log(input);
		var data = {
        	name : input.name,
        	tp : input.tp,
        	balance : input.balance
        };
        console.log(data);
		var req = 
		{
			method: 'POST',
			url: "http://localhost/sms/modules/vendors/updatevendor",
			data: data,
			
			headers: { "Content-Type": "application/json" } 
		}	
		ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data);
				if(!data.error)
				{
					console.log(data);
					var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: data.message
					});

					alertPopup.then(function(res) {
					// Custom functionality....
					});
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
				var alertPopup = $ionicPopup.alert({
						title: 'Message',
						template: "Invalid Input/Missing Fields"
					});
		});
	}


}])
   
.controller('editRoutingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editBillingCtrl', ['$scope', '$stateParams','ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams,ApiService) {

	$scope.nameid=[{}];
	$scope.input={};

	$scope.changedNameIdValue=function (item)
	{
		console.log(item);
		try
		{
			$scope.input.rate_chart=item.rate_chart;
			//id=naid.id;
			//$scope.input.balance=naid.balance;
			//$scope.currentBalance=naid.balance;
			//$scope.input.tp=naid.tp;

		}
		catch(err)
		{
			$scope.input.rate_chart="";
			//id=0;
			//$scope.balance=0;
			//$scope.input.balance=0;
			//$scope.input.tp="";

		}
	}

	$scope.changedTypeValue=function(type)
	{
		console.log(type);

		var data = {
        	type:type
        };
        if(type=="Customer")
        {
			var req = 
			{
				method: 'GET',
				url: "http://localhost/sms/modules/common/getbranchrateid/customer"
				
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data);
				if(!data.error)
				{
					$scope.nameid=data;
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
			});
        }
        else if(type=="Vendor")
        {
			var req = 
			{
				method: 'GET',
				url: "http://localhost/sms/modules/common/getbranchrateid/vendor"
				
			}	
			ApiService.callApi(req).then(function(response){
			//do something with response
				var data = response.data;
				console.log(data);
				if(!data.error)
				{
					$scope.nameid=data;
					//$state.go('menu.home'); 
				}
				}).catch(function(response){
				//handle the error
				data.error=true;
				console.log("Unexpected Error.");
			});
        }
        

	}

	// var data1 = {
 //        username: input.username,
 //        password: input.password
 //      };


	//  	var req = 
	// 	{
	// 	    method: 'POST',
	// 	    url: "http://localhost/sms/modules/customers/login",
	// 	    data: data1,
	// 	    dataType: 'json',
	// 	    headers: { "Content-Type": "application/json" }
		   
	// 	}	
		
 //       /*
 //       * Check if user exists or not
 //       *
 //       **/
 //        ApiService.callApi(req).then(function(response){
 //            //do something with response
 //            var data = response.data;
 //            console.log(data.error);
 //            if(!data.error)
	//         {
	//         	$state.go('menu.home'); 
	//         }
 //        }).catch(function(response){
 //        	//handle the error
 //        	data.error=true;
 //        	console.log("Unexpected Error.");
 //        });



	//$scope.naid={};
	$scope.fields = [{id: 'field1'}];

	$scope.addNewField=function()
	{
		var newItemNo = $scope.fields.length+1;
   		$scope.fields.push({'id':'field'+newItemNo});
	}

	$scope.removeField = function() {
    	var lastItem = $scope.fields.length-1;
    	$scope.fields.splice(lastItem);
  	};

  	


}])

.controller('viewCustomersCtrl', ['$scope', '$stateParams', 'ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ApiService) {


    //var ctrl = this;
    $scope.ctrl={};
    $scope.ctrl.add = add;

    var req = 
	{
		method: 'GET',
		url: "http://localhost/sms/modules/customers/all",
		data: '',
		dataType: 'json',
		headers: { "Content-Type": "application/json" } 
	}	
    ApiService.callApi(req).then(function(response){
	//do something with response
		var data = response.data;
		console.log(data);
		if(!data.error)
		{
			$scope.ctrl.data=data.customers;
			
			//$state.go('menu.home'); 
		}
		}).catch(function(response){
		//handle the error
		data.error=true;
		console.log("Unexpected Error.");
	});


    /*$scope.ctrl.data = [
        {
            name: "AiA",
            phone: "AI101",
            email: 25000,
            balance: 1900,
            tp: 1,
            routingid: 1
        },
        {
            name: "AiA",
            phone: "AI101",
            email: 25000,
            balance: 65645,
            tp: 1,
            routingid: 1
        }
    ]*/

    ////////
    function add(index) {
        window.alert("Added: " + index);
    }


}])

.controller('viewVendorsCtrl', ['$scope', '$stateParams', 'ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ApiService) {


    //var ctrl = this;
    $scope.ctrl={};
    $scope.ctrl.add = add;

    var req = 
	{
		method: 'GET',
		url: "http://localhost/sms/modules/vendors/all",
		data: '',
		dataType: 'json',
		headers: { "Content-Type": "application/json" } 
	}	
    ApiService.callApi(req).then(function(response){
	//do something with response
		var data = response.data;
		console.log(data);
		if(!data.error)
		{
			$scope.ctrl.data=data.vendors;
			
			//$state.go('menu.home'); 
		}
		}).catch(function(response){
		//handle the error
		data.error=true;
		console.log("Unexpected Error.");
	});

    ////////
    function add(index) {
        window.alert("Added: " + index);
    }


}])

.controller('viewRoutingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


    //var ctrl = this;
    $scope.ctrl={};
    $scope.ctrl.add = add;
    $scope.ctrl.data = [
        {
            name: "AiA",
            phone: "AI101",
            email: 25000,
            balance: 1900,
            tp: 1,
            routingid: 1
        },
        {
            name: "AiA",
            phone: "AI101",
            email: 25000,
            balance: 65645,
            tp: 1,
            routingid: 1
        }
    ]

    ////////
    function add(index) {
        window.alert("Added: " + index);
    }


}])

.controller('viewBillingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


    //var ctrl = this;
    $scope.ctrl={};
    $scope.ctrl.add = add;
    $scope.ctrl.data = [
        {
            name: "AiA",
            phone: "AI101",
            email: 25000,
            balance: 1900,
            tp: 1,
            routingid: 1
        },
        {
            name: "AiA",
            phone: "AI101",
            email: 25000,
            balance: 65645,
            tp: 1,
            routingid: 1
        }
    ]

    ////////
    function add(index) {
        window.alert("Added: " + index);
    }


}])