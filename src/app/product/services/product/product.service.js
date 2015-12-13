/**
 * @author joel
 * 12-12-15
 */
'use strict';

(function() {
    'use strict';

    /**
     * The Product Service
     * @ngInject
     */
    var ProductService = function($http){
        this.$http = $http;
    };

    /**
     * The url where the product are retrieved from
     * @type {string}
     */
    ProductService.prototype.PRODUCTS_URL = 'assets/data/products';

    /**
     * Fetches the product
     *
     * @param {number} id - The id of the product to fetch
     * @returns {Promise}
     * @private
     */
    ProductService.prototype._fetch = function (id) {
        // TODO : The .json is just for api faking temporal purposes
        return this.$http.get(this.PRODUCTS_URL + '/' + id +'.json');
    };

    /**
     * Gets the product
     *
     * @param {number} id - The id of the product to fetch
     * @returns {Promise}
     */
    ProductService.prototype.get = function (id) {
        return this._fetch(id).then(function(response){
            return response.data;
        });
    };

    // Service declaration
    angular.module('kpnAssignment')
        .service('productService',ProductService);
}());
