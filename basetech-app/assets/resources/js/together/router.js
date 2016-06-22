/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "/view/dashboard/dashboard.html",
            data: { pageTitle: 'dashboard' }
        })
        .state('teams', {
            url: "/teams",
            templateUrl: "/view/team/teams.html",
            data: { pageTitle: '团队' }
        })
}
angular
    .module('together')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });