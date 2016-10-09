var spellBindApp = angular.module('spell-bind-app',[]);

spellBindApp.controller('NavigationController',function($scope) {
	$scope.navigationLinkList = [{
		name:'Home',
		data:'home'
	},
	{
		name:'About',
		data:'about'
	},
	{
		name:'Services',
		data:'services'
	},
	{
		name:'Career',
		data:'career'
	},
	{
		name:'Contact Us',
		data:'contact_us'
	}];

	$scope.activePage = 'home';
	$scope.navigationHandler = function(data){

		$scope.activePage = data;
		console.log($scope.activePage)
	};


	$scope.initialize = function(){
		console.log('load');
	}


});





