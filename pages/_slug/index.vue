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
              с доступом со смартфона по технологии каршеринга
            </div>
          </h1>

          <h2 class="mainSection-subTitle">
            Бесконтактная аренда автомобилей бизнес-класса без надписей<br />
            <b>Срочная бесплатная доставка в указанное место</b>
          </h2>

          <div class="mainSection-subTitle-NoMobile"></div>

          <div class="advantages-link-container">
            <a
              :href="`https://app.voron.io/${$utm()}`"
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
        <div class="advantages-title">Сервис</div>

        <div
          class="advantages-items-container advantages-items-container-Active"
        >
          <div class="advantages-items">
            <AdvantageItem
              text="Разнообразный ассортимент бизнес и премиум класса"
              img="/images/app/phone01.png"
            />
            <AdvantageItem
              text="Комфортные и статусные авто на улицах города с доступом со смартфона"
              img="/images/app/phone02.png"
            />
            <AdvantageItem
              text="Авто без надписей. Поминутные, часовые и суточные тарифы"
              img="/images/app/phone03.png"
            />
            <AdvantageItem
              text="Бесплатная доставка прямо к вам для часовой поездки"
              img="/images/app/phone04.png"
            />
            <AdvantageItem
              text="Выбираете место на карте, и автомобиль через час ждет вас на парковке"
              img="/images/app/phone05.png"
            />

            <div class="advantages-clear"></div>
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
                  <AdvantageItem
                    text="Разнообразный ассортимент бизнес и премиум класса"
                    img="/images/app/phone01.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Комфортные и статусные авто на улицах города с доступом со смартфона"
                    img="/images/app/phone02.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Авто без надписей. Поминутные, часовые и суточные тарифы"
                    img="/images/app/phone03.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Бесплатная доставка прямо к вам для часовой поездки"
                    img="/images/app/phone04.png"
                  />
                </div>
                <div class="slide">
                  <AdvantageItem
                    text="Выбираете место на карте, и автомобиль через час ждет вас на парковке"
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
        <h2 id="chooseBrand" class="carsPresent-title-brands">БРЕНДЫ</h2>
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

        <!-- CARS LIST BAR -->
        <div class="carsList">
          <template v-for="(car, key) in cars" >
            <CarModel :key="key" v-if="car.slug" :car="car" />
          </template>
        </div>
        <div class="carsList">
          <div class="carsList-itemSubCaption">
            <em
              ><small
                >* Для отмены депозита необходимо совершить минимум 10 успешных
                поездок в сервисе. Поездка зачитывается, при условии, что вы
                находились в движении минимум 30 минут, не нарушали правила ПДД,
                не нанесли ущерб автомобилю и оплата за аренду производилась
                успешным списанием с привязанной банковской карты, а не
                погашением задолженности или из страхового депозита, подробнее тут → <a style="color: rgb(255, 204, 0);" target="_blank" href="https://voron.help/deposit/deposit" >voron.help</a></small
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
            text="Служба безопасности проверит ваши документы и активирует ваш аккаунт"
          />

          <SchemeItem
            title="Доставка / Бронь"
            icon="fal fa-route"
            text="Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"
          />

          <SchemeItem
            title="Аренда"
            icon="fal fa-car-alt"
            text="На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"
          />

          <SchemeItem
            title="Завершение"
            icon="fal fa-car-alt"
            text="Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен"
            decsription="При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"
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
                  text="Служба безопасности проверит ваши документы и активирует ваш аккаунт"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Доставка / Бронь"
                  icon="fal fa-route"
                  number="3"
                  text="Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку. Через короткое время автомобиль будет ждать вас на парковке. Или бронируете и забираете самостоятельно"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Аренда"
                  icon="fal fa-car-alt"
                  number="4"
                  text="На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы"
                />
              </div>
              <div class="slide">
                <SchemeItem
                  title="Завершение"
                  icon="fal fa-car-alt"
                  number="5"
                  text="Зона завершения аренды подсвечена в приложении зеленым цветом. После завершения можете нажать «Вернуть депозит», и в течение от 4 до 48 часов депозит будет автоматически возвращен"
                  decsription="При желании вы можете сразу не возвращать депозит, а использовать для следующих поездок"
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
