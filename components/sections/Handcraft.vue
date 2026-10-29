<template>
  <v-container class="section-media">
    <v-row
        align="center"
        justify="space-between"
        :dense="true"
    >
      <v-col
          cols="12"
          md="7"
      >
        <div class="section-media__text">
          <p>
            {{ sectionsData.handcraft.text }}
          </p>
        </div>
      </v-col>
      <v-col
          cols="12"
          md="5"
      >
        <div class="section-media__image-wrapper">
          <v-img
              alt="Народные промыслы. Изображение не загрузилась"
              :src="app.baseURL + sectionsData.handcraft.image"
              cover
              class="section-media__image"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { sectionsData } from "~/data/sections";

const { app } = useRuntimeConfig()
</script>

<style scoped>
.section-media {
  max-width: 100%;
}

.section-media :deep(.v-row) {
  --v-row-gap: 12px;
}

.section-media__image-wrapper {
  display: flex;
  justify-content: center;
}

.section-media__image {
  width: 100%;
  max-width: 700px;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  aspect-ratio: 4 / 3;
}

.section-media__text {
  max-width: 80%;
  margin-left: 10%;
  text-align: right;
}

.section-media__text p {
  font-size: 25px;
  line-height: 1.7;
}

@media (max-width: 1260px) {
  .section-media {
    max-width: 80%;
    margin-left: 15%;
  }
}

@media (max-width: 960px) {
  .section-media__text p {
    text-align: center;
    font-size: 20px;
  }

  .section-media__text {
    padding: 12px 0;
  }

  .section-media__image {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .section-media__text p {
    font-size: 18px;
  }
}
</style>