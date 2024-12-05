<template>
  <div class="carousel-agile">
    <div
      :class="[
        'carsList-itemImage',
        [carousel && car.photos.length > 1 ? 'opacity-0' : ''],
      ]"
      :style="`background-image: url('https://cdn.voron.io/images/${car.side_img}')`"
    ></div>

    <!-- :options="{
          infinite: false,
          navButtons: false,
          slidesToShow: 3,
          pauseOnDotsHover: true,
          pauseOnHover: true,
          //centerMode: true,
          //swipeDistance: 10,
        }" -->

    <client-only
      v-if="carousel && car.photos.length > 1"
      placeholder="Loading..."
    >
      <agile
        :options="{
          autoplay: true,
          //centerMode: true,
          dots: false,
          navButtons: true,
          slidesToShow: 1,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },

            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },

            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 5,
                //navButtons: true,
              },
            },
          ],
        }"
      >
        <div v-for="(photo, key) in car.photos" :key="key" class="slide">
          <img
            :src="`https://cdn.voron.io/images/gallery/${car.tid}/${photo}@3x.jpg`"
            alt=""
          />
          <!-- <div
            class="carousel-slide"
            :style="`background-image: url('https://cdn.voron.io/images/gallery/${car.tid}/${photo}@3x.jpg')`"
          ></div> -->
        </div>

        <template slot="prevButton"><i class="fal fa-angle-left"></i></template>
        <template slot="nextButton"
          ><i class="fal fa-angle-right"></i
        ></template>
      </agile>
    </client-only>

    <div class="carsList-itemIcons">
      <div v-if="car.seats != 0" class="block-icon-auto">
        <div class="icon-auto">
          <i v-if="car.seats != 2" class="fal fa-users"></i>
          <i v-if="car.seats == 2" class="fal fa-user-friends"></i>
        </div>
        <span>{{
          car.seats | declOfNum(["место", "места", "мест"], true)
        }}</span>
      </div>

      <div v-if="car.horsepower != 0" class="block-icon-auto">
        <div class="icon-auto">
          <i class="fal fa-tachometer-alt-fastest"></i>
        </div>
        <span>{{ car.horsepower }} л.с.</span>
      </div>

      <div class="block-icon-auto">
        <div class="icon-auto">
          <i class="fal fa-gas-pump"></i>
        </div>
        <span>{{ car.fuelType }}</span>
      </div>

      <div class="block-icon-auto">
        <div class="icon-auto">
          {{ car.minAgeDriver | number }}
        </div>
        <span>Возраст</span>
      </div>

      <div class="block-icon-auto">
        <div class="icon-auto">
          {{ car.minAgeDriversLicence | number }}
        </div>
        <span>Стаж</span>
      </div>
    </div>

    <div class="carsList-itemName">
      <div class="carsList-itemPreCaption"></div>
      <div class="carsList-itemCaption">{{ car.title }}</div>
      <div class="carsList-itemSubCaption">
        {{ car.body.title }}
        {{ car.model.title }}<br /><em
          ><small>
            <template v-if="car.depositMax != 0" >
              Депозит для новых клиентов {{ car.depositMax | number }}
              <span class="rouble">₽</span> *
            </template>
            <span style="color: #ffcc00;" v-else >
              Депозит не требуется
            </span>
            </small></em>
      </div>
    </div>
    <div class="carsList-itemPrice">
      <div class="carsList-itemPreCaption">стоимость</div>
      <div class="carsList-itemCaption">
        <span class="carsList-item-ColorBlue"
          >{{ car.costPerHour | number }}
          <span class="icon icon-rouble-semibold">/мин</span></span
        >
      </div>
      <div class="carsList-itemSubCaption">
        от {{ car.max_daily_cost | number }} <span class="rouble">₽</span>/сутки
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    car: {
      required: true,
      type: Object,
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


<style>
.carousel-agile .agile {
  margin-top: 90px;
  margin-left: -10px;
  margin-right: -10px;
  position: relative;
}
.carousel-agile .carsList-itemContent {
  height: 560px !important;
}

.carousel-agile .agile__actions {
  z-index: 1000;
  position: absolute !important;
  left: auto;
  right: auto;
  top: 50%;
  width: 100%;
  margin-top: -16px;
  padding: 0 15px !important;
}

.carousel-agile .agile__actions button {
  -webkit-appearance: button;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 32px !important;
  height: 32px !important;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  border: none;
  transition: 0.3s all ease-in-out;
  font-size: 1.3rem;

  left: auto;
  right: auto;
}

.carousel-agile .agile__actions button:hover {
  background: rgba(0, 0, 0, 0.7);
}

.carousel-agile .slide img {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

.carousel-agile .slide {
  padding: 0 5px;
}

.opacity-05 {
  opacity: 0.5;
}

.opacity-0 {
  opacity: 0;
}

/* .carousel-agile .carsList-itemContent {
  height: 560px;
} */
</style>
