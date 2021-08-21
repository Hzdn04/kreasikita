<template>
  <div class="home">
    <!-- Header Section Begin -->
      <HeaderMp />
    <!-- Header End -->

    <!-- Hero Section Begin -->
      <HeroMp />
    <!-- Hero Section End -->

    <!-- Women Banner Section Begin -->
      <MenuProduk />
    <!-- Women Banner Section End -->

    <!-- Instagram Section Begin -->
      <InstagramMenu/>
    <!-- Instagram Section End -->

    <!-- Partner Logo Section Begin -->
      <PartnerLogo />
    <!-- Partner Logo Section End -->

    <!-- Footer Section Begin -->
      <Footer />
    <!-- Footer Section End -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMp from '@/components/HeaderMp.vue'
import HeroMp from '@/components/HeroMp.vue'
import MenuProduk from '@/components/MenuProduk.vue'
import InstagramMenu from '@/components/InstagramMenu.vue'
import PartnerLogo from '@/components/PartnerLogo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HeaderMp,
    HeroMp,
    MenuProduk,
    InstagramMenu,
    PartnerLogo,
    Footer
  }
}
</script>
