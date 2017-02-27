import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  roles: [{
    type: Number,
    ref: 'Role'
  }]
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
