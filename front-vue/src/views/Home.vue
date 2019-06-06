<template>
  <div class="home">
    <header class="header">
      <h1><a href="#">POP TIMES</a></h1>
    </header>
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
    <main class="main">
      <section class="tile">
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/3000x1500" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
        <article class="tile__item" v-for="post in posts" :key="post.company_id">
          <a href="#">
            <img :src="post.main_image" :alt="post.company_name" onClick="jumpPost">
            <h1>{{ post.title }}</h1>
          </a>
        </article>
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/3000x1500" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/900x650" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/3000x1500" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/3000x3000" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/900x800" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
        <article class="tile__item">
          <a href="#">
            <img src="https://via.placeholder.com/900x650" alt="タイトル">
            <h1>タイトル</h1>
          </a>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import apiResponse from '../apiRequest.js'

export default {
  name: 'home',
  data() {
    return {
      posts: []
    }
  },
  created () {
    // axios.get('https://9b199e13.prtimes.tech/list/{page-number}').then( response => {
    //   console.log(response);
    //   this.posts = response.data;
    // })

    const posts = [];
    console.log(this,'test');
    apiResponse('GET', 'https://9b199e13.prtimes.tech/list/', 'data', null, function (response_data) {
      console.log(response_data);
      console.log(this)
      this.posts = response_data;
      console.log(this.posts);
    }, this)
  }
}
</script>
