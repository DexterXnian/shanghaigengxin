<template>
  <div class="home">
    <!-- <h1>Welcome to the Mobile Page</h1> -->
    <!-- <button @click="showMessage">Click Me</button> -->
    <!-- <a @click="showMessage" href="#">??</a> -->
    <!-- <a href="/About" class="positioned-link">
      <img src="../assets/place.png" alt="Icon" class="link-icon" />
    </a> -->
    <router-link to="/about" class="positioned-link">
        <div>
            <img src="../assets/place.png" alt="Icon" class="link-icon" />
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    showMessage() {
      alert("Hello, this is a mobile page!");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: url("../assets/640.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  font-size: 24px;
  color: #333;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}
.link-icon {
  width: 30px; /* 调整图标宽度 */
  height: 30px; /* 调整图标高度 */
}

.positioned-link:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
}
</style>
