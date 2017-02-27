import mongoose from 'mongoose';
import UserModel from '../model/user';
import RoleModel from '../model/role';
// connect to mongo

mongoose.connect('mongodb://localhost/userrole');

// seed users

const users = [
  {id: 1, name: 'Abaddon', roles: [1, 2, 3]},
  {id: 2, name: 'Bane', roles: [1, 3, 4]},
  {id: 3, name: 'Centaur Warruner', roles: [4, 6, 3, 5, 7]},
  {id: 4, name: 'Dark Seer', roles: [6, 8, 7, 4]},
  {id: 5, name: 'Earth Spirit', roles: [5, 7, 4, 6, 3]},
  {id: 6, name: 'Faceless Void', roles: [2, 6, 4, 7, 3]},
  {id: 7, name: 'Gyrocopter​', roles: [2, 5, 4]},
  {id: 8, name: 'Huskar', roles: [2, 3, 6]},
  {id: 9, name: 'Invoker', roles: [2, 5, 4, 7, 6]},
  {id: 10, name: 'Juggernaut', roles: [2, 5]}
];

const roles = [
  {id: 1, name: 'Support'},
  {id: 2, name: 'Carry'},
  {id: 3, name: 'Durable'},
  {id: 4, name: 'Disable'},
  {id: 5, name: 'Nuker'},
  {id: 6, name: 'Initiator'},
  {id: 7, name: 'Escape'},
  {id: 8, name: 'Jungler'}
];

// drop users collection

mongoose.connection.collections.users.drop((err) => {
  if (err) {
    console.log('create collection users');
    console.log(UserModel);
  }
  UserModel.create(users, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Seed data created.');
    }
    process.exit();
  });
});

mongoose.connection.collections.roles.drop((err) => {
  if (err) {
    console.log('create collection roles');
  }
  RoleModel.create(roles, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Seed data created.');
    }
    process.exit();
  });
});
