// POSTMAN GENERATED:
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };
// fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

function registerEvents() {
    document.getElementById("loadTodos").addEventListener("click", function () {
        loadTodos();
    })
    document.getElementById("loadUsers").addEventListener("click", function () {
        loadUsers();
    })
}

function loadTodos() {
    //API request
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(todo => {
                html += "<li>" + todo.title + "</li>";
            });

            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = "";
            data.forEach(user => {
                html += "<li>" + user.name + "</li>";
            });

            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

registerEvents();