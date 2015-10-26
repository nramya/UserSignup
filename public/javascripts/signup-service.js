angular.module('signupapp.services', [])
    .service('SignUp', function () {
        var signUp = function (user) {

            $http.post('/', user).then(function (data) {
                console.log('Successfully created user! ', data);
                return data;
            }, function (error) {
                console.log('Server error', error);
                return error;
            });
        }
    });