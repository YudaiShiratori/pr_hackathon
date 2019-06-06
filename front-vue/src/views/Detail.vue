<template>
  <div class="detail">
    <section class="entry">
      <header>
        <img src="https://via.placeholder.com/800x400" alt="記事タイトル">
        <h1>記事タイトル</h1>
      </header>
      <section class="entry__content">
        <p>
          こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。こんにちは。私達はこんなことをします。よろしくおねがいします。
        </p>
      </section>
    </section>

    <section class="comment">
      <h1>コメント</h1>
      <ul v-for="message in messages" :key="message.id">
        <li>{{ message.content }}</li>
      </ul>
      <form action="">
        <label>内容
          <input type="text">
        </label>
        <button>送信</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'detail',
  data() {
    return {}
  },
  created () {
    axios.get('http://192.168.130.151:777').then(response => {
      console.log(response.data)
    })
  }
}
</script>
