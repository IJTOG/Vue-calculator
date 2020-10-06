<template>
  <div style="margin: auto; position: relative">
    <div class="display-filter">
      <div class="filter">
        <h4>Results</h4>
        <input
          type="text"
          v-model="query"
          v-on:keydown.enter.prevent="search"
          class="input-search"
          placeholder="Search by result, date"
        />
        <select class="input-select decorated" v-model="selected">
          <option value="">All</option>
          <option value="Calculator A">A</option>
          <option value="Calculator B">B</option>
        </select>
      </div>
      <div class="display-card">
        <div>
          <div
            class="space-m"
            v-for="(history, index) in filtered"
            :key="index"
          >
            <div class="history-container">
              <h4>{{ history.name }}</h4>
              <h5 class="history-date">{{ history.date }}</h5>
            </div>
            <div>
              <span class="result">{{ history.result }}</span>
              <hr />
              <span class="cal-input" v-html="history.display"></span>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        btnTextCancel="ยกเลิก"
        btnTextConfirm="ตกลง"
        ref="Confirm"
        @confirmed="confirmClicked"
      >
        <template #ConfirmText>คุณต้องการลบประวัติการค้นหา?</template>
      </ConfirmModal>
      <button id="myBtn" class="calc-button" @click="clearAll">Clear</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    if (this.initialiseStore()) this.find();
  },
  data: function() {
    return {
      selected: "",
      query: ""
    };
  },
  methods: {
    ...mapActions("calculator", ["clear", "initialiseStore", "find", "select"]),
    clearAll() {
      this.$refs.Confirm.open();
    },
    search() {
      this.find(this.query);
    },
    confirmClicked(value) {
      if (value) this.clear();
    }
  },
  computed: {
    ...mapState("calculator", ["filtered"])
  },
  watch: {
    selected() {
      this.select(this.selected);
    }
  }
};
</script>

<style lang="scss">
#myBtn {
  position: relative;
  bottom: 60px;
  right: 0px;
  left: 75%;
  z-index: 99;
  color: white;
  cursor: pointer;
}
</style>
