(function() {
     function AnalyticsCtrl($scope, $rootScope, Analytics) {
         this.heroTitle = "Turn the Music Up!";

         var albumArray = $rootScope.eventsAlbum;
         var songArray = $rootScope.eventsSong;
         var pageArray = $rootScope.eventsPage;


         $scope.pieChart = {

             chart: {
                 type: 'pieChart',
                 id: 'pieChart',
                 height: 500,
                 x: function(d){return d.key;},
                 y: function(d){return d.y;},
                 showLabels: true,
                 duration: 500,
                 labelThreshold: 0.01,
                 labelSunbeamLayout: true,
                 showLegend: true,
                 labelsOutside: false,
                 labelType: "percent",
                 tooltips: false,
                 legend: {
                     margin: {
                         top: 5,
                         right: 35,
                         bottom: 5,
                         left: 0
                     }
                 },
                 callback: function(){
                   d3.selectAll('.nv-pieLabels text').style('fill', 'darkblue');
                 }
             }
         };
        //  $scope.lineChart = {
        //       chart: {
        //         type: 'lineChart',
        //         id: 'lineChart',
        //    	    width: 650,
        //    	    height: 400,
        //    	    showXAxis: true,
        //    	    showYAxis: true,
        //    	    tooltips: true,
        //    	    interactive: true,
        //    	    x: xFunction(),
        //    	    y: yFunction(),
        //    	    yAxisTickFormat: yAxisTickFormatFunction(),
        //    	    xAxisTickFormat: xAxisTickFormatFunction(),
        //         margin: {
        //             left:70,
        //             top:70,
        //             bottom:70,
        //             right:125
        //         }
        //       }
        // };

         $scope.albumConvert = function(){
           var albumData = [];

            for (i = 0; i < albumArray.length; i++) {
              albumData.push({"key": (albumArray[i].title || albumArray[i].artist), "y": albumArray[i].viewedAt});
              i++;
            };
            console.log(albumData);
            return albumData;
         };

         $scope.songConvert = function(){
           var songData = [];

            for (i = 0; i < songArray.length; i++) {
              songData.push({"key": (songArray[i].title), "y": songArray[i].playedAt});
              i++;
            };
            console.log(songData);
            return songData;
         };

         $scope.pageConvert = function(){
           var pageData = [];

            for (i = 0; i < pageArray.length; i++) {
              pageData.push({"key": (pageArray[i].page), "y": pageArray[i].visitedAt});
              i++;
            };
            console.log(pageData);
            return pageData;
         };
     }

     angular
         .module('blocJams')
         .controller('AnalyticsCtrl', ['$scope', '$rootScope', 'Analytics', AnalyticsCtrl]);
})();
