import bcrypt from "bcryptjs";

const users = [
  {
    name: "sunny",
    email: "sunnyg@gmail.com",
    password: bcrypt.hashSync("123456", 10),
   
  },
  {
    name: "arslan",
    email: "arslan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
   
  },
];

export default users;
