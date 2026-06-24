<template>
  <v-container class="info-container">
    <v-row
        align="center"
        justify="space-between"
    >
      <v-col
          cols="12"
          md="8"
          class="pr-md-10"
      >
        <div class="text-content text-content-card-left text-card-container main-page-content">
          <p class="text-body-1 text-medium-emphasis">
            Компонент автоматически адаптируется под мобильные
            устройства и отлично подходит для главных экранов,
            презентаций услуг и продуктовых страниц.
            Компонент автоматически адаптируется под мобильные
            устройства и отлично подходит для главных экранов,
            презентаций услуг и продуктовых страниц.
            Компонент автоматически адаптируется под мобильные
            устройства и отлично подходит для главных экранов,
            презентаций услуг и продуктовых страниц.
            Компонент автоматически адаптируется под мобильные
            устройства и отлично подходит для главных экранов,
            презентаций услуг и продуктовых страниц.
          </p>
        </div>
      </v-col>
      <v-col
          cols="12"
          md="4"
      >
        <div class="image-wrapper">
          <v-img
              alt="Народные промыслы. Изображение не загрузилась"
              :src="app.baseURL + sectionsData.handcraft.image"
              cover
              class="container-image container-image-card-left"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import {sectionsData} from "~/data/sections";

const { app } = useRuntimeConfig()
</script>