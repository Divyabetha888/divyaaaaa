console.log("Hello from JS");
alert("Hello from JS");
const users=[
    {
        "name":"Jane Doe",
        "gender" : "Female",
        "image": "../images/jane.png"

    },
    {
        "name": "John Doe",
        "gender": "Male",
        "image":"../images/john.png"
    },
]
let curUserId=0;

function toggle(){
    if(cuUserId==0){
        cuUserId=1;
    }
    else
        cuUserId=0;

    document.getElementById("img").src=users[curUserId].image;
    document.getElementById("card-name").innerText=users[curUserId].name;

}
