import { REMOVE_USER, SET_USER,UPDATE_USER,ADD_TO_FAV,REMOVE_FROM_FAV } from "./authConstant";
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
    try {
        //create user on firebase auth section
        var {user :{uid}} = await auth.createUserWithEmailAndPassword(email,password)
                
        //save user data to firestore
         var userInfo = {
             userName,
             email,
             favorites:[],
             createdAt: serverTimestamp()
         }
        await firestore.collection("users").doc(uid).set(userInfo)
    } catch (error) {
        return error.message
    }
}

export var signin = ({email,password}) => async (dispatch) => {
    try {
        //signin user with auth
        await auth.signInWithEmailAndPassword(email,password)
    } catch (error) {
        return error.message
    }
}

export var getUser = (userId) => async () => {
    var query = await firestore.collection("user").doc(userId).get();
    var user = await query.data();
    return user;
}

export var addToFav = (movieId) => async (dispatch,getState) => {
    try {   
        var {auth:{uid}}= getState() 
        var currentUser = await firestore.collection("users").doc(uid);
        currentUser.update({
            favorites: firebase.firestore.FieldValue.arrayUnion(movieId)
        });
        dispatch({
            type: ADD_TO_FAV,
            payload:{
                movieId
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export var removeFromFav = (movieId) => async (dispatch,getState) => {
    try {   
        var {auth:{uid}}= getState() 
        var currentUser = await firestore.collection("users").doc(uid);
        currentUser.update({
            favorites: firebase.firestore.FieldValue.arrayRemove(movieId)
        });
        dispatch({
            type: REMOVE_FROM_FAV,
            payload:{ 
                movieId
            }
        })
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
        }
        
    } catch (error) {
         console.log(error)
    }
}

export var updateUser = (updatedUser) => async (dispatch) => {
    var user = firebase.auth().currentUser
    try {
        await user.updateProfile(updatedUser)
        dispatch({
            type: UPDATE_USER,
            payload: {
                updatedUser
            } 
        })
    } catch (error) {
     console.log(error)   
    }

}

//centrlized manager of app state.
export var firebaseAuthListner = () => async (dispatch) => {
    try {
        //firebase auth listner. Run when firebase state changes even not refreshed.
        firebase.auth().onAuthStateChanged(async function(user){
            console.log(user)
            if (user){
                signout()
                dispatch(removeUser())
                var {uid} = user

                //fetch user data from firestore
                var userData = await firestore.collection("users").doc(uid).get()
                var {userName,email,favorites} = userData?.data()

                //set user data to auth state
                var userDataForState = {
                    userName,
                    email,
                    favorites,    
                    uid
                }
                dispatch(setUser(userDataForState))
                history.push(`/dashboard`)
            }
            else{
                dispatch(removeUser())
            }
        }) 
    } catch (error) {
        console.log(error)
    }
}