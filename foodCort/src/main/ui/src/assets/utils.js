export function createDiv(classesArray){
    let result = document.createElement("div");
    classesArray.forEach(clazz => result.classList.add(clazz));
    return result;
}

  /*

   Notes: a) {...obj} is the obj clon

          b) {...product, quantity: 0} is equal to Object.assign({...product}, {quantity: 0}
   */

export function cloneData(productDataSource){
    return Object.keys(productDataSource).reduce((result, category)=>{
        result[category] = productDataSource[category].map(product => ({...product, quantity: 0}));
        return result;
    },{})
}


