<template>
  <!-- PAGE -->
  <div class="page">


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
              <!-- , [menuOpen ? 'pageHeader-menuBtn-Active' : ''], -->
          <!-- <div
            :class="[
              'pageHeader-menuBtn'
            ]"
            @click="menuOpen = !menuOpen"
          >
            <span class="pageHeader-menuBtnLine"></span>
          </div> -->

<!-- , [menuOpen ? 'sidebarMenu-Active' : ''] -->
          <div :class="['sidebarMenu']">
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
                        <nuxt-link
                          to="/connect/"
                          exact
                          exact-active-class="active"
                          >Подключить автомобиль</nuxt-link
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

          <a href="/start" class="pageHeader-logo"></a>
          <!-- <div class="pageHeader-phones">
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
          </div> -->
          <!-- <nav class="pageHeader-menu">
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
                <nuxt-link to="/connect/" exact exact-active-class="active"
                  ><span>Подключить авто</span></nuxt-link
                >
              </li>
            </ul>
          </nav> -->
        </div>
      </div>
      <!-- /HEADER -->

      <!-- <transition name="home"> -->
      <Nuxt />
      <!-- </transition> -->

    </div>
    <!-- /MAIN WRAPPER -->

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
    // } else {
    //   this.$store.commit("set_source", "start");
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
      if (city == 'nn') this.form.city = "Нижний Новгород";
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
            source: 'store',
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


  /* .pageHeader {
    position: absolute;

  } */

</style>
