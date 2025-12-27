<template>
  <!-- CONTENT -->
  <main class="pageContent" itemprop="mainContentOfPage">
    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="body">
        <div class="thanks-form alert-form" v-if="form.success">
          <div class="thanks-form-title">Спасибо!</div>
          <div class="thanks-form-text">
            Мы направили вам SMS-сообщение с ссылкой на завершение регистрации.
          </div>
        </div>

        <div class="error-form alert-form" v-if="form.errors">
          <div class="thanks-form-title">Ошибка!</div>
          <div class="thanks-form-text">
            Попробуйте заполнить форму еще раз!
          </div>
        </div>

        <div class="main_photo_div" v-if="!form.success">
          <img
              class="main_photo"
              :src="`https://cdn.voron.io/images/${auto.img}`"
              alt=""
          />
        </div>

        <form
            v-if="!form.success"
            class="callback-form"
            v-on:submit.prevent="SendMessage()"
        >
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

          <div class="customCheckbox">
            <input
                type="checkbox"
                id="agreeTerms"
                v-model="form.agreeTerms"
                required
            />
            <label for="agreeTerms">Даю согласие на <a href="https://voron.store/legal/personal-data/" target="_blank">обработку персональных данных</a></label>
          </div>

          <button type="submit" class="btn btn-primary">Отправить заявку</button>
        </form>
      </div>

      <h3 slot="header">Заявка на {{ auto.title }}</h3>
    </Modal>

    <!-- BAR: MAIN SECTION -->
    <div class="mainSection mainSection-IndexPage">
      <div class="mainSection-background">
        <video
            playsinline
            muted
            autoplay
            :poster="[
            auto.video
              ? ''
              : `https://cdn.voron.io/images/gallery/${auto.tid}/${auto.photos[0]}@3x.jpg`,
          ]"
            class="mainSection-video"
        >
          <source
              v-if="auto.video"
              :src="`https://cdn.voron.io/videos/cars/${auto.video}`"
              type="video/mp4"
          />
        </video>
      </div>
      <div class="mainSection-content">
        <div class="pageSection-content">
          <h1 class="mainSection-title">
            <template v-if="auto && typeof auto.title === 'string'">
              <template v-if="auto.title.includes(auto.brand.title)">{{
                  auto.title
                }}</template>
              <template v-else
              >{{ auto.brand.title }} {{ auto.title }}</template
              >
            </template>
            <div class="mainSection-subTitle">
              пользуйтесь сегодня, постепенно выплачивая стоимость
            </div>
          </h1>

          <h2 class="mainSection-subTitle" v-html="auto.description">
            <!-- {{ auto.description }}` -->
          </h2>

          <div class="mainSection-subTitle-NoMobile"></div>

          <div v-if="auto.is_bought_out !== 1" class="advantages-link-container">
            <a @click="showModal = true" class="advantages-link"
            >Заявка на выкуп</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- /BAR: MAIN SECTION -->

    <!-- BAR: CARS PRESENTATION -->
    <div class="carsPresent">
      <div class="pageSection-content">
        <!-- CARS LIST BAR -->
        <div class="carsList">
          <CarModel :car="auto" :link="false" :carousel="true" />

          <!-- Сетка тарифов выкупа -->
          <div v-if="auto.buyout_tariffs && auto.buyout_tariffs.length" class="buyout-tariffs-wrapper">
            <!-- <div class="buyout-tariffs-title">Тарифы аренды с выкупом:</div> -->
            <div class="buyout-tariffs-grid">
              <div v-for="(tariff, index) in auto.buyout_tariffs" :key="index" class="buyout-tariff-card">
                <div class="tariff-label">{{ tariff.label }}</div>
                <div class="tariff-payment">
                  <span class="payment-value">{{ tariff.payment }}</span>
                  <span class="payment-period">/ день</span>
                </div>
              </div>
            </div>
          </div>
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
        <!-- /CARS LIST BAR -->
      </div>
    </div>
    <!-- /BAR: CARS PRESENTATION -->

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
            style="position: static; margin-top: 50px; margin-bottom: 80px;"
        >
          <nuxt-link
              to="/delivery/"
              exact
              exact-active-class="active"
              class="howItWorks-button"
          ><i style="margin-right: 10px" class="fal fa-car-alt"></i>Подробнее о выкупе</nuxt-link>
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
import { TheMask, mask } from "vue-the-mask";

export default {
  head() {
    return {
      title: this.auto.title.includes(this.auto.brand.title)
          ? this.auto.title +
          ". VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп"
          : this.auto.brand.title +
          " " +
          this.auto.title +
          ". VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
              "аренда с выкупом, аренда с правом выкупа, каршеринг ворон,  VORON, аренда автотобиля, прокат автомобиля, аренда авто представительского класса, аренда авто в россии, кредит на автомобиль",
        },
        {
          hid: "description",
          name: "description",
          content:
              "VORON – Покупка авто через аренду с выкупом. Сначала тест-драйв, потом выкуп",
        },
      ],
    };
  },

  components: {
    CarModel,
    AdvantageItem,
    SchemeItem,
    BrandItem,
    Modal,
    TheMask,
  },
  data() {
    return {
      cars: [],
      brands: [],
      auto: {},
      showModal: false,
      form: {
        firstname: "",
        lastname: "",
        phone: "",
        success: false,
        errors: false,
      },
    };
  },
  directives: { mask },
  async asyncData({ context, $axios, params }) {
    let response = await $axios.get(`/api/getautobuyout?slug=${params.auto}`);
    return {
      cars: response.data["cars"],
      brands: response.data["brands"],
      auto: response.data["auto"],
    };
  },
  created() {
  },
  methods: {
    async SendMessage() {
      if (
          this.form.lastname != "" &&
          this.form.firstname != "" &&
          this.form.phone != "" &&
          this.form.agreeTerms
      ) {
        try {
          const config = {
            headers: {
              'X-API-TOKEN': 'Vb_Booking_s7K9pL3jR1'
            }
          };

          const payload = {
            auto_slug: this.$route.params.auto,
            lastName: this.form.lastname,
            firstName: this.form.firstname,
            phone: this.form.phone,
            source: this.$utm(false) || 'store',
          };

          const response = await this.$axios.$post("/api/booking_request", payload, config);

          if (response.success) {
            this.form.success = true;
            this.form.errors = false;
            this.form.lastname = "";
            this.form.firstname = "";
            this.form.phone = "";
            this.form.email = "";
            this.form.auto = "";
            this.form.year = "";
          } else {
            this.form.success = false;
            this.form.errors = true;
          }
        } catch (error) {
          console.error("Booking request failed:", error);
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

<style scoped>
.mainSection-title {
  font-weight: 700;
  color: #fff;
}
.mainSection-subTitle {
  color: #fff;
  font-size: 17px;
  line-height: 34x;
}

.carsList-item {
  width: 100%;
}

.main_photo_div {
  text-align: center;
  margin-top: -30px;
}

.main_photo {
  max-height: 150px;
  margin: 0 auto;
}

.customCheckbox {
  margin-bottom: 15px;
}

.customCheckbox input[type="checkbox"] {
  margin-right: 5px;
  -webkit-appearance: auto !important;
  appearance: auto !important;
}

.buyout-tariffs-wrapper {
  min-width: 300px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 25px;
  color: #fff;
}

.buyout-tariffs-title {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  color: #ffcc00;
  text-align: center;
}

.buyout-tariffs-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.buyout-tariff-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px 20px;
  flex: 1 1 calc(33.333% - 15px);
  min-width: 200px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
}

.buyout-tariff-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #ffcc00;
}

.tariff-label {
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}

.tariff-payment {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.payment-value {
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}

.payment-period {
  font-size: 12px;
  color: #666;
}

::v-deep .is-bought-out .carsList-itemHover {
  background: rgba(24, 24, 24, 0.5) !important;
}

@media (max-width: 1024px) {
  .buyout-tariff-card {
    flex: 1 1 calc(50% - 15px);
  }
}

@media (max-width: 600px) {
  .buyout-tariffs-wrapper {
    padding: 15px;
    margin: 20px 10px 0;
  }

  .buyout-tariffs-grid {
    flex-direction: column;
    align-items: stretch;
  }

  .buyout-tariff-card {
    flex: 1 1 auto;
    max-width: none;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 15px;
  }

  .tariff-label {
    margin-bottom: 0;
  }
}
</style>