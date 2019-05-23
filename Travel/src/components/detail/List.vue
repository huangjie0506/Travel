<template>
<div class="detail-list">
  <div class="list-item" v-for="(item,index) in list" :key="index">
    <span class="iconfont">&#xe64a;</span>
    {{item.title}}
    <div class="list-children" v-if="item.children">
      <detail-list :list="item.children"></detail-list>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail-list',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail-list
  line-height 0.54rem
  padding-left 0.2rem
  .list-children
    padding-left 0.2rem
</style>
