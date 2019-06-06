<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1><a href="#">POP TIMES</a></h1>
      </div>
    </header>
    <router-view/>
    <footer class="footer">
      <div class="container">
        <small class="copyright">&copy; POP TIMES</small>
      </div>
    </footer>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
