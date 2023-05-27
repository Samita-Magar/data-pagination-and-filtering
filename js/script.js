/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // create two variables that will represent the index for the first and last student on the page
   let startIndex = (page - 1) * 9;
   let endIndex = startIndex + 9;
 
   // select the element with a class of `student-list` and assign it to a variable
   let studentList = document.querySelector('.student-list');

   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = '';
 
   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++) {

      // inside the loop create a conditional to display the proper students
     if (i >= startIndex && i < endIndex) {

      //inside the conditional, create the elements needed to display the student information
       let studentItem = `
         <li class="student-item cf">
           <div class="student-details">
             <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
             <h3>${list[i].name.first} ${list[i].name.last}</h3>
             <span class="email">${list[i].email}</span>
           </div>
           <div class="joined-details">
             <span class="date">Joined ${list[i].registered.date}</span>
           </div>
         </li>
       `;
       // insert the above elements
       studentList.insertAdjacentHTML('beforeend', studentItem);
     }
   }
 }
 

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // create a variable to calculate the number of pages needed
   let numOfPages =  Math.ceil(list.length / 9);

   // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');

   // set the innerHTML property of the variable you just created to an empty string 
   linkList.innerHTML = '';
   // loop over the number of pages needed
   for(let i=1; i<= numOfPages; i++) {

      // create the elements needed to display the pagination button
      let button = `
      <li>
      <button type = "button">${i}</button>
      </li>
      `;

      // insert the above elements
      linkList.insertAdjacentHTML('beforeend', button);
   }

   // give the first pagination button a class of "active"
   let firstButton = linkList.querySelector('button');
   firstButton.className = 'active';

   // create an event listener on the `link-list` element
   linkList.addEventListener('click', function (event) {

      // if the click target is a button:
      if (event.target.tagName === 'BUTTON') {

      // remove the "active" class from the previous button
        let activeButton = linkList.querySelector('.active');
        activeButton.className = '';

        // add the active class to the clicked button
        event.target.className = 'active';

         // call the showPage function passing the `list` parameter and page to display as arguments
        showPage(list, event.target.textContent);
      }
    });
}


// Call functions
showPage(data, 1);
addPagination(data);