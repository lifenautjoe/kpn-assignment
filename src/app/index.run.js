(function () {
    'use strict';

    /**
     * The application run method
     *
     * @constructor
     * @ngInject
     */
    var Run = function ($log) {
        $log.debug('Running application');
    };

    angular
        .module('kpnAssignment')
        .run(Run);

})();
