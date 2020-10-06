<template>
  <div class="cal-div">
    <div style="padding: 10px">
      <h2>{{ name }}</h2>
      <div class="cal-card">
        <div class="result">{{ result }}</div>
        <hr />
        <div class="cal-input">
          <span v-html="display"></span>
        </div>
        <div class="calculator-buttons">
          <button class="calc-button" @click="clear">C</button>
          <button
            class="calc-button"
            @click="add(` <span style='color:#E623CF;'>x</span> `, '*')"
          >
            &times;
          </button>

          <button
            class="calc-button is-minus"
            @click="add(` <span style='color:#E623CF;'>&minus;</span> `, '-')"
          >
            &minus;
          </button>
          <button
            class="calc-button is-plus"
            @click="add(` <span style='color:#E623CF;'>&plus;</span> `, '+')"
          >
            &plus;
          </button>
          <button class="calc-button seven" @click="add('7', 7)">7</button>
          <button class="calc-button eight" @click="add('8', 8)">8</button>
          <button class="calc-button nine" @click="add('9', 9)">9</button>

          <button class="calc-button four" @click="add('4', 4)">4</button>
          <button class="calc-button five" @click="add('5', 5)">5</button>
          <button class="calc-button six" @click="add('6', 6)">6</button>
          <button class="calc-button is-equals" @click="submit">
            &equals;
          </button>

          <button class="calc-button one" @click="add('1', 1)">1</button>
          <button class="calc-button two" @click="add('2', 2)">2</button>
          <button class="calc-button three" @click="add('3', 3)">3</button>

          <button class="calc-button is-zero" @click="add('0', 0)">0</button>
          <button
            class="calc-button dot"
            @click="add(`<span style='color:#E623CF;'>.</span>`, '.')"
          >
            .
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  props: { name: String, default: "Calculator" },
  data: function() {
    return {
      display: "",
      summary: "",
      operators: ["+", "-", "*", "."],
      result: 0
    };
  },
  methods: {
    ...mapActions("calculator", ["save"]),
    clear() {
      this.display = "";
      this.summary = "";
      this.result = 0;
    },
    add(str, value) {
      let lastChar = this.summary.slice(-1);
      if (this.summary.length === 0 && this.operators.indexOf(value) > -1) {
        return;
      }

      if (
        this.operators.indexOf(lastChar) > -1 &&
        this.operators.indexOf(value) > -1
      ) {
        return;
      }

      this.summary = this.summary + value;
      this.display = this.display + str;
    },
    async submit() {
      if (this.summary) {
        let lastChar = this.summary.slice(-1);
        if (this.operators.indexOf(lastChar) > -1) {
          return;
        }

        let params = this.summary.replaceAll("+", "%2B");
        const { data } = await this.$axios.get(
          `http://api.mathjs.org/v4/?expr=${params}`
        );
        this.result = data;

        const result = {
          name: this.name,
          result: this.result,
          summary: this.summary,
          display: this.display,
          date: moment(new Date()).format("DD/MM/YYYY HH:mm.ss")
        };
        this.save(result);
      }
    }
  },
  computed: {
    ...mapState("calculator", ["results"])
  }
};
</script>

<style lang="scss"></style>
