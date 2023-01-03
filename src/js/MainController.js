var app = angular.module("myApp", []); 
app.controller('mainController', function mainController( $scope,$uibModal, ModalEditor  ){
  
  var vm = this;
  
  $scope.openModal  = function(){ 
    
    console.log("button clicked")
    ModalEditor.openModal()
    
  }
})