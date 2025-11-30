<template>
  <!-- PAGE -->
  <div class="page">
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

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModalCityVisible" @close="showModalCityVisible = false">
      <form
        class="callback-form"
        slot="body"
        v-on:submit.prevent="SendMessageCity()"
      >
        <div style="margin-bottom: 30px">
          В данный момент мы в процессе работы над запуском нашего сервиса в
          <template v-if="city_modal == 'nn'">Нижний Новгород</template
          ><template v-if="city_modal == 'spb'">Санкт-Петербурге</template
        ><template v-if="city_modal == 'msc'">Москве</template
        ><template v-if="city_modal == 'sochi'">Сочи</template
        ><template v-if="city_modal == 'krd'">Краснодаре</template>. Если вы
          хотели бы воспользоваться сервисом в этом городе, то, пожалуйста,
          напишите нам об этом. Если у вас есть автомобиль в этом городе, то
          оставьте заявку тут -
          <a
            class="link-to-connect"
            target="_blank"
            :href="`https://voron.pro/${$utm(true)}`"
          >Подключить автомобиль</a
          >
        </div>

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

        <div class="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            class="form-control"
            required
            v-model.trim="form.email"
          />
        </div>

        <div class="form-group">
          <label>Комментарий</label>
          <input
            type="text"
            name="auto"
            class="form-control"
            v-model.trim="form.comment"
          />
        </div>

        <div class="customCheckbox">
          <input
            type="checkbox"
            id="agreeTermsCity"
            v-model="form.agreeTerms"
            required
          />
          <label for="agreeTermsCity">Даю согласие на <a href="https://voron.space/legal/personal-data/" target="_blank">обработку персональных данных</a></label>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="!form.agreeTerms">Отправить</button>
      </form>

      <h3 slot="header">
        <template v-if="city_modal == 'nn'">Нижний Новгород</template
        ><template v-if="city_modal == 'spb'">Санкт-Петербург</template
      ><template v-if="city_modal == 'msc'">Москва</template
      ><template v-if="city_modal == 'sochi'">Сочи</template
      ><template v-if="city_modal == 'krd'">Краснодар</template>
      </h3>
    </Modal>

    <!-- MAIN WRAPPER -->
    <div class="pageWrapper">
      <!-- HEADER -->
      <div
        :class="[
          'pageHeader',
          [
            $route.name == 'index' ||
            $route.name == 'connect' ||
            $route.name == 'slug' ||
            $route.name == 'slug-auto'
              ? 'pageHeader-Transparent'
              : '',
          ],
        ]"
        itemscope
        itemtype="http://schema.org/WPHeader"
      >
        <div class="pageHeader-content">
          <div
            :class="[
              'pageHeader-menuBtn',
              [menuOpen ? 'pageHeader-menuBtn-Active' : ''],
            ]"
            @click="menuOpen = !menuOpen"
          >
            <span class="pageHeader-menuBtnLine"></span>
          </div>

          <div :class="['sidebarMenu', [menuOpen ? 'sidebarMenu-Active' : '']]">
            <div class="sidebarMenu-side"></div>
            <div class="sidebarMenu-side sidebarMenu-side-Right"></div>
            <div class="sidebarMenu-wrapper">
              <div
                class="sidebarMenu-scroller"
                @click.self="menuOpen = !menuOpen"
              >
                <div class="sidebarMenu-content">
                  <nav class="sidebarMenu-main">
                    <ul>
                      <li>
                        <nuxt-link to="/" exact exact-active-class="active"
                        >Каршеринг</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link to="/delivery/" exact-active-class="active"
                        >Доставка за 30 мин</nuxt-link
                        >
                      </li>
                      <li>
                        <a
                          target="_blank"
                          :href="`https://voron.plus/${$utm(true)}`"
                        >Аренда с выкупом</a
                        >
                      </li>
                      <li>
                        <a
                          target="_blank"
                          :href="`https://voron.club/${$utm(true)}`"
                        >Клуб автопрокатов</a
                        >
                      </li>
                      <li>
                        <a
                          target="_blank"
                          :href="`https://voron.black/${$utm(true)}`"
                        >Поездки с водителем</a
                        >
                      </li>
                      <li>
                        <a
                          target="_blank"
                          :href="`https://voron.capital/${$utm(true)}`"
                        >Авто как инвестиция</a
                        >
                      </li>
                    </ul>
                  </nav>
                  <nav class="sidebarMenu-other">
                    <ul>
                      <li>
                        <a href="https://voron.help">База знаний и правил</a>
                      </li>
                      <li>
                        <nuxt-link
                          to="/deposit/"
                          exact
                          exact-active-class="active"
                        >Страховой депозит</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/about/"
                          exact
                          exact-active-class="active"
                        >О сервисе</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/legal/agreement/"
                          exact
                          exact-active-class="active"
                        >Договор-оферта</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          to="/contact/"
                          exact
                          exact-active-class="active"
                        >Контакты</nuxt-link
                        >
                      </li>
                    </ul>
                  </nav>
                  <div class="sidebarMenu-phones">
                    <a
                      href="tel:+7 800 555 06 79"
                      class="sidebarMenu-phonesLink sidebarMenu-phonesLink-RU"
                    >8 800 555 06 79</a
                    >
                  </div>
                </div>
                <div class="sidebarMenu-scrollerBar-wrapper">
                  <div
                    class="sidebarMenu-scrollerBar"
                    style="height: 0px"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <a href="/" class="pageHeader-logo"></a>
          <div class="pageHeader-phones">
            <a class="pageHeader-phonesLink" href="tel:+7 800 555 06 79"
            >8 800 555 06 79</a
            >
            <div class="pageHeader-phonesListContainer">
              <nav class="pageHeader-phonesList">
                <ul>
                  <li data-tel="8 800 555 06 79">Россия</li>
                </ul>
              </nav>
            </div>
          </div>
          <nav class="pageHeader-menu">
            <ul>
              <li>
                <nuxt-link to="/" exact exact-active-class="active"
                ><span>Каршеринг</span></nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/delivery/" exact exact-active-class="active"
                ><span>Доставка</span></nuxt-link
                >
              </li>
              <li>
                <a
                  target="_blank"
                  :href="`https://voron.capital/${$utm(true)}`"
                >Инвестиция в авто</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- /HEADER -->

      <Nuxt />

      <div class="pageFooter-Protector"></div>
    </div>
    <!-- /MAIN WRAPPER -->
    <!-- FOOTER -->
    <footer class="pageFooter" itemscope itemtype="http://schema.org/WPFooter">
      <div class="pageFooter-content">
        <div class="">
          <div class="pageFooter-title">Города</div>
          <div class="list_cities">
            <a class="city_active">Москва</a>
            <a @click="showModalCity('spb')">Санкт-Петербург</a>
            <a @click="showModalCity('sochi')">Сочи</a>
            <a @click="showModalCity('krd')">Краснодар</a>
            <a @click="showModalCity('nn')">Нижний Новгород</a>
          </div>
        </div>

        <div class="pageFooter-navi">
          <div class="pageFooter-naviCol">
            <div class="pageFooter-title">Пользователю</div>
            <nav class="pageFooter-menu">
              <ul>
                <li>
                  <nuxt-link to="/" exact exact-active-class="active"
                  >Каршеринг</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/delivery/" exact exact-active-class="active"
                  >Доставка за 30 мин</nuxt-link
                  >
                </li>
                <li>
                  <a href="https://voron.help">База знаний и правил</a>
                </li>
                <li>
                  <nuxt-link to="/deposit/" exact exact-active-class="active"
                  >Страховой депозит</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/about/" exact exact-active-class="active"
                  >О сервисе</nuxt-link
                  >
                </li>
                <li>
                  <a href="https://voron.io">О компании</a>
                </li>
                <li>
                  <nuxt-link to="/contact/" exact exact-active-class="active"
                  >Контакты</nuxt-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="pageFooter-naviCol">
            <div class="pageFooter-title">Владельцу авто</div>
            <nav class="pageFooter-menu">
              <ul>
                <li>
                  <a
                    target="_blank"
                    :href="`https://voron.pro/${$utm(true)}`"
                  >Подключить автомобиль</a
                  >
                </li>
                <li>
                  <a href="https://i.voron.io" target="_blank"
                  >Личный кабинет</a
                  >
                </li>
              </ul>
            </nav>

            <div class="pageFooter-title" style="margin-top: 25px">
              Инвестору
            </div>
            <nav class="pageFooter-menu">
              <ul>
                <li>
                  <a
                    target="_blank"
                    :href="`https://voron.capital/${$utm(true)}`"
                  >Авто как инвестиция</a
                  >
                </li>
              </ul>
            </nav>

            <div class="pageFooter-title" style="margin-top: 25px">
              Поддержка
            </div>
            <div class="pageFooter-support">
              <a
                href="tel:+7 800 555 06 79"
                class="
                  pageFooter-supportLink
                  pageFooter-supportLinkFlag
                  pageFooter-supportLinkFlag-RU
                "
              >8 800 555 06 79</a
              >
            </div>
          </div>
          <div id="appstore" class="pageFooter-naviCol">
            <div class="pageFooter-title">Приложение</div>
            <div class="pageFooter-appsLinks">
              <a
                v-if="
                  ($device && ($device.os === 'iOS' || $device.os === 'MacOS')) ||
                  ($device && ($device.os === 'unknown' || $device.isDesktop))
                "
                style="color: #fff"
                target="_blank"
                :href="appInstallUrlForOs('iOS')"
                @click.prevent="handleAppInstallClick('iOS')"
                class="pageFooter-appsLink pageFooter-appsLink-Apple"
              ><span class="pageFooter-appsLinkText"></span
              ></a>
              <a
                v-if="
                  ($device && $device.os === 'Android') ||
                  ($device && ($device.os === 'unknown' || $device.isDesktop))
                "
                style="color: #fff"
                target="_blank"
                :href="appInstallUrlForOs('Android')"
                @click.prevent="handleAppInstallClick('Android')"
                class="
                  pageFooter-appsLink
                  pageFooter-appsLink-Google
                  pageFooter-appsLink-Current
                "
              ><span class="pageFooter-appsLinkText"></span
              ></a>
            </div>
            <div class="pageFooter-publicLinks footer-social-block__">
              <a
                class="pageFooter-publicLink pageFooter-publicLink-Instagram"
                target="_blank"
                href="https://instagram.com/voron.space"
              >
              </a>
              <a
                class="pageFooter-publicLink footer-social-icon"
                href="https://vk.com/voron.space"
                target="_blank"
              >
                <i class="fab fa-vk"></i>
              </a>
              <a
                class="pageFooter-publicLink footer-social-icon"
                href="https://t.me/voron_space"
                target="_blank"
              >
                <i class="fab fa-telegram"></i>
              </a>
              <a
                class="pageFooter-publicLink footer-social-icon"
                href="https://www.youtube.com/@voronspace"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="pageFooter-infoLinks">
          <nuxt-link to="/legal/agreement/" exact exact-active-class="active"
          >Договор-оферта сервиса VORON</nuxt-link
          >
          <nuxt-link
            to="/legal/personal-data/"
            exact
            exact-active-class="active"
          >Обработка персональных данных</nuxt-link
          >
          <nuxt-link to="/legal/sign-act/" exact exact-active-class="active"
          >Акт приема-передачи</nuxt-link
          >
        </div>
      </div>
    </footer>
    <!-- /FOOTER -->
    <img :src="trackingPixelUrl" width="1" height="1" alt="" />
  </div>
  <!-- /PAGE -->
