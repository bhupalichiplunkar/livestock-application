
const CLASS_CONSTANTS = {
    NEW : "new",
    INCREASED : "incr",
    DECREASED : "decr",
    CONSTANT : "const"
}

export const formatIncomingData = (data) => {
    const modifiedData = data.reduce((final, curr) =>{
        const [name,price,] = curr;
        final.push({name,price, updatedAt : new Date()})
        return final;
    }, [])
    return modifiedData
}

export const updateListData = (newData, oldData) => {
    return Array.from(newData).reduce((updatedArr, currentElement) => {
        const updatedAt = new Date();
        const [name,price] = currentElement;
        const newState = oldData.slice(0);
        let elemIndex = newState.findIndex(x => x.name === name)
        if(elemIndex===-1){
            newState.push({
                name,
                price,
                updatedAt,
                class : CLASS_CONSTANTS.NEW,
                dataseries : [].push(price)
            })
        } else {
            newState[elemIndex].class = newState[elemIndex].price > price ? CLASS_CONSTANTS.DECREASED : newState[elemIndex].price < price? CLASS_CONSTANTS.INCREASED :CLASS_CONSTANTS.CONSTANT;
            newState[elemIndex].price = price;
            newState[elemIndex].updatedAt = updatedAt;
            newState[elemIndex].dataseries.push(price);
        }
        return newState;
    }, oldData)  
}