<template>
  <div>
    <iframe :src="tqUrl" frameborder="0"></iframe>
    <div>
      <p>{{msg}} + {{edit}}</p>
      <!-- 实时绑定显示数据 change点击其他dom触发 -->
      <input v-model="msg" @input="editChange" type="text" />
      <button v-on:click="greet();callback()">Greet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      msg: "v-model",
      edit: 1,
      tqUrl: ''
    };
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      console.log("Hello " + this.msg + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        console.log(event.target.tagName);
      }
    },
    editChange: function () {
      this.edit += 1;
    },
  },
  mounted: function () {
    console.log("mounted");
    this.$axios({
      method: "get",
      url:
        "https://devapi.heweather.net/v7/weather/now?location=117.318619,31.87035&key=11c5d282743d48d9b9cee869c5d882b6",
    })
      .then((response) => {
        this.tqUrl = response.data.fxLink;
        console.log(response.data.code, response.data.now, "success"); // 成功的返回
      })
      .catch((error) => console.log(error, "error")); // 失败的返回
  },
};
</script>

<style>
iframe {
  width: 500px;
  height: 450px;
}
</style>