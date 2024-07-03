<div class="heroPage" page="alice">
        <div class="botonListHeroes">
            <a href="heroes.php">Lista de Heroes</a>
        </div>
        <span>Reina del Apocalipsis</span>
        <span>Alice</span>
        <div class="imgPage">
            <img src="assets/img/presentacionHeroes/alice/alice.jpg" alt="Imagen Alice">
        </div>
        <div class="descripcionHero">
            <div class="tipo">
                <div class="desRol">
                    <img src="assets/img/icons/mago.png" alt="">
                    <h2>Rol</h2>
                    <h1>Mago</h1>
                </div>
            </div>
            <span></span>
            <div class="descripcion">
                <p>A guard of the Minos Labyrinth, who kept his pledge even after the kingdoms fall. He has blocked off intruders who covered the kingdoms heritage for a century with an unusually huge arm.</p>
            </div>
            <div class="build">
                <h1>Build:</h1>
                <div class="items">
                    <img src="assets/img/items/demon-shoes-png-min.png" alt="">
                    <img src="assets/img/items/clock-of-destiny-png.png" alt="">
                    <img src="assets/img/items/enhanched-talisman-png.png" alt="">
                    <img src="assets/img/items/winter-truncheon-png.png" alt="">
                    <img src="assets/img/items/holy-crystal-png.png" alt="">
                    <img src="assets/img/items/ice-queen-wand-png.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <script>
        $('.textHabilidad').hide()
        $('.demosSkill').hide()
        $('.textHabilidad[skill="0"]').show()
        $('.demosSkill[skill="0"]').show()
        
        $('.inputSkills input').click(function(){
        var numSkill= $(this).attr('skill')

        $('.textHabilidad').hide()
        $('.demosSkill').hide()

        $('.textHabilidad[skill*="'+numSkill+'"]').show()
        $('.demosSkill[skill*="'+numSkill+'"]').show()
        })
    </script>