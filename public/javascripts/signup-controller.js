(function () {
    'use strict';
    angular.module('signupapp', ['ngAnimate', 'ui.bootstrap'])
        .controller('SignUpController', function (SignUp) {
            var vm = this;
            vm.error = '';
            vm.user = {};

            vm.minDate = new Date();
            vm.maxDate = new Date();
            vm.minDate.setFullYear(vm.minDate.getUTCFullYear() - 150);
            vm.maxDate.setFullYear(vm.maxDate.getUTCFullYear() - 14);
            vm.password1 = '';
            vm.password2 = '';
            vm.open = false;

            vm.open = function($event) {
                vm.opened = true;
            };

            vm.signUp = function() {
                var user = {
                    username: vm.user.username,
                    firstName: vm.user.firstName,
                    lastName: vm.user.lastName,
                    email: vm.user.username,
                    birthday: vm.user.birthday,
                    bio: '',
                    interests: [],
                    status: 'online'
                };
                SignUp.signUp(user).then(function (data) {
                    console.log('Success from service ', data);
                    vm.signupSuccess = true;
                }, function (error) {
                    console.log('Error from service: ', error);
                });
            };

            vm.checkPasswordMatch = function() {
                if (vm.password1 !== vm.password2) {
                    vm.matched = false;
                } else {
                    vm.matched = true;
                }
            };

            vm.clearFields = function() {

            };
        });
})();