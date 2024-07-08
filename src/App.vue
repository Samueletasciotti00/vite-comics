<script>
// Import component Header
import AppHeader from './components/AppHeader.vue'

// Import component Content
import AppContent from './components/AppContent.vue'

// Import component Cards
import AppCards from './components/AppCards.vue'

// Import component Footer
import AppFooter from './components/AppFooter.vue'


export default {
    name: 'App',
    components: {
      AppHeader,
      AppContent,
      AppFooter,
      AppCards
    }
  }
</script>

<template>
    <!-- Componente di prova per Header di pagina -->
    <AppHeader />  
  
    <!-- Componente di prova per Content di pagina -->
    <AppContent />

    <!-- Componente di prova per Cards di pagina -->
    <AppCards />

    <!-- Componente di prova per Footer di pagina -->
    <AppFooter />
</template>

<style scoped>

</style>
