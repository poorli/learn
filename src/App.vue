<template>
  <div class="container">
    <sidebar></sidebar>
    <div class="content">
      <info></info>
      <order></order>
      <track></track>       
    </div>
  </div>
<!--   <div id="app">
  <img class="logo" src="./assets/logo.png">
  <hello></hello>

  <p>
    Welcome to your Vue.js app!
  </p>
  <p>
    To get a better understanding of how this boilerplate works, check out
    <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
    It is also recommended to go through the docs for
    <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
    <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
    If you have any issues with the setup, please file an issue at this boilerplate's
    <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
  </p>
  <p>
    You may also want to checkout
    <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
    <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
  </p>
</div>
<div>
 
</div> -->
</template>

<script>
  import Hello from './components/Hello'
  import Sidebar from './components/Sidebar'
  import Info from './components/Info'
  import Order from './components/Order'
  import Track from './components/Track'
  export default {
    components: {
      Hello,
      Sidebar,
      Info,
      Order,
      Track
    }
  }
</script>

<style>


  :hov


  .cls

  element.style {
  }
  article, aside, blockquote, body, button, code, dd, details, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }
  *, :after, :before {
    box-sizing: inherit;
  }
  user agent stylesheet
  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
  Inherited from a.inherit
  a.inherit {
    color: inherit;
  }
  a {
    /*color: #0089dc;*/
  }
  .tabnavigation {
    border-bottom: 2px solid #f4f4f4;
    position: relative;
  }
  .tabnavigation-navitem {
    display: inline-block;
    margin-bottom: -2px;
    padding: 0 10px;
    height: 27px;
    cursor: pointer;
    font-size: 16px;
    color: #666;
  }  
  .tabnavigation-navitem.active {
    font-weight: 700;
    border-bottom: 3px solid #0089dc;
  }  

  user agent stylesheet
  a:-webkit-any-link {
    color: -webkit-link;
    text-decoration: underline;
    cursor: auto;
  }
  Inherited from div.profile-infoitem
  .profile-infoitem {
    display: table-cell;
    border-right: 1px solid #eee;
    width: 185px;
    text-align: center;
  }
  Inherited from div.profile.profile-container.container
  .container {
    font-size: 14px;
    width: 960px;
    margin: 0 auto;
  }
  Inherited from body
  body, button, input, select, textarea {
    font: 400 1em/1.5 PingFang SC,Lantinghei SC,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
  }
  .container {
    width: 1180px;
    margin: 10px auto;
    font-size: 14px;
  }
  .content {
    /*float: left;*/
    overflow: hidden;
  } 
</style>
