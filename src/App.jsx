import "./App.css";
import Card from "./Components/Card/Card";
import { userData } from "./assets/userData";
function App() {
  return (
    <>
      <div className="wrapper">
        <h1 className="center">Business Cards</h1>
        {/* {This is a function} used to destructure the objects*/}
        {userData.map(({ name, email, phone, color }, i) => {
          // console.log(singleUser); // access each object
          return (
            <Card
              key={i}
              name={name}
              email={email}
              phone={phone}
              color={color}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

// Loop in the array and render using map method
// key= virtual dom check the change and to identify that it needs a unique key
// pass for first element
