var about = {
    templateUrl: '/public/app/common/about/about.html',
    controller: aboutController
};

angular
    .module('about')
    .component('about', about);