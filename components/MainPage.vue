<template>
  <v-container class="info-container">
    <div class="text-content info-container" id="about">
      <h2>О салоне</h2>
      <p class="text-body-1 text-medium-emphasis">
        Компонент автоматически адаптируется под мобильные
        устройства и отлично подходит для главных экранов,
        презентаций услуг и продуктовых страниц. Компонент автоматически адаптируется.
        Компонент автоматически адаптируется под мобильные
        устройства и отлично подходит для главных экранов,
        презентаций услуг и продуктовых страниц.
        Компонент автоматически адаптируется под мобильные
        устройства и отлично подходит для главных экранов,
        презентаций услуг и продуктовых страниц. Компонент автоматически адаптируется. Компонент автоматически
        адаптируется. Компонент адаптируется.
        Компонент автоматически адаптируется под мобильные
        устройства и отлично подходит для главных экранов,
        презентаций услуг и продуктовых страниц. И презентаций услуг и продуктовых страниц.
      </p>
    </div>
  </v-container>
  <section class="main-page">
    <v-container class="info-container">
      <v-row
          align="center"
          justify="space-between"
      >
        <v-col
            cols="12"
            md="6"
        >
          <div class="image-wrapper">
            <v-img
                src="/images/suzdal.jpeg"
                cover
                class="container-image"
            />
          </div>
        </v-col>
        <v-col
            cols="12"
            md="6"
            class="pr-md-10"
        >
          <div class="text-content info-container" id="arts">
            <h2>Картины</h2>
            <p class="text-body-1 text-medium-emphasis" style="margin-bottom: 15px">
              Компонент автоматически адаптируется под мобильные
              устройства и отлично подходит для главных экранов,
              презентаций услуг и продуктовых страниц.
              Компонент автоматически адаптируется под мобильные
              устройства и отлично подходит для главных экранов,
              презентаций услуг и продуктовых страниц.
            </p>
            <p class="text-body-1 text-medium-emphasis">
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
  </section>
  <section class="main-page">
    <v-container class="info-container">
      <v-row
          align="center"
          justify="space-between"
      >
        <v-col
            cols="12"
            md="6"
            class="pr-md-10"
        >
          <div class="text-content info-container" id="handcraft">
            <h2>Народные промыслы</h2>
            <p class="text-body-1 text-medium-emphasis" style="margin-bottom: 15px">
              Компонент автоматически адаптируется под мобильные
              устройства и отлично подходит для главных экранов,
              презентаций услуг и продуктовых страниц.
              Компонент автоматически адаптируется под мобильные
              устройства и отлично подходит для главных экранов,
              презентаций услуг и продуктовых страниц.
            </p>
            <p class="text-body-1 text-medium-emphasis">
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
            md="6"
        >
          <div class="image-wrapper">
            <v-img
                src="/images/pokrova.jpeg"
                cover
                class="container-image"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <v-container class="map-container info-container">
    <div class="main-page-content" id="contact">
      <h2 class="text-white mb-6">Контакты</h2>

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
            <h3 class="text-white mb-4">Режим работы</h3>

            <div class="schedule-item">
              <span>Пн – Пт</span>
              <span>10:00 – 18:00</span>
            </div>

            <div class="schedule-item">
              <span>Сб – Вс</span>
              <span>11:00 – 16:00</span>
            </div>
          </div>

          <div class="social-buttons">
            <v-btn
                color="primary"
                prepend-icon="mdi-vk"
                rounded="l"
                size="large"
                href="https://vk.com/hudsalonkirov"
                target="_blank"
            >
              ВКонтакте
            </v-btn>

            <v-btn
                color="blue"
                prepend-icon="mdi-telegram"
                rounded="l"
                size="large"
                href=" https://t.me/artshopkirov"
                target="_blank"
            >
              Telegram
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
.info-container {
  max-width: 96%;
  margin-left: 2%;
}

.map-container {
  min-height: 50vh;
  background-color: #E8AC66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.map-frame {
  width: 100%;
  height: 400px;
  border: 0;
  border-radius: 10px;
  display: block;
}

.main-page-content {
  width: 100%;
}

.main-page-content h2,
.main-page-content p {
  text-align: center;
}

.main-page {
  padding: 100px 40px;
}

.text-content {
  font-size: 17pt;
  padding-top: 90px;
  text-align: justify;
}

.container-image {
  width: 100%;
  min-height: 320px;
  height: 520px;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.image-wrapper {
  position: relative;
}

.contact-wrapper {
  display: flex;
  gap: 40px;
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
  min-width: 260px;
  color: white;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 18px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 8px;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 960px) {
  .main-page {
    padding: 60px 0;
  }

  .container-image {
    height: 420px;
    margin-top: 32px;
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
}

@media (max-width: 768px) {
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

  .image-wrapper {
    position: relative;
  }
}
</style>
<script setup lang="ts">
</script>