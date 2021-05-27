import React from "react";
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
    return(
      <div className="Avstemming">
        <h1>Liste over kandidater</h1>
        {
          this.state.users &&
          this.state.users.map( user => {
            return (
              <div>
                <p>{user.name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Avstemming