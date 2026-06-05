<template>
  <v-container class="info-container-about">
    <div class="top-text-content text-content info-container-about" id="about">
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
  <v-divider class="border-opacity-22 divider-margin">
    <div id="arts"></div>
  </v-divider>
  <div class="text-content text-card-container section-container">
    <h2 class="header-bottom">Картины</h2>
  <section class="main-page">
    <v-container class="text-card-container">
      <v-row
          align="center"
          justify="space-between"
      >
        <v-col
            cols="12"
            md="5"
        >
          <div class="image-wrapper">
            <v-img
                src="/images/danilov.jpg"
                cover
                class="container-image container-image-card-right"
            />
          </div>
        </v-col>
        <v-col
            cols="12"
            md="7"
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
  </section>
  </div>
  <v-divider class="border-opacity-22 divider-margin">
    <div id="handcraft"></div>
  </v-divider>
  <div class="text-content info-container section-container">
    <h2 class="header-bottom">Народные промыслы</h2>
  <section class="main-page">
    <v-container class="info-container">
      <v-row
          align="center"
          justify="space-between"
      >
        <v-col
            cols="12"
            md="7"
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
            md="5"
        >
          <div class="image-wrapper">
            <v-img
                src="/images/mihaylov.jpg"
                cover
                class="container-image container-image-card-left"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
  </div>
  <div id="contact"></div>
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

          <div class="social-buttons">
            <h3 class="text-white mb-5">Мы в социальных сетях</h3>
            <v-btn
                color="#E8AC66"
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
                color="#E8AC66"
                prepend-icon="mdi-telegram"
                rounded="l"
                width="150px"
                href=" https://t.me/artshopkirov"
                target="_blank"
            >
              Telegram
              <template #prepend>
                <v-icon size="35">mdi-telegram</v-icon>
              </template>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
.divider-margin {
  margin: 3%;
}

.header-bottom {
  margin-bottom: 10px;
}
.map-info-container {
  max-width: 90%;
  margin-left: 5%;
}

.info-container-about {
  max-width: 90%;
  margin-left: 5%;
}

.info-container {
  max-width: 94%;
  margin-left: 3%;
}

.text-card-container {
  max-width: 100%;
}

.section-container {
  margin-top: 90px;
}

.map-container {
  min-height: 50vh;
  background-color: #E8AC66;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 75px;
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

.main-page-content-right {
  width: 80%;
}

.main-page-content h2{
  text-align: center;
}

.main-page-content-right p,
.main-page-content p {
  text-align: left;
}

.main-page {
  padding: 10px 0px;
}

.top-text-content {
  padding-top: 90px;
}

.text-content {
  font-size: 19pt;
  text-align: center;
}

.text-content-card-left {
  margin-left: 10%;
}

.container-image {
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.container-image-card-left {
  width: 59%;
  margin-left: 22%;
}

.container-image-card-right {
  width: 55%;
  margin-left: 26%;
}

.image-wrapper {
  position: relative;
}

.contact-wrapper {
  display: flex;
  gap: 70px;
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
  min-width: 360px;
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

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 960px) {
  .divider-margin {
    margin: 5%;
  }
  .container-image-card-left {
    width: 59%;
    margin-left: 20%;
  }

  .container-image-card-right {
    width: 59%;
    margin-left: 20%;
  }

  .text-content-card-left {
    margin-left: 0%;
  }

  .main-page-content-right p,
  .main-page-content p {
    text-align: center;
  }

  .main-page-content-right {
    width: 100%;
  }

  .text-card-container {
    max-width: 90%;
    margin-left: 5%;
  }

  .map-info-container {
    max-width: 96%;
    margin-left: 2%;
  }

  .section-container {
    margin-top: 70px;
  }

  .main-page {
    padding: 10px 0;
  }

  .text-content {
    font-size: 17pt;
  }

  .container-image {
    width: 59%;
    border-radius: 10px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
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
  .divider-margin {
    margin: 7%;
  }

  .container-image-card-left {
    width: 57%;
    margin-left: 22%;
  }

  .container-image-card-right {
    width: 57%;
    margin-left: 22%;
  }

  .section-container {
    margin-top: 50px;
  }

  h1 {
    font-size: 36px;
  }

  .text-content {
    font-size: 15pt;
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

  .map-container {
    min-height: 50vh;
    background-color: #E8AC66;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
}
</style>
<script setup lang="ts">
</script>