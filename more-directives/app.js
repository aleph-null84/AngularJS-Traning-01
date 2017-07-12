angular.module("moreDirectivesApp", [])
.controller("MoreDirectivesCtrl", MoreDirectivesCtrl);


function MoreDirectivesCtrl() {
	this.checked = false;
	
	this.myList2 = [1, 2, 3, 4, 5];
	
    this.myList = [
        { 'name': "Foo", 'age': 20},
        { 'name': "Bar", 'age': 30},
        { 'name': "Baz", 'age': 40},
        { 'name': "Buzz", 'age': 50},
        { 'name': "None", 'age': 60}
    ];

}
