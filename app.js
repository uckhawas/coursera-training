(function () {
    'use strict'; //protecting us from making mistakes

    angular.module('Namecalculator', [])
        .controller('Namecalculatorcontroller',function ($scope) {
            $scope.name="";
         $scope.totalValue=0;
          // $scope.sayhey=function () {
          //     return "hello upali";
          //   }
         $scope.Displaynumeric=function () {
             var Totalnamevalue=calnumericforstring($scope.name);
             $scope.totalValue=Totalnamevalue;

         }
         function calnumericforstring(string) {
             var totstring=0;
             for(var i=0;i<string.length;i++)
             {
                 totstring++;
             }
             return totstring;
         }

        });

})();
