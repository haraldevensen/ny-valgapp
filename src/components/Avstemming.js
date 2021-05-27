import React from "react";
import Navbar from "./Navbar"
import { db } from "../firebase";

class Avstemming extends React.Component {
  state = {
    users: null 
  }

  componentDidMount(){
    console.log('mounted')
    db.collection('users')
      .get()
      .then(snapshot => {
        const users = []
        snapshot.forEach(doc => {
          const data = doc.data()
          users.push(data)
        })
        this.setState({ users: users })
        // console.log(snapshot)
      })
      .catch(error => console.log(error))
  }
  
  render(){
    return <>
    <Navbar />
      <div className="Avstemming">
        <h1>Liste over kandidater</h1>
        {
          this.state.users &&
          this.state.users.map( user => {
            return (
              <div>
                <p><strong>Navn: </strong>{user.name}</p>
                <p><strong>Nummer: </strong>{user.phone}</p>
                <p><strong>Nominasjonstekst: </strong>{user.nomtekst}</p>
                <br />
              </div>
            )
          })
        }
      </div>
    </>
  }
}

export default Avstemming