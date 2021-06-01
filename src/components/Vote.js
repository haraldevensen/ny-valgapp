
import React from "react";
import Navbar from "./Navbar";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext"; 



export function vote() {

  var { currentUser } = useAuth();
var docRef = db.collection("votes").doc(currentUser.email);


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