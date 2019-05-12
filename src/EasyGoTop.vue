<template>
  <div
    :style="styles"
    @click="handleBackTop"
    id="easy-go-top"
  >
    <slot>
      <span
        style="color: inherit;height: 100%;width: 100%;"
        v-html="params.innerHTML"
      ></span>
    </slot>
  </div>
</template>

<script>
import easyGoTopMixin from './easyGoTopMixin'

export default {
  name: 'easy-go-top',
  props: {
    size: Number, // 大小
    color: String, // 字体颜色
    width: Number, // 宽度
    height: Number, // 高度
    radius: Number, // 圆角
    zIndex: Number, // z-index值
    right: Number, // 距离右侧距离
    bottom: Number, // 距离底部距离
    innerHTML: String, // 内容
    backgroundColor: String, // 背景色
    visibilityHeight: Number, // 可见高度
    customStyle: Object // 自定义样式
  },
  mixins: [easyGoTopMixin],
  data () {
    return {
      defaultParams: {
        color: '#fff',
        backgroundColor: '#000',
        innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>',
        visibilityHeight: 400,
        size: 50,
        zIndex: 10,
        radius: 50,
        right: 20,
        bottom: 40
      },
      visible: false,
      interval: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    customParams () {
      const customParams = {
        color: this.color,
        backgroundColor: this.backgroundColor,
        innerHTML: this.innerHTML,
        zIndex: this.zIndex,
        visibilityHeight: this.visibilityHeight,
        width: this.width,
        height: this.height,
        size: this.size,
        right: this.right,
        bottom: this.bottom,
        radius: this.radius,
        customStyle: this.customStyle
      }
      for (const key in customParams) {
        if (customParams[key] === undefined) {
          delete customParams[key]
        }
      }
      return customParams
    },
    params () {
      // 合并默认参与与全局参数(自定义 > 全局 > 默认)
      return Object.assign({}, this.defaultParams, this.$goTopGlobalParams, this.customParams)
    },
    computedWidth () {
      return this.width || this.params.width || this.params.size || this.size
    },
    computedHeight () {
      return this.height || this.params.height || this.params.size || this.size
    },
    styles () {
      const params = this.params
      const styles = {
        width: this.computedWidth + 'px',
        height: this.computedHeight + 'px',
        lineHeight: this.computedHeight + 'px',
        fontSize: this.computedWidth + 'px',
        color: params.color,
        zIndex: params.zIndex,
        right: params.right + 'px',
        borderRadius: params.radius + '%',
        backgroundColor: params.backgroundColor
      }

      if (this.visible === false) {
        styles.bottom = (-this.computedHeight) + 'px'
        styles.opacity = 0
      } else {
        styles.bottom = params.bottom + 'px'
        styles.opacity = 1
      }

      return Object.assign({}, styles, params.customStyle)
    }
  },
  methods: {
    handleScroll () {
      // 滚动距离 > 可见距离
      this.visible = window.pageYOffset > this.params.visibilityHeight
    },
    // 回到顶部
    handleBackTop () {
      this.$goTop()
    }
  }
}
</script>

<style>
#easy-go-top {
  text-align: center;
  position: fixed;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  cursor: pointer;
  outline: none;
  opacity: 1;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  transition: bottom 0.3s, opacity 0.3s;
  user-select: none;
}
#easy-go-top svg {
  fill: currentColor;
}
#easy-go-top svg path {
  fill: currentColor;
}
#easy-go-top * {
  width: 48%;
  height: 48%;
  font-size: 48%;
  margin-top: 5px;
  vertical-align: text-top;
}
</style>
