 
// ------------------TO DO LİST--------------------





let form=document.querySelector("#addTaskForm");
let input=document.querySelector("#txtTaskName");
let btnDeleteAll=document.querySelector("#btnDeleteAll");
let addList=document.querySelector("#task-list");
// let icons=["icon1","icon2","icon3"];
let icons;


// createElement()


eventListeners()


function eventListeners(){
    form.addEventListener("submit",addTodoİtem);
    addList.addEventListener("click",deleteIcons);
    btnDeleteAll.addEventListener("click",deleteButtons);


};

function createElement(icon){
    let li=document.createElement("li");
    li.classList="list-group-item list-group-item-secondary";
    // console.log(li)
    li.textContent=icon;
    let a=document.createElement("a");
    a.classList="delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML=  '<i class="fas fa-times"></i>'
    li.appendChild(a);
    addList.appendChild(li);

}
function loadItems(){
items=getItemFromLocalStorage();

icons.forEach(function(icon){
    createElement(icon);
})}

function getItemFromLocalStorage(){
    if(localStorage.getItem("items")===null){
        items=[]
    }
    else{
        items=JSON.parse(localStorage.getItem("items"))
    }
    return items ;
}

function setItemToLocalStorage(text){
    items=getItemFromLocalStorage();
    items.push(text);
    localStorage.setItem("items",JSON.stringify(items));
}




function addTodoİtem(e){
  
if(input.value===""){
    alert("lütfen değer giriniz");
}

    
 
        let li=document.createElement("li");
        li.classList="list-group-item list-group-item-secondary";
        console.log(li)
        li.textContent=input.value;
        let a=document.createElement("a");
        a.classList="delete-item float-right";
        a.setAttribute("href","#");
        a.innerHTML=  '<i class="fas fa-times"></i>'
        li.appendChild(a);
        addList.appendChild(li);

        setItemToLocalStorage(input.value);

        input.value=""

        

    e.preventDefault()


}
 function deleteItemFromLocalStorage(text){
    items=getItemFromLocalStorage();
    items.forEach(function(item,index){
        if(item===text){
            items.splice(index,1)
        }
    })
    localStorage.setItem("items",JSON.stringify(items));



 }


function deleteIcons(e){
    if(e.target.className==='fas fa-times'){
       console.log(e.target)
       e.target.parentElement.parentElement.remove()
    }
    
    deleteItemFromLocalStorage(e.target.parentElement.parentElement.textContent)
//  console.log(e.target.parentElement.parentElement.textContent)

    e.preventDefault();
}

function deleteButtons(e){
    // addList.remove();
     console.log(addList.childNodes)
    addList.childNodes.forEach(function(item){
        if(item.nodeType===1){
            item.remove();

        }
       

    });
    localStorage.clear();
    
     e.preventDefault()
}


