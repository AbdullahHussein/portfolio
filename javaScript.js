// Start EnterExit
var enter = document.getElementById("fullscreen"),
    exit  = document.getElementById("exit"),
    resLogo  = document.getElementById("res-logo"),
    resLogo01  = document.getElementById("res-logo01");

    var nameInput = document.getElementById("nameInput"),
    nameEffect = document.getElementsByClassName("nameEffect"),
    emailInput = document.getElementById("emailInput"),
    textareaInput = document.getElementById("textareaInput"),
    subjectInput = document.getElementById("subjectInput"),
    fifthPlate = document.getElementById("fifth-plate"),
    send = document.getElementById("send"),
    reset = document.getElementById("reset");

// enter.addEventListener("mouseover", enterOver);
// function enterOver() {
//     // enter.classList.remove("enter-anim");

//     // enter.style.transform = "scale(1.2) rotate(720deg)";
//     // enter.style.transition = "all .5s ease";
// }
// enter.addEventListener("mouseleave", enterLeaver);
// function enterLeaver() {
//     enter.classList.add("enter-anim");

//     enter.style.transform = "scale(1) rotate(0deg)";
//     enter.style.transition = "all .7s ease-out";
// }
enter.addEventListener("click", enterClick);
function enterClick() {
    document.documentElement.requestFullscreen();

    enter.onmouseleave = function () {
        enter.classList.remove("enter-anim");
    }

    enter.classList.remove("enter-anim");
    enter.style.display = "none";
    exit.style.display  = "block";
}

// exit.addEventListener("mouseover", exitOver);
// function exitOver() {
//     exit.style.transform = "scale(1.2) rotate(720deg)";
//     exit.style.transition = "all .5s ease";
// }
// exit.addEventListener("mouseleave", exitLeave);
// function exitLeave() {
//     exit.style.transform = "scale(1) rotate(0deg)";
//     exit.style.transition = "all .7s ease-out";
// }
exit.addEventListener("click", exitClick);
function exitClick() {
    document.exitFullscreen();

    exit.style.display  = "none";
    enter.style.display = "block";
}


resLogo.onclick = function () {
    document.documentElement.requestFullscreen();
    resLogo.style.display = "none";
    resLogo01.style.display = "block";
}
resLogo01.onclick = function () {
    document.exitFullscreen();
    resLogo01.style.display = "none";
    resLogo.style.display = "block";
}
// End EnterExit

// Start NavBar
var home = document.getElementById("home"),
    about = document.getElementById("about"),
    edu = document.getElementById("edu"),
    touch = document.getElementById("touch"),
    footer = document.getElementById("footer");
