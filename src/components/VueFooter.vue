<template>
  <div class="footer">
    <nav class="container">
      <ul class="list">
        <li>
          <router-link :to="{ name: 'about' }">
            О ресурсе
          </router-link>
        </li>
        <li>
          <a href="#">Пользовательское соглашение</a>
        </li>
        <li>
          <a href="#">Часто задаваемые вопросы (FAQ)</a>
        </li>
        <li>
          <a href="#">Правила сайта</a>
        </li>
        <li>
          <a href="#">Публичная оферта</a>
        </li>
      </ul>
      <ul class="list">
        <li>
          <a href="#">Новости</a>
        </li>
        <li>
          <a href="#">Возможности</a>
        </li>
        <li>
          <a href="#">Корпоративным клиентам</a>
        </li>
      </ul>
      <div />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'VueFooter'
};
</script>

<style lang="scss" scoped>

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media only screen  and (max-width: 479px){
            flex-direction: column;
        }
    }

    .footer {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
        background-color: #3F3955;
        a {
            color: rgb(235, 235, 235);
            text-decoration: none;

            &:focus,
            &:hover {
                color: rgb(255, 255, 255);
            }
        }
        .list {
            padding: 0;
            margin: 0;

            li {
                padding: .5rem 0;
                list-style: none;
            }
        }
    }

</style>
