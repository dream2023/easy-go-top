<template>
  <div id="app">
    <easy-github-pages
      :menus="menuList"
      author="zhangchaojie"
      githubUrl="https://github.com/dream2023/easy-go-top/"
      title="easy-go-top | 简单 & 强大的 vue 回到顶部组件"
    >
      <section id="intro">
        <h2>介绍</h2>
        <p>目前 GitHub 上已有不少回到顶部的组件, 但是要不然是可定制化不够, 要不然就是不够简单, 所以就像写一个即能很简单, 但同时很强大的回到顶部的 vue 组件, 根据场景不同, easy-go-top 组件用于以下特性:</p>
        <blockquote>
          <ul>
            <li>支持全局引入, 并设置全局参数, 使用时无需重复传参</li>
            <li>支持 js 回到顶部(用于加载数据后, 回到顶部等场景)</li>
            <li>支持 css 和 js 两种样式覆盖形式, 定制化更容易</li>
          </ul>
        </blockquote>
        <img
          :src="`${publicPath}example.gif`"
          alt="vue-auto-text"
        >
      </section>
      <section id="install">
        <h2>安装</h2>
        <blockquote>npm install easy-go-top --save</blockquote>
      </section>
      <section id="usage">
        <h2>使用</h2>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 全局引入(推荐)
              import EasyGoTop from 'easy-go-top'
              Vue.use(EasyGoTop)
            </code>
          </pre>
        </blockquote>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 全局引入定制化
              Vue.use(EasyGoTop, {
                size: 52,
                color: '#9aaabf',
                backgroundColor: 'rgb(231, 234, 241)',
                innerHTML: &#x27;&lt;svg viewBox=&quot;0 0 17 17&quot;&gt;&lt;g&gt;&lt;path d=&quot;M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z&quot; fill-rule=&quot;evenodd&quot;&gt;&lt;/path&gt;&lt;/g&gt;&lt;/svg&gt;&#x27;
                ... // 全部参数参考props参数
              })
            </code>
          </pre>
        </blockquote>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              // 局部引入
              import { EasyGoTop, easyGoTopMixin } from 'easy-go-top/src/index'
              export default {
                components: {
                  EasyGoTop
                },
                // 如果需要使用js触发回到顶部, 则需要引入mixin
                minxins: [easyGoTopMixin]
              }
            </code>
          </pre>
        </blockquote>
      </section>
      <section id="example">
        <h2>示例</h2>
        <div>
          <h3>最简单使用</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/XwKKry/?height=265&theme-id=dark&default-tab=html,result"
            style="width: 100%;"
            title="XwKKry"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/XwKKry/">XwKKry</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <div>
          <h3>定制化</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/oRLqoj/?height=265&theme-id=dark&default-tab=html,result"
            style="width: 100%;"
            title="easy-go-top 定制化"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/oRLqoj/">easy-go-top 定制化</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <div>
          <h3>js调用</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/QREmxx/?height=265&theme-id=dark&default-tab=html,result"
            style="width: 100%;"
            title="easy-go-top 定制化"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/QREmxx/">easy-go-top 定制化</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <div>
          <h3>css样式覆盖</h3>
          <iframe
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="no"
            height="265"
            scrolling="no"
            src="//codepen.io/dream2023/embed/arZGov/?height=265&theme-id=dark&default-tab=css,result"
            style="width: 100%;"
            title="easy-go-top 样式覆盖"
          >
            See the Pen
            <a href="https://codepen.io/dream2023/pen/arZGov/">easy-go-top 样式覆盖</a> by 二当家的
            (
            <a href="https://codepen.io/dream2023">@dream2023</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
      </section>
      <section id="props">
        <h2>Props参数</h2>
        <p>
          特别说明, innerHTML 参数, 不仅可以传递文本等, 还可以传递例如
          <code>svg</code> 或者 iconfont 的
          <code>i</code> 标签等 HTML
        </p>
        <blockquote>
          <pre class="language-js">
            <code class="language-js">
              props: {
                // 大小: 如果未赋值 width 和 height, 则 width = size, height = size,
                // 如果赋值了 width 或 height, 会覆盖 size 的 值
                size: {
                  type: Number,
                  default: 50
                },
                // 宽度: 当定义 width 时, 会覆盖 size 值
                width: {
                  type: Number
                },
                // 高度: 当定义 height 时, 会覆盖 size 值
                height: {
                  type: Number
                },
                // 字体颜色
                color: {
                  type: String,
                  default: '#fff'
                },
                // 圆角
                radius: {
                  type: Number,
                  default: 50
                },
                // z-index值
                zIndex: {
                  type: Number,
                  default: 10
                },
                // 绝对定位: 距离右侧距离
                right: {
                  type: Number,
                  default: 20
                },
                // 绝对定位: 距离底部距离
                bottom: {
                  type: Number,
                  default: 40
                },
                // 内容: 可以传递svg 和 iconfont等
                innerHTML: {
                  type: String,
                  default: &#x27;&lt;svg viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&#x27;
                },
                // 背景色
                backgroundColor: {
                  type: String,
                  default: '#000'
                },
                // 可见高度: 即滚动距离顶部多高时显示组件
                visibilityHeight: {
                  type: Number,
                  default: 400
                },
                // 自定义样式
                customStyle: {
                  type: Object
                }
              }
            </code>
          </pre>
        </blockquote>
      </section>
      <section id="reference">
        <h2>参考链接</h2>
        <blockquote>
          <ul>
            <li>
              <a
                href="https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components/BackToTop"
                target="_blank"
              >vue-element-admin 全局组件 back-to-top</a>
            </li>
            <li>
              <a
                href="https://github.com/vfeskov/vanilla-back-to-top"
                target="_blank"
              >Vanilla Back To Top</a>
            </li>
            <li>
              <a
                href="https://github.com/bingoogolapple/bga-back-top-vue"
                target="_blank"
              >bga-back-top-vue</a>
            </li>
          </ul>
        </blockquote>
      </section>
    </easy-github-pages>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      menuList: [
        {
          title: '介绍',
          href: 'intro'
        },
        {
          title: '安装',
          href: 'install'
        },
        {
          title: '使用',
          href: 'usage'
        },
        {
          title: '示例',
          href: 'example'
        },
        {
          title: 'Props参数',
          href: 'props'
        },
        {
          title: '参考链接',
          href: 'reference'
        }
      ]
    }
  }
}
</script>
