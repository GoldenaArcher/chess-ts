import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, 'An user must have a nickname'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'An user must have an valid email.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'An user numst have a password.'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    select: false,
    required: [true, 'Confirmed password must be same as password'],
    validate: {
      validator: function (el: string) {
        return el === (this as any).password;
      },
      message: 'Passwords are not the same',
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', function (next) {
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
