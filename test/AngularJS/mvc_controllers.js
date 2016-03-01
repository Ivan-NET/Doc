function PhoneListCtrl($scope, $http) {
  // $scope.phones = [
    // {"name": "Nexus S",
     // "snippet": "Fast just got faster with Nexus S.",
	 // "age": 0},
    // {"name": "Motorola XOOM? with Wi-Fi",
     // "snippet": "The Next, Next Generation tablet.",
	 // "age": 1},
    // {"name": "MOTOROLA XOOM?",
     // "snippet": "The Next, Next Generation tablet.",
	 // "age": 2}
  // ];
  
  // run from web container, such as IIS
  $http.get('angular-phonecat-master/app/phones/phones.json').success(function(data){
	 $scope.phones = data; 
  });
  
  $scope.hello = "Hello, World!";
  $scope.orderProp = 'age';
  $scope.query = 'motorola';
}

PhoneListCtrl.$inject = ['$scope', '$http'];