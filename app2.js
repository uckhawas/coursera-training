(function () {
    'use strict';
    angular.module("msgapp",[])
        .controller("msgcontroller",msgcontroller);

        msgcontroller.$inject=['$scope'];
        function msgcontroller($scope){
            $scope.name="upali";
            $scope.stateofbeing="56 - 1.jpg";
            $scope.mesg=function () {
                return "upali likes to eat healthy food.";
            };
        $scope.feedup=function () {
            $scope.stateofbeing="639_hellokittyjunkie_sanrio_re-ment_candy_12.jpg";
        };

        }
})();