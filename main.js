const form = document.getElementById('form')
console.log(form)
const task = document.querySelector('#task');
console.log(task);
const submit = document.querySelector('#button');
console.log(submit);
const tasks = document.querySelector('#tasks');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
   if (task.value == ''){
    return undefined;
   }
   

   const myTask = document.createElement('li')
    myTask.innerHTML = `
         <input type=checkbox>
        <p>${task.value}</p>
        <button type='button'>Delete</button> `
  
   myTask.querySelector('input[type="checkbox"]').addEventListener('change', (e)=>{
        const taskCheck = e.target.parentNode;
        
        
        taskCheck.querySelector('p').classLink.toggle('done');
        
    } );  

   myTask.querySelector('button').addEventListener('click', (e) =>{
        const taskDelete=e.target.parentNode
        tasks.removeChild(taskDelete);
 
    } );
   
    tasks.appendChild(myTask);
    task.value = '';
});

  
   






