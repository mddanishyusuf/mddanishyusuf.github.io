x.controller("homeController", ['$scope','$state', function($scope, $state){

	$scope.name = "Mohd Danish Yusuf"
	$scope.minimizeThis = function(){
		document.getElementById("layer").style.height = "0";
		$state.go('welcome')
	}
}])

x.controller("workExperienceCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])

x.controller("openSourceProjectCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])

x.controller("educationCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])

x.controller("achievementsCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])

x.controller("interestsCtrl", ['$scope', function($scope){

    document.getElementById("layer").style.height = "100%";

}])