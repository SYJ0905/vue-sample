<template>
  <div>
    <select v-model="propsCity">
      <option
        v-for="item in cityList"
        :key="item.id"
        :value="item.name"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<!--
  父元素寫法
  <template>
    <PropsEmit
      :city="city"
      :city-list="cityList"
      @handle_city="update_city"
    />
  </template>
  <script>
  import PropsEmit from '@/components/PropsEmit.vue';
  export default {
    components: {
      PropsEmit,
    },
    data() {
      return {
        city: '台北市',
        cityList: [
          {
            id: 1,
            name: '台北市',
          },
          {
            id: 2,
            name: '新北市',
          },
        ],
      };
    },
    methods: {
      update_city(val) {
        this.city = val;
      },
    },
  };
  </script>
-->

<script>
export default {
  props: {
    city: {
      type: String,
      default() {
        return '';
      },
    },
    cityList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    propsCity: {
      get() {
        return this.city;
      },
      set(val) {
        this.$emit('handle_city', val);
      },
    },
  },
};
</script>
