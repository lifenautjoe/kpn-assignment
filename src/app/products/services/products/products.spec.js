/**
 * @author joel
 * 11-12-15
 */

(function() {
    'use strict';


    describe('Products Service', function(){
        var productsService;
        var productsUrl;
        var $rootScope;
        var products = [];
        var productsPromise;

        // Load the module
        beforeEach(module('kpnAssignment'));

        beforeEach(inject(function(_$rootScope_,$q,_productsService_) {
            // Populate variables
            $rootScope = _$rootScope_;
            productsService = _productsService_;
            productsUrl = productsService.PRODUCTS_URL;

            // Create the fake products promise
            var deferredProducts = $q.defer();
            // Store the promise
            productsPromise = deferredProducts.promise;
            // Resolve promise
            deferredProducts.resolve({data : products});
        }));

        describe('_fetch()', function () {

            it('should fetch the products', function (done) {
                spyOn(productsService.$http,'get').and.returnValue(productsPromise);
                productsService._fetch().then(function(response){
                    // Check that we're calling the right endpoint
                    expect(productsService.$http.get).toHaveBeenCalledWith(productsUrl);
                    // Check we're returning the $http get promise
                    expect(response.data).toEqual(products);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

        describe('get()', function () {
            it('should get the products', function (done) {
                spyOn(productsService, '_fetch').and.returnValue(productsPromise);
                productsService.get().then(function(retrievedProducts){
                    // Check that the we're returning the actual products and not the http response
                    expect(retrievedProducts).toEqual(products);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

    });
})();
