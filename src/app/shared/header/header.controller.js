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
    var HeaderController = function ($state,lodash) {
        // Store injected services
        this.$state = $state;
        this.lodash = lodash;

        // Bootstrap
        this.refreshStates();
    };

    /**
     * Gets the application states
     * @returns {*}
     */
    HeaderController.prototype.getStates = function () {
        var states = this.$state.get();
        // First item is the abstract state
        states.shift();

        return states;
    };

    /**
     * Refreshes the header states
     */
    HeaderController.prototype.refreshStates = function () {
        // Retrieve states
        var states = this.getStates();

        // Store the non hidden states
        this.states = this.lodash.filter(states, function (state) {
            return !state.data || !state.data.hidden;
        });
    };

    angular.module('kpnAssignment').controller('kpnAssignment.headerController', HeaderController);

}());
