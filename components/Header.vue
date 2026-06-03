<template>
  <v-app-bar
      app
      elevation="0"
      color="white"
      height="84"
      class="px-4 border-b"
  >
    <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
        style="color: #E8AC66"
    />
    <NuxtLink
        to="/"
        class="d-flex align-center text-decoration-none"
    >
      <v-img
          src="/logoVyatkaArt.svg"
          class="logo-image mr-3"
          cover
      />

      <div style="margin-left: 10px;">
        <div class="text-h6 font-weight-bold text-black">
          Художественный салон
        </div>
        <div class="text-caption text-grey-darken-1">
          На Никитской
        </div>
      </div>
    </NuxtLink>

    <v-spacer/>

    <div class="d-none d-md-flex align-center ga-6" style="margin-right: 10px;">
      <NuxtLink
          v-for="item in menu"
          :key="item.title"
          :to="item.link"
          class="nav-link"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      :width="500"
  >
    <v-list>
      <v-list-item
          v-for="item in menu"
          :key="item.title"
          :to="item.link"
          :title="item.title"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(false)

const menu = [
  {title: 'О салоне', link: '#about'},
  {title: 'Картины', link: '#arts'},
  {title: 'Народные промыслы', link: '#handcraft'},
  {title: 'Контакты', link: '#contact'}
]
</script>

<style scoped>
.logo-image {
  width: 52px;
  height: 52px;
  flex: none;
  margin-left: 5px;
}

.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.nav-link {
  position: relative;
  color: #111;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #E8AC66;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>