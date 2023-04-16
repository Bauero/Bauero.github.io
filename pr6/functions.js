function dajDate(){
    const date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    currentDate = `${year}-0${month}-${day}`;
    document.getElementById("birthdaydate").max = currentDate;
}