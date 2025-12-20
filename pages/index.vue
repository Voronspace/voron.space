<template>
  <!-- CONTENT -->
  <main class="pageContent" itemprop="mainContentOfPage">
    <!-- QR Code Modal -->
    <Modal v-if="showQrModal" @close="showQrModal = false">
      <h3 slot="header">Установите приложение VORON</h3>
      <div slot="body" style="text-align: center">
        <p>
          Отсканируйте QR-код камерой вашего смартфона, чтобы скачать
          приложение:
        </p>
        <img
          :src="qrCodeUrl"
          alt="QR Code для установки приложения"
          style="max-width: 200px; margin: 15px auto"
        />
<!--        <p style="font-size: 12px; color: #777">-->
<!--          Ссылка:-->
<!--          <a-->
<!--            :href="appInstallUrl"-->
<!--            target="_blank"-->
<!--            style="word-break: break-all"-->
<!--          >{{ appInstallUrl }}</a-->
<!--          >-->
<!--        </p>-->
      </div>
    </Modal>
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
            Аренда авто с правом выкупа
            <div class="mainSection-subTitle mainSection-subTitle-first">
              Пользуетесь уже сегодня, постепенно выплачивая стоимость автомобиля
            </div>
          </h1>
          <h2 class="mainSection-subTitle">
            Покупка комфорт, бизнес и премиум автомобилей через аренду с выкупом<br />
            <b>Сначала тест-драйв, потом выкуп</b>
          </h2>
          <div class="mainSection-subTitle-NoMobile"></div>
          <div class="advantages-link-container">
            <a
              @click.prevent="handleAppInstallClick('any')"
              :href="appInstallUrlForOs('any')"
              target="_blank"
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
            v-for="(brand, key) in brands"
            :key="key"
            :image="`https://cdn.voron.io/images/catalog/${brand.icon}.png`"
            :name="brand.title"
            :link="`/${brand.slug}/`"
            :slug="brand.slug"
          />
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
           icon="fa-regular fa-file-lines"
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
                  icon="fa-regular fa-file-lines"
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
            to="/about/"
            exact
            exact-active-class="active"
            class="howItWorks-button"
          ><i style="margin-right: 10px" class="fal fa-car-alt"></i>Подробнее о выкупе</nuxt-link
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
import Modal from "/components/Modal.vue";
export default {
  head: {
    title:
      "VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп",
    meta: [
      {
        hid: "keywords",
        name: "keywords",
        content:
          "аренда с выкуом, с правом выкупа, аренда бизнес-класса, каршеринг ворон, аренда авто, прокат авто, аренда авто представительского класса, прокат авто москва, аренда авто в россии",
      },
      {
        hid: "description",
        name: "description",
        content:
          "VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп",
      },
    ],
  },
  components: {
    CarModel,
    AdvantageItem,
    SchemeItem,
    BrandItem,
    Modal,
  },
  data() {
    return {
      cars: [],
      brands: [],
      showQrModal: false,
      qrCodeUrl: "",
      appInstallUrl: "",
      selectedRegion: '99',
    };
  },
  async asyncData({ context, $axios }) {
    let response = await $axios.get(`/api/getautobuyout?region=99`);
    return { cars: response.data["cars"], brands: response.data["brands"] };
  },
  methods: {
    async changeRegion(regionId) {
      if (this.selectedRegion === regionId) {
        return;
      }
      this.selectedRegion = regionId;
      try {
        let response = await this.$axios.get(`/api/getautobuyout?region=${regionId}`);
        this.cars = response.data["cars"];
        this.brands = response.data["brands"];
      } catch (error) {
        console.error("Ошибка при загрузке данных для региона:", error);
        this.cars = [];
        this.brands = [];
      }
    },
    generateQrUrl(targetUrl) {
      return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(targetUrl)}&size=330x330&qzone=1&format=png`;
    },
    appInstallUrlForOs(targetOs) {
      // targetOs здесь для единообразия, т.к. ссылка на voron.app общая
      return `https://voron.app/${this.$utm()}`;
    },
    handleAppInstallClick(targetOs) {
      this.$yandexMetrika.reachGoal("install_app_main_button_index"); // Уникальная цель для этой кнопки

      const baseAppUrl = `https://voron.app/${this.$utm()}`;
      this.appInstallUrl = baseAppUrl;

      if (this.$device && this.$device.isDesktop) {
        console.log('[IndexPage] Desktop device detected. Showing QR modal.');
        this.qrCodeUrl = this.generateQrUrl(baseAppUrl);
        this.showQrModal = true;
      } else {
        console.log(`[IndexPage] Mobile device (${this.$device ? this.$device.os : 'unknown'}) detected. Redirecting to app store.`);
        window.location.href = baseAppUrl;
      }
    },
    // Старый метод, если он был только для аналитики, теперь его логика в handleAppInstallClick
    // installApp() {
    //   this.$yandexMetrika.reachGoal('install_app');
    //   document.location.href = `https://voron.app/${this.$utm()}`;
    // }
  },
};
</script>
<style scoped>
.cities-block {
  padding-bottom: 10px;
}
.tabs__caption {
  justify-content: center;
  gap: 25px;
}
</style>