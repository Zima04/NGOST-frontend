<template>
  <div class="container">
    <h1 class="section__title">
      Система онлайн форматирования документов "Змест"
    </h1>
    <p class="section__text">
      Быстро и легко отредактируйте свои документы по шаблону
    </p>
    <button>Начать работу</button>
    <div class="description">
      <h2 class="description__title">
        О проекте
      </h2>
      <div class="description__container">
        <p>
          Система представляет собой онлайн-сервис по работе с текстовыми документами.
          Вы загружаете документ, а система обрабатывает его (приводит оформление содержимого
          в соответствие с требованиями по оформлению определенного стандарта и возвращает его ВАМ).
        </p>
        <p>
          Вы можете выполнять автоматическое оформление любых документов: контрольный, курсовых и
          дипломных работ, рефератов, магистерсих диссертаций, диссертационных исследований на
          получение степени кандидат и доктор наук, монографий, учебных пособий, а также любых
          других документов.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			email: null,
			password: null
		};
	},
	methods: {
		onSubmit() {

		}
	}
};
</script>
<style lang="scss" scoped>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1024px;
        padding: 2rem;
        margin: 0 auto;
        color: black;

        &::after {
            content: "";
            background: url('../assets/u0.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            opacity: 0.4;
            top: 70px;
            left: 0;
            bottom: 0;
            right: 0;
            position: fixed;
            z-index: -1;
        }

        .section__title {
            margin: 0 0 1rem;
            text-align: center;
        }
        .section__text {
            margin: 0 0 1rem;
            text-align: center;
        }
    }

    .description {
        background-color: white;
        padding: 2rem;
        margin-top: 1rem;
        &__title {
            margin: 0 0 1rem;
            text-align: center;
        }
        &__container {
            display: flex;
            flex-direction: row;
            p {
                margin: 0;
                text-align: left;
            }

            @media only screen  and (max-width: 479px){
                flex-direction: column;
            }
        }
    }

    button {
        all: unset;
        padding: 0;
        border: none;
        font: inherit;
        color: white;
        cursor: pointer;
        background: #3F3955;
        padding: .5rem 2rem;

        &:focus,
        &:hover {
            background: #0099CC;
        }

    }

</style>
