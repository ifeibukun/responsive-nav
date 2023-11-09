// first-dropdown

function Up_first(){
    document.getElementById("arrowdown").style.display ="none"
    document.getElementById("arowup").style.display ="inline"
    document.getElementById("first-dropdown").style.display = "flex"
}

//dropup

function Down_first(){
    document.getElementById("first-dropdown").style.display = "none"
    document.getElementById("arrowdown").style.display = "inline"
    document.getElementById("arowup").style.display = "none"

}


// second-dropdown


function Up_second(){
    document.getElementById("arrowdown-second").style.display = "none"
    document.getElementById("arrowup-second").style.display = "inline"
    document.getElementById("second-dropdown").style.display = "flex"
}

//  second dropup

function Down_Second(){
    document.getElementById("second-dropdown").style.display = "none"
    document.getElementById("arrowup-second").style.display = "none"
    document.getElementById("arrowdown-second").style.display = "inline"
}


// MOBILE MENU

function UpFirstMobile(){
    document.getElementById("arrowup-second-m").style.display = "inline"
    document.getElementById("arrow-downsecond").style.display = "none"
    document.getElementById("second-dropdown-menu").style.display = "block"
}

function DownSecondMobile(){
    document.getElementById("arrowup-second-m").style.display = "none"
    document.getElementById("second-dropdown-menu").style.display = "none"
    document.getElementById("arrow-downsecond").style.display = "inline"

}

function DownSecondSecondMobile(){

    document.getElementById("arrow-downsecond-second").style.display = "none"
    document.getElementById("arrowup-second-mobile").style.display = "inline"
    document
    document.getElementById("second-second-drop-menu").style.display = "block"
}

function UpSecondSecondMobile(){
    document.getElementById("arrow-downsecond-second").style.display = "inline"
    document.getElementById("arrowup-second-mobile").style.display = "none"
    document.getElementById("second-second-drop-menu").style.display = "none    "
}

function responsive(){
    document.getElementById("navbars").style.width = "250px"
    // document.getElementById("navbars").style.transition = "1.5s"
    document.getElementById("w-contianer").style.backgroundColor = "rgba(0, 0, 0, 0.096)"
}

function closemenu(){
    document.getElementById("navbars").style.width = "0"
    document.getElementById("w-contianer").style.backgroundColor = " hsla(0, 1%, 86%, 0.171)"
}

document.getElementById("make-remote-mobile").innerText = "Make remote work"

document.getElementById("get-your-teams").innerHTML = "Get your team in sync. no matter your <br> location. streamline processes, create <br> team rituals. and watch productivity soar"