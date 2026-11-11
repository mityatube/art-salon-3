<template>
  <About/>
  <div id="arts"></div>
  <v-divider class="border-opacity-22 section-divider"></v-divider>
  <div class="section-block">
    <section class="section-block__content">
      <Arts/>
    </section>
  </div>
  <div id="handcraft"></div>
  <v-divider class="border-opacity-22 section-divider"></v-divider>
  <div class="section-block">
    <section class="section-block__content">
      <Handcraft/>
    </section>
  </div>
  <ContactSection/>
  <v-fab
      v-scroll="onScroll"
      :active="showScrollTop"
      location="bottom right"
      color="#F1C38F"
      icon="mdi-arrow-up"
      size="large"
      @click="scrollToTop"
      class="scroll-top-fab"
      style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
  ></v-fab>
</template>

<script setup lang="ts">
import About from "~/components/sections/About.vue";
import Arts from "~/components/sections/Arts.vue";
import Handcraft from "~/components/sections/Handcraft.vue";
import ContactSection from "~/components/sections/ContactSection.vue";

const showScrollTop = ref(false);

const onScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
</script>

<style scoped>
.section-divider {
  margin: 2% 5%;
}

.section-block {
  margin-top: 16px;
}

.section-block__title {
  text-align: center;
}

.section-block__content {
  padding: 4px 0;
  max-width: 90%;
}

@media (max-width: 1170px) {
  .section-block {
    margin-top: 30px;
  }

  .section-block__content {
    padding: 4px 0;
  }
}

@media (max-width: 618px) {
  .section-block {
    margin-top: 24px;
  }

  .scroll-top-fab {
    transition: all 0.3s ease;
  }
}
</style>
