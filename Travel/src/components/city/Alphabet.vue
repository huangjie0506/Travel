<template>
  <div class='alphabet'>
      <div class="alpha-city"
        @click="handleclick(item)"
        @touchstart.prevent='handletouchstart'
        @touchmove="handletouchmove"
        @touchend="handletouchend"
        v-for="item in letter"
        :key="item"
        :ref="item">
        {{item}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letter () {
      const letter = []
      for (let item in this.cities) {
        letter.push(item)
      }
      return letter
    },
    startY () {
      return this.$refs['A'][0].offsetTop
    }
  },
  methods: {
    handleclick (data) {
      this.$emit('change', data)
    },
    handletouchstart () {
      this.touchStatus = true
    },
    handletouchmove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY - 79 - this.startY
        const index = Math.floor(touchY / 20)
        if (index >= 0 && index <= this.letter.length) {
          this.$emit('change', this.letter[index])
        }
      }, 16)
    },
    handletouchend () {
      this.touchStatus = false
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
