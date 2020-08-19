<template>
  <div>
    <p>{{msg}} + {{edit}}</p>
    <!-- 实时绑定显示数据 change点击其他dom触发 -->
    <input v-model="msg" @input="editChange" type="text" />
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
      console.log('Hello ' + this.msg + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        console.log(event.target.tagName)
      }
    },
    editChange: function () { 
      this.edit += 1;
    },
  },
  mounted: function () {
    const callback = function () {
      let _edit = Math.random() * 10;
      return new Promise(function (resolve, reject) {
        if (_edit > 5) {
          console.log('点击5次了!');
        }
      })
    }
    callback().then(function () {
      console.log('成功！');
    }).catch(() => {
      console.log('失败！');
    })
    console.log('mounted');
  }
}
</script>

<style>
</style>