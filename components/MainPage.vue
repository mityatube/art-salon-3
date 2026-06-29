<template>
  <About/>
  <div id="arts"></div>
  <v-divider class="border-opacity-22" style="margin: 5%">
  </v-divider>
  <div class="text-content text-card-container section-container">
    <h2 class="header-bottom">Картины</h2>
    <section class="main-page">
      <Arts/>
    </section>
  </div>
  <div id="handcraft"></div>
  <v-divider class="border-opacity-22" style="margin: 5%">
  </v-divider>
  <div class="text-content info-container section-container">
    <h2 class="header-bottom">Народные промыслы</h2>
    <section class="main-page">
      <Handcraft/>
    </section>
  </div>
  <div id="contact" style="margin-bottom: 70px"></div>
  <v-container class="map-container map-info-container section-container">
    <div class="main-page-content">
      <h2 class="header-bottom text-white mb-5">Контакты</h2>
      <div class="contact-wrapper">
        <div class="map-block">
          <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A829e9cc93cc3215f1f8630e8e2d1050650fe98177820ebfa629e6588aaef3803&amp;source=constructor"
              frameborder="0"
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
        </div>
        <div class="contact-info">
          <div class="social-buttons">
            <h3 class="text-white mb-5">Мы в социальных сетях</h3>
            <v-btn
                color="#F1C38F"
                prepend-icon="mdi-vk"
                width="150px"
                href="https://vk.com/hudsalonkirov"
                target="_blank"
            >
              ВКонтакте
              <template #prepend>
                <v-icon size="35">mdi-vk</v-icon>
              </template>
            </v-btn>

            <v-btn
                color="#F1C38F"
                prepend-icon="mdi-telegram"
                rounded="l"
                width="150px"
                href="https://t.me/artshopkirov"
                target="_blank"
            >
              Telegram
              <template #prepend>
                <v-icon size="35">mdi-telegram</v-icon>
              </template>
            </v-btn>

            <v-btn
                color="#F1C38F"
                width="150px"
                href="https://yandex.com/maps/org/khudozhestvenny_salon/1104185169/"
                target="_blank"
            >
              Яндекс Карты
              <template #prepend>
                <img src="/yandex-maps-svgrepo-com.svg" width="35" height="35" alt="Яндекс Карты">
              </template>
            </v-btn>

            <v-btn
                color="#F1C38F"
                width="150px"
                href="https://2gis.ru/kirov/firm/8163302605593105"
                target="_blank"
            >
              2ГИС
              <template #prepend>
                <img src="/2gis-svgrepo-com.svg" width="35" height="35" alt="2ГИС">
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
.header-bottom {
  margin-bottom: 10px;
}

.map-info-container {
  max-width: 90%;
  margin-left: 5%;
}

.info-container {
  max-width: 94%;
  margin-left: 3%;
}

.section-container {
  margin-top: 30px;
}

.map-container {
  min-height: 50vh;
  background-color: #E8AC66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
}

.map-frame {
  height: 370px;
  border: 0;
  border-radius: 10px;
  display: block;
  width: 100%;
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
  min-width: 250px;
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
  margin-bottom: 146px
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 960px) {
  .map-info-container {
    max-width: 96%;
    margin-left: 2%;
  }

  .section-container {
    margin-top: 70px;
  }

  .email-margin {
    margin-bottom: -10px
  }

  .main-page {
    padding: 10px 0;
  }

  .contact-wrapper {
    flex-direction: column;
  }

  .map-block {
    width: 100%;
  }

  .contact-info {
    width: 100%;
  }

  .map-container {
    min-height: 50vh;
    background-color: #E8AC66;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
}

@media (max-width: 768px) {
  .section-container {
    margin-top: 50px;
  }

  h1 {
    font-size: 36px;
  }

  .map-frame {
    width: 100%;
    min-height: 350px;
  }

  .contact-wrapper {
    flex-direction: column;
  }

  .map-block {
    width: 100%;
  }

  .map-container {
    min-height: 50vh;
    background-color: #E8AC66;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>