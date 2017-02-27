let app = angular.module('graphApp', ['ngMaterial']);
app.controller('graphControl', ['$scope', '$http', ($scope, $http) => {
  $scope.data = {
    users: {},
    roles: {}
  };
  const apiUrl = '/graphql';
  const makeGetPromise = (payload) => {
    const req = {
      method: 'GET',
      url: apiUrl,
      params: {
        query: payload
      }
    }

    return $http(req);
  }
  const userSchema = uid => `{user(id:${uid}){id,name,roles{id,name}}}`.trim();
  const roleSchema = rid => `{role(id:${rid}){id,name}}`.trim();
  const usersSchema = (rid) => {
    if (rid) {
      return `{users(role:${rid}){id,name}}`.trim();
    }
    return '{users{id,name}}'.trim();
  }
  const getUserById = (uid) => {
    makeGetPromise(userSchema(uid)).then((res) => {
      const user = res.data.data.user;
      $scope.data.users = [user];
      $scope.data.roles = user.roles;
    })
  };

  const getRoleById = (rid) => {
    makeGetPromise(roleSchema(rid)).then((res) => {
      $scope.data.roles = [res.data.data.role];
    });
  };

  const getUsers = (rid) => {
    makeGetPromise(usersSchema(rid)).then((res) => {
      $scope.data.users = res.data.data.users;
    });
  };

  $scope.onRoleClicked = (rid) => {
    getUsers(rid);
  };

  $scope.onUserClicked = (user) => {
    if (user.roles) {
      $scope.data.roles = user.roles;
    } else {
      makeGetPromise(userSchema(user.id)).then((res) => {
        $scope.data.roles = res.data.data.user.roles;
      });
    }
  };

  getUsers();
}]);
