<template>
  <div :class="['carsList-item', { 'is-bought-out': car.is_bought_out === 1 }]">
    <!-- Ссылка активна только если машина НЕ выкуплена -->
    <nuxt-link
        v-if="link && car.is_bought_out !== 1"
        :to="`/${car.brand.slug}/${car.slug}`"
        :class="[
        'carsList-itemContent',
        [carousel ? 'carsList-itemContent-agile' : ''],
      ]"
    >
      <CarModelInfo :car="car" :carousel="carousel" />
      <div class="carsList-itemHover">
        <div class="carsList-itemButtonContainer">
          <div class="carsList-itemButton">Подробнее</div>
        </div>
      </div>
    </nuxt-link>

    <!-- Блок без ссылки: если машина выкуплена -->
    <div
        v-else
        :class="[
        'carsList-itemContent',
        [carousel ? 'carsList-itemContent-agile' : ''],
      ]"
    >
      <CarModelInfo :car="car" :carousel="carousel" />

      <!-- Слой оверлея, который для .is-bought-out будет виден всегда -->
      <div class="carsList-itemHover" v-if="car.is_bought_out === 1">
        <div class="carsList-itemButtonContainer">
          <div class="carsList-itemButton btn-bought-out">Выкуплено</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CarModelInfo from "/components/CarModelInfo.vue";
export default {
  components: {
    CarModelInfo,
  },
  props: {
    car: {
      required: true,
      type: Object,
    },
    link: {
      required: false,
      default: true,
    },
    carousel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.carousel-slide {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: auto;
  height: 260px;
}

/* Принудительно показываем оверлей (как при ховере) для выкупленных авто */
.is-bought-out .carsList-itemHover {
  opacity: 1 !important;
  visibility: visible !important;
  cursor: default !important;
}

/* Серая кнопка без заливки, один-в-один как оригинал */
.btn-bought-out {
  border-color: #888 !important;
  color: #888 !important;
  background: transparent !important;
  pointer-events: none;
}

/* Стандартное поведение ховера для активных карточек */
.carsList-itemContent:hover .carsList-itemHover {
  opacity: 1;
  visibility: visible;
}
</style>