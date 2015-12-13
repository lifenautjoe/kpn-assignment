/**
 * @author joel
 * 12-12-15
 */
'use strict';

(function() {
    'use strict';

    /**
     * The Capabilities Service
     * @ngInject
     */
    var CapabilitiesService = function($http){
        this.$http = $http;
    };

    /**
     * The url where the capabilities are retrieved from
     * @type {string}
     */
    CapabilitiesService.prototype.CAPABILITIES_URL = 'assets/data/capabilities.json';

    /**
     * Fetches the capabilities
     * @returns {Promise}
     * @private
     */
    CapabilitiesService.prototype._fetch = function () {
        return this.$http.get(this.CAPABILITIES_URL);
    };

    /**
     * Gets the capabilities
     * @returns {Promise}
     */
    CapabilitiesService.prototype.get = function () {
        return this._fetch().then(function(response){
            return response.data;
        });
    };

    // Service declaration
    angular.module('kpnAssignment')
        .service('capabilitiesService',CapabilitiesService);
}());
