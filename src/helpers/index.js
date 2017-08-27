
const CLASS_CONSTANTS = {
    NEW : "new",
    INCREASED : "incr",
    DECREASED : "decr",
    CONSTANT : "const"
}

export const formatIncomingData = (data) => {
    let modifiedData = data.reduce((final, curr) =>{
        let [name,price,] = curr;
            final.push({name,price, updatedAt : new Date().getTime()})
        return final;
    }, [])
    return modifiedData
}

export const updateListData = (newData, oldData) => {
        let newState = Object.assign([],oldData);
        let updatedAt = new Date().getTime();
        newData.forEach(function(elem) {
            let {name,price} = elem;
            let elemIndex = newState.findIndex(x => x.name === name);
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
                newState[elemIndex].dataseries = [...newState[elemIndex].dataseries,price];
            }
        }, this);
        return newState;
}