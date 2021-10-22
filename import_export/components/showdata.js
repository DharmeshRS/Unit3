async function getData(url){
    let res=await fetch(url)
    let data=await res.json()
    return data
}

function append(data,container){
    data.forEach(({strMeal,strCategory,strArea,strInstructions}) => {
        let div=document.createElement("div")
        let pmeal=document.createElement("p")
        pmeal.innerText=strMeal
        let pcat=document.createElement("p")
        pcat.innerText=strCategory
        let parea=document.createElement("p")
        parea.innerText=strArea
        let pinstruction=document.createElement("p")
        pinstruction.innerText=strInstructions
       
        div.append(pmeal,pcat,parea,pinstruction)
        container.append(div)
    });
}
export {getData,append}