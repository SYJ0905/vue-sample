<template>
  <div>
    <span @click.prevent="scroll_top()">回頂部</span>
  </div>
</template>

<script>
import OverlayScrollbars from 'overlayscrollbars';

export default {
  methods: {
    async scroll_top() {
      OverlayScrollbars(document.body).scroll({
        top: 0,
      }, 300);
    },
  },
};
</script>
