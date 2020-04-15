// function ajaxCall() {
//     var ajaxRequest = new XMLHttpRequest();

//     ajaxRequest.onreadystatechange = function() {
//         if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//            if (ajaxRequest.status == 200) {
//                var myDiv = document.querySelector('.main');
//                var newDiv = document.createElement('div');
//                newDiv.innerHTML = ajaxRequest.responseText;
//                myDiv.appendChild(newDiv);
//                console.log(ajaxRequest);
//            }
//            else if (ajaxRequest.status == 400) {
//               console.log('There was an error 400');
//            }
//            else {
//               console.log('something else other than 200 was returned');
//            }
//         }
//     };

//     ajaxRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos', true);
//     ajaxRequest.send();
// }

// (function(document){
//   var myBtn = document.getElementById('myButton');
//   myBtn.addEventListener('click', ajaxCall);
//   console.log(myBtn);
// })(document);

// var list = $('.userList');

// $.get('https://reqres.in/api/users?page=2', function(response){
//   console.log(response);
//   $.each(response.data, function(){
//     console.log(this);
//     var li = $('<li></li>');
//     li.text(this.first_name + ' ' + this.last_name);
//     list.append(li);
//   });
// })

function getAllUsers() {
  return new Promise(function(resolve,reject) {
    $.get('https://my-json-server.typicode.com/typicode/demo/profile/2', function(users){
      if (users.length){
        resolve(users);
      }
      else {
        reject("Error");
      }
    })
  })
}

function getAllPosts() {
  return new Promise(function(resolve,reject){
    $.get('https://my-json-server.typicode.com/typicode/demo/posts', function(posts){
      resolve(posts);
    })
  })
}

var usersPromise = getAllUsers();
var postsPromise = getAllPosts();

Promise.all([usersPromise, postsPromise])
  .catch("Danger Will Robinson, Danger!")
  .then(function(results){
    console.log(results[0]);
    console.log(results[1]);
  })