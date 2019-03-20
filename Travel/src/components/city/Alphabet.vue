<template>
  <div class='alphabet'>
      <div class="alpha-city"
        @click="handleclick(item)"
        v-for="item in letter"
        :key="item">
        {{item}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  computed: {
    letter () {
      const letter = []
      for (let item in this.cities) {
        letter.push(item)
      }
      return letter
    }
  },
  methods: {
    handleclick (data) {
      this.$emit('change', data)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .alphabet
    position absolute
    top 1.58rem
    right 0
    bottom 0
    display flex
    justify-content center
    flex-direction column
    .alpha-city
      width 0.4rem
      height 0.4rem
      text-align center
      line-height 0.4rem
</style>
