<template>
  <div :class="['carsList-item', { 'is-bought-out': car.is_bought_out === 1 }]">
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

    <div
        v-else
        :class="[
        'carsList-itemContent',
        [carousel ? 'carsList-itemContent-agile' : ''],
      ]"
    >
      <CarModelInfo :car="car" :carousel="carousel" />

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

.is-bought-out {
  cursor: default;
}

.is-bought-out .carsList-itemHover {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.btn-bought-out {
  border-color: #888 !important;
  color: #888 !important;
  background: transparent !important;
  pointer-events: none;
}

.carsList-itemContent:hover .carsList-itemHover {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .is-bought-out .carsList-itemHover {
    background: rgba(0, 0, 0, 0.4);
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
}
</style>