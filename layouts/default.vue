<template>
  <!-- PAGE -->
  <div class="page">

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModalCityVisible" @close="showModalCityVisible = false">
      <form
        class="callback-form"
        slot="body"
        v-on:submit.prevent="SendMessageCity()"
      >

        <div style="margin-bottom: 30px;">
          В данный момент мы в процессе работы над запуском нашего сервиса в <template v-if="city_modal == 'kzn'">Казани</template><template v-if="city_modal == 'spb'">Санкт-Петербурге</template><template v-if="city_modal == 'msc'">Москве</template><template v-if="city_modal == 'sochi'">Сочи</template><template v-if="city_modal == 'krd'">Краснодаре</template>.
          Если вы хотели бы воспользоваться сервисом в этом городе, то, пожалуйста, напишите нам об этом.
          Если у вас есть автомобиль в этом городе, то оставьте заявку тут -
          <a class="link-to-connect" target="_blank" :href="`https://voron.io/${$utm(true)}`" >Подключить автомобиль</a>
          <!-- <a class="link-to-connect" target="_blank" :href="`https://voron.io/invest/${$utm(true)}`" >Авто как инвестиция</a> -->
          <!-- <span class="link-to-connect" @click="to_connect">Подключить автомобиль</span> -->
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

        <button type="submit" class="btn btn-primary">Отправить</button>
      </form>

      <h3 slot="header">
        <template v-if="city_modal == 'kzn'">Казань</template><template v-if="city_modal == 'spb'">Санкт-Петербург</template><template v-if="city_modal == 'msc'">Москва</template><template v-if="city_modal == 'sochi'">Сочи</template><template v-if="city_modal == 'krd'">Краснодар</template>
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
                          >Срочная доставка</nuxt-link
                        >
                      </li>
                      <li>
                        <!-- <nuxt-link
                          to="/connect/"
                          exact
                          exact-active-class="active"
                          >Подключить автомобиль</nuxt-link
                        > -->

                        <a target="_blank" :href="`https://voron.io/invest/${$utm(true)}`" >Авто как инвестиция</a>
                      </li>
                      <li>
                        <a :href="`https://voron.io/eco/${$utm(true)}`"
                          ><span>Экосистема</span></a
                        >
                      </li>
                      <li>
                        <a :href="`https://voron.io/${$utm(true)}`"
                        ><span>Платформа</span></a
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
            <!--   -->
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
              <!-- <li>
                <a :href="`https://voron.io/${$utm(true)}`"
                  ><span>Экосистема</span></a
                >
              </li> -->
              <li>
                <!-- <nuxt-link to="/connect/" exact exact-active-class="active"
                  ><span>Подключить авто</span></nuxt-link
                > -->
                <a target="_blank" :href="`https://voron.io/invest/${$utm(true)}`" >Инвестиция в авто</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- /HEADER -->

      <!-- <transition name="home"> -->
      <Nuxt />
      <!-- </transition> -->

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
            <a  @click="showModalCity('sochi')" >Сочи</a>
            <!-- class="city_active" -->
            <a @click="showModalCity('krd')">Краснодар</a>
            <a @click="showModalCity('kzn')">Казань</a>
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
                    >Срочная доставка</nuxt-link
                  >
                </li>
                <!-- <li>
                  <a :href="`https://voron.io/${$utm(true)}`"
                    ><span>Экосистема</span></a
                  >
                </li> -->

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

            <div class="pageFooter-title" >Владельцу авто</div>
            <nav class="pageFooter-menu">
              <ul>
                <li>
                <!-- <nuxt-link to="/connect/" exact exact-active-class="active"
                  >Подключить автомобиль</nuxt-link
                > -->
                  <a target="_blank" :href="`https://voron.io/eco/${$utm(true)}`" >Подключить автомобиль</a>
                </li>
                <li>
                  <a href="https://i.voron.io" target="_blank">Личный кабинет</a>
                </li>
              </ul>
            </nav>

            <div class="pageFooter-title" style="margin-top: 25px;">Инвестору</div>
            <nav class="pageFooter-menu">
              <ul>
                <li>
                <!-- <nuxt-link to="/connect/" exact exact-active-class="active"
                  >Подключить автомобиль</nuxt-link
                > -->
                  <a target="_blank" :href="`https://voron.io/invest/${$utm(true)}`" >Авто как инвестиция</a>
                </li>
              </ul>
            </nav>


            <div class="pageFooter-title" style="margin-top: 25px;">Поддержка</div>
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
              <!-- <a
                class="pageFooter-supportLink pageFooter-supportLink-Email"
                href="mailto:i@voron.io"
                >i@voron.io</a
              > -->
            </div>
          </div>
          <div id="appstore" class="pageFooter-naviCol">
            <div class="pageFooter-title">Приложение</div>

            <div class="pageFooter-appsLinks">

              <!-- <a
                style="color: #fff; padding-left: 18px;"
                target="_blank"
                :href="`https://voron.app/${$store.state.source}`"
                class="pageFooter-appsLink"
                >
                  <img style="max-height: 28px;" src="/images/logo_voron.png" />
                </a> -->

              <!-- ${$store.state.source} -->
              <a
                v-if="os == 'iOS' || os == 'unknown'"
                style="color: #fff"
                target="_blank"
                :href="`https://voron.app/${$utm()}`"
                class="pageFooter-appsLink pageFooter-appsLink-Apple"
                ><span class="pageFooter-appsLinkText"></span
              ></a>
              <a
                v-if="os == 'Android' || os == 'unknown'"
                style="color: #fff"
                target="_blank"
                :href="`https://voron.app/${$utm()}`"
                class="
                  pageFooter-appsLink
                  pageFooter-appsLink-Google
                  pageFooter-appsLink-Current
                "
                onclick2="Everentcar.Service.goGoogleMarketPage();"
                ><span class="pageFooter-appsLinkText"></span
              ></a>
            </div>
            <div class="pageFooter-publicLinks  footer-social-block__">

              <a
                class="pageFooter-publicLink pageFooter-publicLink-Instagram"
                target="_blank"
                href="https://instagram.com/voron.space"
              >
              </a>

              <a class="pageFooter-publicLink footer-social-icon" href="https://vk.com/voron.space" target="_blank" >
                <i class="fab fa-vk"></i>
              </a>

