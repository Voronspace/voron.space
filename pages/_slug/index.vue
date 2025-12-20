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
          class="mainSection-video"
        >
          <source src="~static/video/techno.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mainSection-content">
        <div class="pageSection-content">
          <h1 class="mainSection-title">
            Автомобиль {{ brand_data.title }}
            <div class="mainSection-subTitle">
              пользуйтесь сегодня, постепенно выплачивая стоимость
            </div>
          </h1>

          <h2 class="mainSection-subTitle">
            Покупка комфорт, бизнес и премиум автомобилей через аренду с выкупом<br />
            <b>Сначала тест-драйв, потом выкуп</b>
          </h2>

          <div class="mainSection-subTitle-NoMobile"></div>

          <div class="advantages-link-container">
            <a
              :href="`https://voron.app/${$utm()}`"
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
        <div class="advantages-title">Преимущества</div>
        <div
          class="advantages-items-container advantages-items-container-Active"
        >
          <div class="advantages-items">
            <AdvantageItem
              text="Разнообразный ассортимент авто для выкупа"
              img="/images/app/phone01.png"
            />
            <AdvantageItem
              text="Автомобили не в офисе, а на улицах города"
              img="/images/app/phone02.png"
            />
            <AdvantageItem
              text="Возможность поездить перед оформлением"
              img="/images/app/phone03.png"
            />
            <AdvantageItem
              text="Гибкая тарификация и автооплата"
              img="/images/app/phone04.png"
            />
            <AdvantageItem
              text="Не только смартфон, но и личный пульт управления"
              img="/images/app/phone05.png"
            />
            <div class="advantages-clear"></div>
          </div>
          <div class="advantages-items-Mobile">
            <client-only placeholder="Загрузка...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false,
                }"
              >
                <div class="slide">
                  <AdvantageItem
                    text="Разнообразный ассортимент авто для выкупа"
                    img="/images/app/phone01.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Автомобили не в офисе, а на улицах города"
                    img="/images/app/phone02.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Возможность поездить перед оформлением"
                    img="/images/app/phone03.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Гибкая тарификация и автооплата"
                    img="/images/app/phone04.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Не только смартфон, но и личный пульт управления"
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
    <!-- BAR: CITIES -->
    <div class="advantages cities-block">
      <div class="pageSection-content">
        <div class="advantages-title">Города</div>
        <div
            class="advantages-items-container advantages-items-container-Active advantages-items-container2"
        >
          <ul class="tabs__caption">
            <li
                :class="[selectedRegion == '99' ? 'active' : '']"
                @click="changeRegion('99')"
            >
              Москва
            </li>
            <li
                :class="[selectedRegion == '98' ? 'active' : '']"
                @click="changeRegion('98')"
            >
              Санкт-Петербург
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /BAR: CITIES -->
    <!-- BAR: CARS PRESENTATION -->
    <div class="carsPresent">
      <div class="pageSection-content">
        <h2 id="chooseBrand" class="carsPresent-title-brands">МАРКИ</h2>
      </div>
      <div class="pageSection-content">
        <div class="brand-list">
          <BrandItem
            v-for="(b, key) in brands"
            :key="key"
            :image="`https://cdn.voron.io/images/catalog/${b.icon}.png`"
            :name="b.title"
            :link="`/${b.slug}/`"
            :slug="b.slug"
          />
          <BrandItem icon="far fa-ellipsis-h" name="Все" link="/" slug="" />
        </div>
        <div class="pageSection-content">
          <h2 id="chooseCar" class="carsPresent-title-models">МОДЕЛИ</h2>
        </div>
        <div class="carsList">
          <CarModel v-for="(car, key) in cars" :key="key" :car="car" />
        </div>
        <div class="carsList">
          <div class="carsList-itemSubCaption">
            <em
            ><small
            >* Можно взять автомобиль на ТЕСТ-ДРАЙВ и в любой момент поездки запустить тариф выкупа, оплатив первоначальный взнос. Подробнее тут →
              <a
                style="color: rgb(255, 204, 0)"
                target="_blank"
                href="https://voron.help/tariff/renttobuy"
              >voron.help</a
              ></small
            ></em
            >
          </div>
        </div>
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
            title="Заявка на сайте"
            icon="fal fa-user-check"
            text="Вы оставляете заявку, в вами связывается наш менеджер и подробно рассказывает об аренде с выкупом"
          />
          <SchemeItem
            title="Регистрация"
            icon="fal fa-address-card"
            text="Устанавливаете мобильное приложение и проходите в нем регистрацию. Служба безопасности проверяет ваши документы и активирует аккаунт"
          />
          <SchemeItem
            title="Доставка / Бронь"
            icon="fal fa-route"
            text="Выбираете автомобиль, вносите страховой депозит и можете ехать. Или заказываете доставку, чтобы машину привезли к вам"
          />
         <SchemeItem
           title="Тест-драйв"
           icon="fal fa-car-alt"
           text="Вы можете поездить на авто в обычной аренде и если он вам понравится, то в любой момент включить в приложении тариф с выкупом"
         />
         <SchemeItem
           title="Подписание документов"
           icon="fal fa-file-alt"
           text="Когда вы запустите тариф аренды с выкупом, мы в течение недели подготовим договор с владельцем автомобиля и пригласим вас на подписание документов"
           decsription="Второй раз вам потребуется приехать на подписание договора купли-продажи после завершения выкупа"
         />
        </div>
        <div class="advantages-items-Mobile howItWorks-items-Mobile_">
          <client-only placeholder="Loading...">
            <agile
              :options="{
                infinite: false,
                navButtons: false,
              }"
            >
              <div class="slide">
                <SchemeItem
                  title="Заявка на сайте"
                  icon="fal fa-user-check"
                  number="1"
                  text="Вы оставляете заявку, в вами связывается наш менеджер и подробно рассказывает об аренде с выкупом"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Регистрация"
                  icon="fal fa-address-card"
                  number="2"
                  text="Устанавливаете мобильное приложение и проходите в нем регистрацию. Служба безопасности проверяет ваши документы и активирует аккаунт"
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
                  title="Тест-драйв"
                  icon="fal fa-car-alt"
                  number="4"
                  text="Вы можете поездить на авто в обычной аренде и если он вам понравится, то в любой момент включить в приложении тариф с выкупом"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Подписание документов"
                  icon="fal fa-file-alt"
                  number="5"
                  text="Когда вы запустите тариф аренды с выкупом, мы в течение недели подготовим договор с владельцем автомобиля и пригласим вас на подписание документов"
                  decsription="Второй раз вам потребуется приехать на подписание договора купли-продажи после завершения выкупа"
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
            to="/renttobuy/"
            exact
            exact-active-class="active"
            class="howItWorks-button"
          ><i style="margin-right: 10px" class="fal fa-route"></i>Подробнее о выкупе</nuxt-link
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
    title: "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content:
          "каршеринг, каршеринг бизнес-класса, каршеринг без надписей, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии",
      },
      {
        hid: "description",
        name: "description",
        content:
          "VORON – Личный автомобиль бизнес-класса по технологии каршеринга",
      },
    ],
  },
  components: {
    CarModel,
    AdvantageItem,
    SchemeItem,
    BrandItem,
  },
  data() {
    return {
      cars: [],
      brands: [],
      brand_data: {},
    };
  },


  async asyncData({ context, $axios, params }) {
    let response = await $axios.$get(`/api/getauto?brand=${params.slug}`);
    console.log(response["cars"])
    return {
      cars: response["cars"],
      brands: response["brands"],
      brand_data: response["brand"],
    };
  },
  methods: {},
};
</script>
