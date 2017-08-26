export const UPDATE_DATA = "UPDATE_DATA";

export function watchIncomingData(newList) {
    return {
        type : UPDATE_DATA,
        payload : newList
    }
}
