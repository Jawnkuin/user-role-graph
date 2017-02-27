import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  }
});

const RoleModel = mongoose.model('Role', RoleSchema);

export default RoleModel;
