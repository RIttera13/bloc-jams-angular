(function() {
     function AnalyticsCtrl() {
         this.heroTitle = "Turn the Music Up!";
         this.frameName = 'blocMetrics';
         this.frameUrl = 'http://localhost:4000';
     }

     angular
         .module('blocJams')
         .controller('AnalyticsCtrl', AnalyticsCtrl);
})();
