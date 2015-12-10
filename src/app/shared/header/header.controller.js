/**
 * @author joel
 * 10-12-15
 */

(function () {
    'use strict';

    /**
     * The Header Controller
     *
     * @ngInject
     */
    var HeaderController = function ($state) {
        // Store injected services
        this.$state = $state;

        // Bootstrap
        this.refreshStates();
    };

    /**
     * Refreshes the header states
     */
    HeaderController.prototype.refreshStates = function () {
        // Retrieve states
        var states = this.$state.get();
        // First item is the abstract state
        states.shift();
        // Store
        this.states = states;
    };

    angular.module('kpnAssignment').controller('kpnAssignment.headerController', HeaderController);

}());
