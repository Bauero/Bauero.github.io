<?php
session_start();

if(!isset($_SESSION['logged']))
{
    header("Location: index.php");
}

if(isset($_POST['formulaend']))
{
    $_SESSION['formcompleted']=true;
    $_SESSION['imie']=$_POST['imie'];
    $_SESSION['nazwisko']=$_POST['nazwisko'];
    $_SESSION['ulica']=$_POST['ulica'];
    $_SESSION['numerdomu']=$_POST['numerdomu'];
    $_SESSION['miasto']=$_POST['miasto'];
    $_SESSION['kodpocztowy']=$_POST['kodpocztowy'];
    $_SESSION['PESEL']=$_POST['PESEL'];
    $_SESSION['imie']=$_POST['imie'];
    $_SESSION['numertelefonu']=$_POST['numertelefonu'];
    $_SESSION['data']=$_POST['data'];
    $_SESSION['email']=$_POST['email'];
    $_SESSION['uwagi']=$_POST['uwagi'];
    $_SESSION['plec']=$_POST['Plec'];

    if(isset($_POST['prawojazdya']))
    {
        $_SESSION['prawojazdya']="A";
    }
    else{
        $_SESSION['prawojazdya']="";
    }
    if(isset($_POST['prawojazdyb']))
    {
        $_SESSION['prawojazdyb']="B";
    }
    else{
        $_SESSION['prawojazdyb']="";
    }
    if(isset($_POST['prawojazdya']))
    {
        $_SESSION['prawojazdyc']="C";
    }
    else{
        $_SESSION['prawojazdyc']="";
    }
    if(isset($_POST['prawojazdyce']))
    {
        $_SESSION['prawojazdyce']="C+E";
    }
    else{
        $_SESSION['prawojazdyce']="";
    }
    header("Location:output.php");

}


?>




<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="style2.css">
    </head>
<body>
<a href="https://a-ciesielski-projekt1.ct8.pl/">Powrót</a>

<div class="main">
    <form action="" method="POST">
        <div>
        <div class="forms">
            <div class="labelsone">
            <label>Imię:</label>
            
        
            <input type="text" id="imie" name="imie" />
        </div>
        <div class="labelstwo">
            <label>Nazwisko:</label>
        
            <input type="text" id="nazwisko" name="nazwisko" />
        </div>
        <div class="labelsone">
            <label>Ulica:</label>
       
            <input type="text"id="ulica" name="ulica" />
        </div>
        <div class="labelstwo">
            <label>Numer domu:</label>
       
            <input type="text"id="numerdomu" name="numerdomu" />
        </div>
        <div class="labelsone">
            <label>Miasto:</label>
          
            <input type="text" id="miasto" name="miasto" />
        </div>
        <div class="labelstwo">
            <label>Kod pocztowy:</label>
        
           <input type="text" id="kodpocztowy" name="kodpocztowy"  maxlength="6"  placeholder="xx-xxx"> 
        </div>
         <div class="labelsone">
            <label>PESEL:</label><br>
        
        
             <input type="text" id="PESEL" name="PESEL"  maxlength="9"  placeholder="xxxxxxxxx">
       </div>
       <div class="labelstwo" >
            <label>Kategoria prawa jazdy:</label> <br>
        
            <input type="checkbox" id="prawojazdya" name="prawojazdya" value="A">A<br>
            <input type="checkbox" id="prawojazdyb" name="prawojazdyb" value="B">B<br>
            <input type="checkbox" id="prawojazdyc"name="prawojazdyc" value="C">C<br>
        
            <input type="checkbox" id="prawojazdyce"name="prawojazdyce" value="C+E">C+E<br>
          
        </div>
        <div class="labelsone">
            <p>Podaj swoją płeć:</p>
            <input type="radio" name="Plec" value="Kobieta">Kobieta
            <input type="radio" name="Plec" value="Mężczyzna">Mężczyzna
        </div>
       <div class="labelstwo">
       <label for="phone">Numer telefonu:</label>
      <input type="tel" id="phone" name="numertelefonu"  maxlength="11"
      placeholder="xxx xxx xxx">
          </div>
        <div class="labelsone">
            <label>Data:</label>
       
            <input type="date" id="data" name="data">
        </div>
        <div class="labelstwo">
            <label>Email:</label>
       
            <input type="text" id="email" name="email">
        </div>
        <div class="labelsone">
            <label>Uwagi</label>
        
            <textarea id="uwagi" name="uwagi" rows="4" cols="50">
                
                </textarea>
        </div>
      <div class="submition">
        
      <input class="przycisk" name="formulaend" type="submit" value="Prześlj formularz">
         
       
        </div>
  
 
    </div> 
    </form>
</div>
</body>





</html>