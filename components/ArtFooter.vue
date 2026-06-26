<template>
  <footer class="art-footer">
    <div class="container footer-grid">

      <div class="footer-block">
        <div class="logo-image-footer">
          <v-img
              src="/logoVyatkaArt.svg"
              class="logo-image mr-3"
              cover
          />
        </div>
      </div>

      <div class="footer-block">
        <h4>Навигация</h4>
        <ul>
          <li
              v-for="item in navigationItems"
              :key="item.link"
              class="baseColor"
          >
            <a :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-block">
        <h4>Контакты</h4>
        <p>Киров, ул. Никитская, 99А</p>
        <p>+7 (8332) 65-13-40</p>
        <p>mail@art-vyatka.ru</p>
      </div>

      <div class="footer-block">
        <h4>Соцсети</h4>
        <div class="socials">
          <a href=" https://t.me/artshopkirov"
             target="_blank">Telegram</a>
          <a href="https://vk.com/hudsalonkirov"
             target="_blank">ВКонтакте</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Художественный салон. Все права защищены.</p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import {navigationItems} from "~/config/navigation";
</script>
<style scoped>
.logo-image-footer {
  width: 130px;
  height: 135px;
}

.art-footer {
  background: #2D8062;
  padding: 50px 20px 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 80px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

.footer-block h4 {
  font-size: 11pt;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 1px;
}

.footer-block p,
.footer-block a {
  font-size: 111pt;
  color: #ffffff;
  text-decoration: none;
  line-height: 1.6;
}

.footer-block a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  font-size: 12px;
  color: #ffffff;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>