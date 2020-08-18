<template>
  <div>
    <p>{{msg}} + {{edit}}</p>
    <!-- 实时绑定显示数据 change点击其他dom触发 -->
    <input v-model="msg" @input="editChange" type="text">
    <button v-on:click="greet();callback()">Greet</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'v-model',
      edit: 1
    }
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.msg + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    editChange: function () { 
      this.edit += 1;
    },
    callback: function () {
      setTimeout(() => {
        console.log('回调！');
      }, 100)
    }
  }
}
</script>

<style>

</style>