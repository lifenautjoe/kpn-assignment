/**
 * @author joel
 * 11-12-15
 */

(function() {
    'use strict';

    var TECHNOLOGIES_URL = 'assets/data/technologies.json';
    var CAPABILITIES_URL = 'assets/data/capabilities.json';

    describe('Home Controller', function(){
        var home;
        var $httpBackend;
        var technologies = [];
        var capabilities = [];

        beforeEach(module('kpnAssignment'));
        beforeEach(inject(function($controller,_$httpBackend_) {
            $httpBackend = _$httpBackend_;

            $httpBackend.when('GET', TECHNOLOGIES_URL)
                .respond(technologies);

            $httpBackend.when('GET', CAPABILITIES_URL)
                .respond(capabilities);

            home = $controller('kpnAssignment.homeController');
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should have capabilities', function () {
            $httpBackend.expectGET(CAPABILITIES_URL);
            $httpBackend.flush();
            expect(home.capabilities).toEqual(capabilities);
        });

        it('should have technologies', function () {
            $httpBackend.expectGET(TECHNOLOGIES_URL);
            $httpBackend.flush();
            expect(home.capabilities).toEqual(capabilities);
        });
    });
})();
