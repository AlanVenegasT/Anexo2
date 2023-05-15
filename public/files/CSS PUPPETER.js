const puppeteer = require('puppeteer');

const createPDFBuffer = async (contenido, opciones) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('about:blank');
  await page.setContent(contenido);
  const buffer = await page.pdf(opciones);
  await browser.close();
  return buffer;
};

const opciones = {
  format: 'Letter', // A3, A4, A5, Legal, Letter 
  landscape: false,
  margin: {
    top: '.8cm',
    right: '.6cm',
    bottom: '.6cm',
    left: '.6cm',
  },
  printBackground: true,
};

const contenido = `
<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>
    
      * {
        font-family: Arial, sans-serif;
      }

      .container {
        flex-direction: column;
        width: 100%;
      }

      ////////////////////////////HOJA1/////////////////////

      .column {
        height: auto;
        flex: 1;
      }
      
      .column-1 {
        background-color: #3B3838;
        color: white;
        border-top: 1px solid black;
        border-bottom: 0px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        padding-top: 10px;
        padding-left: 13px;
        padding-bottom: 10px;
        padding-right: 10px;
        font-weight: 600;
        font-size: 13px;
      }
      
      .column-2 {
        background-color: #D9D9D9;
        text-align: center;
        font-size: 12px; 
        padding-left: 20px;
        padding-right: 20px;
        border: 1px solid black;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .tituloysub{
        font-size: 12px; 
        text-align: center; 
        line-height: 0px;
      }

      .segundatablablanca{
        border-color: #A6A6A6; 
        font-size: 10px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #FFFFFF; 
      }

      .segundatablablanca2{
        border-color: #A6A6A6; 
        font-size: 10px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
      }
       
      .seccionIyII {
        font-size: 12px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }



      .fondbordseccI{
        background-color: #FFFFFF; 
        border-color: #A6A6A6;
      }

      .trestitulosSeccionII{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .titulosseccionII{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 10px;
      }

        .tresopciones{
          width: 10%; 
          background-color: #ffffff; 
          border-color: #A6A6A6; 
          padding-left: 0px; 
          padding-right: 0px; 
          padding-top: 0px;
        }
        

        .contenedortresopciones{
          height: 100%; 
          flex-direction: column;
          justify-content: 
          space-between; 
          align-items: center;
        }



      .primeraopcion{
          width: 100%; 
          background-color: white; 
          height: 33.33%; 
          border-bottom: 1px solid #A6A6A6; 
          padding-bottom: 0px;
      }

      .segundaopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        border-bottom: 1px solid #A6A6A6; 
        padding-top: 0px; 
        padding-bottom: 4px;
      }

     

      .terceraopcion{
        width: 100%; 
        background-color: white; 
        height: 33.33%; 
        padding-top: 0px; 
        padding-bottom: 0px; 
        margin-bottom: 0px; 
      }

      .margendospx{
        margin-left: 2px;
      }

      .margendospxsize{
        margin-left: 2px;
        font-size: 6px;
      }

      .paddingtrecepx{
        padding-left: 13px;
      }

      .paddingcincopx{
        padding-left: 5px;
      }

      .diseñocolumnahojados{
        font-size: 9px; 
        text-align: center; 
        line-height: 8px;
      }

      .bodytablahojauno{
        width: 100%; 
        background-color: #ffffff; 
        border-color: #A6A6A6;
      }

      .espaciotabladearriba{
        margin-top: 12px;
      }

      .primerparrafo{
        font-size: 5.5px; 
        font-weight: 600; 
        text-align: center; 
        line-height: 8px; 
        padding-top: 35px;
      }

      ///////////////////////////////////////HOJA2////////////////////////////

      .tituloseccionII{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .seccionIIsubtitulos3{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .temasseccionII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filaseccionII{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .casillaenblancoseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px;
      }

      .contenedortresopcionesseccionIII{
        width: 12%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        padding-top: 0px;
      }

      .tresopcionesseccionIII{
        height: 100%; 
        flex-direction: column; 
        justify-content: space-between; 
        align-items: center;
      }

      .casillascirculos{
        width: 10%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .tituloseccionIV{
        font-size: 9px; 
        text-align: center; 
        line-height: 3px; 
        background-color: #D9D9D9; 
        border-color: #A6A6A6;
      }

      .opcionesseccionIV{
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 4px;
      }

      .filasseccionIV{
        font-size: 8px; 
        text-align: center; 
        line-height: 4px;
      }

      .casillascirculostexto{
        width: 70%; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: start; 
        line-height: 8px; 
        padding-left: 5px;
      }

      .firmasynombre{
        width: 50%; 
        height: 45px; 
        background-color: #ffffff; 
        border-color: #A6A6A6; 
        padding-left: 0px; 
        padding-right: 0px; 
        text-align: center; 
        line-height: 8px;
      }

      .filafirmasynombre{
        font-size: 7px; 
        text-align: center; 
        line-height: 6px;
      }

      .parrafodos{
        font-size: 8px; 
        font-weight: 400; 
        text-align: justify; 
        line-height: 10px;
      }

      .interlineadodiezpx{
        line-height: 10px;
      }

      .interlineadoochopx{
        line-height: 12px;
      }

      .container2 {
        width: 100%;
        overflow: auto;
      }

      .seccion1{
        float: left;
        width: 49%; 
      }
      .seccion2{
        float: right;
        width: 49%;
        
        text-align: center;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
  
      th {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
        height: 0px;
      }
  
      th {
        background-color: #ddd;
      }
  
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      
      .container3 {
        position: absolute;
        display: flex;
        height: 80px; /* altura del 100% del viewport */
        width: 100%; /* ancho del 100% del viewport */

      }
      
      .tablacompleta {
        page-break-inside: avoid;
      }

      </style>
    


      <title>Document</title>
    </head>

    


  <body >

  

    <div> <!----------------------------------Hoja 1 ----------------------->

    <div class="container">
        <div class="column column-1">gob<span style="color: red;">.</span>mx </div>
        <div class="column column-2"> Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos
        Unidad de Gestión Industrial</div>
    </div>
 
    <div class="container">
        <h2 class="tituloysub" style=" padding-top: 5px; font-weight: 400; " >Anexo II</h2>
        <p class="tituloysub" style="  padding-top: 1px; padding-bottom: 3px; " >Formato diagnóstico de emisiones de metano (PPCIEM)</p>
    </div>

    
    <div class="container2 ">
       <div class="seccion1"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2">Homoclave del formato</td>
       </tr>
       <tr>
         <td class="segundatablablanca">FF-ASEA-030</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Lugar de elaboración</td>
       </tr>
       <tr>
         <td class="segundatablablanca"> Hola </td>
       </tr>
     </table>
       </div>

       <div class="seccion2"> 
       <table class="tablacompleta">
       <tr>
         <td class="segundatablablanca2" >Fecha de publicación del formato en el DOF</th>
       </tr>
       <tr>
         <td class="segundatablablanca"> 06 11 2018</td>
       </tr>
       <tr>
         <td class="segundatablablanca2" >Fecha de elaboración</td>
       </tr>
       <tr ">
         <td class="segundatablablanca">DD MM AAAA</td>
       </tr>
     </table>
    </div>

    
    <div class="container2">
    <div class="espaciotabladearriba"> 
        <table class="tablacompleta" style="width: 100%; ">
            <tr>
                <td colspan="4" style="font-size: 12px; text-align: center; line-height: 3px; background-color: #D9D9D9; border-color: #A6A6A6;">Sección I. Datos generales</td>
            </tr>
            <tr>
                <td style="font-size: 10px; text-align: center; line-height: 12px; background-color: #FFFFFF; border-color: #A6A6A6; width: 20%;  text-align: justify; padding: 6px 2px 6px 2px; " >Emisiones de metano para el Año base (g/kg/t)</td>
                <td style="font-size: 10px; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6; width: 30%;"> </td>



                <td rowspan="2" style="font-size: 10px;  text-align: center; line-height: 10px; background-color: #FFFFFF; border-color: #A6A6A6;  width: 15%;  text-align: justify; " >Metodología de 
                cuantificación</td>
                <td style="background-color: #FFFFFF; border-color: #A6A6A6; border-bottom: 0px solid white;   width: 35%;"></td>
                
            </tr>
            </tr>
            <tr>
                <td style="background-color: #FFFFFF; border-color: #A6A6A6; font-size: 10px; text-align: center; line-height: 10px; text-align: justify; padding: 4px 4px 4px 4px;" >Emisiones de metano para las operaciones en pozos fuera del Año base (g/kg/t)</td>
                <td style="background-color: #FFFFFF; border-color: #A6A6A6;"> </td>
                <td style="background-color: #FFFFFF; border-color: #A6A6A6; border-top: 0px solid white;  width: 35%;"> </td>
            </tr>
            </tr>
        </table>
    </div>
</div>

    
    

<table class="espaciotabladearriba">
    <thead >
      <tr>
        <td colspan="10" class="seccionIyII" >Sección II. Diagnóstico Año base</td>
        
      </tr>
      <tr style="font-size: 10px; text-align: center; line-height: 4px;">
        <td colspan="8" class="trestitulosSeccionII" >Identificación</td>
        <td class="trestitulosSeccionII">Clasificación</td>
        <td class="trestitulosSeccionII">Cuantificación</td>
      </tr>
    </thead>
    <tbody id="tabla-body" class="bodytablahojauno">


      <tr class="diseñocolumnahojados">
        <td class="titulosseccionII" >Id del pozo equipo o Componente</td>
        <td class="titulosseccionII" >Tipo del pozo, equipo o Componente</td>
        <td class="titulosseccionII" >Operaciones del pozo</td>
        <td class="titulosseccionII" >Actividades y operaciones asociadas al equipo o Componente</td>
        <td class="titulosseccionII" >Fecha de identificacion (dd/mm/aaaa)</td>
        <td class="titulosseccionII" >Estado del pozo, equipo o Componente</td>
        <td class="titulosseccionII" >Condiciones operativas del pozo, equipo o Componente</td>
        <td class="titulosseccionII" >Elementos utilizados en la identificación</td>
        <td class="titulosseccionII" >Tipo de emisión de metano</td>
        <td class="titulosseccionII" >Emisiones de metano (g/kg/t)</td>
      </tr>

      
      <tr class="diseñocolumnahojados" >    <!-- Fila2 -->
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>

        <td class="tresopciones" >
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
          </div>
          <div class="segundaopcion" >
            <label class="" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx"> Operacion </span></label>
          </div>
          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td class="titulosseccionII"> </td>

        <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class=""><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div class="segundaopcion">
          <label class="" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>

          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especidicar</span></label>
          </div>
        </div>
      </td>

        
      <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div class="segundaopcion">
            <label class="" ><input type="radio" name="estado">Emisiones<span class="paddingtrecepx"> por Fuga</span></label>
          </div>
          <div class="terceraopcion">
            <label class="" ><input type="radio" name="estado">Venteo de<span class="paddingcincopx"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td class="titulosseccionII"> </td>
      </tr>
      


      <tr class="diseñocolumnahojados" >    <!-- Fila3 -->
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>

        <td class="tresopciones" >
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
          </div>
          <div class="segundaopcion" >
            <label class="" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx"> Operacion </span></label>
          </div>
          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td class="titulosseccionII"> </td>

        <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class=""><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div class="segundaopcion">
          <label class="" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>

          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especidicar</span></label>
          </div>
        </div>
      </td>

        
      <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div class="segundaopcion">
            <label class="" ><input type="radio" name="estado">Emisiones<span class="paddingtrecepx"> por Fuga</span></label>
          </div>
          <div class="terceraopcion">
            <label class="" ><input type="radio" name="estado">Venteo de<span class="paddingcincopx"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td class="titulosseccionII"> </td>
      </tr>


      <tr class="diseñocolumnahojados" >    <!-- Fila4 -->
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>

        <td class="tresopciones" >
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
          </div>
          <div class="segundaopcion" >
            <label class="" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx"> Operacion </span></label>
          </div>
          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td class="titulosseccionII"> </td>

        <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class=""><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div class="segundaopcion">
          <label class="" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>

          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especidicar</span></label>
          </div>
        </div>
      </td>

        
      <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div class="segundaopcion">
            <label class="" ><input type="radio" name="estado">Emisiones<span class="paddingtrecepx"> por Fuga</span></label>
          </div>
          <div class="terceraopcion">
            <label class="" ><input type="radio" name="estado">Venteo de<span class="paddingcincopx"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td class="titulosseccionII"> </td>
      </tr>


      <tr class="diseñocolumnahojados" >    <!-- Fila5-->
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>
        <td class="titulosseccionII"> </td>

        <td class="tresopciones" >
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
          </div>
          <div class="segundaopcion" >
            <label class="" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx"> Operacion </span></label>
          </div>
          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td class="titulosseccionII"> </td>

        <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class=""><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div class="segundaopcion">
          <label class="" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>

          <div class="terceraopcion" >
            <label class="" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especidicar</span></label>
          </div>
        </div>
      </td>

        
      <td class="tresopciones">
        <div class="contenedortresopciones" >
          <div class="primeraopcion" >
            <label class="" ><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div class="segundaopcion">
            <label class="" ><input type="radio" name="estado">Emisiones<span class="paddingtrecepx"> por Fuga</span></label>
          </div>
          <div class="terceraopcion">
            <label class="" ><input type="radio" name="estado">Venteo de<span class="paddingcincopx"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td class="titulosseccionII"> </td>
      </tr>
      

      
      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>



  <!------------------------------- Inician los primeros 6 a 15----------------------------------------------------------------------------->




  <table style="margin-top: 0px; page-break-inside: avoid; " class="tablacompleta">
  <thead >
  </thead>
  <tbody id="tabla-body"  class="bodytablahojauno" >   

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    <tr style="font-size: 7px; text-align: center; line-height: 6px; height: 80.3px;  "> <!--Fila3 -->
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>
      <td class="titulosseccionII"> </td>

      <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">En <span class="paddingtrecepx" > operacion </span></label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span class="paddingtrecepx" > Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span class="paddingtrecepx"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
      
      <td class="tresopciones" >
      <div class="contenedortresopciones">
        <div class="primeraopcion" >
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        <div class="segundaopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span class="paddingtrecepx"> en sitio </span></label>
        </div>
        <div class="terceraopcion" >
          <label class="margendospx" ><input type="radio" name="estado">Otros <span class="paddingtrecepx"> especificar</span></label>
        </div>
      </div>
    </td>

    <td class="tresopciones" >
      <div class="contenedortresopciones" >
        <div class="primeraopcion">
          <label class="margendospxsize" ><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion" >
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span class="paddingtrecepx" > por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Venteo de<span style="padding-left: 5px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>

      <td class="titulosseccionII"> </td>
    </tr>

    

    

    
  </tbody>
</table>

<!-------------------------------Terminan los primeros 6 a 15----------------------------------------------------------------------------->


     <div class="container">
        <p class="primerparrafo" style="padding-bottom: 10px;" >De conformidad con el artículo 4 de la Ley Federal de Procedimiento Administrativo, los formatos para solicitar trámites y servicios deberán publicarse en el Diario Oficial de la
        Federación (DOF).</p>
    </div>

   
  
  </div> <!----------------------------------Hoja 1 Fin ----------------------->

  <div> <!----------------------------------Hoja 2  -------------------------->


  <table class="espaciotabladearriba tablacompleta ">
    <thead >
      <tr>
        <td colspan="10" class="seccionIyII" >Sección III. Diagnóstico de operaciones en pozos fuera del Año base</td>
        
      </tr>
      <tr style="font-size: 10px; text-align: center; line-height: 4px;">
        <td colspan="7" class="seccionIIsubtitulos3" >Identificación</td>
        <td class="seccionIIsubtitulos3" >Clasificación</td>
        <td class="seccionIIsubtitulos3" >Cuantificación</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filaseccionII">
        <td class="temasseccionII">Id del pozo</td>
        <td class="temasseccionII">Tipo del pozo</td>
        <td class="temasseccionII">Operaciones</td>
        <td class="temasseccionII">Fecha de inicio de la operación</td>
        <td class="temasseccionII">Estado del pozo</td>
        <td class="temasseccionII">Condiciones operativas del pozo</td>
        <td class="temasseccionII">Elementos utilizados en la identificación</td>
        <td class="temasseccionII">Tipo de emisión de metano</td>
        <td class="temasseccionII">Emisiones de metano (g/kg/t)</td>
      </tr>

      <tr class="filaseccionII">    <!-- Fila2 -->
        <td class="casillaenblancoseccionIII"> </td>
        <td class="casillaenblancoseccionIII"> </td>
        <td class="casillaenblancoseccionIII"> </td>
        <td class="casillaenblancoseccionIII"> </td>
        

        <td class="contenedortresopcionesseccionIII">
        <div class="tresopcionesseccionIII">
          <div class="primeraopcion">
            <label class="margendospx" ><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operacion </span></label>
          </div>
          <div class="segundaopcion">
            <label class="margendospx" ><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operacion </span></label>
          </div>
          <div class="terceraopcion">
            <label class="margendospx" ><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
          </div>
        </div>
      </td>

        <td class="casillaenblancoseccionIII" > </td>

        <td class="contenedortresopcionesseccionIII">
        <div class="tresopcionesseccionIII">
          <div class="primeraopcion">
            <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
          </div>
          
          <div class="segundaopcion">
          <label class="margendospx" ><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
        </div>

          <div class="terceraopcion">
            <label class="margendospx" ><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especidicar</span></label>
          </div>
        </div>
      </td>

        
      <td class="contenedortresopcionesseccionIII">
        <div class="tresopcionesseccionIII">
          <div class="primeraopcion">
            <label class="margendospxsize"><input type="radio"  name="estado">Destrucción</label>
          </div>
          <div class="segundaopcion">
            <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
          </div>
          <div class="terceraopcion">
            <label class="margendospx"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
          </div>
        </div>
      </td>


        <td class="casillaenblancoseccionIII"> </td>
      </tr>


      <tr class="filaseccionII">    <!-- Fila2 -->
      <td class="casillaenblancoseccionIII"> </td>
      <td class="casillaenblancoseccionIII"> </td>
      <td class="casillaenblancoseccionIII"> </td>
      <td class="casillaenblancoseccionIII"> </td>
      

      <td class="contenedortresopcionesseccionIII">
      <div class="tresopcionesseccionIII">
        <div class="primeraopcion">
          <label class="margendospx" ><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operacion </span></label>
        </div>
        <div class="segundaopcion">
          <label class="margendospx" ><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operacion </span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
        </div>
      </div>
    </td>

      <td class="casillaenblancoseccionIII" > </td>

      <td class="contenedortresopcionesseccionIII">
      <div class="tresopcionesseccionIII">
        <div class="primeraopcion">
          <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
        </div>
        
        <div class="segundaopcion">
        <label class="margendospx" ><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
      </div>

        <div class="terceraopcion">
          <label class="margendospx" ><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especidicar</span></label>
        </div>
      </div>
    </td>

      
    <td class="contenedortresopcionesseccionIII">
      <div class="tresopcionesseccionIII">
        <div class="primeraopcion">
          <label class="margendospxsize"><input type="radio"  name="estado">Destrucción</label>
        </div>
        <div class="segundaopcion">
          <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
        </div>
        <div class="terceraopcion">
          <label class="margendospx"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
        </div>
      </div>
    </td>


      <td class="casillaenblancoseccionIII"> </td>
    </tr>

    <tr class="filaseccionII">    <!-- Fila2 -->
    <td class="casillaenblancoseccionIII"> </td>
    <td class="casillaenblancoseccionIII"> </td>
    <td class="casillaenblancoseccionIII"> </td>
    <td class="casillaenblancoseccionIII"> </td>
    

    <td class="contenedortresopcionesseccionIII">
    <div class="tresopcionesseccionIII">
      <div class="primeraopcion">
        <label class="margendospx" ><input type="radio"  name="estado">En <span style="padding-left: 13px;"> operacion </span></label>
      </div>
      <div class="segundaopcion">
        <label class="margendospx" ><input type="radio" name="estado">Fuera de <span style="padding-left: 13px;"> Operacion </span></label>
      </div>
      <div class="terceraopcion">
        <label class="margendospx" ><input type="radio" name="estado">Por <span style="padding-left: 13px;"> incorporar</span></label>
      </div>
    </div>
  </td>

    <td class="casillaenblancoseccionIII" > </td>

    <td class="contenedortresopcionesseccionIII">
    <div class="tresopcionesseccionIII">
      <div class="primeraopcion">
        <label class="margendospx" ><input type="radio"  name="estado">Planos</label>
      </div>
      
      <div class="segundaopcion">
      <label class="margendospx" ><input type="radio" name="estado">Revisión<span style="padding-left: 13px;"> en sitio </span></label>
    </div>

      <div class="terceraopcion">
        <label class="margendospx" ><input type="radio" name="estado">Otros <span style="padding-left: 13px;"> especidicar</span></label>
      </div>
    </div>
  </td>

    
  <td class="contenedortresopcionesseccionIII">
    <div class="tresopcionesseccionIII">
      <div class="primeraopcion">
        <label class="margendospxsize"><input type="radio"  name="estado">Destrucción</label>
      </div>
      <div class="segundaopcion">
        <label style="margin-left: 1px;"><input type="radio" name="estado">Emisiones<span style=" padding-left: 13px; "> por Fuga</span></label>
      </div>
      <div class="terceraopcion">
        <label class="margendospx"><input type="radio" name="estado">Venteo de<span style="padding-left: 13px;"> Hidrocarburos</span></label>
      </div>
    </div>
  </td>


    <td class="casillaenblancoseccionIII"> </td>
  </tr>
      
      
      

      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>




  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td colspan="4" class="tituloseccionIV" >Sección IV. Documentos anexos al formato</td>
      </tr>
      <tr class="filasseccionIV">
        <td class="opcionesseccionIV" >Si</td>
        <td class="opcionesseccionIV" >No</td>
        <td class="opcionesseccionIV" >No aplica</td>
        <td style="background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; text-align: start; line-height: 4px; padding-left: 5px;">Documento</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" >Justificación de la selección de la metodología de cuantificación.</td>
      </tr>
      <tr class="filasseccionIV" >
        <td class="casillascirculos" > <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos" > <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos" > <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto" >Indicar las características del SRV y el número de pozos, equipos y/o Componentes conectados al mismo. </td>
      </tr>
      <tr class="filasseccionIV" >
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculos"> <label class="margendospx" ><input type="radio"  name="estado"></label></td>
        <td class="casillascirculostexto">Justificación técnica pormenorizada de las acciones equivalentes o superiores.</td>
      </tr>
            

      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td  class="seccionIyII" >Nombre del responsable técnico</td>
        <td  class="seccionIyII" >Firma del responsable técnico</td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; background-color: #ffffff; border-color: #A6A6A6; padding: ">
      <tr class="filafirmasynombre" >
        <td class="firmasynombre"> <label class="margendospx"> </td>
        <td class="firmasynombre"> <label class="margendospx"> </td>
      </tr>
      
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>

  <div>
    <p class="parrafodos"> Los datos personales recabados para la atención de su trámite serán protegidos, incorporados y tratados, con fundamento en el artículo  15 de la 
    LFPA, Lo anterior en cumplimiento del décimo séptimo de los lineamientos de protección de datos personales publicados en el Diario Oficial de la 
    Federación el 30 de septiembre de 2005.
     </p>
  <div>

  </div> <!----------------------------------Hoja 2 Fin ----------------------->

  <div> <!----------------------------------Hoja 3 --------------------------->


  <table class="tablacompleta espaciotabladearriba" >
    <thead >
      <tr>
        <td class="seccionIyII" >Instructivo para el llenado del formato Anexo II </td>
      </tr>
    </thead>
    <tbody id="tabla-body" style="width: 100%; font-size: 12px; background-color: #ffffff; border-color: #A6A6A6;  ">
      <tr style="filasseccionIV" >
        <td style="width: 100%; height: 45px; background-color: #ffffff; border-color: #A6A6A6; padding-left: 0px; padding-right: 0px; line-height: 7px;">  
        
        <p class="text-align: start;  padding: 0px; margin: 0px; line-height: 0px; left: 2%;"> <strong><span style=" color: transparent;">---</span>Indicaciones generales</strong><p>

        <ol type="a" style="  ">
          <li class="interlineadoochopx" >Esta solicitud deberá ser llenada en computadora.</li>
          <li class="interlineadoochopx" >Esta solicitud deberá presentarse a la Agencia en medios físicos, magnéticos o electrónicos.</li>
        </ol>

        <div style=" position: relative; width: 100%;">
        <p class="text-align: start; left: 2%;"> <strong><span style=" color: transparent;">---</span>Información requerida en el formato</strong><p>
        <div>
        <ol type="I" start="1" >
          <li>Sección I: Datos generales</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px;  ">
                <li class="interlineadoochopx" >Indicar las emisiones de metano del Año base en gramos (g), kilogramos (kg) o toneladas (t) cuantificadas de conformidad con lo 
                establecido en el Capítulo II del Título Segundo de las presentes Disposiciones. Debe corresponder con la suma de las emisiones de 
                todos los pozos, equipos y Componentes incluidos en la Sección II de este Anexo.</li>
                <li class="interlineadoochopx" >Indicar las emisiones de metano de las operaciones en pozos establecidas en el artículo 13, fracción II, incisos a), c), e),  f) y h) en 
                gramos (g), kilogramos (kg) o toneladas (t) cuantificadas de conformidad con lo establecido en el Capítulo II del Título Segundo de las 
                presentes  Disposiciones.  Debe  corresponder  con  la  suma  de  las emisiones  de  todos  los  pozos  incluidos  en la Sección III  de  este 
                Anexo. Escribir la ubicación de la Instalación: Domicilio y coordenadas geográfica en UTM (archivos shape file).</li>
                <li class="interlineadoochopx" >Indicar la metodología de cuantificación de las emisiones de metano utilizada, de conformidad con lo establecido en el artículo 18 de 
                las presentes Disposiciones.</li>
            </ol>
          <li>Sección II: Diagnóstico Año base</li>
          <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
                <li class="interlineadoochopx" >Se deberá llenar una fila por cada pozo, equipo o Componente. </li>
                <li class="interlineadoochopx" >En caso de identificar más de un tipo de emisión por pozo, equipo o Componente se deberá llenar una fila por cada tipo de emisión 
                de metano.</li>
                <li class="interlineadoochopx" >Anotar el Id del pozo, equipo o Componente.</li>
                <li class="interlineadoochopx" >Indicar el tipo de pozo, equipo o Componente.</li>
                <li class="interlineadoochopx" >Tratándose de pozos, especificar el tipo de operación del pozo de acuerdo con lo establecido en el artículo 13, fracción II, incisos b),
                d) y g) de las presentes Disposiciones. En caso de realizar más de una operación en un mismo pozo se deberán indicar en filas
                diferentes.</li>
                <li class="interlineadoochopx" >Tratándose de equipos o Componentes, indicar las actividades y operaciones asociadas a los mismos.</li>
                <li class="interlineadoochopx" >Indicar la fecha en la que la emisión se identificó.</li>
                <li class="interlineadoochopx" >Marcar con una X el estado del pozo, equipo o Componente como: en operación, fuera de operación o por incorporar, según
                corresponda.</li>
                <li  class="interlineadoochopx" >Indicar las condiciones operativas (temperatura y presión, entre otras) del pozo, equipo o Componente.</li>
                <li  class="interlineadoochopx" >Marcar con una X los elementos que se utilizaron en la identificación de la emisión de metano, en caso de utilizarse elementos distintos
                a los planos y a la revisión en sitio, especificar dichos elementos.</li>
                <li class="interlineadoochopx" >Marcar con una X el tipo de emisión de metano de conformidad con el artículo 14 de las presentes Disposiciones.</li>
                <li class="interlineadoochopx" >Anotar las emisiones de metano emitidas anualmente por cada pozo, equipo o Componente en gramos (g), kilogramos (kg) o toneladas
                (t).</li>
            </ol>
          <li>Sección III: Diagnóstico de operaciones en pozos fuera del Año base
            <ol type="a" style=" padding-top: 5px; padding-bottom: 0px; ">
                <li class="interlineadoochopx" >Se deberá llenar una fila por cada pozo. </li>
                <li class="interlineadoochopx" >En caso de identificar más de un tipo de emisión por pozo, se deberá llenar una fila por cada tipo de emisión.</li>
                <li class="interlineadoochopx" >Anotar el Id del pozo.</li>
                <li class="interlineadoochopx" >Indicar el tipo de pozo.</li>
                <li class="interlineadoochopx" >Especificar el tipo de operación del pozo de acuerdo con lo establecido en el artículo 13, fracción II, incisos a), c), e), f) y h) de las
                presentes Disposiciones. En caso de realizar más de una operación en el mismo pozo se deberán indicar en filas diferentes.</li>
                <li class="interlineadoochopx" >Indicar la fecha en la que la operación se realizó.</li>
                <li class="interlineadoochopx" >Marcar con una X el estado del pozo, equipo o Componente como: en operación, fuera de operación o por incorporar, según
                corresponda.</li>
                <li class="interlineadoochopx" >Indicar las condiciones operativas (temperatura y presión entre otras) del pozo.</li>
                <li class="interlineadoochopx" >Marcar con una X los elementos que se utilizaron en la identificación de la emisión de metano, en caso de utilizarse elementos distintos
                a los planos y la revisión en sitio, especificar dichos elementos.</li>
                <li class="interlineadoochopx" >Marcar con una X el tipo de clasificación de la emisión de metano de conformidad con el artículo 14 de las presentes Disposiciones.</li>
                <li class="interlineadoochopx" >Anotar las emisiones de metano emitidas anualmente por pozo, equipo o Componente en gramos (g), kilogramos (kg) o toneladas (t).</li>
            </ol>
          </li>
          <li style=" padding-top: 5px;">Sección IV: Diagnóstico Año base</li>
            <ol type="a" style=" padding-top: 5px; padding-bottom: 7px; ">
              <li class="interlineadoochopx">Adjuntar la justificación de la selección de la metodología de cuantificación de conformidad con lo establecido en el artículo 18 de las 
              presentes Disposiciones. </li>
              <li class="interlineadoochopx">Adjuntar la documentación sobre las características del SRV y los equipos conectados al mismo.</li>
              <li class="interlineadoochopx">Adjuntar  la  justificación  técnica  pormenorizada  de  las  acciones  equivalentes  o  superiores  de  conformidad  con  el  artículo  10  ó  27 
              fracción III, según corresponda</li>
            </ol>
          
        </ol>        
        </td>
      </tr>
      <!-- Agrega más filas aquí -->
    </tbody>
  </table>
  </div> <!----------------------------------Hoja 3 Fin ----------------------->

   
  <!--Footer 1--> 
  <div style=" width:100%; height: auto; bottom: 0; background-color: #D9D9D9; border-top: 1px solid #767171; margin-top: 12px;" >
  <div style="width:22%; height: auto; display:inline-block; left:0; vertical-align: middle;  "> <img src="https://i.imgur.com/09HeOR0.png" width="100px" height="auto" style="padding-left: 18px; padding-bottom: 15px;" > </div>
  <div style="width:11%; height: auto; display:inline-block; left:20%; vertical-align: middle; "> <img src="https://i.imgur.com/Kz7xzj7.png" width="60px" height="auto"  style="padding-bottom: 11px;"> </div>
  <div style="width:11%; height: auto; display:inline-block; left:40%; vertical-align: middle; "> <img src="https://i.imgur.com/mp2K5fP.png" width="60px" height="auto"  style="padding-bottom: 15px;"> </div>
  <div style="width:12%; height: auto; display:inline-block; left:60%; vertical-align: middle;  "> <img src="https://i.imgur.com/Ws1Ngrd.png" width="60px" height="auto" style="padding-bottom: 15px;" > </div>
  <div style="width:39%; height: auto; display:inline-block; left:80%;"> 
      <p style=" line-height: 0px; padding: 0px; padding-top: 10px; margin: 0px; font-size: 8px; font-weight: 600; ">Contacto: </p>  
      <p style=" line-height: 9px; font-size: 7px; padding-right: 50px; "> Boulevard Adolfo Ruiz Cortines No. 4209,
      Colonia Jardines en la Montaña, C.P. 14210,
      Delegación Tlalpan, Ciudad de México,
      Teléfono (+52.55) 9126-0100</p>
  </div>


  </body>
  
  </html>

`;

createPDFBuffer(contenido, opciones)
  .then(buffer => {
    const directorio = './public/files/constancia.pdf';
    require('fs').writeFileSync(directorio, buffer);
    console.log('archivo creado');
  })
  .catch(error => console.error(error));