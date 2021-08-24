window.OPENSHIFT_CONSTANTS.DISABLE_COPY_LOGIN_COMMAND = true;
window.OPENSHIFT_CONSTANTS.GUIDED_TOURS.landing_page_tour.auto_launch = false;
window.OPENSHIFT_CONSTANTS.HELP['get_started_cli']      = "https://www.vodafone.de/";
window.OPENSHIFT_CONSTANTS.HELP['basic_cli_operations'] = "https://www.vodafone.de/";
window.OPENSHIFT_CONSTANTS.HELP_BASE_URL = "https://www.vodafone.de/"; 
window.OPENSHIFT_CONSTANTS.CATALOG_HELP_RESOURCES.links.push({
  title: 'Blog',
  href: 'https://www.vodafone.de/'
});


window.OPENSHIFT_CONSTANTS.CLI = {
  "Latest Release": "https://www.vodafone.de/"
};

angular
  .module('aboutPageExtension', ['openshiftConsole'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'https://example.com/extensions/about/about.html',
        controller: 'AboutController'
      });
    }
  );

hawtioPluginLoader.addModule('aboutPageExtension');

