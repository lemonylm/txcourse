<template>
  <div class="header">
    <header-back-icon :backIconShow="backIconShow"></header-back-icon>
    <header-logo></header-logo>
    <list-icon :listIconShow="listIconShow"></list-icon>
  </div>
</template>

<script>
import HeaderBackIcon from "@/components/Header/BackIcon";
import HeaderLogo from "@/components/Header/Logo";
import ListIcon from "@/components/Header/ListIcon";
export default {
  name: "Header",
  props: {
    listIconShow: {
      type: Boolean,
      default() {
        return true;
      },
    },
    backIconShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {
    HeaderBackIcon,
    HeaderLogo,
    ListIcon,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 0.44rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>