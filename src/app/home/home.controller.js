(function () {
    'use strict';

    /**
     * The home state main controller
     *
     * @constructor
     * @ngInject
     */
    var HomeController = function ($http) {
        // Store injected services
        this.$http = $http;

        // Bootstrap
        this.refreshCapabilities();
        this.refreshTechnologies();
    };

    /**
     * Fetches the application used technologies
     * @private
     */
    HomeController.prototype._fetchTechnologies = function () {
        return this.$http.get('assets/data/technologies.json').then(function(response){
            return response.data;
        });
    };

    /**
     * Refreshes the application used technologies
     */
    HomeController.prototype.refreshTechnologies = function () {
        var that = this;

        return this._fetchTechnologies().then(function (technologies) {
            that.technologies = technologies;
        });
    };

    /**
     * Fetches the application capabilities
     * @private
     */
    HomeController.prototype._fetchCapabilities = function () {
        return this.$http.get('assets/data/capabilities.json').then(function(response){
            return response.data;
        });
    };

    /**
     * Refreshes the application capabilities
     */
    HomeController.prototype.refreshCapabilities = function () {
        var that = this;

        return this._fetchCapabilities().then(function (capabilities) {
            that.capabilities = capabilities;
        });
    };

    angular
        .module('kpnAssignment')
        .controller('kpnAssignment.homeController', HomeController);

})();
