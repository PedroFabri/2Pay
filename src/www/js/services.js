angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('itemService', [function(){
	let itemList = window.localStorage.getItem("itens") || [];
	console.log(itemList);
	if (itemList){
		itemList = JSON.parse(itemList);
	}

	const _addItem = function(newItem){
		itemList.push(newItem);
		window.localStorage.setItem("itens", JSON.stringify(itemList));
	};

	const _getItens = function(){
		return itemList;
	};

	const _getItem = function(index){
		return itemList[index];
	};

	const _deleteItem = function(index){
		itemList.pop(index);
		window.localStorage.setItem("itens", JSON.stringify(itemList));
		return _getItens();
	};
	const _deleteItens = function(){
		itemList = [];
		window.localStorage.setItem("itens", JSON.stringify(itemList));
		return _getItens();
	};


	return {
		addItem:     _addItem,
		getItens:    _getItens,
		getItem:     _getItem,
		deleteItem:  _deleteItem,
		deleteItens: _deleteItens
	};

}]);