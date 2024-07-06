/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'AppCards',
data() {
return {
// Immagini delle cards
cards: [
// 'public/vue-dc-comics-1/img/buy-comics-shop-locator.png','public/vue-dc-comics-1/img/buy-comics-subscriptions.png'
{
immage: '/Users/samussl/Desktop/documenti/boolean/esercitazioni/luglio/vite-comics/public/vue-dc-comics-1/img/buy-comics-digital-comics.png',
name: 'DIGITAL COMICS'
},
{
// immage: 'public/vue-dc-comics-1/img/buy-comics-merchandise.png',
name: 'DC MERCHANDISE'
},
{
// immage: 'public/vue-dc-comics-1/img/buy-comics-subscriptions.png',
name: 'SUBSCRIPTION'
},
{
// immage: 'public/vue-dc-comics-1/img/buy-comics-shop-locator.png',
name: 'COMIC SHOP LOCATOR'
},
]
};
}
});