home.onclick = function () { //navbaredit
    home.style.color = "rgb(255, 255, 255)";
    
    // home.style.borderRadius = ".4vw";
    about.style.backgroundColor = "transparent";
    about.style.boxShadow = "none";
    about.style.padding = "none";
    about.style.color = "none";
    about.style.borderRadius = "none";
    edu.style.backgroundColor = "transparent";
    edu.style.boxShadow = "none";
    edu.style.padding = "none";
    edu.style.color = "none";
    edu.style.borderRadius = "none";
    touch.style.backgroundColor = "transparent";
    touch.style.boxShadow = "none";
    touch.style.padding = "none";
    touch.style.color = "none";
    touch.style.borderRadius = "none";
    // home.onmouseover = function () {
    //     if (home.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
    //         home.style.color = "rgb(31, 50, 65)";
    //     } else if (home.style.boxShadow === "none") {
    //         home.style.color = "rgb(30, 162, 216)";
    //     }
    // }
    // home.onmouseleave = function () {
    //     if (home.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
    //         home.style.color = "rgb(31, 50, 65)";
    //     } else if (home.style.boxShadow === "none") {
    //         home.style.color = "rgb(31, 50, 65)";
    //     }
    // }
}
about.onclick = function () {
    home.style.backgroundColor = "transparent";
    home.style.boxShadow = "none";
    home.style.padding = "none";
    home.style.color = "none";
    home.style.borderRadius = "none";
    about.style.backgroundColor = "rgb(30, 162, 216, .2)";
    about.style.boxShadow = ".2vw .2vw .2vw rgb(30, 162, 216, .8)";
    about.style.padding = ".28vw .5vw .28vw .5vw";
    about.style.color = "rgb(32, 50, 66, .8)";
    about.style.borderRadius = ".4vw";
    edu.style.backgroundColor = "transparent";
    edu.style.boxShadow = "none";
    edu.style.padding = "none";
    edu.style.color = "none";
    edu.style.borderRadius = "none";
    touch.style.backgroundColor = "transparent";
    touch.style.boxShadow = "none";
    touch.style.padding = "none";
    touch.style.color = "none";
    touch.style.borderRadius = "none";
    about.onmouseover = function () {
        if (about.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
            about.style.color = "rgb(31, 50, 65)";
        } else if (about.style.boxShadow === "none") {
            about.style.color = "rgb(30, 162, 216)";
        }
    }
    about.onmouseleave = function () {
        if (about.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
            about.style.color = "rgb(31, 50, 65)";
        } else if (about.style.boxShadow === "none") {
            about.style.color = "rgb(31, 50, 65)";
        }
    }
}
edu.onclick = function () {
    home.style.backgroundColor = "transparent";
    home.style.boxShadow = "none";
    home.style.padding = "none";
    home.style.color = "none";
    home.style.borderRadius = "none";
    about.style.backgroundColor = "transparent";
    about.style.boxShadow = "none";
    home.style.padding = "none";
    about.style.color = "none";
    about.style.borderRadius = "none";
    edu.style.backgroundColor = "rgb(30, 162, 216, .2)";
    edu.style.boxShadow = ".2vw .2vw .2vw rgb(30, 162, 216, .8)";
    edu.style.padding = ".28vw .5vw .28vw .5vw";
    edu.style.color = "rgb(32, 50, 66, .8)";
    edu.style.borderRadius = ".4vw";
    touch.style.backgroundColor = "transparent";
    touch.style.boxShadow = "none";
    touch.style.padding = "none";
    touch.style.color = "none";
    touch.style.borderRadius = "none";
    edu.onmouseover = function () {
        if (edu.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
            edu.style.color = "rgb(31, 50, 65)";
        } else if (edu.style.boxShadow === "none") {
            edu.style.color = "rgb(30, 162, 216)";
        }
    }
    edu.onmouseleave = function () {
        if (edu.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
            edu.style.color = "rgb(31, 50, 65)";
        } else if (edu.style.boxShadow === "none") {
            edu.style.color = "rgb(31, 50, 65)";
        }
    }
}
touch.onclick = function () {
    home.style.backgroundColor = "transparent";
    home.style.boxShadow = "none";
    home.style.padding = "none";
    home.style.color = "none";
    home.style.borderRadius = "none";
    about.style.backgroundColor = "transparent";
    about.style.boxShadow = "none";
    home.style.padding = "none";
    about.style.color = "none";
    about.style.borderRadius = "none";
    edu.style.backgroundColor = "transparent";
    edu.style.boxShadow = "none";
    edu.style.padding = "none";
    edu.style.color = "none";
    edu.style.borderRadius = "none";
    touch.style.backgroundColor = "rgb(30, 162, 216, .2)";
    touch.style.boxShadow = ".2vw .2vw .2vw rgb(30, 162, 216, .8)";
    touch.style.padding = ".28vw .5vw .28vw .5vw";
    touch.style.color = "rgb(32, 50, 66, .8)";
    touch.style.borderRadius = ".4vw";
    touch.onmouseover = function () {
        if (touch.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
            touch.style.color = "rgb(31, 50, 65)";
        } else if (touch.style.boxShadow === "none") {
            touch.style.color = "rgb(30, 162, 216)";
        }
    }
    touch.onmouseleave = function () {
        if (touch.style.boxShadow === ".2vw .2vw .2vw rgb(30, 162, 216, .8)") {
            touch.style.color = "rgb(31, 50, 65)";
        } else if (touch.style.boxShadow === "none") {
            touch.style.color = "rgb(31, 50, 65)";
        }
    }
}
// End NavBar

// Start window.onload
var media              = document.getElementById("socialMedia"),
    arrow              = document.getElementById("arrow"),
    arrowBtn           = document.getElementById("arrow-down1"),
    introArrow         = document.getElementById("intro-arrow"),
    ops                = document.getElementById("ops"),
    logoBox            = document.getElementById("logo-box"),
    resBox             = document.getElementById("res-third-plate-box"),
    loader             = document.getElementById("loader-main");
    nameWriter         = document.getElementById("nameWriter"),
    positionWriter     = document.getElementById("positionWriter"),
    nameTitleContainer = document.getElementById("name-title-container");

