<template>
  <div class="home">
    <main class="main">
      <div class="container">
        <section class="tile" v-for="post in posts" :key="post.id">
          <article class="tile__item">
            <a href="#">
              <img src="https://via.placeholder.com/300x150" alt="タイトル">
              <h1>{{ post.title }}</h1>
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
    axios.get('http://192.168.130.151:777').then(response => {
      console.log(response.data)
    })
  }
}
</script>
