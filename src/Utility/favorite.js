export const removeFromFav = (user, movie) => {
    let user_fav = []
    user.favorites.forEach(f => {
        f !== movie && user_fav.push(f)
    });
    return{
        ...user,
        favorites: [...user_fav]
    } 
}