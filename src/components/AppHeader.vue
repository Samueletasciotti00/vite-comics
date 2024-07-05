<!-- Script -->
<script>
    // Esportazione del nome del componente
    export default {
        name: 'AppHeader'
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
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
                    <li>Debug</li>
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

        }

        ul li {
            list-style: none;
            margin: 10px;
        }
    }

    span{
        img{
            width: 50%;
        }
    }
</style>