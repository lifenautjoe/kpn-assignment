/**
 * @author joel
 * 12-12-15
 */
'use strict';

(function() {
    'use strict';

    /**
     * The Technologies Service
     * @ngInject
     */
    var TechnologiesService = function($http){
        this.$http = $http;
    };

    /**
     * The url where the technologies are retrieved from
     * @type {string}
     */
    TechnologiesService.prototype.TECHNOLOGIES_URL = 'assets/data/technologies.json';

    /**
     * Fetches the technologies
     * @returns {Promise}
     * @private
     */
    TechnologiesService.prototype._fetch = function () {
        return this.$http.get(this.TECHNOLOGIES_URL);
    };

    /**
     * Gets the technologies
     * @returns {Promise}
     */
    TechnologiesService.prototype.get = function () {
        return this._fetch().then(function(response){
            return response.data;
        });
    };

    // Service declaration
    angular.module('kpnAssignment')
        .service('technologiesService',TechnologiesService);
}());
