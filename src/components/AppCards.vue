<script>

    export default {
        name: 'AppCards',
        data() {
            return{
                // Immagini delle cards
                cards: [
                    // 'public/vue-dc-comics-1/img/buy-comics-shop-locator.png','public/vue-dc-comics-1/img/buy-comics-subscriptions.png'
                    {
                        immage: 'public/vue-dc-comics-1/img/buy-comics-digital-comics.png',
                        name: 'DIGITAL COMICS'
                    },
                    {
                        immage: 'public/vue-dc-comics-1/img/buy-comics-merchandise.png',
                        name: 'DC MERCHANDISE'
                    },
                    {
                        immage: 'public/vue-dc-comics-1/img/buy-comics-subscriptions.png',
                        name: 'SUBSCRIPTION'
                    },
                    {
                        immage: 'public/vue-dc-comics-1/img/buy-comics-shop-locator.png',
                        name: 'COMIC SHOP LOCATOR'
                    },
                ]
            }
        }
    };
</script>

<!-- HTML del componente Main -->
<template>

    <!-- Content goes here -->
    <section>
        <ul>
            <li v-for="(card,index) in cards" :key="index">
                <img :src="card.immage" alt=""> <span>{{ cards[index].name }}</span>
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
        span{
            font-size: 12px;
        }

    ul{
        list-style: none;

        // // flex
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10%;
    }
    ul li img{
        // width: 25%;
        width: 40px;
       
    }

    li{
        color: #fff;
        display: flex;
        align-items: center;
        gap: 10px;
    }

        
    }
</style>