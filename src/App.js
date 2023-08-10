// import {Firebase} from './Firebase/Config'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './Firebase/Config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';

function App() {
  const getdata = () => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data())
      });
    });
  };

  // Use useEffect to call the getdata function once the component mounts
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <button onClick={() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, 'shhhha@gmail.com', '123456')
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            getdata(); // Call getdata function here
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      }}>Click here</button>
    </div>
  );
}

export default App;