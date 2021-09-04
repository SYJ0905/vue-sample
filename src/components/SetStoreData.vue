<template>
  <div>
    <h1>讀取/寫入 Store Dada 方法:</h1>
    <input
      v-model.trim="data.name"
      type="text"
      placeholder="姓名"
      @input="update"
    >
    <input
      v-model.number="data.age"
      type="number"
      placeholder="年齡"
      @input="update"
    >
    <div>
      姓名: {{ storData.name }}
      年齡: {{ storData.age }}
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapMutations } from 'vuex';

export default {
  computed: {
    data() {
      return _.cloneDeep(this.$store.getters.data);
    },
    storData: {
      get() {
        return this.$store.getters.data;
      },
    },
  },
  methods: {
    ...mapMutations([
      'UPDATE_DATA',
    ]),
    update() {
      this.UPDATE_DATA(this.data);
    },
  },
};
</script>

<style>

</style>
