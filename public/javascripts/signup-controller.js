(function () {
    'use strict';
    angular.module('signupapp', ['ngAnimate', 'ui.bootstrap', 'signupapp.services'])
        .controller('SignUpController', function (SignUp) {
            var vm = this;
            vm.error = '';
            vm.user = {};

            vm.minDate = new Date();
            vm.maxDate = new Date();
            vm.minDate.setFullYear(vm.minDate.getUTCFullYear() - 150);
            vm.maxDate.setFullYear(vm.maxDate.getUTCFullYear() - 14);
            vm.password = '';
            vm.confirmPassword = '';
            vm.open = false;

            vm.open = function($event) {
                vm.opened = true;
            };

            vm.signUp = function() {
                console.log('controller singup');
                var user = {
                    username: vm.user.username,
                    firstName: vm.user.firstName,
                    lastName: vm.user.lastName,
                    email: vm.user.username,
                    password: vm.password,
                    birthday: vm.user.birthday,
                    bio: '',
                    interests: [],
                    status: 'online'
                };
                SignUp.signUp(user).success(function (data) {
                    console.log('Success from service ', data);
                    vm.signupSuccess = true;
                }).error(function (error) {
                    console.log('Error from service: ', error);
                    vm.error = error;
                    vm.signupSuccess = false;
                });
            };

            vm.checkPasswordMatch = function() {
                if (vm.password !== vm.confirmPassword) {
                    vm.matched = false;
                } else {
                    vm.matched = true;
                }
            };

            vm.clearFields = function() {

            };
        });
})();