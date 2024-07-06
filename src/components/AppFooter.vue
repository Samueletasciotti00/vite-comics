<!-- Script App -->
<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                imgLogos: [
                    'public/vue-dc-comics-1/img/footer-facebook.png','public/vue-dc-comics-1/img/footer-twitter.png','public/vue-dc-comics-1/img/footer-youtube.png','public/vue-dc-comics-1/img/footer-pinterest.png','public/vue-dc-comics-1/img/footer-periscope.png'
                ],
                backgroundImg: [
                    '/Users/samussl/Desktop/documenti/boolean/esercitazioni/luglio/vite-comics/public/vue-dc-comics-1/img/footer-bg.jpg'
                ],
                dcComics: [
                    'Characters',
                    'Comics',
                    'Movies',
                    'TV',
                    'Videos',
                    'News'
                ],
                shop: [
                    'Shop DC',
                    'Shop DC Collectibles' 
                ],
                dc: [
                    'Terms Of Use',
                    'Privacy policy(New)',
                    'Ad Choices',
                    'Advertising',
                    'Jobs',
                    'Subscriptions',
                    'Talent Workshops',
                    'CPSC Certificates',
                    'Ratings',
                    'Shop help',
                    'Contact Us'
                ],
                sites: [
                    'DC',
                    'MAD Magazine',
                    'DC Kids',
                    'DC Universe',
                    'DC Power Visa'
                ]
            }
        }
    }
</script>

<!-- HTML dell app di footer -->
<template>
    <!-- Ogetto -->
    <section>

        <div class="container">
            <!-- 1 -->
            <div class="footer_links">

                <!-- Titolo -->
                <h4>DC COMICS</h4>

                <!-- Voci di menù -->
                <nav>
                    <ul>
                        <li v-for="voice in dcComics"><a href="#">{{ voice }}</a></li>
                        
                    </ul>
                </nav>

                <!-- Titolo -->
                <h4>SHOP</h4>

                <!-- Voci di menù -->
                <nav>
                    <ul>
                        <li v-for="voice in shop"><a href="#">{{ voice }}</a></li>
                    </ul>
                </nav>


                </div>


                <!-- 2 -->
                <div class="footer_links">

                <!-- Titolo -->
                <h4>DC</h4>

                <!-- Voci di menù -->
                <nav>
                    <ul>
                        <li v-for="voice in dc"><a href="#">{{ voice }}</a></li>
                    </ul>
                </nav>
                </div>

                <!-- 3 -->
                <div class="footer_links">

                <!-- Titolo -->
                <h4>SITES</h4>

                <!-- Voci di menù -->
                <nav>
                    <ul>
                        <li v-for="voice in sites"><a href="#">{{ voice }}</a></li>
                    </ul>
                </nav>
                </div> 
        </div>
            
    </section>

    <!-- Pieppagina -->
    <footer>

        <!-- Button -->
        <button>
            SING-UP NOW!
        </button>

        <div class="logos">

            <!-- Span Follow -->
            <span>FOLLOW US</span>
            <img v-for="logo in imgLogos" :src="logo" alt="">
        </div>
    </footer>
</template>

<style lang="scss" scoped>

    section{

        // Formattazione generali di sezione
        padding: 20px;
        background-image: url('/Users/samussl/Desktop/documenti/boolean/esercitazioni/luglio/vite-comics/public/vue-dc-comics-1/img/footer-bg.jpg'),url('public/vue-dc-comics-1/img/dc-logo-bg.png');
        background-position:  left bottom, left top;
        background-repeat: repeat, no-repeat;
 

        h4{
            color: #fff;
        }

        ul li{
            
            list-style: none;
            a{
                text-decoration: none;
                color: gray;
            }
        }
    }
    .container{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        padding-left: 10%;
    }

    footer{
        background-color: #303030;
        
        .logos{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
       

        button{
            border: 1px solid #1473e5;
            
            color: #fff;
            background-color: #303030;
            height: 35%;
            padding: 10px;
        }

        span{
            color: #1473e5;
        }

        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 20vh;
        padding-bottom: 0;
    }
</style>