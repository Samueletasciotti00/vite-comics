<script>
    

    export default {
        name: 'AppCards'
    };
</script>

<!-- HTML del componente Main -->
<template>

    <!-- Content goes here -->
    <section>
        <ul>
            <li>
                <img src="/Users/samussl/Desktop/documenti/boolean/esercitazioni/luglio/vite-comics/public/vue-dc-comics-1/img/buy-comics-digital-comics.png" alt=""> <span>DIGITAL COMICS</span>
            </li>

            <li>
                <img src="" alt=""> <span>debug</span>
            </li>

            <li>
                <img src="" alt=""> <span>debug</span>
            </li>

            <li>
                <img src="" alt=""> <span>debug</span>
            </li>

            <li>
                <img src="" alt=""> <span>debug</span>
            </li>
        </ul>
    </section>
    
</template>

<style lang="scss" scoped>
    section{
        height: 20vh;
        background-color: #0282f9;
        display: flex;
        justify-content: space-around;
        align-items: center;


    ul{
        list-style: none;

        // // flex
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    ul li img{
        // width: 25%;
        width: 60px;
       
    }

    li{
        color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
    }

        
    }
</style>