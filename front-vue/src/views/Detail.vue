<template>
  <div class="detail">
    <header class="header">
      <h1><a href="index.html">POP TIMES</a></h1>
    </header>
    <main class="main">
      <div class="container">
        <section class="entry">
          <img class="entry__thumb" src="https://via.placeholder.com/800x400" alt="記事タイトル">
          <ul class="entry__images">
            <li><img src="https://via.placeholder.com/400x400" alt="記事タイトル"></li>
            <li><img src="https://via.placeholder.com/600x400" alt="記事タイトル"></li>
            <li><img src="https://via.placeholder.com/800x400" alt="記事タイトル"></li>
            <li><img src="https://via.placeholder.com/600x300" alt="記事タイトル"></li>
          </ul>
          <div class="entry__info">
            <h1 class="entry__title" data-subtitle="サブタイトル">記事タイトル</h1>
            <p class="entry__desc">こんな内容だよ。こんな内容だよ。こんな内容だよ。</p>
          </div>
          <a class="entry__more" href="#">記事を読む</a>
        </section>
        <section class="comment">
          <h1>コメント一覧 <i class="fas fa-comment"></i></h1>
          <form action="">
            <div class="comment__form">
              <input type="text" v-model="newComment">
              <button>送信</button>
            </div>
          </form>
          <ul class="comment__list" v-for="comment in comments" :key="comment.id">
            <li>
              <div class="comment__user"><i class="fas fa-user"></i></div>
              <p>
                {{ comment.body }}
              </p>
            </li>
            <li>
              <div class="comment__user"><i class="fas fa-user"></i></div>
              <p>
                私はこんなことを思いました。私はこんなことを思いました。私はこんなことを思いました。私はこんなことを思いました。
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import apiResponse from '../apiRequest.js'

export default {
  name: 'detail',
  data() {
    return {
      posts: [],
      comments: [],
      newComment: null
    }
  },
  created () {
    apiResponse('GET', 'https://9b199e13.prtimes.tech/detail/', 'data', null, function (response_data) {
      console.log(response_data);
      this.posts = response_data.data;
    });
    axios.get('https://github.com/typicode/demo/blob/master/db.json').then( response => {
      console.log(response);
      this.comments = response.data;
    }).catch(error => {
      console.error(error);
    })
  },
  methods: {
    addComment() {
      if(this.newComment){
        // db.collection('comments').add({
        //   content: this.newComment
        // }).catch(err => {
        //   console.log(err)
        // })
        this.newComment = null
      } else {
        console.error(error)
      }
    }
  }
}
</script>
