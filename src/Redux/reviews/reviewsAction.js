import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase"
import { ADD_REVIEW } from "./reviewsConst"

export var addreview = (reviewObj) => async () => { 
    try {
            await firestore.collection("reviews").add(reviewObj)

    } catch (error) {
        console.log(error)
    }
}

export var fetchReviews = (movieId, userId) => async () => {
    try { 
        var querry = await firestore.collection("reviews")
        .where("movieId", "==", movieId)
        .get()
        var reviews=[]
        querry.docs.forEach((doc)=>{
            reviews.push({...doc.data(), id: doc.id})
        }) 
        return reviews
    } catch (error) {
        console.log(error)
    }
}