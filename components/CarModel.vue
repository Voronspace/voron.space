<template>
  <div class="carsList-item carsList-ite">
    <nuxt-link
      v-if="link"
      :to="`/${car.brand.slug}/${car.slug}`"
      :class="[
        'carsList-itemContent',
        [carousel ? 'carsList-itemContent-agile' : ''],
      ]"
    >
      <CarModelInfo :car="car" :carousel="carousel" />
      <div class="carsList-itemHover" v-if="link">
        <div class="carsList-itemButtonContainer">
          <div class="carsList-itemButton">Смотреть</div>
        </div>
      </div>
    </nuxt-link>
    <div
      v-if="!link"
      :class="[
        'carsList-itemContent',
        [carousel ? 'carsList-itemContent-agile' : ''],
      ]"
    >
      <CarModelInfo :car="car" :carousel="carousel" />
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

.agile__slides > * {
  /* margin: 0 10px; */
}
</style>