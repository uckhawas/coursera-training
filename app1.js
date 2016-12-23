// (function () {
//     'use strict';
//     angular.module('DIApp',[])
//         .controller('DIcontroller',DIcontroller); //passing value of the fucntion Dicontroller
//         DIcontroller.$inject=['$scope','$filter'];
//     function DIcontroller ( $scope, $filter, $injector) {
//         $scope.name="upali";
//         $scope.upper=function () {
//             var upcase=$filter('uppercase');
//             $scope.name=upcase($scope.name);
//         };
//
//
//     }
//
// })();
!function(){"use strict";function e(e,n,r){e.name="upali",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIcontroller",e),e.$inject=["$scope","$filter"]}();