var users =[
    {
    email:"aziz@gmail.com",
    name:"Aziz",
    pic:"https://miro.medium.com/v2/resize:fit:2400/1*Teu2BMfm35kKukTbYXmzHg.jpeg"
},
{
    email:"walid@gmail.com",
    name:"Walid",
    pic:"https://media.licdn.com/dms/image/D4E03AQEIEuTJQmlnPg/profile-displayphoto-shrink_800_800/0/1670771157702?e=2147483647&v=beta&t=TatOzlGb13kt6nPEvQVBJTOg9cuy1YgRfmVpUhLS7Zk"
},
{
    email:"khalil@gmail.com",
    name:"Khalil",
    pic:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max"
},
{
    email:"ranya@gmail.com",
    name:"Ranya",
    pic:"https://media.licdn.com/dms/image/C4E03AQGvGhQ0rUp3_A/profile-displayphoto-shrink_800_800/0/1637504210775?e=2147483647&v=beta&t=mxJ_dluw-ZGmFNfHtGehbU5EhddMm-bnoGw6AaE0bR0"
}
]

function check() {
    var email = document.getElementsByClassName('input')[0].value;
    var check = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        check = true;
        console.log("welcome home ");
        window.location.href = "home.html";
        break; // Exit the loop since the email is found
      }
    }
    if (!check) {
      console.log("rak ghalet");
      alert("You entered the wrong email.");
    }
  }