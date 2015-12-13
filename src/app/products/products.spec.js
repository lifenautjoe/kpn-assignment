/**
 * @author joel
 * 13-12-15
 */

(function () {
    'use strict';

    describe('Products Controller', function () {
        var vm;
        var $rootScope;
        var $q;
        var products = [];
        var productsPromise;

        beforeEach(module('kpnAssignment'));
        beforeEach(inject(function (_$rootScope_, $controller, _$q_, productsService) {

            // Populate dependencies
            $rootScope = _$rootScope_;
            $q = _$q_;

            // Stub the products service
            var deferredProducts = $q.defer();
            productsPromise = deferredProducts.promise;
            deferredProducts.resolve(products);
            spyOn(productsService, 'get').and.returnValue(productsPromise);

            // Initiliaze the controller with the spied services
            vm = $controller('kpnAssignment.productsController', {
                productsService: productsService
            });

            // Resolve the promises from the constructor
            $rootScope.$digest();
        }));

        describe('()', function () {
            it('should refresh products', function () {
                expect(vm.products).toEqual(products);
            });
        });

        describe('refreshProducts()', function () {
            var refreshedProducts = [];
            var refreshedProductsPromise;

            beforeEach(function () {
                // Stub the products service
                var deferredRefreshedProducts = $q.defer();
                refreshedProductsPromise = deferredRefreshedProducts.promise;
                deferredRefreshedProducts.resolve(refreshedProducts);
                vm.productsService.get.and.returnValue(refreshedProductsPromise);
            });

            it('should refresh the products', function (done) {
                vm.refreshProducts().then(function () {
                    expect(vm.products).toEqual(refreshedProducts);
                    done();
                });
                $rootScope.$digest();
            });
        });

    });
})();
