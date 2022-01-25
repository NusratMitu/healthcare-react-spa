import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";



initializeAuthentication();


const useFirebase = () => {
    const [ name,setName]= useState('');
    const [ email,setEmail]= useState('');
    const [password,setPassword]= useState('')
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
  
// password Validation
const passwordValidation = () => {
  if(password.length < 6){
    setError('Password should be at least 6 Characters');
    return;
  }
  if (!/(?=.*[0-9].*[0-9])/.test(password)) {
    setError(" Password must contain 2 digits");
    return;
  }
}

  //sign up
  const handleSignUp = () => {
    console.log('sign Up working', email, password);
    return createUserWithEmailAndPassword(auth, email, password)
    
}

// email password sign in
const handleSignIn = () => {
  // console.log('sign in working');
  // console.log(email, password);
  setIsLoading(true);
   return signInWithEmailAndPassword(auth, email, password)
  
}

 // handle Name Change
 const handleNameChange = (e) => {
  setName(e?.target?.value);
}
// set user name when signup
const setUserName = () => {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then((result) => {
  })  
}
//email change
const handleEmailChange = e => {
    setEmail(e?.target?.value);
}
//password change
const handlePassChange = e => {
    // console.log(e.target.value);
    setPassword(e?.target?.value);
} 
  
// email verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      alert(`A Verification mail has been set to ${email}`);
  });

  }
    
  // reset password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then((result) => {
      alert(`A Verification mail has been set to ${email}`);
    });
  }
 
  
    
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () => {
      setIsLoading(true)
        signOut( auth)
        .then( () => {
          setUser({})
        })
        .finally( () => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
          if(user) {
            // console.log('inside state change',user);
            setUser(user);
          }
          else {
            setUser({})
          }
           setIsLoading(false)
        });
        return () => unsubscribed;
      }, [auth])

    return {
        user, 
        error,
        setError,
        setUser,
        setUserName,
        passwordValidation,
        verifyEmail,
        handleSignUp,
        handleSignIn,
        handleEmailChange,
        handlePassChange,
        handleResetPassword,
        handleNameChange,
        signInUsingGoogle,
        logOut, 
        setIsLoading,
        isLoading
    }
}

export default useFirebase;
