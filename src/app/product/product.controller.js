/**
 * @author joel
 * 13-12-15
 */

(function () {
    'use strict';

    /**
     * The product state main controller
     *
     * @constructor
     * @ngInject
     */
    var ProductController = function ($stateParams,productService) {
        // Store injected services
        this.productService = productService;

        // Grab the produce id from the state url param
        var productId = $stateParams.productId;
        // Bootstrap
        this.refreshProduct(productId);
    };

    /**
     * The index of the subscription which will be set by default
     * @type {number}
     */
    ProductController.prototype.DEFAULT_SUBSCRIPTION_INDEX = 0;

    /**
     * The index of the image which will be set as default
     * @type {number}
     */
    ProductController.prototype.DEFAULT_IMAGE_INDEX = 0;

    /**
     * Whether theres a product refresh in progress
     * @type {boolean}
     */
    ProductController.prototype.productRefreshInProgress = false;

    /**
     * The product selected subscription
     * @type {Object}
     */
    ProductController.prototype.selectedSubscription = null;

    /**
     * The product selected image
     * @type {null}
     */
    ProductController.prototype.selectedImage = null;

    /**
     * Refreshes the current product
     *
     * @param {number | string} productId - The id of the product to set
     */
    ProductController.prototype.refreshProduct = function (productId) {
        if(!this.productRefreshInProgress){
            // Toggle
            this.toggleProductRefreshInProgress();

            var that = this;
            return this.productService.get(productId).then(function (product) {
                that.product = product;
                that.setProductDefaults(product);
                // Toggle
                that.toggleProductRefreshInProgress();
            });
        }
    };

    /**
     * Sets the product defaults
     *
     * @param product
     */
    ProductController.prototype.setProductDefaults = function (product) {
        this.setProductDefaultImage(product);
        this.setProductDefaultSubscription(product);
    };

    /**
     * Sets the product default image
     * @param product
     */
    ProductController.prototype.setProductDefaultImage = function (product) {
        // Use the first image as default
        this.selectedImage = product.images[this.DEFAULT_IMAGE_INDEX];
    };

    /**
     * Sets the product default subscription
     * @param product
     */
    ProductController.prototype.setProductDefaultSubscription = function (product) {
        // Use the first subscription as default
        this.selectedSubscription = product.subscriptions[this.DEFAULT_SUBSCRIPTION_INDEX];
    };

    /**
     * Toggles the product refresh in progress flag
     */
    ProductController.prototype.toggleProductRefreshInProgress = function () {
        this.productRefreshInProgress = !this.productRefreshInProgress;
    };

    angular
        .module('kpnAssignment')
        .controller('kpnAssignment.productController', ProductController);

})();
