/**
 * @author joel
 * 12-12-15
 */
'use strict';

(function() {
    'use strict';

    /**
     * The Products Service
     * @ngInject
     */
    var ProductsService = function($http){
        this.$http = $http;
    };

    /**
     * The url where the products are retrieved from
     * @type {string}
     */
    ProductsService.prototype.PRODUCTS_URL = 'assets/data/products.json';

    /**
     * Fetches the products
     * @returns {Promise}
     * @private
     */
    ProductsService.prototype._fetch = function () {
        return this.$http.get(this.PRODUCTS_URL);
    };

    /**
     * Gets the products
     * @returns {Promise}
     */
    ProductsService.prototype.get = function () {
        return this._fetch().then(function(response){
            return response.data;
        });
    };

    // Service declaration
    angular.module('kpnAssignment')
        .service('productsService',ProductsService);
}());
