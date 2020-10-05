<template>
  <div>
    <div class="container">
      <div class="container-calc">
        <Calculator name="Calculator A" />
        <Calculator name="Calculator B" />
        <DisplayResult />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container-calc {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
}
</style>
