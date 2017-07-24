x.controller("homeController", ['$scope','$state','$http', function($scope, $state, $http){

	$scope.name = "Mohd Danish Yusuf"
	$scope.minimizeThis = function(){
		document.getElementById("layer").style.height = "0";
        document.body.style.overflow = 'scroll'; 
        $state.go('welcome')
	}
}])

x.controller("workExperienceCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%"; 
    $http({
        method: 'GET',
        url: '/lib/json/work-experience.json'
    }).then(function success(responce){
        $scope.working_experience = responce.data
        document.body.style.overflow = 'hidden';   
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
        document.body.style.overflow = 'hidden';   
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
        document.body.style.overflow = 'hidden';   
    })

}])

x.controller("skillsCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";

    $http({
        method: 'GET',
        url: '/lib/json/skills.json'
    }).then(function success(responce){
        $scope.skills = responce.data
        document.body.style.overflow = 'hidden';   
    })

}])

x.controller("archivesCtrl", ['$scope', '$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";

    $http({
        method: 'GET',
        url: 'https://iamnewbie.com/wp-json/posts/'
    }).then(function success(responce){
        $scope.archives = responce.data
        document.body.style.overflow = 'hidden';   
    })
}])

x.controller("interestsCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])