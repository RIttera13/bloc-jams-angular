(function() {
     function AnalyticsCtrl($scope) {
         this.heroTitle = "Turn the Music Up!";


         $scope.options = {
             chart: {
                 type: 'pieChart',
                 height: 500,
                 x: function(d){return d.key;},
                 y: function(d){return d.y;},
                 showLabels: true,
                 duration: 500,
                 labelThreshold: 0.01,
                 labelSunbeamLayout: true,
                 legend: {
                     margin: {
                         top: 5,
                         right: 35,
                         bottom: 5,
                         left: 0
                     }
                 }
             }
         };

         $scope.data = [
             {
                 key: "One",
                 y: 5
             },
             {
                 key: "Two",
                 y: 2
             },
             {
                 key: "Three",
                 y: 9
             },
             {
                 key: "Four",
                 y: 7
             },
             {
                 key: "Five",
                 y: 4
             },
             {
                 key: "Six",
                 y: 3
             },
             {
                 key: "Seven",
                 y: .5
             }
         ];
     }

     angular
         .module('blocJams')
         .controller('AnalyticsCtrl', ['$scope', AnalyticsCtrl]);
})();
