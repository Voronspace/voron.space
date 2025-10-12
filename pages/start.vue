<template>
  <!-- CONTENT -->
  <main class="pageContent" itemprop="mainContentOfPage">
    <!-- BAR: MAIN SECTION -->

    <div class="mainSection mainSection-full mainSection-IndexPage">
      <div class="mainSection-background">
        <div style="background-position: center center; background-size: cover; background-image: url('/images/start-hero-bg.jpeg'); width: 100%; height: 100%;" ></div>
        <!-- <video
          playsinline
          loop
          muted
          autoplay
          poster_=""
          class="mainSection-video" 
        >
          <source src="~static/video/techno.mp4" type="video/mp4" />
        </video> -->
      </div>
      <div class="flex-center">
        <div class="mainSection-content">
          <div class="pageSection-content">
            <h1 class="mainSection-title">
              Бесконтактная аренда автомобилей<br/>бизнес-класса 
              <!-- <div class="mainSection-subTitle">
                с доступом со смартфона по технологии каршеринга 
              </div> -->
            </h1>

            <!-- <h2 class="mainSection-subTitle">
              Бесконтактная аренда автомобилей бизнес-класса без надписей<br />
              <b>Доставка за 30-90 мин в указанное место бесплатно</b>
            </h2> -->


          <div class="utp-list" >
            <div class="utp-item" > <i class="fad fa-mobile-alt"></i>По технологии каршеринга</div>
            <div class="utp-item" ><i class="fad fa-map-marked-alt"></i>Бесплатная доставка 30-90 мин</div>
            <div class="utp-item" ><i class="fad fa-car"></i>Без надписей</div>
          </div>


            <div class="mainSection-subTitle-NoMobile"></div>

            <div class="advantages-link-container">
              <a
                @click="installApp"
                :href__="`https://app.voron.io/${$utm()}`"
                class="toScroll_ advantages-link"
                >Установить приложение</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </main>
  <!-- /CONTENT -->
</template>

<script>
import CarModel from "/components/CarModel.vue";
import AdvantageItem from "/components/AdvantageItem.vue";
import SchemeItem from "/components/SchemeItem.vue";
import BrandItem from "/components/BrandItem.vue";

export default {
  layout: 'landing',
  head: {
    title: "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content:
          "каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии"
      },
      {
        hid: "description",
        name: "description",
        content:
          "VORON – Личный автомобиль бизнес-класса по технологии каршеринга"
      }
    ]
  },
  data() {
    return {
      cars: [],
      brands: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    CarModel,
    AdvantageItem,
    SchemeItem,
    BrandItem
  },
  async asyncData({ context, $axios }) {
    let response = await $axios.get(`/api/getauto`);
    // console.log(response.data["cars"]);
    return { cars: response.data["cars"], brands: response.data["brands"] };
  },
  methods: {
    installApp() {
      this.$yandexMetrika.reachGoal("install_app_start");

      // window.ym(45891591,'reachGoal','install_app');

      document.location.href = `https://app.voron.io/${this.$utm()}`;
    }
  }
};
</script>



<style scoped>

  .mainSection-full {
    height: 100vh;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 70px);
  }

  .mainSection-content {
    /* height: 100%; */
    padding: 0 !important; 
  }

  /* .mainSection-title {
    line-height: 3rem;
  } */

  .mainSection-subTitle {
    margin-top: 10px;
  }


  .utp-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 860px;
    margin: 70px auto;
    font-size: 1.4rem;
  }

  .utp-item {
    max-width: 260px;
  }

  .utp-item i {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 15px;
    color: #ffc800;


  }

  .mainSection-title {
    width: 80%;
  }

  @media (max-width: 668px) {
    .mainSection-title {
      font-size: 1.7rem;
    }

    .utp-list {
      max-width: 90%;
      margin: 40px auto;
      flex-direction: column;
      align-items: center;
      font-size: 1.2rem;
    }

    .utp-item {
      max-width: 100%;
      margin: 15px 0;
    }

      .utp-item i {
      font-size: 1.5rem;
      display: block;
      margin-bottom: 15px;
      color: #ffc800;
    }

  }

</style>