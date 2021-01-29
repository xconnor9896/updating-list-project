class User{
    constructor(firstName, lastName, DoB, departure, arrival, leaveDate, returnDate, bags, meal, extra, id){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DoB = DoB;
        this.departure = departure;
        this.arrival = arrival;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.extra = extra;
        this.id = id;
    }
}

let userList = [];
let idCount = 0;
let extraCost = 0;
let age = 0;
let tripDuration = 0;

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    let departure = document.getElementById("departure").value;
    let arrival = document.getElementById("arrival").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById('bags').value;
    let radio = document.getElementsByName('meal');


    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            var meal = radio[i].value;
            break;
        }
    }


    let checkbox = document.getElementsByName('extra');
    let extra = "";
    for(let j = 0; j < checkbox.length; j++){
        if(checkbox[j].checked){
            extra += `${checkbox[j].value} `;
            extraCost += 10;
        }
    }

    
    if(firstName != "" && lastName != "" && DoB != "" && departure != "" && arrival != "" && leaveDate != "" && returnDate != ""){
        let user = new User(firstName, lastName, DoB, departure, arrival, leaveDate, returnDate, bags, meal, extra, idCount);
        
        idCount++;
        userList.push(user);
        console.log(userList[0]);
        let birthdate = new Date(DoB);
        age = Date.now() - birthdate.getTime();
        age = Math.abs(Math.floor(age / (1000 * 60 * 60 * 24 * 365.25)));
        
        let leave = new Date(leaveDate);
        let returnD = new Date(returnDate);
        diff = returnD.getTime() - leave.getTime();
        tripDuration = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)));

        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("DoB").value = "";
        document.getElementById("departure").value = "";
        document.getElementById("arrival").value = "";
        document.getElementById("leaveDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = "";
    }
}


function printNames(){
    let space = document.getElementById("names")
    
    for(let i = 0; i < userList.length; i++){
        space.innerHTML += `<div><span>${userList[i].id}</span>${userList[i].firstName} ${userList[i].lastName}</div>`;
    }
}


function search(){
    let searchedID = document.getElementById("search").value;
    document.getElementById('outfirstName').value = userList[searchedID].firstName;
    document.getElementById('outlastName').value = userList[searchedID].lastName;
    document.getElementById('outDoB').value = userList[searchedID].DoB;
    document.getElementById('outdeparture').value = userList[searchedID].departure;
    document.getElementById('outarrival').value = userList[searchedID].arrival;
    document.getElementById('outleaveDate').value = userList[searchedID].leaveDate;
    document.getElementById('outreturnDate').value = userList[searchedID].returnDate;
    document.getElementById('outbags').value = userList[searchedID].bags;
    document.getElementById('outmeal').value = userList[searchedID].meal;
    document.getElementById('outextras').value = userList[searchedID].extra;
    document.getElementById('outcost').textContent = `$3${extraCost}`;
    document.getElementById('outage').textContent = `${age}`;
    document.getElementById('outduration').textContent = `${tripDuration}`;

}

