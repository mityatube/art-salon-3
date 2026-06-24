<template>
  <v-container class="text-card-container">
    <v-row
        align="center"
        justify="space-between"
    >
      <v-col
          cols="12"
          md="4"
      >
        <div class="image-wrapper">
          <v-img
              alt="Картины. Изображение не загрузилась"
              :src="app.baseURL + sectionsData.paintings.image"
              cover
              class="container-image container-image-card-right"
          />
        </div>
      </v-col>
      <v-col
          cols="12"
          md="8"
          class="pr-md-10"
      >
        <div class="text-content main-page-content-right">
          <p class="text-body-1 text-medium-emphasis" style="margin-bottom: 15px">
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
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {sectionsData} from "~/data/sections";

const { app } = useRuntimeConfig()
</script>