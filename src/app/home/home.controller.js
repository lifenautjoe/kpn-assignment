/**
 * @author joel
 * 11-12-15
 */

(function () {
    'use strict';

    /**
     * The home state main controller
     *
     * @constructor
     * @ngInject
     */
    var HomeController = function (capabilitiesService,technologiesService) {
        // Store injected services
        this.capabilitiesService = capabilitiesService;
        this.technologiesService = technologiesService;

        // Bootstrap
        this.refreshCapabilities();
        this.refreshTechnologies();
    };

    /**
     * Refreshes the application used technologies
     */
    HomeController.prototype.refreshTechnologies = function () {
        var that = this;

        return this.technologiesService.get().then(function (technologies) {
            that.technologies = technologies;
        });
    };

    /**
     * Refreshes the application capabilities
     */
    HomeController.prototype.refreshCapabilities = function () {
        var that = this;

        return this.capabilitiesService.get().then(function (capabilities) {
            that.capabilities = capabilities;
        });
    };

    angular
        .module('kpnAssignment')
        .controller('kpnAssignment.homeController', HomeController);

})();
