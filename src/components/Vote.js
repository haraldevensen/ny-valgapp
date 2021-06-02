import React, { useContext } from "react";
import Navbar from "./Navbar";
import { db } from "../firebase";
// import { useAuth } from "../contexts/AuthContext";

export function Vote() {
  //var { currentUser } = useAuth();
  var docRef = db.collection("votes").doc("233576@usn.no");

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        alert("Du har allerede avlagt din stemme.");
      } else {
        alert("Din stemme er nå registrert.");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
