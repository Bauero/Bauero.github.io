function koniecCyfra(linia){
    if (linia.endsWith(".") || linia.endsWith("+") || linia.endsWith("-") || linia.endsWith("*") || linia.endsWith("/"))
    {
        alert("Na końcu działania nie ma cyfry !!!");
        return false;
    }
    return true;

}

function usun(){
    dzialanie = document.getElementById("result").innerText
    if (dzialanie.length > 1){
        document.getElementById("result").innerText = dzialanie.slice(0,-1);
    }
    else{
        init();
    }
}

function czyPuste(linia){
    if (linia.length == 0) 
    {
        alert("Podane działanie jest puste !!!");
        return true;
    }
    else {return false;}
}

function policz(){



    dzialanie = document.getElementById("result").innerText

    if (koniecCyfra(dzialanie) == false) {return;}
    if (czyPuste(dzialanie) == true) {return;}
    
    document.getElementById("result").innerText = eval(dzialanie);
}

function wpisz(element){
    element = element.name  
    if (element != "."){
        dzialanie = document.getElementById("result").innerText
        if (dzialanie == "0")
        {
            document.getElementById("result").innerText = element
            return;
        }
    }

    document.getElementById("result").innerText += element
}

function czyscz(){
    document.getElementById("result").innerText = "0"
}

function init(){
    document.getElementById("result").innerText = "0"
}
