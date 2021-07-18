import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customer = [
  {
    id: "0",
    image: "https://placeing.com/64/64/1",
    name: "Jenna",
    birthday: "1999.06.23",
    gender: "female",
    job: "student",
  },
  {
    id: "1",
    image: "https://placeing.com/64/64/2",
    name: "Kim",
    birthday: "1999.06.23",
    gender: "female",
    job: "programmer",
  },
  {
    id: "2",
    image: "https://placeing.com/64/64/3",
    name: "Lee",
    birthday: "1999.06.23",
    gender: "male",
    job: "designer",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customer.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
