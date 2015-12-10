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
        $urlRouterProvider.otherwise('/product.html');

        // Define the states/routes
        $stateProvider
            .state('product', {
                url: '/product.html',
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
