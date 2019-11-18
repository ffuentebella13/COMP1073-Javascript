let close = document.getElementsByClassName("remove"); // Making a class named remove

//checklist
let checkList = document.querySelector('ul');// getting the ul
checkList.addEventListener('click', function(check) { // if click a function will be called
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked'); // add check inline from css
  }
}, false);

function addNewTask(){ // calling the function if post is press
		let ul = document.getElementById("task"); 
		let addTask = document.getElementById("addTask");// getting the id of the inputed text

		let li = document.createElement("li"); // creating <li> tag inside the ul
			li.setAttribute('id',addTask.value);
			li.appendChild(document.createTextNode(addTask.value));
			


			ul.appendChild(li);//append new list inside the ul
			
		if(addTask.value === '' || addTask.value === null) //checking for empty string
		{
			alert("Please write something before saving!");

		}	
		else{ //if not empty
			ul.appendChild(li);//add new list
			let sub = document.createElement("sup");
			let txt = document.createTextNode("");
			sub.className = "remove"; //add close button
			sub.appendChild(txt); 
			li.appendChild(sub);
			document.getElementById("addTask").value = ""; //clear the input type after it is added to txt
		  for (i = 0; i < close.length; i++) {//the remove if click display nothing
			close[i].onclick = function() { //check which array pos will be deleted
			  let div = this.parentElement;
			  div.style.display = "none";
			}
		  }
		}
}

