class DB {
  constructor () {
    this.db = {
      users: [
              {id: 1, name: 'Abaddon', roles: [1, 2, 3]},
              {id: 2, name: 'Bane', roles: [1, 3, 4]},
              {id: 3, name: 'Centaur Warruner', roles: [4, 6, 3, 5, 7]},
              {id: 4, name: 'Dark Seer', roles: [6, 8, 7, 4]},
              {id: 5, name: 'Earth Spirit', roles: [5, 7, 4, 6, 3]},
              {id: 6, name: 'Faceless Void', roles: [2, 6, 4, 7, 3]},
              {id: 7, name: 'Gyrocopter​', roles: [2, 5, 4]},
              {id: 8, name: 'Huskar', roles: [2, 3, 6]},
              {id: 9, name: 'Invoker', roles: [2, 5, 4, 7, 6]},
              {id: 10, name: 'Juggernaut', roles: []}
      ],
      roles: [
              {id: 1, name: 'Support'},
              {id: 2, name: 'Carry'},
              {id: 3, name: 'Durable'},
              {id: 4, name: 'Disable'},
              {id: 5, name: 'Nuker'},
              {id: 6, name: 'Initiator'},
              {id: 7, name: 'Escape'},
              {id: 8, name: 'Jungler'}
      ]
    };
  }

  getUsersByRoles (roleNames) {
    const filUsers = this.db.users.filter(
      (user) => {
        const roles = this.getRolesByNames(roleNames);
        for (let i = 0; i < roles.length; i += 1) {
          if (user.roles.indexOf(roles.id)) {
            return true;
          }
        }
        return false;
      }
    );
    return filUsers;
  }

  getUser (id) {
    const filUsers = this.db.users.filter(
      user => user.id === id
    );
    return filUsers[0];
  }

  getRole (id) {
    const filRoles = this.db.roles.filter(
      role => role.id === id
    );
    return filRoles[0];
  }

  getRolesByNames (names) {
    const filRoles = this.db.roles.filter(
      role => names.indexOf(role.name) >= 0
    );
    return filRoles;
  }

  getRoles (ids) {
    const filRoles = this.db.roles.filter(
      role => ids.indexOf(role.id) >= 0
    );
    return filRoles;
  }
}
export default new DB();
