//[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ]

allow = true;
let blad1 = / \-/g;
let blad2 = /\- /g;
let blad3 = /[ ]{2,20}/g;
let blad4 = /\-\-/g;
let blad5 = /[\']{2,20}/g;
let blad6 = / $/g;
let blad7 = /\-/g;
let blad8 = /\_\_/g;
let blad9 = /\_\@/g;
let blad10 = /\-\@/g;
let blad11 = /\.\@/g;
let blad12 = /\@\_/g;
let blad13 = /\@\-/g;
let blad14 = /\@\./g;

{
    function dobre_imie()
    {
        imie = document.getElementById("name")
        let calyWzor = /^[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь]{2,24}$/gi;
    
        if (imie.value.length <= 1)
        {
            imie.style.backgroundColor = "#C62A2A";
            allow = false;
            return "Podane imie jest za krótkie";
        }
    
        else if (calyWzor.test(imie.value) == false)
        {
            imie.style.backgroundColor = "#C62A2A";
            allow = false;
            return "Podane imie nie pasuje do schematu";
        }
    
        imie.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobre_nazwisko()
    {
        nazwiskoPole = document.getElementById("surname");
        nazwisko = nazwiskoPole.value;
    
        if (nazwisko.length == 0) {  nazwiskoPole.style.backgroundColor = "#C62A2A"; allow = false; submit(false)
        return "Nic nie wpisano w pole nazwisko"; }
    
        let calyWzor = /^[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ][\'(a-ząęśćżźółßöüäéqбгдёжзйлпўфхцчшЫЭЮяь) \-]{1,30}[a-ząęśćżźółßöüäéqбгдёжзйлпўфхцчшЫЭЮяь]$/gi;
    
        if (blad1.test(nazwisko) == true)
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A"; 
            return "W nazwisku przed myślnikiem występuje spacja"; }
    
        else if (blad2.test(nazwisko) == true)
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A"; 
            return "W nazwisku po myślniku występuje spacja"; }
    
        else if (blad3.test(nazwisko) == true) 
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A"; 
            return "W nazwisku wpisano wiele spacji obok siebie"; }
    
        else if (blad4.test(nazwisko) == true)
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A";
            return "W nazwisku wpisano wiele myślników obok siebie"; }
    
        else if (blad5.test(nazwisko) == true)
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A";
            return "W nazwisku wpisano wiele apostrofów obok siebie"; }
        
        else if (blad6.test(nazwisko) == true)
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A";
            return "Nazwisko kończy się spacją"; }
    
        if (calyWzor.test(nazwisko) == false) 
        {
            allow = false;
            nazwiskoPole.style.backgroundColor = "#C62A2A"; 
            return "Pole nazwisko nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"; }
    
        nazwiskoPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobre_miasto()
    {
        miastoPole = document.getElementById("city");
        miasto = miastoPole.value;
    
        if (miasto.length == 0) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false; submit(false)
        return "Nic nie wpisano w polu Miasto"; }
    
        let calyWzor = /^[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ][\'a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь \-]{1,30}[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь]$/ig;
    
        if (blad1.test(miasto) == true) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W mieście przed myślnikiem występuje spacja"; }
    
        else if (blad2.test(miasto) == true) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W mieście po myślniku występuje spacja"; }
    
        else if (blad3.test(miasto) == true) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W mieście wpisano wiele spacji obok siebie"; }
    
        else if (blad4.test(miasto) == true) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W mieście wpisano wiele myślników obok siebie"; }
    
        else if (blad5.test(miasto) == true) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W mieście wpisano wiele apostrofów obok siebie"; }
    
        else if (blad6.test(miasto) == true) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Nazwa miasta zostałą zakończona spacją"; }
    
        if (calyWzor.test(miasto) == false) { miastoPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole miasto nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"; }
    
        miastoPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobre_ulica()
    {
        ulicaPole = document.getElementById("street")
        ulica = ulicaPole.value
    
        if (ulica.length == 0) { ulicaPole.style.backgroundColor = "#C62A2A"; allow = false; return "Nic nie wpisano w pole Ulica" }
        if (ulica.length == 1) { ulicaPole.style.backgroundColor = "#C62A2A"; allow = false; return "Wpisana ulica jest za krótka"; }
    
        let calyWzor = /^[A-ZĄĘŻŚŹĆÓŁẞÖÜÄQБГДЁЖЗЙЛПЎФХЦЧШЫЬЭЮЯ][\(\)\'a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь \-]{1,30}[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь\)]$/gi;
        
    
        if (blad1.test(ulica) == true) {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W ulicy przed myślnikiem występuje spacja"; }
    
        else if (blad2.test(ulica) == true) {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W ulicy po myślniku występuje spacja";}
    
        else if (blad3.test(ulica) == true) {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W ulicy wpisano wiele spacji obok siebie"; }
    
        else if (blad4.test(ulica) == true) {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W ulicy wpisano wiele myślników obok siebie"; }
    
        else if (blad5.test(ulica) == true) {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W ulicy wpisano wiele apostrofów obok siebie"; }
    
        else if (blad6.test(ulica) == true) {ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W polu ulica suń spację na końcu"; }
    
        if (calyWzor.test(ulica) == false) {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole ulica nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych"}
        
        // czy nawiasy się zgadzają
        let x = 0;
        for (let i = 0; i < ulica.length; i++){
            if (ulica[i] == "(") {x++;}
            if (ulica[i] == ")")
            {
                if (x > 0) { x--; }
                else {  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
                return "W ulicy wpisano nawiasy w złej kolejności"; }
            }
        }
    
        if ( x!=0 ){  ulicaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W ulicy wpisano nawiasy w sposób niepasujący do siebie" }
    
        ulicaPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobry_numer_domu()
    {
        numerDomuPole = document.getElementById("nrdom")
        numerDomu = numerDomuPole.value
    
        if (numerDomu.length == 0) { numerDomuPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Nic nie wpisano w polu Numer Domu"; }
    
        let calyWzor = /^[1-9][0-9]{0,2}[0-9a-zA-Z]{0,1}$/g;
    
        if (calyWzor.test(numerDomu) == false) { numerDomuPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole Numer domu nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych";}
    
        numerDomuPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobry_numer_mieszkania()
    {
        numerMieszkaniaPole = document.getElementById("mieszkanie")
        numerMieszkania = numerMieszkaniaPole.value
    
        if (numerMieszkania.length == 0) { numerMieszkaniaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Nic nie wpisano w polu Numer Mieszkania"; }
    
        let calyWzor = /^[1-9][0-9]{0,3}$/g;
    
        if (calyWzor.test(numerMieszkania) == false) { numerMieszkaniaPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole Numer Mieszkania nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych";}
    
        numerMieszkaniaPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobry_email()
    {
        emailPole = document.getElementById("email")
        email = emailPole.value
    
        if (email.length == 0) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Nic nie wpisano w polu email"; }
    
        let calyWzor = /^[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь][_a-z0-9ąęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь.-]{2,60}\@[a-ząęśćżźółßöüäqбгдёжзйлпўфхцчшЫЭЮяь.]{2,30}[(\.com)(\.pl)]$/gi;
    
        if (blad1.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu przed myślinikiem jest spacja";}
    
        else if (blad2.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu za myślinikiem jest spacja";}
    
        else if (blad4.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu są wielokrotne myślinki";}
    
        else if (blad6.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Email jest zakończony spacją - usuń ją";}
    
        else if (blad8.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Email zawiera wielokrotne podkreślniki";}
    
        else if (blad9.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu jest podkreślnik przed '@'";}
    
        else if (blad10.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu jest myślnik przed '@'";}
    
        else if (blad11.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu jest kropka przed '@'";}

        else if (blad12.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu jest podkreślnik za '@'";}
    
        else if (blad13.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu jest myślnik za '@'";}
    
        else if (blad14.test(email) == true) { emailPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W Emailu jest kropka za '@'";}
    
        if (calyWzor.test(email) == false) { emailPole.style.backgroundColor = "#C62A2A";  allow = false;
        return "Pole email nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych";}
    
        emailPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobry_telefon()
    {
        numerTelefonuPole = document.getElementById("phone")
        numerTelefonu = numerTelefonuPole.value
    
        if (numerTelefonu.length == 0) { numerTelefonuPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Nic nie wpisano w polu Numer Telefonu"; }
    
        let calyWzor = /^\+[1-9][0-9]{1,3} [1-9][0-9]{2} [0-9]{3} [0-9]{3}/g;
    
        if (blad3.test(numerTelefonu) == true) { numerTelefonuPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole Numer Telefonu zawiera wielokrotne spacje";}
    
        else if (blad7.test(numerTelefonu) == true) { numerTelefonuPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole Numer Telefonu zawiera myśliniki - uzyj spacji jako separatorów";}
    
        if (calyWzor.test(numerTelefonu) == false) { numerTelefonuPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole Numer Telefonu nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych";}
    
        numerTelefonuPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobry_pesel()
    {
        peselPole = document.getElementById("pesel")
        pesel = peselPole.value
    
        if (pesel.length == 0) { peselPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Nic nie wpisano w polu Pesel"; }
    
        let calyWzor = /^[0-9]{11}$/g;
    
        if (blad6.test(pesel) == true) { peselPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "W polu Pesel na końcu znajduje się spacja - usuń ją";}
    
        if (calyWzor.test(pesel) == false) { peselPole.style.backgroundColor = "#C62A2A"; allow = false;
        return "Pole Pesel nie pasuje do schematu - sprawdź czy nie zawiera ono znaków zakazanych";}
    
        peselPole.style.backgroundColor = "#EDEDED";
        return true;
    }
    
    
    function dobra_data()
    {
        dataUrodzeniaPole = document.getElementById("birthday")
        dataUrodzenia = dataUrodzeniaPole.value
    
        if (dataUrodzenia.length == 0){
            dataUrodzeniaPole.style.border = "6px solid #C62A2A";
            return "Nie wpisano żadnej daty - uzupełnij pole";
        }
    
        dataUrodzeniaPole.style.border = ""
        return true;
    }
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
    let lista_bledow = []

    imie = dobre_imie()
    if (imie != true) { lista_bledow.push(imie); }

    nazwisko = dobre_nazwisko()
    if (nazwisko != true) { lista_bledow.push(nazwisko); }

    miasto = dobre_miasto()
    if (miasto != true) { lista_bledow.push(miasto);  }

    ulica = dobre_ulica()
    if (ulica != true) { lista_bledow.push(ulica);  }

    nr_dom = dobry_numer_domu()
    if (nr_dom != true) { lista_bledow.push(nr_dom);  }

    nr_mieszk = dobry_numer_mieszkania()
    if (nr_mieszk != true) { lista_bledow.push(nr_mieszk); }

    email = dobry_email()
    if (email != true) { lista_bledow.push(email); }

    nr_telefonu = dobry_telefon()
    if (nr_telefonu != true) { lista_bledow.push(nr_telefonu); }

    pesel = dobry_pesel()
    if (pesel != true) { lista_bledow.push(pesel); }

    data = dobra_data()
    if (data != true) { lista_bledow.push(data); }

    if (lista_bledow.length > 0){
        submit(false);
        tekst = "Wykryto błędy !!!";
        for (i=0; i < lista_bledow.length; i++){
            tekst += "\n- " + lista_bledow[i];
        }
        alert(tekst)
    }

    if (allow == true) {submit(true); }
    allow = true
}
    