/**
 * @author joel
 * 11-12-15
 */

(function() {
    'use strict';


    describe('Capabilities Service', function(){
        var capabilitiesService;
        var capabilitiesUrl;
        var $rootScope;
        var capabilities = [];
        var capabilitiesPromise;

        // Load the module
        beforeEach(module('kpnAssignment'));

        beforeEach(inject(function(_$rootScope_,$q,_capabilitiesService_) {
            // Populate variables
            $rootScope = _$rootScope_;
            capabilitiesService = _capabilitiesService_;
            capabilitiesUrl = capabilitiesService.CAPABILITIES_URL;

            // Create the fake capabilities promise
            var deferredCapabilities = $q.defer();
            // Store the promise
            capabilitiesPromise = deferredCapabilities.promise;
            // Resolve promise
            deferredCapabilities.resolve({data : capabilities});
        }));

        describe('_fetch()', function () {

            it('should fetch the capabilities', function (done) {
                spyOn(capabilitiesService.$http,'get').and.returnValue(capabilitiesPromise);
                capabilitiesService._fetch().then(function(response){
                    // Check that we're calling the right endpoint
                    expect(capabilitiesService.$http.get).toHaveBeenCalledWith(capabilitiesUrl);
                    // Check we're returning the $http get promise
                    expect(response.data).toEqual(capabilities);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

        describe('get()', function () {
            it('should get the capabilities', function (done) {
                spyOn(capabilitiesService, '_fetch').and.returnValue(capabilitiesPromise);
                capabilitiesService.get().then(function(retrievedCapabilities){
                    // Check that the we're returning the actual capabilities and not the http response
                    expect(retrievedCapabilities).toEqual(capabilities);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

    });
})();
