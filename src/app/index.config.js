(function () {
    'use strict';

    /**
     * The application configuration
     *
     * @param $logProvider - Angular $logProvider
     * @param $urlRouterProvider - Angular $urlRouterProvider
     * @param $stateProvider - ui.router $stateProvider
     * @constructor
     * @ngInject
     */
    var Config = function ($logProvider, $urlRouterProvider, $stateProvider) {

        /* Log Provider */

        // Enable debug
        $logProvider.debugEnabled(true);

        /* Routing */

        // Set the product page as the default page
        $urlRouterProvider.otherwise('/home');

        // Define the states/routes
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                controller: 'kpnAssignment.homeController',
                controllerAs: 'vm',
                data : {
                    prettyName : 'Home'
                }
            })
            .state('products', {
                url: '/products',
                templateUrl: 'app/products/products.html',
                controller: 'kpnAssignment.productsController',
                controllerAs: 'vm',
                data : {
                    prettyName : 'Products'
                }
            })
            .state('product', {
                url: '/products/{productId}',
                templateUrl: 'app/product/product.html',
                controller: 'kpnAssignment.productController',
                controllerAs: 'product',
                data : {
                    prettyName : 'Product'
                }
            });
    };

    angular
        .module('kpnAssignment')
        .config(Config);

})();
