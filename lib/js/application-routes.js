var x = angular.module( 'mdyusuf', [ 'ui.router'] )


x.config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.withCredentials = true;
}])

	x.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider

		.state('welcome', {
			url: '/',
			templateUrl: '/lib/views/welcome.html'
		})

		.state('workExperience', {
			url: '/work-experience',
			templateUrl: '/lib/views/work-experience.html',
			controller: 'workExperienceCtrl'
		})

		.state('openSourceProject', {
			url: '/open-source-project',
			templateUrl: '/lib/views/open-source-project.html',
			controller: 'openSourceProjectCtrl'
		})

		.state('education', {
			url: '/education',
			templateUrl: '/lib/views/education.html',
			controller: 'educationCtrl'
		})

		.state('archives', {
			url: '/archives',
			templateUrl: '/lib/views/archives.html',
			controller: 'achievementsCtrl'
		})

		.state('interests', {
			url: '/interests',
			templateUrl: '/lib/views/interests.html',
			controller: 'interestsCtrl'
		})

	})
