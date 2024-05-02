export const updateObjArray = (items,objPropName,itemId,newObjProps)=>{
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}