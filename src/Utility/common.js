export const handleNavigation = (newPath, history) => {
    history.push(newPath);
}

export const isEmpty = (value) => {
    if(value === "") return true;
    return false

}