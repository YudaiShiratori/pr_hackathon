<template>
  <div id="app">
    <router-view/>
    <footer class="footer">
      <div class="container">
        <small class="copyright">&copy; POP TIMES</small>
      </div>
    </footer>
  </div>
</template>
<style>
/* reset */
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

/* custom */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

ul, ol {
  list-style: none;
}

img, video {
  max-width: 100%;
}

img {
  border-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
    content: "";
}


/* common */
.container {
  width: calc(100% - 16px);
  max-width: 960px;
  margin: 0 auto;
}
.header {
  background: hsl(214, 66%, 47%);
}
.header h1 {
  font-size: 24px;
  line-height: 1.5;
  padding: 0.5em;
}
.header h1 a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* nav */
.nav {
  background: #f0f0f0;
}
.nav ul {
  display: flex;
  overflow-x: scroll;
  padding: 16px 8px;
}
.nav ul li {
  border: 1px solid hsl(214, 66%, 47%);
  border-radius: 1em;
  overflow: hidden;
  min-width: 100px;
  margin-right: 8px;
}
.nav ul li a {
  text-decoration: none;
  display: block;
  color: hsl(214, 66%, 47%);
  line-height: 2;
  padding: 0 .5em;
  text-align: center;
}
.nav ul li a:hover {
  background: hsl(214, 66%, 47%);
  color: white;
  transition: .2s;
}

/* main */
.main {
  margin: 8px;
}

/* tile */
.tile {
  column-count: 3;
  column-gap: 8px;
}
.tile__item {
  margin-bottom: 8px;
}
.tile__item a {
  display: block;
  text-decoration: none;
  color: black;
  position: relative;
}
.tile__item img {
  display: block;
}
.tile__item h1 {
  position: absolute;
  bottom: 8px;
  left: 8px;
  opacity: 0;
}
.tile__item:hover h1 {
  transition: .3s;
  opacity: 1;
}
.tile__item:hover img {
  transition: .3s;
  opacity: 0.8;
}

/* entry */
.entry {
  margin-bottom: 32px;
}
.entry__thumb {
  display: block;
  width: 100%;
  margin-bottom: 8px;
}
.entry__images {
  column-count: 2;
  column-gap: 8px;
}
.entry__images li {
  margin-bottom: 8px;
  min-width: 50%;
}
.entry__images img {
  display: block;
  width: 100%;
}
.entry__info {
  text-align: center;
  margin: 32px 0;
}
.entry__title {
  font-size: 24px;
  margin-bottom: 8px;
  text-align: center;
}
.entry__title::after {
  content: attr(data-subtitle);
  display: block;
  font-size: 20px;
  color: #555;
}
.entry__desc {
  color: #888;
  text-align: center;
}
.entry__more {
  display: block;
  margin: 16px auto;
  width: 200px;
  padding: 0 1em;
  line-height: 2;
  border-radius: 1em;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background: hsl(214, 66%, 47%);
  color: white;
}

/* comment */
.comment {
  background: #f0f0f0;
  padding: 16px;
}
.comment h1 {
  padding: .5em 0;
}
.comment__form {
  display: flex;
}
.comment__form input {
  flex: 1;
  border: none;
  padding: .5em;
  margin-right: 8px;
}
.comment__form button {
  width: 4em;
  border: none;
  background: hsl(214, 66%, 47%);
  color: white;
}
.comment__form button:hover {
  cursor: pointer;
  background: hsla(214, 66%, 47%, 80%);
}
.comment__list {
  padding: 16px 0;
}
.comment__list li {
  display: flex;
  padding: 16px 8px;
  color: #333;
  border-bottom: 1px solid white;
}
.comment__user {
  margin-right: 8px;
}
.comment__list li:first-child {
  border-top: 1px solid white;
}

/* footer */
.footer {
  padding: 8px 0;
  background: #f0f0f0;
  margin-top: 16px;
}
.copyright {
  color: #888;
  display: block;
  text-align: center;
  font-size: 12px;
}

@media only screen and (max-width: 600px) {
  .header {
    height: 48px;
  }
  .header h1 {
    font-size: 20px;
  }
  .nav ul {
    padding: 8px;
  }
  .nav ul li a {
    font-size: 12px;
  }
  .tile {
    column-count: 2;
  }
  .tile__item h1 {
    opacity: 1;
    font-size: 12px;
    line-height: 1.25em;
    height: 1.25em;
    overflow: hidden;
  }
}
</style>