<!--              <a-->
<!--                class="pageFooter-publicLink pageFooter-publicLink-FB"-->
<!--                target="_blank"-->
<!--                href="https://facebook.com/voron.space"-->
<!--              ></a>-->

              <a class="pageFooter-publicLink footer-social-icon" href="https://t.me/voron_space" target="_blank" >
                <i class="fab fa-telegram"></i>
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
          <nuxt-link
            to="/legal/privacy-policy/"
            exact
            exact-active-class="active"
            >Политика конфиденциальности</nuxt-link
          >
          <nuxt-link to="/legal/sign-act/" exact exact-active-class="active"
            >Акт приема-передачи</nuxt-link
          >
        </div>
      </div>
    </footer>
    <!-- /FOOTER -->
  </div>
  <!-- /PAGE -->

  <!-- </div>
  </div> -->
</template>

<script>
import { TheMask, mask } from "vue-the-mask";
export default {
  data: () => ({
    // width: 0,
    os: "",
    classes: "",
    menuOpen: false,
    showModalCityVisible: false,
    form: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      comment: "",
      city: "",
      success: false,
      errors: false,
    },
    city_modal: 'msk'
  }),
  components: {
    TheMask,
  },
  mounted() {
    this.os = this.getMobileOperatingSystem();
    console.log(this.os);
  },
  created() {
    // var source = this.$route.query.source;
    // if (typeof source !== "undefined" && source != null) {
    //   console.log('source', source)
    //   this.$store.commit("set_source", source);
    // }
    this.$router.beforeEach((to, from, next) => {
      this.menuOpen = false;
      next((vm) => {
        // console.log("prev rout is: " + vm.prevRoute);
      });
    });
  },
  methods: {

    to_connect () {
      this.showModalCityVisible = false;
      this.$router.push('/connect');
    },

    showModalCity(city) {
      this.showModalCityVisible = true;
      this.city_modal = city;

      if (city == 'msk') this.form.city = "Москва";
      if (city == 'spb') this.form.city = "Санкт-Петербург";
      if (city == 'krd') this.form.city = "Краснодар";
      if (city == 'sochi') this.form.city = "Сочи";
      if (city == 'kzn') this.form.city = "Казань";
    },

    async SendMessageCity() {
      if (
        this.form.lastname != "" &&
        this.form.firstname != "" &&
        this.form.phone != "" &&
        this.form.email != "" &&
        this.form.city != ""
      ) {
        // console.log("отправим");

        var response = await this.$axios.$post(
          "/api/voron_black_mail_city/",
          // this.form
          {
            token: "Voron.black_sfewta35",
            lastname: this.form.lastname,
            firstname: this.form.firstname,
            phone: this.form.phone,
            email: this.form.email,
            comment: this.form.comment,
            city: this.form.city,
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
          this.form.email = "";
          this.form.comment = "";
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

    menu() {
      this.menuOpen = !this.menuOpen;
    },

    getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
        return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }

      return "unknown";
    },
  },
};
</script>


<style scoped>
  .list_cities {
    /* display: flex; */
    /* flex-direction: row; */
    margin-bottom: 40px;
  }
  .list_cities a {
    margin-right: 35px;
    color: #ABABAB;
    height: 36px;
    font-size: 15px;
    line-height: 36px;
    transition: color .3s;
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
    color: #0000FF;
    text-decoration: underline;
    cursor: pointer;
  }
  .link-to-connect:hover,
  .link-to-connect:active,
  .link-to-connect:focus {
    text-decoration: none;
  }

</style>
