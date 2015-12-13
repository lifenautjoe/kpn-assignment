/**
 * @author joel
 * 11-12-15
 */

(function() {
    'use strict';


    describe('Product Service', function(){

        var productService;
        var productId = 1;
        var productUrl;
        var $rootScope;
        var product = {};
        var productPromise;

        // Load the module
        beforeEach(module('kpnAssignment'));

        beforeEach(inject(function(_$rootScope_,$q,_productService_) {
            // Populate variables
            $rootScope = _$rootScope_;
            productService = _productService_;
            // TODO : The .json is just for api faking temporal purposes
            productUrl = productService.PRODUCTS_URL + '/' + productId + '.json';

            // Create the fake product promise
            var deferredProduct = $q.defer();
            // Store the promise
            productPromise = deferredProduct.promise;
            // Resolve promise
            deferredProduct.resolve({data : product});
        }));

        describe('_fetch(id)', function () {

            it('should fetch the product', function (done) {
                spyOn(productService.$http,'get').and.returnValue(productPromise);
                productService._fetch(productId).then(function(response){
                    // Check that we're calling the right endpoint
                    expect(productService.$http.get).toHaveBeenCalledWith(productUrl);
                    // Check we're returning the $http get promise
                    expect(response.data).toEqual(product);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

        describe('get(id)', function () {
            it('should get the product', function (done) {
                spyOn(productService, '_fetch').and.returnValue(productPromise);
                productService.get(productId).then(function(retrievedProduct){
                    // Check that the we're returning the actual product and not the http response
                    expect(retrievedProduct).toEqual(product);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

    });
})();
