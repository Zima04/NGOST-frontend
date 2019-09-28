<template>
  <section class="documents">
    <h1 class="main-title">Список требований</h1>
    <div class="documents-switch">
      <ul class="documents-switch__list">
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" v-bind:href="url">Все</a>
        </li>
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" v-bind:href="url">Стандартные</a>
        </li>
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" v-bind:href="url">Мое</a>
        </li>
      </ul>
      <form class="documents-switch__form">
        <input type="text" class="documents-switch__input" />
        <button class="switch__btn switch__btn--green">Поиск</button>
      </form>
    </div>
    <div class="documents__table-wrapper">
      <button class="switch__btn switch__btn--red">Удалить...</button>
      <table class="documents__table documents__table--demand">
        <thead>
          <tr>
            <th class="documents__table-column">
              <input type="checkbox" />
            </th>
            <th class="documents__table-column">Название</th>
            <th class="documents__table-column">Дата создания</th>
            <th class="documents__table-column">Тип</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" v-bind:key="row.id" class="documents__table-row">
            <td class="documents__table-column">
              <input type="checkbox" />
            </td>
            <td class="documents__table-column">
              <a v-bind:href="row.link" class="documents__table-link">{{ row.name }}</a>
            </td>
            <td class="documents__table-column">{{ row.date }}</td>
            <td class="documents__table-column">{{ row.type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="documents__footer">
      <button class="switch__btn switch__btn--green">Создать требование</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "VueDemand",
  data: function() {
    return {
      rows: [
        {
          id: "1",
          link: "#!",
          name: "IZDAT BSUIR",
          date: "25.08.2019",
          type: "Стандартное"
        },
        {
          id: "2",
          link: "#!",
          name: "English STP",
          date: "11.06.2019",
          type: "Стандартное"
        },
        {
          id: "3",
          link: "#!",
          name: "IZDAT",
          date: "01.07.2019",
          type: "Стандартное"
        },
        {
          id: "4",
          link: "#!",
          name: "STP BSEU",
          date: "15.07.2019",
          type: "Стандартное"
        },
        {
          id: "5",
          link: "#!",
          name: "MAGISTR",
          date: "27.07.2019",
          type: "Стандартное"
        },
        {
          id: "6",
          link: "#!",
          name: "STP BSUIR",
          date: "27.07.2019",
          type: "Стандартное"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.documents {
  display: flex;
  flex-direction: column;
  max-width: 65%;

  &-switch {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__list {
      display: flex;
      list-style-type: none;
      padding-left: 0;

      .switch__btn {
        margin-right: 6px;
      }
    }

    &__form {
      margin-left: 10px;

      .switch__btn {
        margin-left: 16px;
      }
    }

    &__input {
      height: 36px;
      width: 170px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 0 12px;
    }
  }

  &__table {
    margin-top: 30px;
    padding: 10px;
    border-collapse: collapse;
    width: 100%;

    &-wrapper {
      margin: 30px 0;
      padding: 33px 10px 10px;
      border: 2px solid #ddd;

      .switch__btn {
        margin-left: 10px;
      }
    }

    &-column {
      padding: 8px;
      border-collapse: collapse;
      text-align: center;
      border: 1px solid #ddd;
    }

    &-link {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    &-img {
      width: 25px;
      height: 25px;
    }

    &--demand &-column {
      width: 25%;
    }
  }
}

.switch__btn {
  padding: 7px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  line-height: 1.42857143;
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  background: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &--green {
    background-color: #5cb85c;
  }

  &--red {
    background-color: #d9534f;
  }

  &--blue {
    background-color: #337ab7;
  }
}
</style>