<template>
  <div class="about">
    <!-- <h1>About Page</h1>
      <p>This is the about page.</p> -->
    <div class="image-container">
      <img src="@/assets/imgs/640.webp" alt="About Image" class="about-image" />
    </div>
    <div class="text-container">
      <h1>48路公共汽车</h1>
      <p>
        延安路是上海中心城区东西交通的主动脉，尤以42路、48路、71路三条公交线路为代表，且被市民亲切地称为“延安三线”，在上海公交行业乃至城市发展史上书写了重要的一页。42路和71路都已在前两年发布，千呼万唤始出来，“椒盐粒”终于将48路编订完成，即刻呈上，敬请指教。
      </p>
    </div>

    <router-link to="/" class="positioned-link">
      <img src="@/assets/返回.svg" alt="Icon" class="link-icon" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fafafa;
}

h1 {
  font-size: 30px;
  color: #333;
  text-align: left;
  padding: 10px;
}
p {
  /* font-size: 30px; */
  color: #333;
  text-align: left;
  padding:0 10px;
}


.positioned-link {
  position: absolute;
  top: 20px; /* 调整定位 */
  left: 10px; /* 调整定位 */
  padding: 10px 20px;
  /* background-color: hsla(160, 100%, 37%, 1); */
  color: white;
  /* text-decoration: none;
    border-radius: 5px; */
  transition: background-color 0.4s;
  display: flex;
  align-items: center;
}

.link-icon {
  width: 30px; /* 调整图标宽度 */
  height: 30px; /* 调整图标高度 */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.4));
}

.positioned-link:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
}

.image-container {
  flex: 1;
  justify-content: center;
  align-items: flex-start;
}

.about-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.text-container {
    flex: 1;
    background-color: #FEFDF9

};
</style>
