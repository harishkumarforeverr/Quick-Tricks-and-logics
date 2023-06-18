import bcrypt from "bcryptjs";

export default function App() {
  const password = "Harish@123";
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  const encrptedPassword = bcrypt.compareSync(password, hash); // true
  console.log(encrptedPassword);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