introArrow.addEventListener("mouseover", arrowOver);
function arrowOver() {
    arrow.style.transform = "rotateX(-720deg)";
    arrow.style.border = ".15vw solid rgb(30, 162, 216)";
    arrow.style.transition = "all .8s ease";

    arrowBtn.style.color = "rgb(30, 162, 216)";
    arrowBtn.style.transform = "translateY(.8vw)";
    arrowBtn.style.transition = "all .8s ease";
}
introArrow.addEventListener("mouseleave", arrowLeave);
function arrowLeave() {
    arrow.style.transform = "rotateX(0deg)";
    arrow.style.border = ".15vw solid rgb(32, 50, 66)";
    arrow.style.transition = "all 1s ease-out";

    arrowBtn.style.color = "rgb(32, 50, 66)";
    arrowBtn.style.transform = "translateY(0)";
    arrowBtn.style.transition = "all 1s ease-out";
}

window.onload = function () {
    arrow.classList.add("arr-anim");
    arrowBtn.classList.add("arrow-anim");
    arrow.onmouseover = function () {
        arrow.classList.remove("arr-anim");
        arrowBtn.classList.remove("arrow-anim");
    }
    
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(function() {
        document.body.style.overflowY = "visible";
    }, 750);

    setTimeout(function () {
        media.style.right = "0vw";
        media.style.transition = "all .3s ease-out";
    }, 2000);

    nameTitleContainer.style.visibility = "visible";
    nameWriter.classList.add("anim-typewriter");
    positionWriter.classList.add("anim-typewriter");
    // enter.classList.add("enter-anim");
    ops.style.transform = "translateY(0) scale(1)";
    resLogo.style.transform = "translateY(0)scale(1)";
    logoBox.style.transform = "translateY(0)";
    setTimeout(function () {
        resBox.style.boxShadow = "-.3vw -.3vw .3vw rgb(32, 50, 66)inset";
    }, 8000);
    resBox.style.opacity = "1";
}
// End window.onload

// Start Scroll 
var navBar = document.getElementById("nav-bar"),
    logo   = document.getElementById("logo"),
    logo01   = document.getElementById("logo01"),
    logo02   = document.getElementById("logo02"),
    navNav = document.getElementById("navIconsFirst"),
    html   = document.getElementById("html-level"),
    css    = document.getElementById("css-level"),
    java   = document.getElementById("java-level"),
    es6    = document.getElementById("es6-level"),
    git    = document.getElementById("git-level"),
    res    = document.getElementById("res-level"),
    react  = document.getElementById("react-level"),
    levels = document.getElementsByClassName("levels"),
    relevel = document.getElementById("re-level"),
    english = document.getElementById("english-level"),
    german = document.getElementById("german-level"),
    arabic = document.getElementById("arabic-level"),
    langLevel = document.getElementsByClassName("lang-level"),
    x = document.getElementsByClassName("x"),
    messageIcon = document.getElementById("messageIcon"),
    downloadCv = document.getElementById("download-cv"),
    downloadCertificate = document.getElementById("download-certificate"),
    btnAA = document.getElementById("btnAA"),
    btnB = document.getElementById("btnB"),
    whatsApp = document.getElementById("whatsApp"),
    email = document.getElementById("email"),
    linkedin = document.getElementById("linkedin"),
    xing = document.getElementById("xing"),
    github = document.getElementById("github"),
    work    = document.getElementById("work"),
    footerDCI = document.getElementById("footer-dci"),
    logos = document.getElementsByClassName("logos"),
    bottomPlate = document.getElementById("bottom-plate"),
    positionsBox = document.getElementById("positions-box"),
    brandsName = document.getElementsByClassName("brands-name"),
    firstBrand = document.getElementById("first-brand"),
    secondBrand = document.getElementById("second-brand"),
    firstSpan = document.getElementsByClassName("first-span"),
    secondSpan = document.getElementsByClassName("second-span"),
    bottomPlateMain = document.getElementById("bottom-plate-main"),
    end = document.getElementById("end"),
    btnA = document.getElementsByClassName("btnA"),
    aboutContainer = document.getElementById("about-container"),
    firstLogo = document.getElementById("first-logo"),
    secondLogo = document.getElementById("second-logo");

