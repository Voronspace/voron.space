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
          preload="none"
          poster_=""
          class="mainSection-video mainSection-video-partner"
        >
          <source src="~static/video/car.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mainSection-content">
        <div class="pageSection-content">
          <h1 class="mainSection-title">Ваш автомобиль<br />ИСТОЧНИК ДОХОДА</h1>
          <h1 class="mainSection-title mainSection-subTitle-NoMobile"></h1>

          <h2 class="mainSection-subTitle">
            Пусть автомобиль сам зарабатывает, когда не используется
            <div class="mainSection-subTitle-Mobile"></div>
          </h2>
          <b>Эпоха владения автомобилем 2.0</b>
          <div class="advantages-link-container">
            <a @click="connectAutoTop" class="howItWorks-button"
              >Подключить автомобиль</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- /BAR: MAIN SECTION -->
    <!-- BAR: ADVANTAGES -->
    <div id="advantages" class="advantages">
      <div class="pageSection-content">
        <div class="carsList-itemSubCaption">
          <p>
            <small
              >Мы, сервис аренды личных автомобилей бизнес-класса VORON,
              приглашаем подключить ваш автомобиль к нашей платформе. Мы создали
              и отработали решение-сервис «под ключ», готовы выступать в
              качестве операционного и технологического партнера и дать вам
              возможность получать пассивный доход, генерируемый автомобилем во
              время простоя без каких-либо усилий с вашей стороны. </small
            ><br /><br /><br />
          </p>
        </div>
        <div class="advantages-title">В чем суть?</div>

        <div
          class="
            advantages-items-container
            advantages-items-container-Active
            advantages-items-container2
          "
        >
          <ul class="tabs__caption">
            <li :class="[tab == 'one' ? 'active' : '']" @click="tab = 'one'">
              ЛЕГКИЙ ДОХОД
            </li>
            <li :class="[tab == 'two' ? 'active' : '']" @click="tab = 'two'">
              УДОБНЫЙ СЕРВИС
            </li>
          </ul>

          <div
            :class="[
              'advantages-items tab-adv',
              [tab == 'one' ? 'tab-adv-active' : ''],
            ]"
          >
            <AdvantagePartnerItem
              icon="fal fa-search-dollar"
              text="Ваш автомобиль способен генерировать пассивный доход"
            />
            <AdvantagePartnerItem
              icon="fal fa-car-alt"
              text="Вы можете пользоваться своим автомобилем, когда он необходим"
            />
            <AdvantagePartnerItem
              icon="fal fa-route"
              text="Мы подвозим его примерно за 2 часа к вашему дому"
            />
            <AdvantagePartnerItem
              icon="fal fa-mask"
              text="Не требуется наносить никаких наклеек и опознавательных знаков"
            />
            <AdvantagePartnerItem
              icon="fal fa-cocktail"
              text="Всю «головную боль» мы берем на себя"
            />

            <div class="advantages-clear"></div>
          </div>

          <div
            :class="[
              'advantages-items tab-adv',
              [tab == 'two' ? 'tab-adv-active' : ''],
            ]"
          >
            <AdvantagePartnerItem
              icon="fal fa-shower"
              text="Заправку и мойку автомобиля мы берем на себя"
            />
            <AdvantagePartnerItem
              icon="fal fa-traffic-light"
              text="Штрафы полностью автоматизированы и вам не нужно отслеживать свои нарушения"
            />
            <AdvantagePartnerItem
              icon="fal fa-parking-circle"
              text="Вы можете оставить автомобиль в любой точке внутри МКАД и дальше это наша забота"
            />
            <AdvantagePartnerItem
              icon="fal fa-street-view"
              text="Если автомобиль вам нужен в определенной точке мы подвезем его туда"
            />
            <AdvantagePartnerItem
              icon="fal fa-users-class"
              text="Целая команда специалистов круглосуточно следит за вашим автомобилем"
            />

            <div class="advantages-clear"></div>
          </div>

          <div class="advantages-items-Mobile" v-if="tab == 'one'">
            <client-only placeholder="Loading...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false,
                }"
              >
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-search-dollar"
                    text="Ваш автомобиль способен генерировать пассивный доход"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-car-alt"
                    text="Вы можете пользоваться своим автомобилем, когда он необходим"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-route"
                    text="Мы подвозим его примерно за 2 часа к вашему дому"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-mask"
                    text="Не требуется наносить никаких наклеек и опознавательных знаков"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-cocktail"
                    text="Всю «головную боль» мы берем на себя"
                  />
                </div>
              </agile>
            </client-only>
          </div>

          <div class="advantages-items-Mobile" v-if="tab == 'two'">
            <client-only placeholder="Loading...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false,
                }"
              >
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-shower"
                    text="Заправку и мойку автомобиля мы берем на себя"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-traffic-light"
                    text="Штрафы полностью автоматизированы и вам не нужно отслеживать свои нарушения"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-parking-circle"
                    text="Вы можете оставить автомобиль в любой точке внутри МКАД и дальше это наша забота"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-street-view"
                    text="Если автомобиль вам нужен в определенной точке мы подвезем его туда"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-users-class"
                    text="Целая команда специалистов круглосуточно следит за вашим автомобилем"
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
        <h2 id="chooseCar" class="carsPresent-title">
          Доход владельца автомобиля
        </h2>
      </div>

      <div class="pageSection-content">
        <!-- CARS LIST BAR -->
        <div class="carsList">
          <CarInvest v-for="(car, key) in cars" :key="key" :car="car" />
        </div>
        <!-- /CARS LIST BAR -->
      </div>
    </div>
    <!-- /BAR: CARS PRESENTATION -->
    <!-- BAR: HOT IT WORKS -->
    <div id="howItWorks" class="howItWorks howItWorksPartner">
      <div class="pageSection-content">
        <div class="howItWorks-title">Как это работает?</div>
        <div class="howItWorks-numbers">
          <div class="howItWorks-numberItem">1</div>
          <div class="howItWorks-numberItem">2</div>
          <div class="howItWorks-numberItem">3</div>
          <div class="howItWorks-numberItem">4</div>
          <div class="howItWorks-numberItem">5</div>
        </div>
        <div class="howItWorks-items">
          <SchemeItem
            title="Подключение"
            icon="fal fa-car-mechanic"
            text="Мы подключаем ваш автомобиль к системе. При подключении вам ничего оплачивать не требуется"
          />

          <SchemeItem
            title="Личное использование"
            icon="far fa-steering-wheel"
            text="Используете авто столько сколько требуется, а когда необходимость пропадает освобождаете для клиентов сервиса"
          />

          <SchemeItem
            title="Поездки пользователей"
            icon="fal fa-users"
            text="Прошедшие строгую проверку пользователи берут вашу машину и платят поминутно"
          />

          <SchemeItem
            title="Контроль"
            icon="fal fa-robot"
            text="Наши техники занимаются регулярными осмотрами, мойкой и перегонами автомобиля"
          />

          <SchemeItem
            title="Результат"
            icon="fal fa-sack-dollar"
            text="Вы видите в режиме онлайн в личном кабинете все доходы и расходы"
          />
        </div>

        <div class="advantages-items-Mobile">
          <client-only placeholder="Loading...">
            <agile
              :options="{
                infinite: false,
                navButtons: false,
              }"
            >
              <div class="slide">
                <SchemeItem
                  title="Подключение"
                  icon="fal fa-car-mechanic"
                  number="1"
                  text="Мы подключаем ваш автомобиль к системе. При подключении вам ничего оплачивать не требуется"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Личное использование"
                  icon="far fa-steering-wheel"
                  number="2"
                  text="Используете авто столько сколько требуется, а когда необходимость пропадает освобождаете для клиентов сервиса"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Поездки пользователей"
                  icon="fal fa-users"
                  number="3"
                  text="Прошедшие строгую проверку пользователи берут вашу машину и платят поминутно"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Контроль"
                  icon="fal fa-robot"
                  number="4"
                  text="Наши техники занимаются регулярными осмотрами, мойкой и перегонами автомобиля"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Результат"
                  icon="fal fa-sack-dollar"
                  number="5"
                  text="Вы видите в режиме онлайн в личном кабинете все доходы и расходы"
                />
              </div>
            </agile>
          </client-only>
        </div>
      </div>
    </div>

    <!-- BAR: ADVANTAGES -->
    <div id="advantages" class="advantages">
      <div class="pageSection-content">
        <div class="carsList-itemSubCaption"></div>
        <div class="advantages-title" style="margin-top: 50px">
          Что нужно делать?
        </div>

        <div
          class="
            advantages-items-container
            advantages-items-container-Active
            advantages-items-container2
          "
        >
          <ul class="tabs__caption">
            <li
              :class="[tab_2 == 'three' ? 'active' : '']"
              @click="tab_2 = 'three'"
            >
              ЧТО ДЕЛАЕМ МЫ
            </li>
            <li
              :class="[tab_2 == 'four' ? 'active' : '']"
              @click="tab_2 = 'four'"
            >
              ЧТО ДЕЛАЕТЕ ВЫ
            </li>
          </ul>
          <div
            :class="[
              'advantages-items tab-adv',
              [tab_2 == 'three' ? 'tab-adv-active' : ''],
            ]"
          >
            <AdvantagePartnerItem
              icon="fal fa-user-check"
              text="Привлечение и проверка клиентов по нескольким десяткам критериев"
            />
            <AdvantagePartnerItem
              icon="fal fa-satellite"
              text="Круглосуточный контроль за перемещением автомобиля"
            />
            <AdvantagePartnerItem
              icon="fal fa-gas-pump"
              text="Заправка автомобиля, мойка снаружи и внутри, отслеживание состояния"
            />
            <AdvantagePartnerItem
              icon="fal fa-route"
              text="Перемещение автомобиля [доставка/постановка в более массовой точке/забор со штрафстоянки]"
            />
            <AdvantagePartnerItem
              icon="fal fa-phone-volume"
              text="Поддержка клиентов 24/7, прием платежей, оплата платных парковок и штрафов"
            />

            <div class="advantages-clear"></div>
          </div>

          <div
            :class="[
              'advantages-items tab-adv',
              [tab_2 == 'four' ? 'tab-adv-active' : ''],
            ]"
          >
            <AdvantagePartnerItem
              icon="fas fa-mobile-alt"
              text="В приложении заказываете доставку своего авто или бронируете его на карте"
            />
            <AdvantagePartnerItem
              icon="far fa-steering-wheel"
              text="Используете свой автомобиль столько, сколько необходимо"
            />
            <AdvantagePartnerItem
              icon="fal fa-oil-can"
              text="Проходите регламентное ТО автомобиля"
            />
            <AdvantagePartnerItem
              icon="fal fa-wrench"
              text="Осуществляете ремонт (не кузовной) по необходимости"
            />
            <AdvantagePartnerItem
              icon="fal fa-sack-dollar"
              text="Получаете пассивный доход"
            />

            <div class="advantages-clear"></div>
          </div>

          <div class="advantages-items-Mobile" v-if="tab_2 == 'three'">
            <client-only placeholder="Loading...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false,
                }"
              >
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-user-check"
                    text="Привлечение и проверка клиентов по нескольким десяткам критериев"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-satellite"
                    text="Круглосуточный контроль за перемещением автомобиля"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-gas-pump"
                    text="Заправка автомобиля, мойка снаружи и внутри, отслеживание состояния"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-route"
                    text="Перемещение автомобиля [доставка/постановка в более массовой точке/забор со штрафстоянки]"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-phone-volume"
                    text="Поддержка клиентов 24/7, прием платежей, оплата платных парковок и штрафов"
                  />
                </div>
              </agile>
            </client-only>
          </div>

          <div class="advantages-items-Mobile" v-if="tab_2 == 'four'">
            <client-only placeholder="Loading...">
              <agile
                :options="{
                  infinite: false,
                  navButtons: false,
                }"
              >
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fas fa-mobile-alt"
                    text="В приложении заказываете доставку своего авто или бронируете его на карте"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="far fa-steering-wheel"
                    text="Используете свой автомобиль столько, сколько необходимо"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-oil-can"
                    text="Проходите регламентное ТО автомобиля"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-wrench"
                    text="Осуществляете ремонт (не кузовной) по необходимости"
                  />
                </div>
                <div class="slide">
                  <AdvantagePartnerItem
                    icon="fal fa-sack-dollar"
                    text="Получаете пассивный доход"
                  />
                </div>
              </agile>
            </client-only>
          </div>
        </div>
      </div>
      <div
        class="howItWorks-buttonContainer"
        style="position: static; margin-top: 50px"
      >
        <a @click="connectAutoBottom" class="howItWorks-button">
          <i class="far fa-check-circle"></i> Подключить автомобиль
        </a>
      </div>
    </div>

    <!-- /BAR: ADVANTAGES -->

    <!-- 			   <a href="#test-popup" class="open-popup-link">Show inline popup</a> -->

    <!-- Popup itself -->

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <form
        class="callback-form"
        slot="body"
        v-on:submit.prevent="SendMessage()"
      >
        <div class="thanks-form alert-form" v-if="form.success">
          <div class="thanks-form-title">Спасибо!</div>
          <div class="thanks-form-text">
            Мы свяжемся с вами в ближайшее время!
          </div>
        </div>

        <div class="error-form alert-form" v-if="form.errors">
          <div class="thanks-form-title">Ошибка!</div>
          <div class="thanks-form-text">
            Попробуйте заполнить форму еще раз!
          </div>
        </div>

        <div class="form-group">
          <label>Город</label>
          <select name="city" class="form-control" v-model.trim="form.city">
            <option value="msk" >Москва</option>
            <option value="spb" >Санкт-Петербург</option>
            <option value="sochi" >Сочи</option>
            <option value="krd" >Краснодар</option>
            <option value="nn" >Нижний Новгород</option>
          </select>
        </div>

        <div class="form-group">
          <label>Имя</label>
          <input
            type="text"
            name="firstname"
            class="form-control"
            required
            v-model.trim="form.firstname"
          />
        </div>

        <div class="form-group">
          <label>Фамилия</label>
          <input
            type="text"
            name="lastname"
            class="form-control"
            required
            v-model.trim="form.lastname"
          />
        </div>

        <div class="form-group">
          <label>Телефон</label>
          <the-mask
            name="phone"
            :mask="['+7 (###) ###-##-##']"
            placeholder="+7 (999) 999-99-99"
            class="phone_number form-control"
            required
            v-model="form.phone"
          />
        </div>

        <!-- <div class="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            class="form-control"
            required
            v-model.trim="form.email"
          />
        </div> -->

        <div class="form-group">
          <label>Марка и модель автомобиля</label>
          <input
            type="text"
            name="auto"
            class="form-control"
            required
            v-model.trim="form.auto"
          />
        </div>

        <div class="form-group">
          <label>Год выпуска</label>
          <input
            type="text"
            name="year"
            class="form-control"
            required
            v-model.trim="form.year"
          />
        </div>

        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>

      <h3 slot="header">Подключить автомобиль</h3>
    </Modal>

    <!-- /BAR: HOT IT WORKS -->
  </main>
  <!-- /CONTENT -->
