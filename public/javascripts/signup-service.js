angular.module('signupapp.services', [])
    .service('SignUp', function ($http) {
        this.signUp = function (user) {
            console.log('service singup');
            var userExists = false;
            var users = $http.get('/users').then(function (users) {
                console.log('Checking for existing user email..');
                return users;
            }, function (err) {
                console.log('Error fetching user list from server');
            });
            for (var aUser in users) {
                if(user.username === aUser.username) {
                    console.log('This email id has already been registered.');
                    userExists = true;
                }
            }
            if (!userExists) {
                $http.post('/', user).then(function (data) {
                    console.log('Successfully created user! ', data);
                    return data;
                }, function (error) {
                    console.log('Server error', error);
                    return error;
                });
            }
        }
    });