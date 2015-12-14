/**
 * @author joel
 * 12-12-15
 */


(function () {
    'use strict';

    describe('Header', function () {
        beforeEach(module('kpnAssignment'));


        /*        describe('Directive', function () {
         var el;

         beforeEach(inject(function($compile, $rootScope) {
         el = angular.element('<ka-header></ka-header>');
         $compile(el)($rootScope.$new());
         $rootScope.$digest();
         }));

         it('should be compiled', function() {
         expect(el.html()).not.toEqual(null);
         });

         });*/

        describe('Controller', function () {
            var vm;
            var states = [
                {name: 'One'}, {name: 'Two'}, {name: 'Three'}
            ];

            beforeEach(inject(function ($controller, $state, lodash) {

                // Stub the $state service
                spyOn($state, 'get').and.callFake(function () {
                    return lodash.clone(states);
                });

                // Initiliaze the controller with the spied services
                vm = $controller('kpnAssignment.headerController', {
                    $state: $state,
                    lodash: lodash
                });
            }));

            describe('()', function () {
                it('should refresh states', function () {
                    expect(vm.states).toBeDefined();
                    expect(vm.states.constructor === Array).toBe(true);
                });
            });

            describe('getStates()', function () {

                it('should get the $state states without the first result', function () {
                    var retrievedStates = vm.getStates();
                    // Only one item
                    expect(retrievedStates.length == states.length - 1).toBe(true);
                    expect(states).toEqual(jasmine.arrayContaining(retrievedStates));
                });

            });

            describe('refreshStates()', function () {

                describe('when no state is hidden', function () {

                    var retrievedStates = [
                        {
                            name : 'Some'
                        },
                        {
                            name : 'State'
                        }
                    ];

                    beforeEach(function () {
                        spyOn(vm, 'getStates').and.returnValue(retrievedStates);
                    });

                    it('should set all the states', function () {
                        vm.refreshStates();
                        expect(vm.states.length == retrievedStates.length);
                        expect(vm.states).toEqual(jasmine.arrayContaining(retrievedStates));
                    });
                });

                describe('when states are hidden', function () {

                    var shownStates = [
                        {
                            name : 'Something'
                        },
                        {
                            name : 'Test'
                        }
                    ];

                    var hiddenStates = [
                        {
                            name : 'Else',
                            data : {
                                hidden : true
                            }
                        }
                    ];

                    var retrievedStates = shownStates.concat(hiddenStates);

                    beforeEach(function () {
                        spyOn(vm, 'getStates').and.returnValue(retrievedStates);
                    });

                    it('should set only the non hidden states', function () {
                        vm.refreshStates();
                        expect(vm.states).not.toEqual(jasmine.arrayContaining(hiddenStates));
                        expect(vm.states).toEqual(jasmine.arrayContaining(shownStates));
                    });
                });

            });

        });
    });
    /*
     describe('Header', function() {
     var el;
     var vm;


     beforeEach(module('kpnAssignment'));
     beforeEach(inject(function($compile, $rootScope,$state) {
     el = angular.element('<ka-header></ka-header>');
     $compile(el)($rootScope.$new());
     $rootScope.$digest();
     vm = el.controller('kaHeader');
     }));

     it('should be compiled', function() {
     expect(el.html()).not.toEqual(null);
     });

     describe('()', function () {
     it('should refresh states', function () {
     expect(vm.states).toEqual(products);
     });
     });

     describe('getStates()', function () {

     });

     describe('refreshStates()', function () {

     });

     describe('states attribute', function () {
     it('should be defined', function () {
     expect(vm.states).toBeDefined();
     });

     it('should be an array', function () {
     expect(vm.states.constructor === Array).toBe(true);
     });
     });
     });*/
}());
