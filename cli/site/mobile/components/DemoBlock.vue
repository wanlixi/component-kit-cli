<template>
  <div class="van-doc-demo-block">
    <h2 class="van-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'demo-block',

  props: {
    title: String,
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.van-doc-demo-block {
  &__title {
    margin: 0;
    padding-top: 24px;
    color: #666;
    font-weight: 900;
    font-size: 16px;
  }

  &:first-of-type {
    .van-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
