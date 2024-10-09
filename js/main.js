

let entertask=document.getElementById('taskinput');
let addtaskbtn=document.getElementById('addtaskbtn');
let emptytask=document.getElementById('emptytask');
let alltasks=document.getElementById('alltasks');
let removetasks=document.getElementById('removetasks');

let checkemptytask=()=>{
   if(alltasks.children.length==0){
      emptytask.classList.remove("none");
      removetasks.classList.add('none'); 
   }else{
      emptytask.classList.add("none");
      removetasks.classList.remove('none'); 
   }
}


let addtask=()=>{
   emptytask.classList.add("none");
   let taskvalue=entertask.value;
   
   /*ecma
   *let taskdiv =document.createElement('div');
   taskdiv.classList.add('alert', 'alert-success');
   taskdiv.append(taskvalue);
   alltasks.append(taskdiv);
   
  let deleticon=document.createElement('button');
  deleticon.classList.add("btn",'text-danger',"fa-solid", "fa-trash", 'float-end');
 
 taskdiv.append(deleticon);
 */
if(taskvalue.trim()==""){
   alert('please enter your task')
}else{
   alltasks.innerHTML +=  `
   <div class='alert task alert-success '>
   ${taskvalue}
   <button class=' delete btn text-danger fa-solid fa-trash float-end' ></button>
   </div>
     `;
    
     entertask.value='';
   
} 
  checkemptytask()
}
addtaskbtn.addEventListener("click",addtask);

document.addEventListener("click",function(event){
if(event.target.classList.contains('delete')){
   event.target.parentElement.remove();
   checkemptytask();

}

});
let deleteall=()=>{
   alltasks.innerHTML='';
   checkemptytask();

}
removetasks.addEventListener('click',deleteall);


document.addEventListener("click",function(event){
   if(event.target.classList.contains('task')){
      event.target.classList.toggle('checked');
      
   
   }});

























/*
/*let bg = document.querySelector(".bg-color");
let textcolor = document.querySelector(".text-color"); 

username.onkeyup= function(){
let uservalue= username.value;
mydiv.innerHTML=`<h5> ${uservalue} </h5>`; 
} */