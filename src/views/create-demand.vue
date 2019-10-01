<template>
  <div class="demandCreate">
    <div class="tabs">
      <div class="tabs__row">
        <div>Тип требований</div>
        <div>Параметры страницы</div>
        <div>Колонтитулы</div>
        <div>Текст</div>
        <div>Заголовки</div>
      </div>
      <div class="tabs__row">
        <div>Содержание</div>
        <div>Рисунки</div>
        <div>Таблицы</div>
        <div>Формулы</div>
        <div>Списки</div>
      </div>
      <div class="tabs__row">
        <div>Литература</div>
        <div>Примечания</div>
        <div>Приложения</div>
        <div>Конструктор источников</div>
        <div />
      </div>
    </div>
    <div class="type">
      <div class="type__title">
        Тип работы
      </div>
      <div class="type__select">
        <div
          name="name"
          native-value="Flint"
        >
          Сборник трудов или журнал
        </div>
        <div
          name="name"
          native-value="Silver"
        >
          Книга, диссертация, диплом, курсовая
        </div>
        <div
          name="name"
          native-value="Jack"
        >
          Книга, диссертация, диплом, курсовая
        </div>
      </div>
    </div>
    <div class="settings">
      <div class="settings__title">
        Настойки
      </div>
      <div class="settings__select">
        <div>
          <div>Колонтитулы</div>
          <div>Текст</div>
          <div>Заголовки</div>
          <div>Содержание</div>
        </div>
        <div>
          <div>Таблицы</div>
          <div>Формулы</div>
          <div>Списки</div>
          <div>Литература</div>
        </div>
        <div>
          <div>Рисунки</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="scss">
.demandCreate {
  padding: 10px;
  .tabs {
    display: flex;
    flex-direction: column;

    &__row {
      display: flex;

      &> div {
        width: 150px;
        border: 1px solid black;
        padding: 5px;
      }
    }
  }

  .type {
    display: flex;

    &__title {

    }

    &__select {
      display: flex;
    }
  }

  .settings {
    &__title {}
    &__select {}
  }
}
</style>