</template>

<script>
import { TheMask, mask } from "vue-the-mask";
import Modal from "/components/Modal.vue"; // Импорт компонента Modal

export default {
  components: {
    TheMask,
    Modal, // Регистрация компонента Modal
  },
  data: () => ({
    menuOpen: false,
    showModalCityVisible: false,
    form: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      comment: "",
      city: "",
      agreeTerms: false,
      success: false,
      errors: false,
    },
    city_modal: "msk",
    showQrModal: false, // Для управления видимостью QR модального окна
    qrCodeUrl: "", // URL для изображения QR-кода
    appInstallUrl: "", // URL для установки приложения (для текста под QR)
  }),
  computed: {
    trackingPixelUrl() {
      const source = this.$utm(false);
      return `https://voron.app/pixel.php?source=${source}`;
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.menuOpen = false;
      next();
    });
  },
  methods: {
    to_connect() {
      this.showModalCityVisible = false;
      this.$router.push("/connect");
    },
    showModalCity(city) {
      this.showModalCityVisible = true;
      this.city_modal = city;
      this.form.agreeTerms = false; // Сбрасываем чекбокс при открытии

      if (city == "msk") this.form.city = "Москва";
      if (city == "spb") this.form.city = "Санкт-Петербург";
      if (city == "krd") this.form.city = "Краснодар";
      if (city == "sochi") this.form.city = "Сочи";
      if (city == "nn") this.form.city = "Нижний Новгород";
    },
    async SendMessageCity() {
      if (
        this.form.lastname != "" &&
        this.form.firstname != "" &&
        this.form.phone != "" &&
        this.form.email != "" &&
        this.form.city != "" &&
        this.form.agreeTerms
      ) {
        var response = await this.$axios.$post(
          "/api/voron_black_mail_city/",
          {
            token: "voron.space_sfewta35",
            lastname: this.form.lastname,
            firstname: this.form.firstname,
            phone: this.form.phone,
            email: this.form.email,
            comment: this.form.comment,
            city: this.form.city,
            utm: this.$utm(false),
          }
        );
        if (response.result) {
          this.form.success = true;
          this.form.errors = false;
          this.form.lastname = "";
          this.form.firstname = "";
          this.form.phone = "";
          this.form.email = "";
          this.form.comment = "";
          // this.form.city = ""; // Не сбрасываем город, если модалка еще открыта
          this.form.agreeTerms = false;
        } else {
          this.form.success = false;
          this.form.errors = true;
        }
      } else {
        this.form.success = false;
        this.form.errors = true;
      }
    },
    menu() {
      this.menuOpen = !this.menuOpen;
    },

    // --- Методы для QR-кода ---
    generateQrUrl(targetUrl) {
      return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(targetUrl)}&size=330x330&qzone=1&format=png`;
    },
    appInstallUrlForOs(targetOs) {
      // targetOs здесь для единообразия, т.к. ссылка на voron.app общая
      return `https://voron.app/${this.$utm()}`;
    },
    handleAppInstallClick(targetOs) {
      const baseAppUrl = `https://voron.app/${this.$utm()}`;
      this.appInstallUrl = baseAppUrl; // Сохраняем для отображения в модалке

      if (this.$device && this.$device.isDesktop) {
        console.log('[Layout] Desktop device detected. Showing QR modal.');
        this.qrCodeUrl = this.generateQrUrl(baseAppUrl);
        this.showQrModal = true;
      } else {
        console.log(`[Layout] Mobile device (${this.$device ? this.$device.os : 'unknown'}) detected. Redirecting to app store.`);
        window.location.href = baseAppUrl;
      }
    },
  },
};
</script>

<style scoped>
.list_cities {
  margin-bottom: 40px;
}
.list_cities a {
  margin-right: 35px;
  color: #ababab;
  height: 36px;
  font-size: 15px;
  line-height: 36px;
  transition: color 0.3s;
  display: inline-block;
}
.list_cities a:hover,
.list_cities a:focus,
.list_cities a:active {
  color: #ffcc00;
}
.city_active {
  color: #ffcc00 !important;
}
.link-to-connect {
  color: #0000ff;
  text-decoration: underline;
  cursor: pointer;
}
.link-to-connect:hover,
.link-to-connect:active,
.link-to-connect:focus {
  text-decoration: none;
}
.customCheckbox {
  margin-bottom: 15px;
}
.customCheckbox input[type="checkbox"] {
  margin-right: 5px;
  -webkit-appearance: auto !important;
  appearance: auto !important;
}
.btn-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>
