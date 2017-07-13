var myHelloModuleVar = angular.module("myHelloModule", []);


myHelloModuleVar.controller("HelloCtrl", HelloCtrl);

function HelloCtrl() {
    this.helloMessage = "I'm from the myHelloModule module";

}