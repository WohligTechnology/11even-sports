angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.$on('$viewContentLoaded', function(event) {
        $timeout(function() {

            ! function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = /^http:/.test(d.location) ? 'http' : 'https';
                if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = p + "://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }
            }(document, "script", "twitter-wjs");

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));


        }, 1000);
    });

})

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function(data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })
    .controller('SchoolTournamentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("school-tournament"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("School-tournament"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.stateSlides = [
            "DELHI",
            "GUJRAT",
            "KARNATAK",
            "ODISHA",
            "RAJASTHAN",
            "TELANGANA",
            "GOA",
            "HARYANA",
            "ASSAM",
            "CHANDIGARGH"
        ];

    })
    .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("contact-us"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Contact-us"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('MediaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("media"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Media"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("about-us"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("About-us"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;