window.onscroll = function () {
    if (document.documentElement.scrollTop > (window.innerHeight / 3)) {
        navBar.style.borderBottom = ".3vw solid rgb(30, 162, 216)";
        navBar.style.transition = "all .2s ease";
    } else if(document.documentElement.scrollTop < (window.innerHeight / 3)) {
        setTimeout(function () {
            navNav.style.width = "fit-content";
        }, 200);
        navBar.style.borderBottom = "0px solid transparent";
        navBar.style.transition = "all .1s ease-out";
    }
    if (document.documentElement.scrollTop < window.innerHeight && document.documentElement.scrollTop > 1) { //navbaredit
        home.style.color = "#1ea2d8";
        home.style.transition = "all .2s ease";
        about.style.color = "rgb(31, 50, 65)";
        about.style.transition = "all .1s ease-out";
        edu.style.color = "rgb(31, 50, 65)";
        edu.style.transition = "all .1s ease-out";
        touch.style.color = "rgb(31, 50, 65)";
        touch.style.transition = "all .1s ease-out";
        footer.style.color = "rgb(31, 50, 65)";
        footer.style.transition = "all .1s ease-out";

        logo01.style.transform = "translateY(-100%)";
        logo01.style.transition = "all 0s ease";

        setTimeout(function () {
            html.style.width = "95%";
            html.style.transition = "all .5s ease-out";
            css.style.width = "95%";
            css.style.transition = "all .5s ease-out";
            java.style.width = "90%";
            java.style.transition = "all .5s ease-out";
            es6.style.width = "80%";
            es6.style.transition = "all .5s ease-out";
            git.style.width = "20%";
            git.style.transition = "all .5s ease-out";
            res.style.width = "95%";
            res.style.transition = "all .5s ease-out";
            react.style.width = "20%";
            react.style.transition = "all .5s ease-out";
            setTimeout(function () {
                for(i = 0; i < 6; i++){
                    levels[i].style.transform = "translateY(0)";
                    levels[i].style.transition = "all .5s ease-out";
                }
                relevel.style.transform = "translateY(0)";
                relevel.style.transition = "all .5s ease-out";
            }, 500);
        }, 250);
    } else if (document.documentElement.scrollTop > window.innerHeight && document.documentElement.scrollTop < (window.innerHeight * 2)) {
        navBar.classList.add("navBarStyle"); //soso
        // setTimeout(function () {
        //     navNav.style.width = "3.7vw";
        // }, 200);

        logo01.style.transform = "translateY(0)";
        logo01.style.transition = "all .2s ease";

        about.style.color = "rgb(30, 162, 216)";
        about.style.transition = "all .2s ease";
        home.style.color = "rgb(31, 50, 65)";
        home.style.transition = "all .1s ease-out";
        edu.style.color = "rgb(31, 50, 65)";
        edu.style.transition = "all .1s ease-out";
        touch.style.color = "rgb(31, 50, 65)";
        touch.style.transition = "all .1s ease-out";
        footer.style.color = "rgb(31, 50, 65)";
        footer.style.transition = "all .1s ease-out";
    } else if(document.documentElement.scrollTop > (window.innerHeight * 2) && document.documentElement.scrollTop < (window.innerHeight * 3)) {
        setTimeout(function () {
            navNav.style.width = "fit-content";
        }, 200);
        edu.style.color = "rgb(30, 162, 216)";
        edu.style.transition = "all .2s ease";
        home.style.color = "rgb(31, 50, 65)";
        home.style.transition = "all .1s ease-out";
        about.style.color = "rgb(31, 50, 65)";
        about.style.transition = "all .1s ease-out";
        touch.style.color = "rgb(31, 50, 65)";
        touch.style.transition = "all .1s ease-out";
        footer.style.color = "rgb(31, 50, 65)";
        footer.style.transition = "all .1s ease-out";

        media.style.transform = "translateY(0%)";
        media.style.transition = "all .5s ease";

        navNav.style.backgroundColor = "rgb(30, 162, 216, .5)";
        navNav.style.transition = "all .5s ease";

        whatsApp.style.color = "rgb(31, 50, 65)";
        whatsApp.style.transition = "all .5s ease";

        email.style.color = "rgb(31, 50, 65)";
        email.style.transition = "all .5s ease";

        xing.style.color = "rgb(31, 50, 65)";
        xing.style.transition = "all .5s ease";

        linkedin.style.color = "rgb(31, 50, 65)";
        linkedin.style.transition = "all .5s ease";

        github.style.color = "rgb(31, 50, 65)";
        github.style.transition = "all .5s ease";


        whatsApp.onmouseover = function () {
            whatsApp.style.color = "rgb(30, 162, 216)";
            whatsApp.style.transition = "all .1s ease";
        }
        whatsApp.onmouseleave = function () {
            whatsApp.style.color = "rgb(31, 50, 65)";
            whatsApp.style.transition = "all .2s ease-out";
        }
        email.onmouseover = function () {
            email.style.color = "rgb(30, 162, 216)";
            email.style.transition = "all .1s ease";
        }
        email.onmouseleave = function () {
            email.style.color = "rgb(31, 50, 65)";
            email.style.transition = "all .2s ease-out";
        }
        linkedin.onmouseover = function () {
            linkedin.style.color = "rgb(30, 162, 216)";
            linkedin.style.transition = "all .1s ease";
        }
        linkedin.onmouseleave = function () {
            linkedin.style.color = "rgb(31, 50, 65)";
            linkedin.style.transition = "all .2s ease-out";
        }
        xing.onmouseover = function () {
            xing.style.color = "rgb(30, 162, 216)";
            xing.style.transition = "all .1s ease";
        }
        xing.onmouseleave = function () {
            xing.style.color = "rgb(31, 50, 65)";
            xing.style.transition = "all .2s ease-out";
        }
        github.onmouseover = function () {
            github.style.color = "rgb(30, 162, 216)";
            github.style.transition = "all .1s ease";
        }
        github.onmouseleave = function () {
            github.style.color = "rgb(31, 50, 65)";
            github.style.transition = "all .2s ease-out";
        }

            english.style.width = "calc(90% - .2vw)";
            english.style.transition = "all .5s ease-out";
            german.style.width = "calc(50% - .2vw)";
            german.style.transition = "all .5s ease-out";
            arabic.style.width = "calc(100% - .2vw)";
            arabic.style.transition = "all .5s ease-out";
            setTimeout(function () {
                for(i = 0; i < 3; i++){
                    langLevel[i].style.transform = "translateY(0)";
                    langLevel[i].style.transition = "all .5s ease-out";
                }
                
                for(i = 0; i < 2; i++) {
                    x[i].style.transform = "translateY(0)";
                    x[i].style.transition = "all .5s ease-out";
                }
            }, 500);
    } else if(document.documentElement.scrollTop > (window.innerHeight * 3) && document.documentElement.scrollTop < (window.innerHeight * 4)) {
        touch.style.color = "rgb(30, 162, 216)";
        touch.style.transition = "all .2s ease";
        home.style.color = "rgb(31, 50, 65)";
        home.style.transition = "all .1s ease-out";
        about.style.color = "rgb(31, 50, 65)";
        about.style.transition = "all .1s ease-out";
        edu.style.color = "rgb(31, 50, 65)";
        edu.style.transition = "all .1s ease-out";
        footer.style.color = "rgb(31, 50, 65)";
        footer.style.transition = "all .1s ease-out";

        media.style.transform = "translateY(38%)"; //fuck
        media.style.transition = "all .5s ease";

        navNav.style.backgroundColor = "#ffffff";
        navNav.style.transition = "all .5s ease";

        whatsApp.style.color = "rgb(30, 162, 216)";
        whatsApp.style.transition = "all .5s ease";

        email.style.color = "rgb(30, 162, 216)";
        email.style.transition = "all .5s ease";

        xing.style.color = "rgb(30, 162, 216)";
        xing.style.transition = "all .5s ease";

        linkedin.style.color = "rgb(30, 162, 216)";
        linkedin.style.transition = "all .5s ease";

        github.style.color = "rgb(30, 162, 216)";
        github.style.transition = "all .5s ease";


        whatsApp.onmouseover = function () {
            whatsApp.style.color = "rgb(31, 50, 65)";
            whatsApp.style.transition = "all .1s ease";
        }
        whatsApp.onmouseleave = function () {
            whatsApp.style.color = "rgb(30, 162, 216)";
            whatsApp.style.transition = "all .2s ease-out";
        }
        email.onmouseover = function () {
            email.style.color = "rgb(31, 50, 65)";
            email.style.transition = "all .1s ease";
        }
        email.onmouseleave = function () {
            email.style.color = "rgb(30, 162, 216)";
            email.style.transition = "all .2s ease-out";
        }
        linkedin.onmouseover = function () {
            linkedin.style.color = "rgb(31, 50, 65)";
            linkedin.style.transition = "all .1s ease";
        }
        linkedin.onmouseleave = function () {
            linkedin.style.color = "rgb(30, 162, 216)";
            linkedin.style.transition = "all .2s ease-out";
        }
        xing.onmouseover = function () {
            xing.style.color = "rgb(31, 50, 65)";
            xing.style.transition = "all .1s ease";
        }
        xing.onmouseleave = function () {
            xing.style.color = "rgb(30, 162, 216)";
            xing.style.transition = "all .2s ease-out";
        }
        github.onmouseover = function () {
            github.style.color = "rgb(31, 50, 65)";
            github.style.transition = "all .1s ease";
        }
        github.onmouseleave = function () {
            github.style.color = "rgb(30, 162, 216)";
            github.style.transition = "all .2s ease-out";
        }

        for (i = 0; i < 3; i++ ) {
            logos[i].style.backgroundPosition = "center";
            logos[i].style.transition = "all .5s ease";

            brandsName[i].style.display = "block";
            firstBrand.classList.add("anim-typewriter04");
            secondBrand.classList.add("anim-typewriter03");
        }
        setTimeout(function() {
            for (i = 0; i < 2; i++ ) {
                firstSpan[i].style.transform = "translateX(0)";
                firstSpan[i].style.transition = "all .5s ease";
            }
        }, 1000);

        setTimeout(function() {
            for (i = 0; i < 2; i++ ) {
                secondSpan[i].style.transform = "translateX(0)";
                secondSpan[i].style.transition = "all .5s ease";
            }
        }, 1500);

    } else if(document.documentElement.scrollTop > (window.innerHeight * 4) && document.documentElement.scrollTop < (window.innerHeight * 5)) {
        footer.style.color = "rgb(30, 162, 216)";
        footer.style.transition = "all .2s ease";
        home.style.color = "rgb(31, 50, 65)";
        home.style.transition = "all .1s ease-out";
        about.style.color = "rgb(31, 50, 65)";
        about.style.transition = "all .1s ease-out";
        edu.style.color = "rgb(31, 50, 65)";
        edu.style.transition = "all .1s ease-out";
        touch.style.color = "rgb(31, 50, 65)";
        touch.style.transition = "all .1s ease-out";

        media.style.transform = "translateY(0%)";

        navNav.style.backgroundColor = "rgb(30, 162, 216, .5)";
        navNav.style.transition = "all .5s ease";

        whatsApp.style.color = "rgb(31, 50, 65)";
        whatsApp.style.transition = "all .5s ease";

        email.style.color = "rgb(31, 50, 65)";
        email.style.transition = "all .5s ease";

        xing.style.color = "rgb(31, 50, 65)";
        xing.style.transition = "all .5s ease";

        linkedin.style.color = "rgb(31, 50, 65)";
        linkedin.style.transition = "all .5s ease";

        github.style.color = "rgb(31, 50, 65)";
        github.style.transition = "all .5s ease";


        whatsApp.onmouseover = function () {
            whatsApp.style.color = "rgb(30, 162, 216)";
            whatsApp.style.transition = "all .1s ease";
        }
        whatsApp.onmouseleave = function () {
            whatsApp.style.color = "rgb(31, 50, 65)";
            whatsApp.style.transition = "all .2s ease-out";
        }
        email.onmouseover = function () {
            email.style.color = "rgb(30, 162, 216)";
            email.style.transition = "all .1s ease";
        }
        email.onmouseleave = function () {
            email.style.color = "rgb(31, 50, 65)";
            email.style.transition = "all .2s ease-out";
        }
        linkedin.onmouseover = function () {
            linkedin.style.color = "rgb(30, 162, 216)";
            linkedin.style.transition = "all .1s ease";
        }
        linkedin.onmouseleave = function () {
            linkedin.style.color = "rgb(31, 50, 65)";
            linkedin.style.transition = "all .2s ease-out";
        }
        xing.onmouseover = function () {
            xing.style.color = "rgb(30, 162, 216)";
            xing.style.transition = "all .1s ease";
        }
        xing.onmouseleave = function () {
            xing.style.color = "rgb(31, 50, 65)";
            xing.style.transition = "all .2s ease-out";
        }
        github.onmouseover = function () {
            github.style.color = "rgb(30, 162, 216)";
            github.style.transition = "all .1s ease";
        }
        github.onmouseleave = function () {
            github.style.color = "rgb(31, 50, 65)";
            github.style.transition = "all .2s ease-out";
        }


        // messageIcon.style.transform = "translateY(0vw)";
        // messageIcon.style.transition = "all .5s ease-out";

        nameInput.style.transform = "translateX(0)";
        nameInput.style.transition = "all .5s ease-out";

        emailInput.style.transform = "translateX(0)";
        emailInput.style.transition = "all .5s ease-out";

        setTimeout(() => {
            subjectInput.style.transform = "translateX(0)";
            subjectInput.style.transition = "all .5s ease-out";
            textareaInput.style.transform = "translateX(0)";
            textareaInput.style.transition = "all .5s ease-out";
            setTimeout(() => {
                send.style.transform = "translateX(0)";
                send.style.transition = "all .5s ease-out";
                reset.style.transform = "translateX(0)";
                reset.style.transition = "all .5s ease-out";

                setTimeout(function () {
                    nameInput.style.transition = "all .1s ease";
                    emailInput.style.transition = "all .1s ease";
                    subjectInput.style.transition = "all .1s ease";
                    textareaInput.style.transition = "all .1s ease";
                    send.style.transition = "all .1s ease";
                    reset.style.transition = "all .1s ease";
                }, 500);
            }, 500);
        }, 500);

        downloadCv.style.transform = "translateX(0) translateY(1vw)";
        downloadCv.style.transition = "all .5s ease-out";

        downloadCertificate.style.transform = "translateX(0) translateY(0vw)";
        downloadCertificate.style.transition = "all .5s ease-out";

        btnAA.onclick = function () {
            btnAA.style.color = "rgb(32, 50, 66, .5)";
            btnAA.style.transition = "all .1s ease";

            setTimeout(function () {
                btnAA.style.color = "rgb(32, 50, 66)";
                btnAA.style.transition = "all .1s ease";
            }, 100);

        }

        downloadCv.onmouseover = function () {
            btnAA.style.color = "#203242";
            downloadCv.style.borderRadius = ".4vw";
            downloadCv.style.backgroundColor = "#ffffff";
            downloadCv.style.transition = "all .3s ease";
        }
        downloadCv.onmouseleave = function () {
            btnAA.style.color = "#ffffff";
            downloadCv.style.borderRadius = "6vw";
            downloadCv.style.backgroundColor = "rgb(255, 255, 255, .1)";
            downloadCv.style.transition = "all .5s ease-out";
        }

        btnBB.onclick = function () {
            btnBB.style.color = "rgb(32, 50, 66, .5)";
            btnBB.style.transition = "all .1s ease";

            setTimeout(function () {
                btnBB.style.color = "rgb(32, 50, 66)";
                btnBB.style.transition = "all .1s ease";
            }, 100);
        }

        downloadCertificate.onmouseover = function () {
            btnBB.style.color = "#203242";
            downloadCertificate.style.borderRadius = ".4vw";
            downloadCertificate.style.backgroundColor = "#ffffff";
            downloadCertificate.style.transition = "all .3s ease";
        }
        downloadCertificate.onmouseleave = function () {
            btnBB.style.color = "#ffffff";
            downloadCertificate.style.borderRadius = "6vw";
            downloadCertificate.style.backgroundColor = "rgb(255, 255, 255, .1)";
            downloadCertificate.style.transition = "all .5s ease-out";
        }
    } else if (document.documentElement.scrollTop == 0) {
        home.style.backgroundColor = "transparent";
        home.style.boxShadow = "none";
        home.style.padding = "none";
        home.style.color = "none";
        home.style.borderRadius = "none";
        about.style.backgroundColor = "transparent";
        about.style.boxShadow = "none";
        home.style.padding = "none";
        about.style.color = "none";
        about.style.borderRadius = "none";
        edu.style.backgroundColor = "transparent";
        edu.style.boxShadow = "none";
        edu.style.padding = "none";
        edu.style.color = "none";
        edu.style.borderRadius = "none";
        touch.style.backgroundColor = "transparent";
        touch.style.boxShadow = "none";
        touch.style.padding = "none";
        touch.style.color = "none";
        touch.style.borderRadius = "none";
    }
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollTop)
}
// End Window.onscroll

