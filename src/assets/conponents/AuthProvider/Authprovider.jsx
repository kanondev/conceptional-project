import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const authContext = createContext()
const Authprovider = ({ children }) => {

    const gogleprovider = new GoogleAuthProvider()

    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true);

const handleRegister = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
    // .then(res=>signOut(auth))
}

const handleLogIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

const handleLogOut = () =>{
    signOut(auth)
}

const handleGoogleLogin = () =>{
return signInWithPopup(auth, gogleprovider) 
}

const manageProfile =(name, image) =>{
    return updateProfile(auth.currentUser,{
        displayName:name, photoURL:image
    })
}

const authInfo ={
    handleRegister,
    handleLogIn,
    handleLogOut,
    handleGoogleLogin,
    manageProfile,
    user,
    setUser,
    loading
}


useEffect(()=>{
const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
if (currentUser){
    setUser(currentUser)
}
else{
    setUser(null)
}
setLoading(false)
    


    return() =>{
        unsubcribe()
    }
})
},[])
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;