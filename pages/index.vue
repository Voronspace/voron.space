<template>
  <!-- CONTENT -->
  <main class="pageContent" itemprop="mainContentOfPage">
    <!-- BAR: MAIN SECTION -->

    <div class="mainSection mainSection-IndexPage">
      <div class="mainSection-background">

        <video
          playsinline
          loop
          muted
          autoplay
          poster_=""
          class="mainSection-video mainSection-video-home mainVideoMobile"
        >
          <source src="~static/video/voron_site_mobile.mp4" type="video/mp4" />
        </video>

        <video
          playsinline
          loop
          muted
          autoplay
          poster_=""
          class="mainSection-video mainSection-video-home mainVideoBig"
        >
          <source src="~static/video/voron_site.mp4" type="video/mp4" />
        </video>

      </div>
      <div class="mainSection-content">
        <div class="pageSection-content">
          <h1 class="mainSection-title">
            Ваш личный автопарк
            <div class="mainSection-subTitle mainSection-subTitle-first">
              с доступом со смартфона по технологии каршеринга
            </div>
          </h1>

          <h2 class="mainSection-subTitle">
            Бесконтактная аренда комфорт, бизнес и премиум автомобилей без надписей<br />
            <b>Доставка за 30-90 мин. в указанное место бесплатно</b>
          </h2>

          <div class="mainSection-subTitle-NoMobile"></div>

          <div class="advantages-link-container">
            <a
              @click="installApp"
              class="toScroll_ advantages-link"
              >Установить приложение</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- /BAR: MAIN SECTION -->
    <!-- BAR: ADVANTAGES -->
    <div id="advantages" class="advantages">
      <div class="pageSection-content">
        <div class="advantages-title">Возможности</div>

        <div
          class="advantages-items-container advantages-items-container-Active"
        >
          <div class="advantages-items">
            <AdvantageItem
              text="Разнообразный ассортимент авто без надписей"
              img="/images/app/phone01.png"
            />
            <AdvantageItem
              text="На улицах города с доступом со смартфона"
              img="/images/app/phone02.png"
            />
            <AdvantageItem
              text="Поминутные, часовые и суточные тарифы"
              img="/images/app/phone03.png"
            />
            <AdvantageItem
              text="Бесплатная доставка для часовой поездки"
              img="/images/app/phone04.png"
            />
            <AdvantageItem
              text="30-90 мин. и авто ждет вас в указанном месте"
              img="/images/app/phone05.png"
            />

            <div class="advantages-clear"></div>
          </div>

          <div class="advantages-items-Mobile">
            <client-only placeholder="Загрузка...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false
                }"
              >
                <div class="slide">
                  <AdvantageItem
                    text="Разнообразный ассортимент авто без надписей"
                    img="/images/app/phone01.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="На улицах города с доступом со смартфона"
                    img="/images/app/phone02.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Поминутные, часовые и суточные тарифы"
                    img="/images/app/phone03.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Бесплатная доставка для часовой поездки"
                    img="/images/app/phone04.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="30-90 мин. и авто ждет вас в указанном месте"
                    img="/images/app/phone05.png"
                  />
                </div>
              </agile>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <!-- /BAR: ADVANTAGES -->
    <!-- BAR: CARS PRESENTATION -->
    <div class="carsPresent">
      <div class="pageSection-content">
        <h2 id="chooseBrand" class="carsPresent-title-brands">МАРКИ</h2>
      </div>

      <div class="pageSection-content">
        <div class="brand-list">
          <BrandItem
            v-for="(brand, key) in brands"
            :key="key"
            :image="`https://cdn.voron.io/images/catalog/${brand.icon}.png`"
            :name="brand.title"
            :link="`/${brand.slug}/`"
            :slug="brand.slug"
          />
          <!-- <BrandItem image="" name="Все" link="/" slug="" /> -->
        </div>

        <div class="pageSection-content">
          <h2 id="chooseCar" class="carsPresent-title-models">МОДЕЛИ</h2>
        </div>

        <!-- CARS LIST BAR -->
        <div class="carsList">
          <CarModel v-for="(car, key) in cars" :key="key" :car="car" />
        </div>
        <div class="carsList">
          <div class="carsList-itemSubCaption">
            <em
              ><small
                >
                * Для отмены депозита необходимо совершить минимум 10 успешных поездок в сервисе. Поездка засчитывается, если вы находились в движении больше 30 минут, не нарушали правила ПДД, не нанесли ущерб автомобилю и оплата за аренду была успешным списанием с привязанной банковской карты, а не погашением задолженности или из страхового депозита. Подробнее тут → <a style="color: rgb(255, 204, 0);" target="_blank" href="https://voron.help/deposit/deposit" >voron.help</a></small
              ></em
            >
          </div>
        </div>
        <!-- /CARS LIST BAR -->
      </div>
    </div>
    <!-- /BAR: CARS PRESENTATION -->
    <!-- BAR: HOT IT WORKS -->
    <div id="howItWorks" class="howItWorks">
      <div class="pageSection-content">
        <div class="howItWorks-title">Схема работы</div>
        <div class="howItWorks-numbers">
          <div class="howItWorks-numberItem">1</div>
          <div class="howItWorks-numberItem">2</div>
          <div class="howItWorks-numberItem">3</div>
          <div class="howItWorks-numberItem">4</div>
          <div class="howItWorks-numberItem">5</div>
        </div>
        <div class="howItWorks-items">
          <SchemeItem
            title="Регистрация"
            icon="fal fa-address-card"
            text="Вы устанавливаете мобильное приложение и проходите в нем регистрацию"
          />

          <SchemeItem
            title="Подтверждение"
            icon="fal fa-user-check"
            text="Служба безопасности проверяет ваши документы и активирует аккаунт"
          />

          <SchemeItem
            title="Доставка / Бронь"
            icon="fal fa-route"
            text="Выбираете автомобиль, вносите страховой депозит и можете ехать. Или заказываете доставку, чтобы машину привезли к вам"
          />

          <SchemeItem
            title="Поездка"
            icon="fal fa-car-alt"
            text="На время аренды в мобильном приложении включается таймер для удобного контроля расходов"
          />

          <SchemeItem
            title="Завершение"
            icon="fal fa-car-alt"
            text="Зона завершения аренды подсвечена на карте зеленым цветом. После поездки можно вывести депозит нажатием «Вернуть депозит». Он будет отправлен на возврат в течение 48 часов"
            decsription="Вы можете оставить депозит на своем балансе, чтобы использовать его для следующих поездок"
          />
        </div>

        <div class="advantages-items-Mobile howItWorks-items-Mobile_">
          <client-only placeholder="Loading...">
            <agile
              :options="{
                infinite: false,
                navButtons: false
              }"
            >
              <div class="slide">
                <SchemeItem
                  title="Регистрация"
                  icon="fal fa-address-card"
                  number="1"
                  text="Вы устанавливаете мобильное приложение и проходите в нем регистрацию"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Подтверждение"
                  icon="fal fa-user-check"
                  number="2"
                  text="Служба безопасности проверяет ваши документы и активирует аккаунт"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Доставка / Бронь"
                  icon="fal fa-route"
                  number="3"
                  text="Выбираете автомобиль, вносите страховой депозит и можете ехать. Или заказываете доставку, чтобы машину привезли к вам"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Поездка"
                  icon="fal fa-car-alt"
                  number="4"
                  text="На время аренды в мобильном приложении включается таймер для удобного контроля расходов"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Завершение"
                  icon="fal fa-car-alt"
                  number="5"
                  text="Зона завершения аренды подсвечена на карте зеленым цветом. После поездки можно вывести депозит нажатием «Вернуть депозит». Он будет отправлен на возврат в течение 48 часов"
                  decsription="Вы можете оставить депозит на своем балансе, чтобы использовать его для следующих поездок"
                />
              </div>
            </agile>
          </client-only>
        </div>

        <div
          class="howItWorks-buttonContainer"
          style="position: static; margin-top: 50px"
        >
          <nuxt-link
            to="/delivery/"
            exact
            exact-active-class="active"
            class="howItWorks-button"
            ><i style="margin-right: 10px" class="fal fa-route"></i>Как работает
            доставка</nuxt-link
          >
        </div>
      </div>
    </div>

    <!-- /BAR: HOT IT WORKS -->
  </main>
  <!-- /CONTENT -->
</template>

<script>
import CarModel from "/components/CarModel.vue";
import AdvantageItem from "/components/AdvantageItem.vue";
import SchemeItem from "/components/SchemeItem.vue";
import BrandItem from "/components/BrandItem.vue";

export default {
  head: {
    title: "VORON – Личный автомобиль по технологии каршеринга. Каршеринг без надписей",
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
          "VORON – Личный автомобиль по технологии каршеринга. Каршеринг без надписей"
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
      },
      sizeX: 0
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
      this.$yandexMetrika.reachGoal("install_app");

      // document.location.href = `https://app.voron.io/${this.$utm()}`;
       document.location.href = `https://voron.app/${this.$utm()}`;
    }
  },
};
</script>
