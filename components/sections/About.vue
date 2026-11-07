<template>
  <v-container class="section-about">
    <div class="section-about__content" id="about">
      <h3>{{ sectionsData.about.title }}</h3>
      <p class="section-about__text">
        {{ sectionsData.about.text }}
      </p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { sectionsData } from "~/data/sections";
</script>

<style scoped>
.section-about {
  max-width: 87%;
  margin-left: 6%;
}

.section-about__content {
  padding-top: 90px;
  text-align: center;
}

.section-about__text {
  font-size: 25px;
  line-height: 1.7;
}

@media (max-width: 1260px) {
  .section-about__content p {
    font-size: 20px;
  }
}

@media (max-width: 960px) {
  .section-about__content {
    padding-top: 90px;
  }
}

@media (max-width: 768px) {
  .section-about__content {
    max-width: 80%;
    margin-left: 10%;
  }
  .section-about__content p {
    font-size: 17px;
  }
}
</style>