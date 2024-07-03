<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/7be1e22192.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="js/javascript.js"></script>
    <title>Mobile Legends: Bang Bang - Heroes</title>
</head>
<body>
    <header>
        <div class="navHeader">
            <div class="navLogo">
                <img src="assets/img/logos/moonton.png" alt="Empresa">
                <img src="assets/img/logos/mlbb.png" class="mlbb" alt="Logo">       
            </div>
            <div class="navMenu">
                <nav>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="juego.html">Juego</a></li>
                        <li><a href="heroes.html">Heroes</a></li>
                        <li><a href="noticias.html">Noticias</a></li>
                        <li><a href="historia.html">Historia</a></li>
                        <li><a href="comunidad.html">Comunidad</a></li>
                        <li><a href="esports.html">eSports</a></li>
                    </ul>
                </nav>
            </div>
            <div class="botonesNav">
                <a href="https://discord.com/invite/mobilelegendsbangbang">
                    <i class="fa-brands fa-discord fa-2xl"></i>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&pli=1">
                    <i class="fa-brands fa-google-play fa-2xl"></i>
                </a>
            </div>
            <div class="redes">
                <a href="#">
                    <i class="fa-brands fa-instagram fa-lg"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-facebook fa-lg"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-youtube fa-lg"></i>
                </a>
                <a href="#">
                    <i class="fa-solid fa-share fa-lg"></i>
                </a>
            </div>

            <!-- Menu Mobile -->
            <div class="menuMobile" id="menu">
                <i onclick="openNav()" class="fa-solid fa-bars fa-xl" ></i>
            </div>
            <div class="overlayMobile" id="mobile-menu">
                    <i onclick="closeNav()" class="fa-regular fa-circle-xmark fa-2xl close" id="close"></i>
                <div class="cont-overlayMobile">
                    <div class="navMenu-mobile">
                        <nav>
                            <ul>
                                <li><a href="index.html">Inicio</a></li>
                                <li><a href="juego.html">Juego</a></li>
                                <li><a href="heroes.html">Heroes</a></li>
                                <li><a href="noticias.html">Noticias</a></li>
                                <li><a href="historia.html">Historia</a></li>
                                <li><a href="comunidad.html">Comunidad</a></li>
                                <li><a href="esports.html">eSports</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="botonesNav-mobile">
                        <a href="https://discord.com/invite/mobilelegendsbangbang">
                            <i class="fa-brands fa-discord fa-2xl"></i>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&pli=1">
                            <i class="fa-brands fa-google-play fa-2xl"></i>
                        </a>
                    </div>
                    <div class="redes-mobile">
                        <a href="#">
                            <i class="fa-brands fa-instagram fa-lg"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-facebook fa-lg"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-youtube fa-lg"></i>
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-share fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>