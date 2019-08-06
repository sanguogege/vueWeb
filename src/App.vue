<template>
  <div id="app">
    <header class="headr">
      <nav class="nav">
        <router-link to="/">俞曾的个人博客</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/note">随堂笔记</router-link>
        <router-link to="/shige">诗歌赏析</router-link>
        <router-link to="/time">时间轴</router-link>
        <router-link to="/aa">留言墙</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </header>
    <div class="content">
      <router-view />
    </div>
    <div>脚底板</div>
  </div>
</template>

<style lang="less">
*{font-family:'Verdana','Microsoft Yahei','\u5FAE\u8F6F\u96C5\u9ED1','\u5B8B\u4F53','SimSun';}
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0}
html,body,form,fieldset,p,div,h1,h2,h3,h4,h5,h6{-webkit-text-size-adjust:none;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}
body{font-family:'Verdana','Microsoft Yahei','\u5FAE\u8F6F\u96C5\u9ED1','\u5B8B\u4F53','SimSun'; -webkit-text-size-adjust:none; color:#333333; -webkit-text-size-adjust:none; font-size:14px; }
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
form{display:inline}
textarea{resize:none}
table{border-collapse:collapse;border-spacing:0}
ul,ol{list-style:none}
input,select,button{font-family:'Verdana','Microsoft Yahei','\u5FAE\u8F6F\u96C5\u9ED1','\u5B8B\u4F53','SimSun';font-size:100%;vertical-align:middle;outline:none;border:none;}
button,input[type="button"],input[type="reset"],input[type="submit"]{cursor:pointer;-webkit-appearance:button;-moz-appearance:button}
input:focus:-moz-placeholder,input:focus::-webkit-input-placeholder{color:transparent}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
a,a:visited{color:#333333;text-decoration:none;vertical-align:baseline;background:transparent;}
a:hover,a:active,a:focus {color:#FF3333;text-decoration:none;}
img{display:block;vertical-align:middle;border:0;-ms-interpolation-mode:bicubic;}

body {
  padding: 0;
  margin: 0;
  background-color: #E9EAED;
  font-size: 16px;
}

.headr {
  width: 100%;
  background-color: #1C2327;
}

.nav {
  height: 60px;
  width: 1000px;
  margin: 0 auto;
  a {
    float: left;
    display: block;
    height: 60px;
    line-height: 60px;
    text-decoration: none;
    padding: 0 10px;
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: #00c1de;
    }
  }
}

.content {
  width: 1000px;
  margin: 10px auto;
}

</style>
