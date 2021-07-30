export var fetchFav = (movieId) => async (dispatch,getState) => {
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