let database_user = "jayeshpatil@123456";
let database_pass = "Pass@2323";
//for login
let user = "jayeshpatil@123456";
let pass = "Pass@2323";

if (database_user==user){
  if(database_pass==pass){
    console.log("Login Successfull");
  } else {
    console.log("incorrect password");
  }
} else {
  console.log("error");
}