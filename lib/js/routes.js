var x = angular.module( 'mdyusuf', [ 'ui.router','ngSanitize'] )


// x.config(['$httpProvider', function($httpProvider) {
// 	$httpProvider.defaults.withCredentials = true;
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//     }
// ])

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

		.state('skills', {
			url: '/skills',
			templateUrl: '/lib/views/skills.html',
			controller: 'skillsCtrl'
		})

		.state('archives', {
			url: '/archives',
			templateUrl: '/lib/views/archives.html',
			controller: 'archivesCtrl'
		})

		.state('interests', {
			url: '/interests',
			templateUrl: '/lib/views/interests.html',
			controller: 'interestsCtrl'
		})

	})