whatsApp.onmouseover = function () {
    whatsApp.style.color = "rgb(30, 162, 216)";
    whatsApp.style.transition = "all .1s ease";
}
whatsApp.onmouseleave = function () {
    whatsApp.style.color = "rgb(32, 50, 66)";
    whatsApp.style.transition = "all .2s ease-out";
}
email.onmouseover = function () {
    email.style.color = "rgb(30, 162, 216)";
    email.style.transition = "all .1s ease";
}
email.onmouseleave = function () {
    email.style.color = "rgb(32, 50, 66)";
    email.style.transition = "all .2s ease-out";
}
linkedin.onmouseover = function () {
    linkedin.style.color = "rgb(30, 162, 216)";
    linkedin.style.transition = "all .1s ease";
}
linkedin.onmouseleave = function () {
    linkedin.style.color = "rgb(32, 50, 66)";
    linkedin.style.transition = "all .2s ease-out";
}
xing.onmouseover = function () {
    xing.style.color = "rgb(30, 162, 216)";
    xing.style.transition = "all .1s ease";
}
xing.onmouseleave = function () {
    xing.style.color = "rgb(32, 50, 66)";
    xing.style.transition = "all .2s ease-out";
}
github.onmouseover = function () {
    github.style.color = "rgb(30, 162, 216)";
    github.style.transition = "all .1s ease";
}
github.onmouseleave = function () {
    github.style.color = "rgb(32, 50, 66)";
    github.style.transition = "all .2s ease-out";
}

