<template>
  <li
    :class="['tab-item', { currrent: index === tabIndex }]"
    @click="onTabClick"
  >
    {{ data.field_name }}
  </li>
</template>

<script>
export default {
  name: "ListTabItem",
  props: {
    data: Object,
    index: Number,
    tabIndex: Number,
  },
  methods: {
    onTabClick() {
      console.log(1);
    },
  },
};
</script>

<style scoped>
.tab-item {
  width: 1.2rem;
  height: 0.35rem;
  line-height: 0.35rem;
  text-align: center;
  font-size: 0.18rem;
  box-sizing: border-box;
  border-right: 0.01rem solid #eee;
}
.tab-item .current{
    color: aqua;
    border-bottom: aqua 2px solid;
}
</style>