<template>
  <div class="home">
    <main class="main">
      <div class="container">
        <header class="header">
          <div class="container">
            <h1><a href="#">POP TIMES</a></h1>
            <nav class="nav">
              <ul>
                <li><a href="#">カテゴリー</a></li>
                <li><a href="#">カテゴリー</a></li>
                <li><a href="#">カテゴリー</a></li>
                <li><a href="#">カテゴリー</a></li>
                <li><a href="#">カテゴリー</a></li>
                <li><a href="#">カテゴリー</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section class="tile" v-for="post in posts" :key="post.id">
          <article class="tile__item">
            <a href="#">
              <img :src="post" :alt="post.title">
              <h1>{{ post.title }}</h1>
            </a>
          </article>
          <article class="tile__item">
            <a href="#">
              <img src="https://via.placeholder.com/300x150" alt="タイトル">
              <h1>タイトル</h1>
            </a>
          </article>
          <article class="tile__item">
            <a href="#">
              <img src="https://via.placeholder.com/300x150" alt="タイトル">
              <h1>タイトル</h1>
            </a>
          </article>
          <article class="tile__item">
            <a href="#">
              <img src="https://via.placeholder.com/300x150" alt="タイトル">
              <h1>タイトル</h1>
            </a>
          </article>
          <article class="tile__item">
            <a href="#">
              <img src="https://via.placeholder.com/300x150" alt="タイトル">
              <h1>タイトル</h1>
            </a>
          </article>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      posts: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/todos').then( response => {
      console.log(response);
      this.posts = response.data;
    })
  }
}
</script>
