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
  methods: {
    createArticle(title, src, url) {
      const article = document.createElement('article');
      const a = document.createElement('a');
      const img = document.createElement('img');
      const h1 = document.createElement('h1');
      img.src = src;
      h1.textContent = title;
      a.href = url;
      a.appendChild(img);
      a.appendChild(h1);
      article.appendChild(a);
      article.classList.add('tile__item');
      return article;
    }
  },
  created () {
    // axios.get('https://9b199e13.prtimes.tech/list/{page-number}').then( response => {
    //   console.log(response);
    //   this.posts = response.data;
    // })

    // const posts = [];
    // console.log(this,'test');
    // apiResponse('GET', 'https://9b199e13.prtimes.tech/list/', 'data', null, function (response_data) {
    //   console.log(response_data);
    //   console.log(this)
    //   this.posts = response_data;
    //   console.log(this.posts);
    // }, this)
    const tile = document.querySelector('section.tile');
    const baseUrl = 'https://9b199e13.prtimes.tech/';
    apiResponse('GET', baseUrl + 'list/', 'data', null, function (response_data) {
      response_data.forEach(el => {
        const company_id = el['company_id'];
        const release_id = el['release_id'];
        const url = baseUrl + 'detail/' + company_id + '/' + release_id;
        apiResponse('GET', url, 'data', null, function (response_data) {
          let title = response_data['title'];
          if (title.length > 36) {
            title = title.slice(0, 36) + '...';
          }
          let src = response_data['main_image'];
          if (response_data['animation_image1'] !== '') {
            src = response_data['animation_image1'];
          } else if (response_data['image1'] !== '') {
            src = response_data['image1'];
          }
          const article = createArticle(title, src);
          tile.appendChild(article);
        });
      });
    });
  }
}
</script>
