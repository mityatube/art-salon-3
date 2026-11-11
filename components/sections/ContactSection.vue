<template>
  <div id="contact" class="contact-anchor"></div>
  <v-container class="map-container map-info-container section-container">
    <div class="main-page-content">
      <div class="contact-wrapper">
        <div class="map-block">
          <iframe
              :src="contactInfo.mapSrc"
              class="map-frame"
          ></iframe>
        </div>
        <div class="contact-info">
          <div>
            <h4 class="text-white mb-5">Режим работы</h4>
            <div
                v-for="item in contactInfo.schedule"
                :key="item.days"
                class="schedule-item"
            >
              <span>{{ item.days }}</span>
              <span>{{ item.hours }}</span>
            </div>
          </div>
          <div>
            <h4 class="text-white mb-5">Свяжитесь с нами</h4>
            <div class="schedule-bottom-item">
              <span>Телефон</span>
              <a :href="contactInfo.phoneHref" class="contact-link">{{ contactInfo.phone }}</a>
            </div>
            <div class="schedule-bottom-item email-margin">
              <span>Email</span>
              <a :href="contactInfo.emailHref" class="contact-link">{{ contactInfo.email }}</a>
            </div>
          </div>
          <div class="social-buttons">
            <v-btn
                v-for="social in contactInfo.socials"
                :key="social.name"
                width="55px"
                height="55px"
                :href="social.href"
                variant="plain"
                target="_blank"
                class="social-btn"
            >
              <v-tooltip activator="parent" location="top" :text="social.tooltip"></v-tooltip>
              <template #prepend>
                <v-icon v-if="!social.isSvg" size="45" v-ripple>{{ social.icon }}</v-icon>
                <img
                    v-else
                    :src="useRuntimeConfig().app.baseURL + social.icon"
                    width="45"
                    height="45"
                    class="invert-icon"
                >
              </template>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { contactInfo } from '~/config/contacts'
</script>

<style scoped>
.invert-icon {
  filter: brightness(0) invert(1);
}

.contact-anchor {
  margin-bottom: 40px;
}

.main-page-content {
  width: 100%;
}

.map-info-container {
  max-width: 100%;
}

.map-container {
  min-height: 50vh;
  background-color: #E8AC66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.map-frame {
  height: 380px;
  border: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  display: block;
  width: 700px;
}

.contact-wrapper {
  display: flex;
  gap: 50px;
  width: 100%;
  align-items: stretch;
}

.map-block {
  min-width: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  width: 550px;
}

.contact-link {
  color: white;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-link:hover {
  opacity: 0.8;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
}

.schedule-bottom-item {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding-bottom: 8px;
}

.email-margin {
  margin-bottom: 10px;
}

.social-buttons {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

@media (max-width: 1170px) {
  .map-container {
    max-width: 96%;
    margin-left: 2%;
    padding: 30px 20px;
  }

  .contact-wrapper {
    flex-direction: column;
    gap: 20px;
  }

  .map-block {
    width: 100%;
  }

  .contact-info {
    width: 100%;
  }
}

@media (max-width: 618px) {
  .contact-wrapper {
    flex-direction: column;
  }

  .map-block {
    width: 100%;
  }

  .map-container {
    min-height: 50vh;
    padding: 10px 10px;
  }

  .map-frame {
    width: 100%;
  }
}
</style>
