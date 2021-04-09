<template>
  <div>
    <!-- <ul>
      <li v-for="item of imageArr" :key="item.id">
        <img :src=item.url :alt=item.title>
        <p>{{item.title}}</p>
      </li>
    </ul> -->
    <h2>获取图片主颜色</h2>
    <main>
      <canvas></canvas>
      <section>
        <input type="file" id="uploadFile">
        <input type="number" class="k" placeholder="输出几种颜色？">
        <button class="start">Start</button>
      </section>
      <div class="colorPanel"></div>
    </main>
  </div>
</template>

<script>
import {main} from './index.js'
export default {
  name: "imageColor",
  data() {
    return {
      imageArr: [
        {
          id: "01",
          url: "https://i2.hdslb.com/bfs/archive/b09cdff52881edeb4fea45b3dfd285bad7ac8a15.jpg",
          title: "あの夏が飽和する(那个夏日已然饱和) / ましろ",
        },
        {
          id: "02",
          url: "https://i1.hdslb.com/bfs/archive/b395b55ce0d899c2a4cf0c7a9c32d304c69c9d15.jpg",
          title: "エバ/ メリッサ・キンレンカ Cover",
        },
        {
          id: "03",
          url: "https://i0.hdslb.com/bfs/archive/f59c90c1ae388709f2fc13d86de79876df8b8c1b.jpg",
          title: "Hail Holy Queen【にじさんじ/レヴィ・エリファ】",
        },
        {
          id: "04",
          url: "https://i2.hdslb.com/bfs/archive/7210ea4fb1f780af39edfebe854ba7bd69882c4c.jpg",
          title: "KING / 梅丽莎•金莲花 Cover",
        },
        {
          url: "https://i1.hdslb.com/bfs/archive/ade22244a23ecc510c3e6e53ee339b52dbe9b79c.jpg",
          title: "我叫了应召女郎然后你就来了 / レヴィ・エリファ Cover",
        },
      ],
    };
  },
  mounted () {
    let file = null;
    let canvas = document.querySelector("canvas");
    let colorPanel = document.querySelector(".colorPanel");
    let image = new Image();
    let reader = new FileReader();
    let targetHeight, targetWidth;
    image.onload = function () {
      let context = canvas.getContext("2d");
      let maxWidth = 500,
        maxHeight = 500;
      targetWidth = image.width;
      targetHeight = image.height;
      let originWidth = image.width,
        originHeight = image.height;
      if (originWidth / originHeight > maxWidth / maxHeight) {
        targetWidth = maxWidth;
        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
      } else {
        targetHeight = maxHeight;
        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
      }
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      context.drawImage(image, 0, 0, targetWidth, targetHeight);
    };
    reader.onload = function (e) {
      image.src = e.target.result;
    };
    document.querySelector("#uploadFile").onchange = function (e) {
      file = e.target.files[0];
      if (file.type.indexOf("image") == 0) {
        reader.readAsDataURL(file);
      }
    };
    document.querySelector("button.start").onclick = function () {
      let context = canvas.getContext("2d");
      let K = document.querySelector("input.k");
      console.log(k, typeof k != Number);
      if (K <= 0 && typeof k != Number) {
        alert("请输入正确参数");
        return;
      }
      document.querySelector(".colorPanel").innerHTML = "";
      main(
        context,
        { height: targetHeight, width: targetWidth },
        colorPanel,
        K,
        1
      );
    };
  },
};
</script>

<style scoped>
img {
  width: 400px;
}
</style>