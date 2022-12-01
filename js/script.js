const $ = document;
const userCard = $.querySelector(".user-card");
let userPicture = $.querySelector(".user-card__img");
let userName = $.querySelector(".user-card__name");
let userEmail = $.querySelector(".user-email");
let userPhone = $.querySelector(".user-phone");
let userCountry = $.querySelector(".user-country");
let userAddress = $.querySelector(".user-address");

window.addEventListener("load", () => {
    fetch("https://randomuser.me/api/")
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error("Not Found!");
            }
        })
        .then((data) => {
            const user = data.results[0];
            return user;
        })
        .then((data) => {
            userCard.classList.remove("card-loader");
            userPicture.src = data.picture.large;
            userName.innerHTML = `${data.name.first} ${data.name.last}`;
            userEmail.innerHTML = data.email;
            userPhone.innerHTML = data.phone;
            userCountry.innerHTML = data.location.country;
            userAddress.innerHTML = `${data.location.city}, ${data.location.street.name}, ${data.location.street.number}`;
        })
        .catch((err) => {
            console.log(err);
        });
});
