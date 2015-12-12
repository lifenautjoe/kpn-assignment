/**
 * @author joel
 * 12-12-15
 */


(function() {
    'use strict';
    describe('Header', function() {
        var el;
        var vm;

        beforeEach(module('kpnAssignment'));
        beforeEach(inject(function($compile, $rootScope) {
            el = angular.element('<ka-header></ka-header>');
            $compile(el)($rootScope.$new());
            $rootScope.$digest();
            vm = el.controller('kaHeader');
        }));

        it('should be compiled', function() {
            expect(el.html()).not.toEqual(null);
        });

        describe('states attribute', function () {
            it('should be defined', function () {
                expect(vm.states).toBeDefined();
            });

            it('should be an array', function () {
                expect(vm.states.constructor === Array).toBe(true);
            });
        });
    });
}());
