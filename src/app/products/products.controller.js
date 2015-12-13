/**
 * @author joel
 * 13-12-15
 */

(function () {
    'use strict';

    /**
     * The products state main controller
     *
     * @constructor
     * @ngInject
     */
    var ProductsController = function (productsService) {
        // Store injected services
        this.productsService = productsService;

        // Bootstrap
        this.refreshProducts();
    };

    /**
     * Whether theres a product refresh in progress
     * @type {boolean}
     */
    ProductsController.prototype.productsRefreshInProgress = false;

    /**
     * Refreshes the application used products
     */
    ProductsController.prototype.refreshProducts = function () {
        if(!this.productsRefreshInProgress){
            // Toggle
            this.toggleProductsRefreshInProgress();

            var that = this;
            return this.productsService.get().then(function (products) {
                that.products = products;
                // Toggle
                that.toggleProductsRefreshInProgress();
            });
        }
    };

    /**
     * Toggles the products refresh in progress flag
     */
    ProductsController.prototype.toggleProductsRefreshInProgress = function () {
        this.productsRefreshInProgress = !this.productsRefreshInProgress;
    };

    angular
        .module('kpnAssignment')
        .controller('kpnAssignment.productsController', ProductsController);

})();
