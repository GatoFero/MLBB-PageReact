<div class="heroPage" page="beatrix">
        <div class="botonListHeroes">
            <a href="heroes.php">Lista de Heroes</a>
        </div>
        <span>Soldado del Amanecer</span>
        <span>Beatrix</span>
        <div class="imgPage">
            <img src="assets/img/presentacionHeroes/beatrix/beatrix.jpg" alt="">
        </div>
        <div class="descripcionHero">
            <div class="tipo">
                <div class="desRol">
                    <img src="assets/img/icons/tirador.png" alt="">
                    <h2>Rol</h2>
                    <h1>Tirador</h1>
                </div>
            </div>
            <span></span>
            <div class="descripcion">
                <p>A guard of the Minos Labyrinth, who kept his pledge even after the kingdoms fall. He has blocked off intruders who covered the kingdoms heritage for a century with an unusually huge arm.</p>
            </div>
            <div class="build">
                <h1>Build:</h1>
                <div class="items">
                    <img src="assets/img/items/tough-boots-png-min.png" alt="">
                    <img src="assets/img/items/endless-battle-png.png" alt="">
                    <img src="assets/img/items/thunder-belt-png.png" alt="">
                    <img src="assets/img/items/athena-shield-png.png" alt="">
                    <img src="assets/img/items/malefic-roar-png.png" alt="">
                    <img src="assets/img/items/brute-force-breastplate-png.png" alt="">
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