import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Weiqi Zhang',
    email: 'weiqi997997@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Vicky',
    email: 'weiqi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
