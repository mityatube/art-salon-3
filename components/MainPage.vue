<template>
  <About/>
  <div id="arts"></div>
  <v-divider class="border-opacity-22 section-divider"></v-divider>
  <div class="section-block">
    <h2 class="section-block__title">Картины</h2>
    <section class="section-block__content">
      <Arts/>
    </section>
  </div>
  <div id="handcraft"></div>
  <v-divider class="border-opacity-22 section-divider"></v-divider>
  <div class="section-block">
    <h2 class="section-block__title">Народные промыслы</h2>
    <section class="section-block__content">
      <Handcraft/>
    </section>
  </div>
  <div id="contact" style="margin-bottom: 40px"></div>
  <!--  <v-container class="map-container map-info-container section-block">-->
  <!--    <div class="section-block__content">-->
  <v-container class="map-container map-info-container section-container">
    <div class="main-page-content">
      <h3 class="section-block__title text-white mb-5">Контакты</h3>
      <div class="contact-wrapper">
        <div class="map-block">
          <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A829e9cc93cc3215f1f8630e8e2d1050650fe98177820ebfa629e6588aaef3803&amp;source=constructor"
              class="map-frame"
          ></iframe>
        </div>
        <div class="contact-info">
          <div>
            <h3 class="text-white mb-5">Режим работы</h3>
            <div class="schedule-item">
              <span>Пн – Пт</span>
              <span>10:00 – 18:00</span>
            </div>
            <div class="schedule-item">
              <span>Сб – Вс</span>
              <span>11:00 – 16:00</span>
            </div>
          </div>
          <div>
            <h3 class="text-white mb-5">Свяжитесь с нами</h3>
            <div class="schedule-bottom-item">
              <span>Телефон</span>
              <span>+7 (8332) 65-13-40</span>
            </div>
            <div class="schedule-bottom-item email-margin">
              <span>Email</span>
              <span>mail@art-vyatka.ru</span>
            </div>
          </div>
          <div class="social-buttons">
            <v-btn
                width="55px"
                height="55px"
                href="https://vk.com/hudsalonkirov"
                variant="plain"
                target="_blank"
                class="vk-btn"
            >
              <v-tooltip activator="parent" location="top" text="ВКонтакте"></v-tooltip>
              <template #prepend>
                <v-icon size="45" v-ripple>mdi-vk</v-icon>
              </template>
            </v-btn>
            <v-btn
                width="55px"
                height="55px"
                href="https://t.me/artshopkirov"
                variant="plain"
                target="_blank"
                class="vk-btn"
            >
              <v-tooltip activator="parent" location="top" text="Телеграм"></v-tooltip>
              <template #prepend>
                <v-icon size="45" v-ripple>mdi-telegram</v-icon>
              </template>
            </v-btn>
            <v-btn
                width="55px"
                height="55px"
                href="https://yandex.com/maps/org/khudozhestvenny_salon/1104185169/"
                variant="plain"
                target="_blank"
                class="vk-btn"
            >
              <v-tooltip activator="parent" location="top" text="Яндекс Карты"></v-tooltip>
              <template #prepend>
                <img src="/yandex-maps-svgrepo-com.svg" width="45" height="45">
              </template>
            </v-btn>
            <v-btn
                width="55px"
                height="55px"
                href="https://2gis.ru/kirov/firm/8163302605593105"
                variant="plain"
                target="_blank"
                class="vk-btn"
            >
              <v-tooltip activator="parent" location="top" text="2ГИС"></v-tooltip>
              <template #prepend>
                <img src="/2gis-svgrepo-com.svg" width="45" height="45">
              </template>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
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

<style scoped>
main-page-content {
  width: 100%;
}


.map-info-container {
  max-width: 90%;
  margin-left: 5%;
}

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

.map-container {
  min-height: 50vh;
  background-color: #E8AC66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.map-frame {
  height: 380px;
  border: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  display: block;
  width: 550px;
}

.contact-wrapper {
  display: flex;
  gap: 50px;
  width: 100%;
  align-items: stretch;
}

.map-block {
  flex: 1 1 0;
  min-width: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
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

@media (max-width: 960px) {
  .map-container {
    max-width: 96%;
    margin-left: 2%;
    padding: 30px 20px;
  }

  .section-block {
    margin-top: 30px;
  }

  .email-margin {
    margin-bottom: 10px;
  }

  .section-block__content {
    padding: 4px 0;
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

@media (max-width: 768px) {
  .section-block {
    margin-top: 24px;
  }

  h1 {
    font-size: 36px;
  }

  .contact-wrapper {
    flex-direction: column;
  }

  .map-block {
    width: 100%;
  }

  .map-container {
    min-height: 50vh;
    padding: 30px 20px;
  }

  .scroll-top-fab {
    transition: all 0.3s ease;
  }
}
</style>

<script setup lang="ts">
import About from "~/components/sections/About.vue";
import Arts from "~/components/sections/Arts.vue";
import Handcraft from "~/components/sections/Handcraft.vue";

const showScrollTop = ref(false);

const onScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
</script>