<template>
  <v-app>
    <core-drawer />

    <v-content class="overflow-hidden">
      <router-view />
    </v-content>
  </v-app>
</template>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PKC08M31Q4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PKC08M31Q4');
</script>
<script>
  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
    },
  }
</script>

<style>
  .text-decoration-none {
    text-decoration: none;
  }
</style>
