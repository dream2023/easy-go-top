<template>
  <div style="height: 10000px">
    <!-- 默认情况 -->
    <easy-go-top/>
    <!-- 定制化 -->
    <easy-go-top
      :customStyle="{ boxShadow: 'none' }"
      :right="120"
      :size="52"
      backgroundColor="rgb(231, 234, 241)"
      color="#9aaabf"
    />
    <!-- 插槽 iconfont -->
    <easy-go-top :right="220">
      <i class="iconfont icon-huojian"></i>
    </easy-go-top>
    <!-- innerHTML svg -->
    <easy-go-top
      :right="320"
      innerHTML="<svg viewBox='0 0 17 17'><g><path d='M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z' fill-rule='evenodd'></path></g></svg>"
    ></easy-go-top>
    <!-- 定制化 -->
    <easy-go-top
      :customStyle="{ boxShadow: 'none', fontSize: '30px' }"
      :height="40"
      :radius="5"
      :right="420"
      :width="120"
      innerHTML="回到顶部"
    />
    <!-- js调用 -->
    <button
      @click="handlBtnClick"
      class="el-button el-button--primary"
      id="btn"
      type="button"
    >点我回到顶部!</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {}
  },
  methods: {
    handlBtnClick () {
      this.$goTop()
    }
  },
  mounted () {}
}
</script>

<style scoped>
@import url("https://at.alicdn.com/t/font_1187087_g3s7mw45cap.css");

.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
#btn {
  position: fixed;
  left: 45%;
  bottom: 0;
}
</style>
