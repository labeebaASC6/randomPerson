var buttonEl = document.getElementById("request_button");
buttonEl.addEventListener('click', fetchPerson);

var inputEl = document.getElementById("request_input");
inputEl.addEventListener('change', checkforNegative);


function checkforNegative()
{
    if(inputEl.value < 1)
    {
        inputEl.value = 1;      //dont let it be negative
    }
    if(inputEl.value > 4999)
    {
        inputEl.value = 4999;      //dont let it be above max
    }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const url = "https://randomuser.me/api/"; //https://randomuser.me/api/  https://randomuser.me/api/?results=
const peopleContainer = document.getElementById("people_container");
let person_name, person_imgSrc, person_gender, person_email, person_age, person_phone;

function fetchPerson()
{
    fetch(`https://randomuser.me/api/?results=${inputEl.value}`)
    .then( (resp) => resp.json())
    .then( function(data){
        makePerson(data)
    });
}
function makePerson(personObj)
{

    for(let i in personObj.results) // giet'em
    {
        let personArray = personObj.results[i];
        let firstName = capitalizeFirstchar(personArray.name.first);
        let lastName = capitalizeFirstchar(personArray.name.last);
        person_name = `${firstName} ${lastName}`;
        person_imgSrc = personArray.picture.large;
        person_email = personArray.email;
        person_age = personArray.dob.age;
        person_phone = personArray.cell;
        person_location = `${personArray.location.street}, ${personArray.location.city}, ${personArray.location.state}, ${personArray.location.postcode}`;
    
        createPersonBanner();
    }
}
function createPersonBanner()
{
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "root_container"); //the whole box for the individual

    
    var imgDiv = document.createElement("div");
    // imgDiv.setAttribute("class", "img_container");
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", person_imgSrc);   //face reveal xd
    newDiv.appendChild(imgElement);

    var infoDiv = document.createElement("div");    //other side of the person box, should be beside img container
    infoDiv.setAttribute("class", "info_container");

    var nameDiv = document.createElement("div");    
    // nameDiv.setAttribute("class", "name_container");
    var nameElement = document.createElement("h3");
    nameElement.innerText = person_name; //steal person name
    nameDiv.appendChild(nameElement); //poot name into div
        infoDiv.appendChild(nameDiv);   //poot name line into info box
    var addressElement = document.createElement("p");
    addressElement.innerText = `Address: ${person_location}`;   //literally make him vulnerable
        infoDiv.appendChild(addressElement);
    var emailElement = document.createElement("p");
    // addressElement.setAttribute("class", "info_container")
    emailElement.innerText = `Email: ${person_email}`;    //expose email for spam targetters xd
        infoDiv.appendChild(emailElement);
    var ageElement = document.createElement("p");
    ageElement.innerText = `Age: ${person_age}`;    //stop making age-validity jokes they are cringey
        infoDiv.appendChild(ageElement);
    var phoneElement = document.createElement("p");
    phoneElement.innerText = `Phone: ${person_phone}`   //try prank-calling them, its the api sites fault if someone is harmed.
        infoDiv.appendChild(phoneElement);
    newDiv.appendChild(infoDiv);


    peopleContainer.appendChild(newDiv);  //poot the person into website...
}

function capitalizeFirstchar(string)
{
    var firstLetter = string.charAt(0).toUpperCase();
    var slicedString = string.slice(1)
    return firstLetter + slicedString;
}
// function addPerson()
// {
//     let person_name = person.name.first + " " + person.name.last;
//     let person_imgSrc = person.picture.large;

//     var newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "root_container"); //the whole box for the individual

//     var nameDiv = document.createElement("div");    //poosh name line first, plan to make it    f  l  e  x
//     nameDiv.setAttribute("class", "name_container");
//     var person_name = document.createElement("h3");
//     person_name.innerText = person.name.first + " " + person.name.last; //steal person name
//     nameDiv.appendChild(person_name); //poot name into div
//     var person_img = document.createElement("img");
//     person_img.setAttribute("src", person.picture.large);   //face reveal xd
//     nameDiv.appendChild(person_img);
//     newDiv.appendChild(nameDiv);   //poot name line into og box

//     peopleContainer.appendChild(newDiv);  //poot the person into the box...
// }