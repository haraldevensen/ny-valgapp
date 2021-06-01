import React from "react";
import Navbar from "./Navbar";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext"; 
import { Vote } from "./Vote"; 



export default function Avstemming() {
/* var { currentUser } = useAuth();
var docRef = db.collection("votes").doc(currentUser.email);
*/
class Avstemming extends React.Component {
  state = {
    users: null,
  };

  componentDidMount() {
    console.log("mounted");
    db.collection("users")
      .get()
      .then((snapshot) => {
        const users = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          users.push(data);
        });
        this.setState({ users: users });
        // console.log(snapshot)
      })
      .catch((error) => console.log(error));
  }

}

 
    return (
      <>
        <Navbar />
        <div className="Avstemming">
          <h1>Liste over kandidater</h1>
          {this.state.users &&
            this.state.users.map((user) => {
              return (
                <div>
                  <button onClick={Vote()}>Stem</button>
                  <p>
                    <strong>Navn: </strong>
                    {user.name}
                  </p>
                  <p>
                    <strong>Nummer: </strong>
                    {user.phone}
                  </p>
                  <p>
                    <strong>Nominasjonstekst: </strong>
                    {user.nomtekst}
                  </p>
                  <p>
                    <strong>Valgbar: </strong>
                    {String(user.valgbar)}
                  </p>
                  <br />
                  <br />
                </div>
              );
            })}
        </div>
      </>
    )
}

/*
export function vote() {
  docRef.get().then((doc) => {
      if (doc.exists) {
        alert("Du har allerede avlagt din stemme.");
      } else {
        alert("Din stemme er nå registrert.");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  
  }
*/