<template>
  <div>
    <ul>
      <li v-for="item of imageArr" :key="item.id">
        <img :src=item.url :alt=item.title>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
img {
  width: 400px;
}
</style>