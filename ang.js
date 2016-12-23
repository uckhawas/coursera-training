(function () {
    'use strict';
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name = "upali, Jenny, Henry, Harry";

        $scope.CheckLimit =function () {
           var limit=CountItems($scope.name);
           $scope.ItemLimit=limit;
        }
        function CountItems(string) {
            if((string.split(' ').length>=3) || (string.split(',').length>=3))
            {
                return "Too much";
            }
            else{
                return "Enjoy";

            }
        }
    }
})();