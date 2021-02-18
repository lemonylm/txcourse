<template>
  <div class="list-tab">
    <div class="tab-wrapper">
      <ul class="tab-list">
        <list-tab-item
          :data="{ field_name: '全部课程', field: 'all' }"
          :index="0"
          :tabIndex="0"
        ></list-tab-item>
        <list-tab-item
          v-for="(item, index) of fieldData"
          :data="item"
          :key="index"
          :index="index + 1"
          :tabIndex="0"
        ></list-tab-item>
      </ul>
    </div>
  </div>
</template>

<script>
import ListTabItem from "@/components/ListTab/Item";
export default {
  name: "ListTab",
  props: {
    fieldData: Array,
    
  },
  components: {
    ListTabItem,
  },
  
};
</script>

<style scoped>
.list-tab{
height: .35rem;
overflow: hidden;
}
.tab-wrapper {
  width: 100%;
  height: 0.42rem;
  background-color: #fff;
  overflow-x: auto;
  color: #333;
}
.tab-list {
  width: 6rem;
  display: flex;
}
</style>