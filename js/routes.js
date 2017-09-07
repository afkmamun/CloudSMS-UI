angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.customers', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/customers.html',
        controller: 'customersCtrl'
      }
    }
  })

  .state('menu.vendors', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vendors.html',
        controller: 'vendorsCtrl'
      }
    }
  })

  .state('menu.routing', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/routing.html',
        controller: 'routingCtrl'
      }
    }
  })

  .state('menu.billing', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/billing.html',
        controller: 'billingCtrl'
      }
    }
  })

  .state('menu.filters', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filters.html',
        controller: 'filtersCtrl'
      }
    }
  })

  .state('menu.balance', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/balance.html',
        controller: 'balanceCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.addCustomer', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addCustomer.html',
        controller: 'addCustomerCtrl'
      }
    }
  })

  .state('menu.addVendor', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addVendor.html',
        controller: 'addVendorCtrl'
      }
    }
  })

  .state('menu.addRouting', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addRouting.html',
        controller: 'addRoutingCtrl'
      }
    }
  })

  .state('menu.addBilling', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addBilling.html',
        controller: 'addBillingCtrl'
      }
    }
  })

  .state('menu.editCustomer', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editCustomer.html',
        controller: 'editCustomerCtrl'
      }
    }
  })

  .state('menu.editVendor', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editVendor.html',
        controller: 'editVendorCtrl'
      }
    }
  })

  .state('menu.editRouting', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editRouting.html',
        controller: 'editRoutingCtrl'
      }
    }
  })

  .state('menu.editBilling', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editBilling.html',
        controller: 'editBillingCtrl'
      }
    }
  })

  .state('menu.viewCustomers', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewCustomers.html',
        controller: 'viewCustomersCtrl'
      }
    }
  })

  .state('menu.viewVendors', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewVendors.html',
        controller: 'viewVendorsCtrl'
      }
    }
  })

  .state('menu.viewRoutings', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewRoutings.html',
        controller: 'viewRoutingsCtrl'
      }
    }
  })

  .state('menu.viewBillings', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewBillings.html',
        controller: 'viewBillingsCtrl'
      }
    }
  })

   .state('menu.AddPrefixRouting', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/routingPrefix.html',
        controller: 'routingPrefixCtrl'
      }
    },
    params: { prefix: undefined }
 })




$urlRouterProvider.otherwise('/page7')


});