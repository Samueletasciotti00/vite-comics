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
                <span>D C</span>
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
</style>