<template>
  <div style="margin: auto; position: relative">
    <div class="display-filter">
      <div class="filter">
        <h4>Results</h4>
        <input
          type="text"
          class="input-search"
          placeholder="Search by result, date"
        />
        <select class="input-select decorated" v-model="selected">
          <option :value="0">All</option>
          <option :value="1">A</option>
          <option :value="2">B</option>
        </select>
      </div>
      <div class="display-card">
        <div class="space-m" v-for="(history, index) in histories" :key="index">
          <div class="history-container">
            <h4>{{ history.name }}</h4>
            <h5 class="history-date">{{ history.date }}</h5>
          </div>
          <div>
            <span class="result">{{ history.result }}</span>
            <hr />
            <span class="cal-input" v-html="history.calculation"></span>
          </div>
        </div>
      </div>
      <button id="myBtn" class="calc-button">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selected: 0,
      histories: [
        {
          name: "Caluclate A",
          date: "09/09/2030 - 23:33.22",
          result: "124",
          calculation: "2 <span style='color:#E623CF;'>x</span> 62",
        },
      ],
    };
  },
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
