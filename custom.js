
window.OPENSHIFT_CONSTANTS.GUIDED_TOURS.landing_page_tour.auto_launch = false;
window.OPENSHIFT_CONSTANTS.HELP['get_started_cli']      = "https://www.vodafone.de/";
window.OPENSHIFT_CONSTANTS.HELP['basic_cli_operations'] = "https://www.vodafone.de/";
window.OPENSHIFT_CONSTANTS.HELP_BASE_URL = "https://www.vodafone.de/"; 
window.OPENSHIFT_CONSTANTS.CATALOG_HELP_RESOURCES.links.push({
  title: 'Blog',
  href: 'https://blog.openshift.com'
});


var applicationsMenu = _.find(window.OPENSHIFT_CONSTANTS.PROJECT_NAVIGATION, { label: 'Applications' });
applicationsMenu.secondaryNavSections.push({ // Add a new secondary nav section to the Applications menu
  label: 'Testing'
});
