<?xml version="1.0"?>


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output doctype-public="-//W3C//DTD XHTML 1.1//EN" doctype-system="http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd" encoding="ISO-8859-2" method="html"/>

  <xsl:template match="/">
  
  <html>
    <head>

      <title>Faktura z danymi</title>
      <style>
      
      


       .table1
       {
          border-collapse: collapse;
          width: 100%;
          font-size: 24px;
          text-align: left;
        }

        .kolumna1 { width: 3%;}

        .kolumna2 { width: 52%;}

        .kolumna3 { width: 8%;  }

        .kolumna4 { width: 7%;  }

        .kolumna5 { width: 11%;   }

        .kolumna6 { width: 14%;  }
      </style>
    </head>
    
    
    <?xml-stylesheet href="fakturastyl.css" type="text/css"?>
    
    <body>
    <div style="background-image: url('faktura.jpg'); background-size: 1240px 1754px; background-repeat: no-repeat; ">
    
      <div style="width: 1240px; height:1754px;">
      
      
        <!-- Miejscowosc i data -->
        <div>
          <div style="position: absolute; top: 14px; left: 760px; width: 440px; font-size: 24px;">
            <xsl:value-of select="Dane/Naglowek/Miejscowosc"/>
          </div>
          <div style="position: absolute; top: 14px; left: 1060px; width: 440px; font-size: 24px;">
            <xsl:value-of select="Dane/Naglowek/DataWyslania"/>
          </div>
        </div>

        <!-- Sprzedawca i nabywca -->
        <div>
        <!-- Sprzedawca -->
          <div style="position: absolute; top: 110px; left: 80px; width: 620px; font-size: 24px;">
            <xsl:value-of select="Dane/Sprzedawca/Nazwa"/>
          </div>
          <div style="position: absolute; top: 140px; left: 80px; width: 620px; font-size: 24px;">
            <xsl:value-of select="Dane/Sprzedawca/Adres"/>
          </div>
          <div style="position: absolute; top: 210px; left: 120px; width: 620px; font-size: 24px;">
            <xsl:value-of select="Dane/Sprzedawca/NIP"/>
          </div>

        <!-- Nabywca -->
          <div style="position: absolute; top: 110px; left: 660px; width: 620px; font-size: 24px;">
            <xsl:value-of select="Dane/Nabywca/Nazwa"/>
          </div>
          <div style="position: absolute; top: 140px; left: 660px; width: 620px; font-size: 24px;">
            <xsl:value-of select="Dane/Nabywca/Adres"/>
          </div>
          <div style="position: absolute; top: 210px; left: 720px; width: 620px; font-size: 24px;">
            <xsl:value-of select="Dane/Nabywca/NIP"/>
          </div>
        </div>

        <!-- Numer Faktury -->
        <div style="position: absolute; top: 280px; left: 756px;  font-size: 24px;">
            <xsl:value-of select="Dane/FakturaNumer"/>
        </div>


        <!-- Dane płatności -->
        <div>
          <!--Sposób płatnosci -->
          <div style="position: absolute; top: 386px; left: 242px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/Gotowka"/>
          </div>
          <div style="position: absolute; top: 412px; left: 242px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/Przelew"/>
          </div>
          <div style="position: absolute; top: 440px; left: 242px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/KartaPlanicza"/>
          </div>

          <!-- Informacje o banku i dacie -->
          <div style="position: absolute; top: 382px; left: 574px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/TerminPlatnosci"/>
          </div>
          <div style="position: absolute; top: 412px; left: 574px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/NazwaBanku"/>
          </div>
          <div style="position: absolute; top: 440px; left: 574px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/NrKonta"/>
          </div>

          <!-- Informacje o walucie -->
          <div style="position: absolute; top: 488px; left: 126px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/Waluta"/>
          </div>
          <div style="position: absolute; top: 488px; left: 340px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/KursWaluty"/>
          </div>
          <div style="position: absolute; top: 488px; left: 680px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/TabelaKursow"/>
          </div>
          <div style="position: absolute; top: 488px; left: 920px;  font-size: 20px;">
              <xsl:value-of select="Dane/Platnosc/DataTabeli"/>
          </div>
        </div>

        <!-- Tabela z produktami -->
        <div style="position: absolute; top: 593px; left: 80px; width: 1240px;">
          <table class="table1">
            <xsl:for-each select="Dane/Usluga">
              <tr>
                <td class="kolumna1"> <xsl:value-of select="Index"/> </td>
                <td class="kolumna2"> <xsl:value-of select="Tytul"/> </td>
                <td class="kolumna3"> <xsl:value-of select="JM"/> </td>
                <td class="kolumna4"> <xsl:value-of select="Ilosc"/> </td>
                <td class="kolumna5"> <xsl:value-of select="CenaJednostkowa"/> </td>
                <td class="kolumna6"> <xsl:value-of select="WartoscTowaru"/> </td>
              </tr>
            </xsl:for-each>
            <tr></tr>
            <tr></tr>
          </table>
        </div>


        <!-- Informacje o stanie zapłaty -->
        <div style="position: absolute; top: 780px; left: 1080px;  font-size: 24px;">
            <xsl:value-of select="Dane/Zaplata/Razem"/>
        </div>
        <div style="position: absolute; top: 836px; left: 570px;  font-size: 24px;">
            <xsl:value-of select="Dane/Zaplata/KwotaSlowna"/>
        </div>
        <div style="position: absolute; top: 836px; left: 126px;  font-size: 24px;">
            <xsl:value-of select="Dane/Zaplata/DoZaplaty"/>
        </div>
        <div style="position: absolute; top: 876px; left: 126px;  font-size: 24px;">
            <xsl:value-of select="Dane/Zaplata/Zaplacono"/>
        </div>
        <div style="position: absolute; top: 906px; left: 180px;  font-size: 24px;">
            <xsl:value-of select="Dane/Zaplata/Pozostalo"/>
        </div>


      </div>
    </div>

    </body>
  </html>

  </xsl:template>
</xsl:stylesheet>
