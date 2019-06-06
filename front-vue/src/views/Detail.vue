<template>
  <div class="detail">
    <p>aaaaa</p>
    <Comment />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Comment from '../components/Comment.vue'; // @ is an alias to /src

@Component({
  components: {
    Comment,
  },
})

export default class Detail extends Vue {}
</script>

