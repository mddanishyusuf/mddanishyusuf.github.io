x.controller("homeController", ['$scope','$state','$http', function($scope, $state, $http){

	$scope.name = "Mohd Danish Yusuf"
	$scope.minimizeThis = function(){
		document.getElementById("layer").style.height = "0";
		$state.go('welcome')
	}


    $http({
        method: 'GET',
        url: 'https://iamnewbie.com/wp-json/posts/'
    }).then(function success(responce){
        $scope.archives = responce.data
        console.log(responce.data)
    })
}])

x.controller("workExperienceCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";
    
    $http({
        method: 'GET',
        url: '/lib/json/work-experience.json'
    }).then(function success(responce){
        $scope.working_experience = responce.data
    })

}])

x.controller("openSourceProjectCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";

    $scope.project_list = []
    $http({
        method: 'GET',
        url: 'https://api.github.com/users/mddanishyusuf/repos?sort=updated&page=1&per_page=100&type=sources'
    }).then(function success(responce){
        angular.forEach(responce.data, function(value){
            console.log(value.fork == false)
            console.log(value.owner.login)
            if(value.fork === false){
                $scope.project_list.push(value)
            }
        })
        // $scope.open_source_projects = responce.data
    })

}])

x.controller("educationCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";

    $http({
        method: 'GET',
        url: '/lib/json/education.json'
    }).then(function success(responce){
        $scope.education = responce.data
    })

}])

x.controller("skillsCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";

    $http({
        method: 'GET',
        url: '/lib/json/skills.json'
    }).then(function success(responce){
        $scope.skills = responce.data
    })

}])

x.controller("achievementsCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])

x.controller("interestsCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])