// Start Nav Bar Moving
var arrowDiv = document.getElementById("intro-arrow"),
    inTouch  = document.getElementById("inTouch"),
    inTouch02 = document.getElementById("inTouch02"),
    inTouch03 = document.getElementById("inTouch03"),
    inTouch04 = document.getElementById("inTouch04");

// logo.onclick = function () {
//     document.documentElement.scrollTop = window.innerHeight * 5 + 1;
// }
logo01.onclick = function () {
    document.documentElement.scrollTop = 0;
}
// logo02.onclick = function () {
//     document.documentElement.scrollTop = 0;
// }
home.onclick = function () {
    document.documentElement.scrollTop = 1;
}
arrowDiv.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight + 1;
}
about.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight + 1;
}
edu.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 2 + 1;
}
inTouch02.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 2 + 1;
}
inTouch03.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 3 + 1;
}
inTouch04.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 3 + 1;
}
touch.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 3 + 1;
}
inTouch.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 5 + 1;
}
footer.onclick = function () {
    document.documentElement.scrollTop = window.innerHeight * 5 + 1;
}


nameInput.onclick = function () {
    nameInput.style.backgroundColor = "rgb(30, 162, 216, .4)";
    emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";

    // nameInput.onmouseleave = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .5)";
    // }


    // email.onmouseover = function () {
    //     email.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // email.onmouseleave = function () {
    //     email.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // subjectInput.onmouseover = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // subjectInput.onmouseleave = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // textareaInput.onmouseover = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // textareaInput.onmouseleave = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
}
// nameInput.onmouseover = function () {
//     nameInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
// }
// nameInput.onmouseleave = function () {
//     nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
// }

