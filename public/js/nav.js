let profileIcon = document.getElementById('profile-icon');
let profileDiv = document.querySelector('.profile-div');

function toggleProfileDiv(e) {
    profileDiv.classList.toggle("pd-hidden");
    profileDiv.classList.toggle("pd-visible");
}

// profileIcon.onclick = toggleProfileDiv;

document.addEventListener("click", (e) => {
    if (!profileIcon.contains(e.target) && !profileDiv.contains(e.target)) {
        profileDiv.classList.add("pd-hidden");
        profileDiv.classList.remove("pd-visible");
    }
})

let menuIcon = document.querySelector(".menu-icon");
let sideNav = document.querySelector(".side-nav");
let sideNavIcon = document.querySelector(".ic");

function toggleNavbar(e) {
    sideNav.classList.toggle("sn-visible");
    sideNav.classList.toggle("sn-hidden");
    sideNavIcon.classList.toggle("fa-close");
    sideNavIcon.classList.toggle("fa-navicon");
}
menuIcon.onclick = toggleNavbar;


document.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !sideNav.contains(e.target)) {
        sideNav.classList.add("sn-hidden");
        sideNavIcon.classList.add("fa-navicon");

        sideNav.classList.remove("sn-visible");
        sideNavIcon.classList.remove("fa-close");
    }
})


function logout() {
    let signoutBtns = document.querySelectorAll(".signout");
    signoutBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "/logout";
        });
    });
}
logout();


let shareBtn = document.getElementById("share");
shareBtn.addEventListener("click", () => {
    let url = window.location.href;
    var msg = null;
    navigator.clipboard.writeText(url)
        .then(() => {
            msg = "Link copied!";
            notify(msg, "blue");
        })
        .catch(err => {
            msg = "Couldn't copy link!";
            notify(msg, "red");
        })
});

