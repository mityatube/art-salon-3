<template>
  <v-container class="section-media">
    <v-row
        align="center"
        justify="space-between"
        :dense="true"
        class="flex-column-on-mobile"
    >
      <v-col
          cols="12"
          md="6"
      >
        <div class="section-media__image-wrapper">
          <v-carousel
              class="section-media__carousel"
              :show-arrows="false"
          >
            <v-carousel-item
                v-for="(item, i) in sectionsData.paintings"
                :key="i"
                :src="app.baseURL + item.image"
                alt="Картины. Изображения не загрузились"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <div class="section-media__text">
          <h3 v-if="!mobile" style="margin-bottom: 11px;">{{ sectionsData.arts.title }}</h3>
          <h4 v-else style="margin-bottom: 11px; font-size: 17px;">{{ sectionsData.arts.title }}</h4>
          <p>
            {{ sectionsData.arts.text }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { sectionsData } from "~/data/sections";
import { useDisplay } from "vuetify";

const { app } = useRuntimeConfig()

const { mobile } = useDisplay();
</script>

<style scoped>
.section-media {
  max-width: 80%;
  margin-left: 15%;
}

.section-media :deep(.v-row) {
  --v-row-gap: 12px;
}

.section-media__image-wrapper {
  display: flex;
  justify-content: center;
}

.section-media__carousel {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.section-media__text {
  font-size: 25px;
  line-height: 1.7;
  text-align: center;
}

@media (max-width: 1260px) {
  .section-media {
    max-width: 80%;
    margin-left: 15%;
  }
  .section-media__text p {
    font-size: 20px;
  }
}

@media (max-width: 960px) {
  .section-media__text {
    padding: 12px 0;
  }

  .section-media__carousel {
    height: 350px !important;
    max-width: 100%;
  }

  .flex-column-on-mobile {
    align-items: center !important;
  }
}

@media (max-width: 768px) {
  .section-media__carousel {
    max-width: 100%;
  }
  .section-media__text p {
    font-size: 17px;
  }
}
</style>