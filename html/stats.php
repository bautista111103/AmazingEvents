<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazing Events</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="icon" href="../assets/Images/logo.amazing.png" type="image/png">
    <script type="text/javascrip" src="../main.js"></script> 
</head>
<body>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center">
      <div class="col-xxl-4 col-xl-5 col-lg-3 col-md-8 col-sm-8 col-8">
       <img class="logo" src="../assets/Images/logo.amazing.png" alt="logo">
     </div>
     <div class="col-xxl-8 col-xl-7 col-lg-9 col-md-4 col-sm-4 col-4">
       <nav class="navbar navbar-expand-lg navbar-light">
         <div class="container-fluid">
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
             <div class="navbar-nav">
               <a class="a-header" href="../index.html">Home</a>
               <a class="a-header" href="../html/past-events.html">Past Events</a>
               <a class="a-header" href="../html/upcoming-events.html">Upcoming Events</a>
               <a class="a-header" href="../html/contact.html">Contact</a>
               <a class="a-header" href="#">Stats</a>
             </div>
           </div>
         </div>
       </nav>
     </div>
   </div>
  </div>
  </header>
    <main>
      <div class="contenedor-boton">
        <div>
          <a href="../html/contact.html"><img class="boton" src="../assets/Images/boton-izquierdo.png" alt=""></a>
        </div>
        <div>
          <p>Stats</p>
        </div>
        <div>
          
        </div>
      </div>
      <div class="contenedor-tablas">
        <table class="tabla-mia">
          <colgroup>
            <col span="2" class="categories-revenues">
            <col span="1" class="Percentage-of-attendance">
          </colgroup>
          <thead>
            <tr>
              <th>Events statistic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td-mio">Events with the highest percentage of attendance</td>
              <td class="td-mio">Events with the lowest percentage of attendance</td>
              <td class="td-mio">Events with larger capacity</td>
            </tr>
            <tr id="tr-tabla-1"></tr>
          </tbody> 
        </table>
        <table class="tabla-mia" id="tabla2">
            <colgroup>
              <col span="2" class="categories-revenues">
              <col span="1" class="Percentage-of-attendance">
            </colgroup>
               <thead>
                  <tr>
                    <th>Upcoming events statistic by category</th>
                  </tr>
               </thead>
               <tbody id="tr-tabla-2">
                
              </tbody> 
        </table>
        <table class="tabla-mia" id="tabla3">
          <colgroup>
            <col span="2" class="categories-revenues">
            <col span="1" class="Percentage-of-attendance">
          </colgroup>
          <thead>
            <tr>
              <th>Past Events statistic by category</th>
            </tr>
          </thead>
          <tbody id="tr-tabla-3">
          </tbody>   
        </table>
      </div>   
    </main>
    <footer>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-8">
            <img class="logo-f" src="../assets/Images/instagram.png" alt="logo-ig">
            <img class="logo-f" src="../assets/Images/facebook.png" alt="logo-fb">
            <img class="logo-f" src="../assets/Images/whatsapp.png" alt="logo-ws">
          </div>
          <div class="col-4">
            <p class="parrafo-f">Cohort</p>
          </div>
        </div>
      </div>
    </footer>
      
    <script src="../js/stats.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>