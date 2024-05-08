function open_tab(){
    const Tab = document.getElementById("tab");
    const one = document.getElementById("bar1");
    const two = document.getElementById("bar2");    
    const three = document.getElementById("bar3"); 
    const ham1 = document.getElementById("ham_one")   
  
    Tab.style.left = "0%"
    one.style.opacity = "0"
    two.style.transform = "rotate(45deg) translate(6px)"
    three.style.transform = "rotate(-45deg) translate(6px)"

    setTimeout(close, 5000)
}

function close(){
    const Tab = document.getElementById("tab");
    const one = document.getElementById("bar1");
    const two = document.getElementById("bar2");    
    const three = document.getElementById("bar3"); 
    const ham1 = document.getElementById("ham_one")   
    
    Tab.style.left = "-110%"
    one.style.opacity = "1"
    two.style.transform = "rotate(0deg) translate(0px)"
    three.style.transform = "rotate(0deg) translate(0px)"
}

//Popups Engine

function close_popup(){
    const Pop = document.getElementById("popup");
    const Pop2 = document.getElementById("popup2");
    const Pop3 = document.getElementById("popup3");
    const Pop4 = document.getElementById("popup4");
    const Pop5 = document.getElementById("popup5");
    const Pop6 = document.getElementById("popup6");
    const Pop7 = document.getElementById("popup7");
    const Pop8 = document.getElementById("popup8");
    const Pop9 = document.getElementById("popup9");
    const Pop10 = document.getElementById("popup10");


    Pop.style.visibility = "collapse"
    Pop2.style.visibility = "collapse"
    Pop3.style.visibility = "collapse"
    Pop4.style.visibility = "collapse"
    Pop5.style.visibility = "collapse"
    Pop6.style.visibility = "collapse"
    Pop7.style.visibility = "collapse"
    Pop8.style.visibility = "collapse"
    Pop9.style.visibility = "collapse"
    Pop10.style.visibility = "collapse"
}

function open_popup(){
    const Pop = document.getElementById("popup");

    Pop.style.visibility = "visible"
}

function open_popup2(){
    const Pop2 = document.getElementById("popup2");

    Pop2.style.visibility = "visible"
}

function open_popup3(){
    const Pop3 = document.getElementById("popup3");

    Pop3.style.visibility = "visible"
}

function open_popup4(){
    const Pop4 = document.getElementById("popup4");

    Pop4.style.visibility = "visible"
}

function open_popup5(){
    const Pop5 = document.getElementById("popup5");

    Pop5.style.visibility = "visible"
}

function open_popup6(){
    const Pop6 = document.getElementById("popup6");

    Pop6.style.visibility = "visible"
}

function open_popup7(){
    const Pop7 = document.getElementById("popup7");

    Pop7.style.visibility = "visible"
}

function open_popup8(){
    const Pop8 = document.getElementById("popup8");

    Pop8.style.visibility = "visible"
}

function open_popup9(){
    const Pop9 = document.getElementById("popup9");

    Pop9.style.visibility = "visible"
}

function open_popup10(){
    const Pop10 = document.getElementById("popup10");

    Pop10.style.visibility = "visible"
}


