<template>
  <div class="carsList-item carsList-item">
    <a class="carsList-itemContent">
      <div
        class="carsList-itemImage"
        :style="`background-image: url('https://cdn.voron.io/images/${car.side_img}')`"
      ></div>
      <div class="carsList-itemName">
        <div class="carsList-itemPreCaption">{{ car.brand.title }}</div>
        <div class="carsList-itemCaption">{{ car.title }}</div>
        <div class="carsList-itemSubCaption">
          <em>{{ car.car_year }}</em>
        </div>
      </div>
      <div class="carsList-itemPrice">
        <div class="carsList-itemPreCaption">
          Цена - {{ car.car_price | number }} <span class="rouble">₽</span>
        </div>
        <div class="carsList-itemCaption">
          <span class="carsList-item-ColorBlue"
            >{{ car.car_profit | number }}
            <span class="icon icon-rouble-semibold">/мес</span></span
          >
        </div>
        <div class="carsList-itemSubCaption">
          {{ car.car_procent | round | number }}% годовых
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<!--
title: "BMW 640i xDrive",
          year: "2014",
          income: 110700,
          percent: 63,
          price: 2100000,
          image: "@images/car_model/640d.png",
          -->