emailInput.onclick = function () {

    emailInput.style.backgroundColor = "rgb(30, 162, 216, .4)";
    nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";

    // emailInput.onmouseleave = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .5)";
    // }


    // nameInput.onmouseover = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // nameInput.onmouseleave = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // subjectInput.onmouseover = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // subjectInput.onmouseleave = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // textareaInput.onmouseover = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // textareaInput.onmouseleave = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
}
// emailInput.onmouseover = function () {
//     emailInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
// }
// emailInput.onmouseleave = function () {
//     emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
// }

subjectInput.onclick = function () {

    subjectInput.style.backgroundColor = "rgb(30, 162, 216, .4)";
    textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";

    // subjectInput.onmouseleave = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .5)";
    // }

    // nameInput.onmouseover = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // nameInput.onmouseleave = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // emailInput.onmouseover = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // emailInput.onmouseleave = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // textareaInput.onmouseover = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // textareaInput.onmouseleave = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
}
// subjectInput.onmouseover = function () {
//     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
// }
// subjectInput.onmouseleave = function () {
//     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
// }

textareaInput.onclick = function () {
    textareaInput.style.backgroundColor = "rgb(30, 162, 216, .4)";
    nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";

    // textareaInput.onmouseleave = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .5)";
    // }

    // nameInput.onmouseover = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // nameInput.onmouseleave = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // emailInput.onmouseover = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // emailInput.onmouseleave = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // subjectInput.onmouseover = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // subjectInput.onmouseleave = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
}
// textareaInput.onmouseover = function () {
//     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
// }
// textareaInput.onmouseleave = function () {
//     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
// }


send.onclick = function () {
    textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";

    // nameInput.onmouseover = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // nameInput.onmouseleave = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // emailInput.onmouseover = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // emailInput.onmouseleave = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // subjectInput.onmouseover = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // subjectInput.onmouseleave = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // textareaInput.onmouseover = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // textareaInput.onmouseleave = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
}
reset.onclick = function () {
    textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";

    // nameInput.onmouseover = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // nameInput.onmouseleave = function () {
    //     nameInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // emailInput.onmouseover = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // emailInput.onmouseleave = function () {
    //     emailInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // subjectInput.onmouseover = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // subjectInput.onmouseleave = function () {
    //     subjectInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
    // textareaInput.onmouseover = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .3)";
    // }
    // textareaInput.onmouseleave = function () {
    //     textareaInput.style.backgroundColor = "rgb(30, 162, 216, .2)";
    // }
}
