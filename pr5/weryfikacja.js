//[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ]

allow = true;


function czy_puste(){
    inneZnaki = /[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ]/gi;

    let pola = ["name", "surname", "city", "street", "nrdom", "mieszkanie"];
    poprawne = 0;

    //puste imie
    for (let i = 0; i < pola.length; i++){
        toPole = document.getElementById(pola[i])
        if (toPole.value.length == 0) { toPole.style.backgroundColor = "#C62A2A"; }
        else if (inneZnaki.test(toPole) == false) { toPole.style.backgroundColor = "#C62A2A"; }
        else{ toPole.style.backgroundColor = "#EDEDED"; poprawne += 1}
    }
    
    if (poprawne == 0){
        submit(false);
        allow *= false
        return true;
    }
    else if (poprawne == pola.length){
        allow *= true
        return false;
    }
    else{
        submit(false);
        allow *= false
        return false;
    }
}

function dobre_imie()
{
    imie = document.getElementById("name").value

    if (imie.length == 0) { allow *= false; return true;}
    if (imie.length == 1) { allow *= false; alert("Podane imie jest za krótkie"); return true;}

    let calyWzor = /^[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь]{2,24}/gi;
    if (calyWzor.test(imie) == false) { alert("Podane imie nie pasuje do schematu"); return false; }
    return true;
}

function dobre_nazwisko()
{
    nazwisko = document.getElementById("surname").value

    if (nazwisko.length == 0) {  allow *= false; return true; }

    let calyWzor = /^[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ][\'(a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь)$ \-]{1,30}[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь]$/gi;
    let blad1 = / -/g;
    let blad2 = /- /g;
    let blad3 = /[ ]{2,20}/g;
    let blad4 = /--/g;
    let blad5 = /[\']{2,20}/g;

    if (calyWzor.test(nazwisko) == false) { alert("Pole nazwisko nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"); return false; }
    else if (blad1.test(nazwisko) == true) { alert("W nazwisku przed myślnikiem występuje spacja"); return false; }
    else if (blad2.test(nazwisko) == true) { alert("W nazwisku po myślniku występuje spacja"); return false; }
    else if (blad3.test(nazwisko) == true) { alert("W nazwisku wpisano wiele spacji obok siebie"); return false; }
    else if (blad4.test(nazwisko) == true) { alert("W nazwisku wpisano wiele myślników obok siebie"); return false; }
    else if (blad5.test(nazwisko) == true) { alert("W nazwisku wpisano wiele apostrofów obok siebie"); return false; }

    return true;
}

function dobre_miasto()
{
    miasto = document.getElementById("city").value

    if (miasto.length == 0) {  allow *= false; return true; }

    let calyWzor = /^[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ][\'a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь \-]{1,30}[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь]$/ig;
    let blad1 = / -/g;
    let blad2 = /- /g;
    let blad3 = /[ ]{2,20}/g;
    let blad4 = /--/g;
    let blad5 = /[\']{2,20}/g;

    if (calyWzor.test(nazwisko) == false) { alert("Pole miasto nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"); return false; }
    else if (blad1.test(nazwisko) == true) { alert("W mieście przed myślnikiem występuje spacja"); return false; }
    else if (blad2.test(nazwisko) == true) { alert("W mieście po myślniku występuje spacja"); return false; }
    else if (blad3.test(nazwisko) == true) { alert("W mieście wpisano wiele spacji obok siebie"); return false; }
    else if (blad4.test(nazwisko) == true) { alert("W mieście wpisano wiele myślników obok siebie"); return false; }
    else if (blad5.test(nazwisko) == true) { alert("W mieście wpisano wiele apostrofów obok siebie"); return false; }

    return true;
}

function dobre_ulica()
{
    ulica = document.getElementById("street").value

    if (ulica.length == 0) {  allow *= false; return true; }

    let calyWzor = /^[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ][\(\)\'a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь \-]{1,30}[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь\)]$/g;
    let blad1 = / -/g;
    let blad2 = /- /g;
    let blad3 = /[ ]{2,20}/g;
    let blad4 = /--/g;
    let blad5 = /[\']{2,20}/g;

    if (calyWzor.test(ulica) == false) { alert("Pole ulica nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"); return false; }
    else if (blad1.test(ulica) == true) { alert("W ulicy przed myślnikiem występuje spacja"); return false; }
    else if (blad2.test(ulica) == true) { alert("W ulicy po myślniku występuje spacja"); return false; }
    else if (blad3.test(ulica) == true) { alert("W ulicy wpisano wiele spacji obok siebie"); return false; }
    else if (blad4.test(ulica) == true) { alert("W ulicy wpisano wiele myślników obok siebie"); return false; }
    else if (blad5.test(ulica) == true) { alert("W ulicy wpisano wiele apostrofów obok siebie"); return false; }

    // czy nawiasy się zgadzają
    let x = 0;
    for (let i = 0; i < ulica.length; i++){
        if (ulica[i] == "(") {x++;}
        if (ulica[i] == ")")
        {
            if (x > 0) { x--; }
            else { alert("W ulicy wpisano nawiasy w złej kolejności"); return false; }
        }
    }

    if ( x!=0){ alert("W ulicy wpisano nawiasy w sposób niepasujący do siebie"); return false; }

    return true;
}

function dobry_numer_domu()
{
    numerDomu = document.getElementById("nrdom").value

    if (numerDomu.length == 0) {  allow *= false; return true; }

    let calyWzor = /^[1-9][0-9]{0,2}[0-9a-zA-Z]{0,1}$/g;
    if (calyWzor.test(numerDomu) == false) { alert("Pole numerDomu nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"); return false; }

    return true;
}

function dobry_numer_mieszkania()
{
    numerMieszkania = document.getElementById("mieszkanie").value

    if (numerMieszkania.length == 0) {  allow *= false; return true; }

    //  dla osób mieszkających w domkach jednorodzinnych, nie ma potrzeby podawania mieszkania
    if (numerMieszkania == "-"){
        return true;
    }

    let calyWzor = /[1-9][0-9]{0,2}[0-9a-zA-Z]$/g;
    if (calyWzor.test(numerMieszkania) == false) { alert("Pole numer mieszkania nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"); return false; }

    return true;
}

function submit(param){

    param = !param

    document.getElementById("submitbutton").disabled = param;
    if (param == false)
        {document.getElementById("submitbutton").style.backgroundColor = "orange";}
    else
        {document.getElementById("submitbutton").style.backgroundColor = "#F9F9F9";}
}

function weryfikuj()
{
    if (czy_puste() == true) { return; }
    if (dobre_imie() == false) { submit(false); return ;}
    if (dobre_nazwisko() == false) { submit(false); return ;}
    if (dobre_miasto() == false) { submit(false); return ;}
    if (dobre_ulica() == false) { submit(false); return ;}
    if (dobry_numer_domu() == false) { submit(false); return ;}
    if (dobry_numer_mieszkania() == false) { submit(false); return ;}

    if (allow == true) {submit(true); }
}
    