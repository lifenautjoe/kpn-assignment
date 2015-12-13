/**
 * @author joel
 * 13-12-15
 */


(function () {
    'use strict';

    describe('Product Controller', function () {
        var vm;
        var $rootScope;
        var $q;
        var productId = 1;
        var product = {
            images: [
                {}
            ],
            subscriptions: [
                {}
            ]
        };

        var productPromise;

        beforeEach(module('kpnAssignment'));
        beforeEach(inject(function (_$rootScope_, $controller, _$q_, productService) {

            // Populate dependencies
            $rootScope = _$rootScope_;
            $q = _$q_;

            // Stub the product service
            var deferredProduct = $q.defer();
            productPromise = deferredProduct.promise;
            deferredProduct.resolve(product);
            spyOn(productService, 'get').and.returnValue(productPromise);

            // Initiliaze the controller with the spied services
            vm = $controller('kpnAssignment.productController', {
                productService: productService
            });

            // Resolve the promises from the constructor
            $rootScope.$digest();
        }));

        describe('()', function () {
            it('should refresh product', function () {
                expect(vm.product).toEqual(product);
            });

            it('should have productRefreshInProgress attribute set to false', function () {
                expect(vm.productRefreshInProgress).toBe(false);
            });
        });

        describe('setProductDefaults(product)', function () {

            beforeEach(function () {
                spyOn(vm, 'setProductDefaultImage').and.callThrough();
                spyOn(vm, 'setProductDefaultSubscription').and.callThrough();
            });

            it('should call setProductDefaultImage', function () {
                vm.setProductDefaults(product);
                expect(vm.setProductDefaultImage.calls.count()).toEqual(1);
            });

            it('should call setProductDefaultSubscription', function () {
                vm.setProductDefaults(product);
                expect(vm.setProductDefaultSubscription.calls.count()).toEqual(1);
            });
        });

        describe('setProductDefaultImage()', function () {

            var newProduct;

            beforeEach(function () {
                newProduct = {
                    images : []
                };

                for (var i = 0;i<=vm.DEFAULT_IMAGE_INDEX;i++) {
                    newProduct.images.push({});
                }
            });

            it('should set the default image with the DEFAULT_IMAGE_INDEX attribute', function () {
                vm.setProductDefaultImage(newProduct);
                expect(vm.selectedImage).toBe(newProduct.images[vm.DEFAULT_IMAGE_INDEX]);
            });
        });

        describe('setProductDefaultSubscription()', function () {

            var newProduct;

            beforeEach(function () {
                newProduct = {
                    subscriptions : []
                };

                for (var i = 0;i<=vm.DEFAULT_SUBSCRIPTION_INDEX;i++) {
                    newProduct.subscriptions.push({});
                }
            });

            it('should set the default subscription with the DEFAULT_SUBSCRIPTION_INDEX attribute', function () {
                vm.setProductDefaultSubscription(newProduct);
                expect(vm.selectedSubscription).toBe(newProduct.subscriptions[vm.DEFAULT_SUBSCRIPTION_INDEX]);
            });
        });

        describe('refreshProduct(productId)', function () {
            var refreshedProduct = [];
            var refreshedProductPromise;

            beforeEach(function () {
                // Stub the product service
                var deferredRefreshedProduct = $q.defer();
                refreshedProductPromise = deferredRefreshedProduct.promise;
                deferredRefreshedProduct.resolve(refreshedProduct);
                vm.productService.get.and.returnValue(refreshedProductPromise);

                // Spy on the toggler
                spyOn(vm, 'toggleProductRefreshInProgress').and.callThrough();

                // Spy on setProductDefaults
                spyOn(vm, 'setProductDefaults').and.returnValue();
            });

            it('should refresh the product', function (done) {
                vm.refreshProduct(productId).then(function () {
                    expect(vm.product).toEqual(refreshedProduct);
                    done();
                });
                $rootScope.$digest();
            });

            it('should track refresh in progress', function (done) {
                vm.refreshProduct(productId).then(function () {
                    expect(vm.toggleProductRefreshInProgress.calls.count()).toEqual(2);
                    done();
                });
                $rootScope.$digest();
            });

            it('should call set products defaults', function (done) {
                vm.refreshProduct(productId).then(function () {
                    expect(vm.setProductDefaults.calls.count()).toEqual(1);
                    done();
                });
                $rootScope.$digest();
            });

        });


    });
})();

