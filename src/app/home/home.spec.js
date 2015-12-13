/**
 * @author joel
 * 11-12-15
 */

(function () {
    'use strict';

    describe('Home Controller', function () {
        var vm;
        var $rootScope;
        var $q;
        var capabilities = [];
        var capabilitiesPromise;
        var technologies = [];
        var technologiesPromise;

        beforeEach(module('kpnAssignment'));
        beforeEach(inject(function (_$rootScope_, $controller, _$q_, technologiesService, capabilitiesService) {

            // Populate dependencies
            $rootScope = _$rootScope_;
            $q = _$q_;

            // Stub the capabilities service
            var deferredCapabilities = $q.defer();
            capabilitiesPromise = deferredCapabilities.promise;
            deferredCapabilities.resolve(capabilities);
            spyOn(capabilitiesService, 'get').and.returnValue(capabilitiesPromise);

            // Stub the technologies service
            var deferredTechnologies = $q.defer();
            technologiesPromise = deferredTechnologies.promise;
            deferredTechnologies.resolve(technologies);
            spyOn(technologiesService, 'get').and.returnValue(technologiesPromise);

            // Initiliaze the controller with the spied services
            vm = $controller('kpnAssignment.homeController', {
                capabilitiesService: capabilitiesService,
                technologiesService: technologiesService
            });

            // Resolve the promises from the constructor
            $rootScope.$digest();
        }));

        describe('()', function () {
            it('should refresh capabilities', function () {
                expect(vm.capabilities).toEqual(capabilities);
            });

            it('should refresh technologies', function () {
                expect(vm.technologies).toEqual(technologies);
            });
        });

        describe('refreshCapabilities()', function () {
            var refreshedCapabilities = [];
            var refreshedCapabilitiesPromise;

            beforeEach(function () {
                // Stub the capabilities service
                var deferredRefreshedCapabilities = $q.defer();
                refreshedCapabilitiesPromise = deferredRefreshedCapabilities.promise;
                deferredRefreshedCapabilities.resolve(refreshedCapabilities);
                vm.capabilitiesService.get.and.returnValue(refreshedCapabilitiesPromise);
            });

            it('should refresh the capabilities', function (done) {
                vm.refreshCapabilities().then(function () {
                    expect(vm.capabilities).toEqual(refreshedCapabilities);
                    done();
                });
                $rootScope.$digest();
            });
        });

        describe('refreshTechnologies()', function () {
            var refreshedTechnologies = [];
            var refreshedTechnologiesPromise;

            beforeEach(function () {
                // Stub the technologies service
                var deferredRefreshedTechnologies = $q.defer();
                refreshedTechnologiesPromise = deferredRefreshedTechnologies.promise;
                deferredRefreshedTechnologies.resolve(refreshedTechnologies);
                vm.technologiesService.get.and.returnValue(refreshedTechnologiesPromise);
            });

            it('should refresh the technologies', function (done) {
                vm.refreshTechnologies().then(function () {
                    expect(vm.technologies).toEqual(refreshedTechnologies);
                    done();
                });
                $rootScope.$digest();
            });
        });

    });
})();
