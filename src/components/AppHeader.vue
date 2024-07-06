<!-- Script -->
<script>
    // Esportazione del nome del componente
    export default {
        name: 'AppHeader',
        data() {
            return{
                voices: [
                    {
                        isActive: false,
                        name: 'CHARACTERS'
                    },
                    {
                        isActive: true,
                        name: 'COMICS'
                    },
                    {
                        isActive: false,
                        name: 'MOVIES'
                    },
                    {
                        isActive: false,
                        name: 'TV'
                    },
                    {
                        isActive: false,
                        name: 'GAMES'
                    },
                    {
                        isActive: false,
                        name: 'COLLECTIBLES'
                    },
                    {
                        isActive: false,
                        name: 'VIDEOS'
                    },
                    {
                        isActive: false,
                        name: 'FANS'
                    },
                    {
                        isActive: false,
                        name: 'NEWS'
                    },
                    {
                        isActive: false,
                        name: 'SHOP'
                    }
                    
                ]
            }
        },methods: {
            // Passiamo l'indice nelle condizione della funzione
            addClass(index){

                //al click dell'utente la voce selezionata avrà la classe clicked
                index.classList.add('clicked');
                
                // Se l'indice corrisponde all elemento selezionato allora aggiunge la classe
                
            }
        }
    }
</script>

<!-- HTML del componente -->
<template>
    <!-- Ogetto -->
    <section>
        
        <!-- Creare un div in display flex per allineare i componenti -->
        <div id="head_container">

            <!-- Logo -->
            <div>
                <span><img src="/Users/samussl/Desktop/documenti/boolean/esercitazioni/luglio/vite-comics/public/vue-dc-comics-1/img/dc-logo.png" alt=""></span>
            </div>

            <!-- Lista opzioni -->
            <div>
                <ul>
                    <!-- Stampaggio elementi voci -->
                    <li @click="addClass(index)" v-for="(voice,index) in voices" :key="index"><a href="#">{{ voice.name }}</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<!-- Stile Sass del componente specifico -->
<style lang="scss" scoped>
    #head_container{
        height: 10vh;

        // flex
        display: flex;
        justify-content: space-around;
        align-items: center;

        ul {
            // flex
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        ul li {
            list-style: none;
            margin: 10px;
            font-size: 12px;
            height: 10vh;

            // Flex
            display: flex;
            align-items: center;
            a {
                text-decoration: none;
                color: black;
            }
        }

        ul li:hover{
            background-color: gray;
            border-bottom: 3px solid #1473e5;
        }

    }

    span{
        img{
            width: 50%;
        }
    }
</style>