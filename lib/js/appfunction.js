x.controller("homeController", ['$scope','$state','$http', function($scope, $state, $http){

	$scope.name = "Mohd Danish Yusuf"
	$scope.minimizeThis = function(){
		document.getElementById("layer").style.height = "0";
		$state.go('welcome')
	}
	$http({
    	method: 'GET',
    	url: 'https://api.linkedin.com/v1/people/~?oauth2_access_token=AQWC6m4oRH2tgZk633JV4fnzoichyaY9AiPGQUroE-6MP-ZPcQz8fNUWgyCQ6fqHU_1-FLLgo-1aK-AFihIhnwdOEQ_P1KZCpsvMK8M--JGqvLQpZm0lgInH96JwW7SokezOhgMggDerTEpbFLVgze5jQiDwSf50qZtvnhoQOQlkZ_PkJE8&format=json',
    	headers: {
	       'Content-Type':'application/x-www-form-urlencoded', 
      		'Access-Control-Allow-Origin' : '*'  
    	}
    }).then(function success(responce){
    	$scope.data = responce
    })
}])

x.controller("workExperienceCtrl", ['$scope','$http', function($scope, $http){

    document.getElementById("layer").style.height = "100%";

    $http({
    	method: 'GET',
    	url: 'https://api.linkedin.com/v1/people/~?oauth2_access_token=AQWC6m4oRH2tgZk633JV4fnzoichyaY9AiPGQUroE-6MP-ZPcQz8fNUWgyCQ6fqHU_1-FLLgo-1aK-AFihIhnwdOEQ_P1KZCpsvMK8M--JGqvLQpZm0lgInH96JwW7SokezOhgMggDerTEpbFLVgze5jQiDwSf50qZtvnhoQOQlkZ_PkJE8&format=json',
    	headers: {
	       'Content-Type':'application/x-www-form-urlencoded', 
      		'Access-Control-Allow-Origin' : '*'  
    	}
    }).then(function success(responce){
    	$scope.data = responce
    })
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