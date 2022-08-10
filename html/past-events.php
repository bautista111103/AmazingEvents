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
               <a class="a-header" href="../home.php">Home</a>
               <a class="a-header" href="#">Past Events</a>
               <a class="a-header" href="../html/upcoming-events.php">Upcoming Events</a>
               <a class="a-header" href="../html/contact.php">Contact</a>
               <a class="a-header" href="../html/stats.php">Stats</a>
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
              <a href="../html/index.html"><img class="boton" src="../assets/Images/boton-izquierdo.png" alt=""></a>
            </div>
            <div>
              <p>Past Events</p>
            </div>
            <div>
              <a href="../html/upcoming-events.html"><img class="boton" src="../assets/Images/boton-derecho.png" alt=""></a>
            </div>
          </div>
          <div class="contenedor-form">
              <div class="container">
                <div class="row">
                  <div class="col-xxl-10 col-10">
                    <div class="check-ctn">
                      <div class="filterItem"id="mis-checkbox"></div>
                    </div>
                  </div>
                  <div class="col-xxl-2 col-10">
                    <div class="filterItem">
                      <input type="search" name="search" id="buscador" placeholder="search">
                  </div>
                  </div>
                </div>
              </div>
          </div>
        
           <div class="contenedor-cartas" id="carta"></div>

        </main>
        <footer>
          <div>
            <img class="logo-f" src="../assets/Images/instagram.png" alt="logo-ig">
            <img class="logo-f" src="../assets/Images/facebook.png" alt="logo-fb">
            <img class="logo-f" src="../assets/Images/whatsapp.png" alt="logo-ws">
          </div>  
            <p class="parrafo-f">Cohort</p>
        </footer>
    
          <script src="../js/past-events.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
  </html>