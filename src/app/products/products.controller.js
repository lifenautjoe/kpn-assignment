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
     * Refreshes the application used products
     */
    ProductsController.prototype.refreshProducts = function () {
        var that = this;

        return this.productsService.get().then(function (products) {
            that.products = products;
        });
    };

    angular
        .module('kpnAssignment')
        .controller('kpnAssignment.productsController', ProductsController);

})();
