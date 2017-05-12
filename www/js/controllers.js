angular.module('app.controllers', ['ionic'])


.controller('2PayCtrl', ['$scope', '$stateParams', 'itemService', '$state','$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $itemService, $state, $ionicPopup) {
	
	$scope.addNew = function(){
		$state.go('addNew');
	};

	$scope.moreInfo = function(index){
		$state.go('details/:id',{id:index});
	}

	$scope.clear = function(index){
		$itemService.deleteItem(index);
		$scope.itens = $itemService.getItens();
	}

	$scope.clearAll = function(){
			$ionicPopup.confirm({
				title: "2Pay",
				template: ('Delete all itens?'),
				cancelText: "No",
				okText: "DELETE"
			}).then(function(res){
				if(res){
					$scope.itens = $itemService.deleteItens();
				}
			});
	}
	$scope.clearItem = function(index){
		$scope.itens = $itemService.deleteItem(index);
	}

	$scope.itens = $itemService.getItens();
	$scope.total = 0;
	for(let item of $scope.itens){
		$scope.total += item.price;
	}

}])
   
.controller('addNewCtrl', ['$scope', '$stateParams', 'itemService', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $itemService, $ionicPopup) {

	angular.element(document).ready(function () {
        VMasker(document.getElementById("price")).maskMoney({separator: "."});
    });
	
	$scope.newEntry = {};
	$scope.submitForm = function(){
		if (!$scope.newEntry.name || !$scope.newEntry.price){
			$ionicPopup.alert({
				title: "2Pay",
				template: "Name and Price are required!"
			});
		}else{
			$itemService.addItem($scope.newEntry);
			$ionicPopup.alert({
				title: "2Pay",
				template: '"' + $scope.newEntry.name + '" inserted!'
			});
			$scope.newEntry = {};
		}
	};

}])
   
.controller('detailsCtrl', ['$scope', '$stateParams', 'itemService', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $itemService, $state, $ionicPopup) {
	$scope.item = $itemService.getItem($stateParams.id);

	$scope.delete = function(){
		$ionicPopup.confirm({
			title: "2Pay",
			template: ('Delete "' + $scope.item.name + '"?'),
			cancelText: "No",
			okText: "DELETE"
		}).then(function(res){
			if(res){
				$itemService.deleteItem($stateParams.id);
				$state.go('2Pay');
			}
		});
	}

}])
 