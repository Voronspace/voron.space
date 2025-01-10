<template>
  <main class="pageContent">
    <div class="pageSection">
      <div class="pageSection-content">
        <h1 class="pageSection-title">Контакты</h1>

        <div class="contactsPage">
          <div class="contactsPage-table">
            <div class="contactsPage-tableCell">
              <div class="pageSection-block">
                <h2 class="contactsPage-h2">Поддержка</h2>

                <div class="contactsPage-table">
                  <div class="contactsPage-tableCell" style="padding-left: 0;" >
                    <!-- <div class="contactsPage-text">Россия</div> -->
                    <a class="contactsPage-link" href="tel:+88005550679">
                      8 800 555 06 79
                    </a>
                    <div class="contactsPage-text">Круглосуточно</div>
                  </div>
                </div>

                <h2 class="contactsPage-h2">ЦЕНТРАЛЬНЫЙ ОФИС</h2>
                <div class="contactsPage-table">
                  <div
                    class="contactsPage-tableCell contactsPage-tableCell-NPB" style="padding-left: 0;"
                  >
                    <!-- <h3 class="contactsPage-h3">Россия</h3> -->

                    <address class="contactsPage-address" style="margin-top: 0;">
                      г. Москва, ул. Ленинская Слобода, д.19
                      <br />
                      БЦ "Омега Плаза"
                    </address>
                  </div>
                </div>

                <h2 class="contactsPage-h2">ГОРОДА</h2>
                <div class="contactsPage-table">
                  <div
                    class="contactsPage-tableCell contactsPage-tableCell-NPB" style="padding-left: 0;"
                  >

                    <span class="city-item">Москва</span>
                    <span class="city-item city-no-active">Санкт-Петербург</span>
                    <span class="city-item">Сочи</span>
                    <span class="city-item city-no-active">Краснодар</span>
                    <span class="city-item city-no-active">Казань</span>

                  </div>
                </div>


              </div>
            </div>
            <div class="contactsPage-tableCell">
              <div class="pageSection-block">
                <h2 class="contactsPage-h2">Обратная связь</h2>

                <div class="contactsPage-table">
                  <div class="contactsPage-tableCell">
                    <div class="contactsPage-text">Напишите на почту</div>
                    <a class="contactsPage-link" href="mailto:i@voron.io">
                      i@voron.io
                    </a>
                    <div class="contactsPage-text">
                      или заполните форму, и мы вам обязательно ответим
                    </div>
                  </div>
                  <div class="contactsPage-tableCell"></div>
                </div>

                <form
                  class="contactsPage-form"
                  v-on:submit.prevent="SendMessage()"
                >
                  <div class="customTextInput">
                    <input
                      class="customTextInput-input"
                      name="contact_name"
                      autocomplete="off"
                      value=""
                      type="text"
                      placeholder="Имя"
                      v-model="form.name"
                    />
                  </div>
                  <div class="contactsPage-table">
                    <div class="contactsPage-tableCell">
                      <div class="customTextInput">
                        <the-mask
                          name="contact_phone"
                          :mask="['+7 (###) ###-##-##']"
                          placeholder_="+7 (999) 999-99-99"
                          placeholder="Телефон"
                          class="customTextInput-input"
                          required
                          v-model="form.phone"
                        />
                      </div>
                    </div>
                    <div class="contactsPage-tableCell">
                      <div class="customTextInput">
                        <input
                          class="customTextInput-input"
                          name="contact_mail"
                          autocomplete="off"
                          value=""
                          type="email"
                          placeholder="E-mail"
                          v-model="form.email"
                        />
                      </div>
                    </div>
                  </div>

                  <textarea
                    name="contact_text"
                    autocomplete="off"
                    class="customTextarea"
                    placeholder="Ваше сообщение"
                    v-model="form.message"
                  ></textarea>

                  <div class="customCheckbox">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      v-model="form.agreeTerms"
                      required
                    />
                    <label for="agreeTerms">Даю согласие на <a href="https://voron.space/legal/personal-data/" target="_blank">обработку персональных данных</a></label>
                  </div>

                  <input
                    type="submit"
                    class="contactsPage-formBtn"
                    value="Отправить"
                    name="submit"
                    :disabled="!form.agreeTerms"
                  />

                  <div
                    style="margin-top: 20px"
                    class="thanks-form alert-form"
                    v-if="form.success"
                  >
                    <div class="thanks-form-title">
                      E-mail успешно отправлен!
                    </div>
                    <div class="thanks-form-text">
                      Спасибо за использование формы обратной связи! При
                      необходимости мы с Вами свяжемся.
                    </div>
                  </div>

                  <div
                    style="margin-top: 20px"
                    class="contactsPage-formError"
                    v-if="form.errors"
                  >
                    <div class="thanks-form-title">Ошибка!</div>
                    <div class="thanks-form-text">
                      Проверьте, пожалуйста, правильность заполения всех полей.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import { TheMask, mask } from "vue-the-mask";
export default {
  head: {
    title: "VORON – Срочная и бесплатная доставка автомобилей бизнес-класса",
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
      form: {
        name: "",
        message: "",
        phone: "",
        email: "",
        success: false,
        agreeTerms: false,
        errors: false,
      },
    };
  },
  components: {
    TheMask,
  },
  directives: { mask },
  methods: {
    async SendMessage() {
      if (
        this.form.name != "" &&
        this.form.message != "" &&
        this.form.phone != "" &&
        this.form.email != "" &&
        this.form.agreeTerms
      ) {
        // console.log("отправим");

        var response = await this.$axios.$post(
          "/api/voron_black_contact_mail/",
          // this.form
          {
            name: this.form.name,
            message: this.form.message,
            phone: this.form.phone,
            email: this.form.email,
          }
        );

        console.log(this.form);
        console.log(response);

        if (response.result) {
          this.form.success = true;
          this.form.errors = false;
          this.form.name = "";
          this.form.message = "";
          this.form.phone = "";
          this.form.email = "";
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


<style scoped>
  .contactsPage-h2 {
    margin-bottom: 8px;
  }
  .pageSection-block .contactsPage-tableCell {
    padding-bottom: 30px;
  }

  .city-item {
    display: inline-block;
    margin-right: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }

  .city-no-active {
    opacity: 0.4;
  }

  .customCheckbox {
    margin-bottom: 15px;
  }

  .customCheckbox input[type="checkbox"] {
    margin-right: 5px;
    -webkit-appearance: auto !important;
    appearance: auto !important;
  }

  .contactsPage-formBtn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }


</style>
