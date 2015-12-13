/**
 * @author joel
 * 11-12-15
 */

(function() {
    'use strict';


    describe('Technologies Service', function(){
        var technologiesService;
        var technologiesUrl;
        var $rootScope;
        var technologies = [];
        var technologiesPromise;

        // Load the module
        beforeEach(module('kpnAssignment'));

        beforeEach(inject(function(_$rootScope_,$q,_technologiesService_) {
            // Populate variables
            $rootScope = _$rootScope_;
            technologiesService = _technologiesService_;
            technologiesUrl = technologiesService.TECHNOLOGIES_URL;

            // Create the fake technologies promise
            var deferredTechnologies = $q.defer();
            // Store the promise
            technologiesPromise = deferredTechnologies.promise;
            // Resolve promise
            deferredTechnologies.resolve({data : technologies});
        }));

        describe('_fetch()', function () {

            it('should fetch the technologies', function (done) {
                spyOn(technologiesService.$http,'get').and.returnValue(technologiesPromise);
                technologiesService._fetch().then(function(response){
                    // Check that we're calling the right endpoint
                    expect(technologiesService.$http.get).toHaveBeenCalledWith(technologiesUrl);
                    // Check we're returning the $http get promise
                    expect(response.data).toEqual(technologies);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

        describe('get()', function () {
            it('should get the technologies', function (done) {
                spyOn(technologiesService, '_fetch').and.returnValue(technologiesPromise);
                technologiesService.get().then(function(retrievedTechnologies){
                    // Check that the we're returning the actual technologies and not the http response
                    expect(retrievedTechnologies).toEqual(technologies);
                    // Done !
                    done();
                });
                $rootScope.$digest();
            });
        });

    });
})();
