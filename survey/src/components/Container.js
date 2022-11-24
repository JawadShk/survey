import React, { Component } from 'react';
import Details from './Details';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAf_mbETqavvAHO5U0akX2_EWBcAULKI80",
  authDomain: "survey-980c7.firebaseapp.com",
  databaseURL: "https://survey-980c7-default-rtdb.firebaseio.com",
  projectId: "survey-980c7",
  storageBucket: "survey-980c7.appspot.com",
  messagingSenderId: "618923754654",
  appId: "1:618923754654:web:55240e70b0090603a7e78f"
};
// if(firebase.apps.length < 0){
//   // firebase.initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

// Initialize Firebase

class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: uuidv4(), 
         name: null,
         email: null,
         questions:{
            q1:null,
            q2:null,
            q3:null,
            other: null
         },
         isSubmited: false,
      };
    }

    detailsSubmitHandler = (e) =>{
      const name = e.target.name.value;
      const email = e.target.email.value;
      this.setState({name, email})
      e.preventDefault();
    }

    questionsSubmitHandler = (e) =>{
      const questions = {};
      questions.q1 = e.target.q1.value;
      questions.q2 = e.target.q2.value;
      questions.q3 = e.target.q3.value;
      questions.other = e.target.other.value;
      const isSubmited = true;
      this.setState({questions, isSubmited});
      e.preventDefault();
      // database.ref("survey/"+this.state.id)
      //   .set({
        //   name: this.state.name,
        //   email: this.state.email,
        //   questions: this.state.questions,
        // });
      const database = getDatabase(app);
      set(ref(database ,"survey/"+this.state.id), {
        name: this.state.name,
        email: this.state.email,
        questions: this.state.questions,
      });
    }

  render() {
    return (
      <>
        <div className="container-fluid">
            <div className="container card pt-2">
                <h1 className="text-center text-primary">Survey</h1>
            </div>
        </div>
        {
          this.state.isSubmited ?
            (<div className='card'>
              <h1>Thank You</h1>
            </div>
            ) : this.state.name === null && this.state.email === null ? (
                <Details submit={this.detailsSubmitHandler} />
            ) : (
              <Question submit={this.questionsSubmitHandler}/>
            )
        }
      </>
    )
  }
}

export default Container