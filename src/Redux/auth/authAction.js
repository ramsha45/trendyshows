import { REMOVE_USER, SET_USER } from "./authConstant";
import {auth, serverTimestamp,firestore, googleAuthProvider} from "../../Firebase/Firebase";
import firebase  from "../../Firebase/Firebase";
import history from "../../history/history";

export var setUser = (user) => ({
    type: SET_USER,
    payload:{
        user
    }
})

export var removeUser = () => ({
    type: REMOVE_USER
})

export var  signup = ({userName, email,password}) => async (dispatch) => {
    console.log(userName);
    console.log(email);
    console.log(password);
    try {
        //create user on firebase auth section
        var {user :{uid}} = await auth.createUserWithEmailAndPassword(email,password)
                
        //save user data to firestore
         var userInfo = {
             userName,
             email,
             createdAt: serverTimestamp()
         }
        await firestore.collection("users").doc(uid).set(userInfo)
        //After signup navivgate to home page
        // history.push("/")
    } catch (error) {
        console.log(error)
    }
}

export var signin = ({email,password}) => async (dispatch) => {
    try {
        //signin user with auth
        await auth.signInWithEmailAndPassword(email,password)
        // history.push("/")
    } catch (error) {
        console.log(error)
    }
}

export var signout = () => async (dispatch) => {
    try {
        //sign out user from f
        await auth.signOut()
        history.push("/")
    } catch (error) {
        console.log(error)
    }
}

export var googleSignin = () => async (dispatch) => {
    try {
         //signin User with google
        var {user:{displayName, email, uid}, additionalUserInfo:{isNewUser}} = await auth.signInWithPopup(googleAuthProvider)
        
        //if new user add to signup
        if(isNewUser){
            var userInfo = {
                userName: displayName,
                email,
                createdAt: serverTimestamp()
            }
           await firestore.collection("users").doc(uid).set(userInfo)
        //    history.push("/")
        }
        
    } catch (error) {
         console.log(error)
    }
}

//centrlized manager of app state.
export var firebaseAuthListner = () => async (dispatch) => {
    try {
        //firebase auth listner. Run when firebase state changes even not refreshed.
        firebase.auth().onAuthStateChanged(async function(user){
            if (user){
                var {uid} = user

                //fetch user data from firestore
                var userData = await firestore.collection("users").doc(uid).get()
                var {userName,email} = userData.data()

                //set user data to auth state
                var userDataForState = {
                    userName,
                    email,
                    uid
                }
                dispatch(setUser(userDataForState))
                history.push(`/dashboard/${uid}`)
            }
            else{
                dispatch(removeUser())
            }
        }) 
    } catch (error) {
        console.log(error)
    }
}