<template>
  <div class="detail">
    <header class="header">
      <div class="container">
        <h1><a href="#">POP TIMES</a></h1>
      </div>
    </header>
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
    return {
      messages: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      console.log(response);
      this.messages = response.data;
    }).catch(error => {
      console.error(error);
    })
  },
}
</script>