</template>


<script>
import CarInvest from "/components/CarInvest.vue";
import Modal from "/components/Modal.vue";
import { TheMask, mask } from "vue-the-mask";
import AdvantagePartnerItem from "/components/AdvantagePartnerItem.vue";
import SchemeItem from "/components/SchemeItem.vue";
export default {
  head: {
    title: "VORON – Автомобиль как источник дохода",
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
  data() {
    return {
      cars: [],
      // cars: [
      //   {
      //     title: "640i xDrive",
      //     brand: "BMW",
      //     year: "2014",
      //     income: 110700,
      //     percent: 63,
      //     price: 2100000,
      //     image: "/images/car_model/640d.png",
      //   },
      //   {
      //     title: "E200",
      //     brand: "MERCEDES-BENZ",
      //     year: "2018",
      //     income: 80950,
      //     percent: 43,
      //     price: 2250000,
      //     image: "/images/car_model/e200.png",
      //   },
      //   {
      //     title: "SLK250",
      //     brand: "MERCEDES-BENZ",
      //     year: "2013",
      //     income: 77100,
      //     percent: 47,
      //     price: 1970000,
      //     image: "/images/car_model/slk.png",
      //   },
      //   {
      //     title: "TT Quattro",
      //     brand: "AUDI",
      //     year: "2015",
      //     income: 101150,
      //     percent: 50,
      //     price: 2450000,
      //     image: "/images/car_model/auditt.png",
      //   },
      //   {
      //     title: "G500",
      //     brand: "MERCEDES-BENZ",
      //     year: "2008",
      //     income: 113500,
      //     percent: 57,
      //     price: 2400000,
      //     image: "/images/car_model/gelik.png",
      //   },
      //   {
      //     title: "Evoque",
      //     brand: "Range Rover",
      //     year: "2012",
      //     income: 70800,
      //     percent: 58,
      //     price: 1470000,
      //     image: "/images/car_model/evoque.png",
      //   },
      // ],
      showModal: false,
      tab: "one",
      tab_2: "three",
      form: {
        firstname: "",
        lastname: "",
        phone: "",
        // email: "",
        auto: "",
        year: "",
        city: "msk",
        source: "sale_black",
        success: false,
        errors: false,
      },
    };
  },
  components: {
    CarInvest,
    Modal,
    TheMask,
    AdvantagePartnerItem,
    SchemeItem,
  },
  directives: { mask },
  async asyncData({ context, $axios }) {
    let response = await $axios.get(`/api/getauto?invest=1`);
    return { cars: response.data["cars"], brands: response.data["brands"] };
  },

  mounted() {
    if (typeof(this.$route.query.form) !== "undefined" && this.$route.query.form !== null && this.$route.query.form == 'open') {
      this.showModal = true
    }
  },

  methods: {

    connectAutoTop() {
      this.$yandexMetrika.reachGoal('plug_car_1');
      this.showModal = true;
    },

    connectAutoBottom() {
      this.$yandexMetrika.reachGoal('plug_car_2');
      this.showModal = true;
    },

    async SendMessage() {
      if (
        this.form.lastname != "" &&
        this.form.firstname != "" &&
        this.form.phone != "" &&
        // this.form.email != "" &&
        this.form.auto != "" &&
        this.form.year != "" &&
        this.form.city != ""
      ) {
        // console.log("отправим");

        this.$yandexMetrika.reachGoal('submit_connect');
        // this.$fb.track('Lead')

        var response = await this.$axios.$post(
            "/api/voron_black_mail/",
            // this.form
            {
              token: "Voron.black_sfewta35",
              lastname: this.form.lastname,
              firstname: this.form.firstname,
              phone: this.form.phone,
              // email: this.form.email,
              auto: this.form.auto,
              year: this.form.year,
              city: this.form.city,
              source: 'black',
              utm: this.$utm(false),
            }
        );

        // console.log(this.form);
        // console.log(response);

        if (response.result) {
          this.form.success = true;
          this.form.errors = false;
          this.form.lastname = "";
          this.form.firstname = "";
          this.form.phone = "";
          // this.form.email = "";
          this.form.auto = "";
          this.form.year = "";
          this.form.city = "";
        } else {
          this.form.success = false;
          this.form.errors = true;
        }
      } else {
        this.form.success = false;
        this.form.errors = true;
      }
    },
  },
};
</script>

<style>
  a.carsList-itemContent {
    cursor: default;
  }
</style>
