<template>
  <section class="documents">
    <h1 class="main-title">Список документов</h1>
    <div class="documents-switch">
      <ul class="documents-switch__list">
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" href="#!">- Any -</a>
        </li>
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" href="#!">Новый</a>
        </li>
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" href="#!">В обработке</a>
        </li>
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" href="#!">Готов</a>
        </li>
        <li class="documents-switch__item">
          <a class="switch__btn switch__btn--blue" href="#!">Ошибка обработки</a>
        </li>
      </ul>
      <form class="documents-switch__form">
        <input type="text" class="documents-switch__input" />
        <button class="switch__btn switch__btn--green">Поиск</button>
      </form>
    </div>
    <div class="documents__table-wrapper">
      <button class="switch__btn switch__btn--red">Удалить...</button>
      <button class="switch__btn switch__btn--green">Обработать</button>
      <table class="documents__table documents__table--docs">
        <thead>
          <tr>
            <th class="documents__table-column">
              <input type="checkbox" />
            </th>
            <th class="documents__table-column">Название</th>
            <th class="documents__table-column">Размер</th>
            <th class="documents__table-column">Дата загрузки</th>
            <th class="documents__table-column">Состояние</th>
            <th class="documents__table-column">Требование</th>
            <th class="documents__table-column">Percent</th>
            <th class="documents__table-column"></th>
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
            <td class="documents__table-column">{{ row.size }}</td>
            <td class="documents__table-column">{{ row.date }}</td>
            <td class="documents__table-column">{{ row.state }}</td>
            <td class="documents__table-column">{{ row.demand }}</td>
            <td class="documents__table-column">{{ row.percent }}</td>
            <td class="documents__table-column">
              <a v-bind:href="row.link" class="documents__table-link">
                <img class="documents__table-img" src="../assets/doc.png" alt="download" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="documents-pages">
      <span class="visually-hidden">Pages</span>
      <ul class="documents-pages__list">
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">« first</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">‹ previous</a>
        </li>
        <li class="documents-pages__item">
          1
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">2</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">3</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">4</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">5</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">6</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">next ›</a>
        </li>
        <li class="documents-pages__item">
          <a href="#!" class="documents__table-link">last »</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "VueDocs",
  data: function() {
    return {
      rows: [
        {
          id: "1",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        },
        {
          id: "2",
          link: "#!",
          name: "otchet_kolyada.docx",
          size: "989.78 KB ",
          date: "06.08.2019",
          state: "Готов",
          demand: "MAGISTR",
          percent: "100"
        },
        {
          id: "3",
          link: "#!",
          name: "otchyot_-_9_iz10.docx",
          size: "1.14 MB",
          date: "25.07.2019",
          state: "Готов",
          demand: "STP BSEU",
          percent: "100"
        },
        {
          id: "4",
          link: "#!",
          name: "ministerstvo_obrazovaniya_respubliki_belarus.docx",
          size: "7.52 MB ",
          date: "25.07.2019",
          state: "Готов",
          demand: "STP BSEU",
          percent: "100"
        },
        {
          id: "5",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        },
        {
          id: "6",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        },
        {
          id: "7",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        },
        {
          id: "8",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        },
        {
          id: "9",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        },
        {
          id: "10",
          link: "#!",
          name: "literatura_ct.docx",
          size: "55.2 KB",
          date: "24.08.2019",
          state: "Готов",
          demand: "STP BSUIR",
          percent: "100"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.documents {
  margin-bottom: 30px;

  &-pages {
    &__list {
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }

    &__item {
      padding: 8px;
      list-style-type: none;

      &:not(:first-child) {
        margin-left: 24px;
      }
    }
  }
}
</style>