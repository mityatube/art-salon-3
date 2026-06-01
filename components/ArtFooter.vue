<template>
  <footer class="art-footer">
    <div class="container footer-grid">

      <div class="footer-block">
        <h3 class="logo">Художественный салон</h3>
        <p class="muted">
          Пространство современного искусства и живой эстетики.
        </p>
      </div>

      <div class="footer-block">
        <h4>Навигация</h4>
        <ul>
          <li class="baseColor"><a href="#about">О салоне</a></li>
          <li class="baseColor"><a href="#arts">Картины</a></li>
          <li class="baseColor"><a href="#handcraft">Народные промыслы</a></li>
          <li class="baseColor"><a href="#contact">Контакты</a></li>
        </ul>
      </div>

      <div class="footer-block">
        <h4>Контакты</h4>
        <p>Киров, ул. Володарского, 99А</p>
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
</script>