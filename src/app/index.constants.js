/* global malarkey:false, moment:false */
(function () {
    'use strict';

    // The application constants
    // Note : The global variables are defined as constants to facilitate unit testing
    angular
        .module('kpnAssignment')
        .constant('malarkey', malarkey)
        .constant('moment', moment);

})();
