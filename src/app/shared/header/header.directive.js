/**
 * @author joel
 * 10-12-15
 */

(function() {
    'use strict';
    /**
     * The Header Directive
     *
     * @ngInject
     */
    var HeaderDirective = function(){

        return {
            replace : true,
            restrict : 'E',
            templateUrl : 'app/shared/header/header.html',
            controller : 'kpnAssignment.headerController',
            controllerAs : 'header'
        };
    };

    // Directive declaration
    angular.module('kpnAssignment')
        .directive('kaHeader',HeaderDirective);
}());
