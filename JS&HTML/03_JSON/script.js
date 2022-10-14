// var person = {
//     "firstname": "Gerhard",
//     "lastname": "Huber",
//     "age": 67,
//     "image": "https://thumbs.dreamstime.com/b/gl%C3%BCcklicher-alter-mann-der-auf-sofa-mit-laptop-sitzt-27720792.jpg"
// }

var people = [
    {
        "firstname": "Gerhard",
        "lastname": "Huber",
        "age": 67,
        "image": "https://thumbs.dreamstime.com/b/gl%C3%BCcklicher-alter-mann-der-auf-sofa-mit-laptop-sitzt-27720792.jpg"
    },
    {
        "firstname": "Hugo",
        "lastname": "Portisch",
        "age": 48,
        "image": "https://image.shutterstock.com/image-photo/portrait-mature-man-blue-shirt-260nw-710083906.jpg"
    },
    {
        "firstname": "Heirich",
        "lastname": "Kran",
        "age": 53,
        "image": "https://media.gettyimages.com/photos/confident-mature-man-picture-id478663329?s=612x612"
    }
]

var html = "";
for (let i = 0; i < people.length; i++) {
    html += "<div class='card'><div class='first'>";
    html += "<ul>";
    html += "<li>" + people[i].firstname + "</li>";
    html += "<li>" + people[i].lastname + "</li>";
    html += "</ul>";
    html += "</div>";
    html += '<div class="second"><img src="' + people[i].image + '" ></div>';
    html += '<div class="third">' + people[i].age + '</div></div>';
}

document.getElementById("wrapper").innerHTML = html;


