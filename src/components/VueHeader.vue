<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
        >
      </router-link>
      <ul>
        <li>
          <router-link :to="{ name: 'opportunities' }">
            Возможности
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">
            О ресурсе
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'news' }">
            Новости
          </router-link>
        </li>
      </ul>
      <router-link :to="{ name: 'sign-in' }">
        Вход в систему
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'VueHeader'
};
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        height: 70px;
        padding: 0 2rem;
        background: linear-gradient(to right, #FFF, #3F3955);
    }

    .nav {
        height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        ul {
            margin: 0;
            padding: 0;

            li {
                display: inline;
                list-style: none;
                padding: 0 2rem;
            }

        }
        a {
            color: rgb(235, 235, 235);
            text-decoration: none;

            &:focus,
            &:hover {
                color: rgb(255, 255, 255);
            }

        }
    }

</style>
