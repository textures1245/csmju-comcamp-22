<template>
 <!--  <v-app-bar app color="transparent" class="text-white" elevation="0">
    <v-spacer></v-spacer>
    <v-btn to="/">หน้าหลัก</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar> -->
  <div class="main-section w-100 d-flex m-auto">
    <div class="ma-auto">
      <div class="section-title text-center">
        <!-- <h1 class="title animate__animated animate__zoomInDown">ComCamp 22</h1> -->
        <v-img :src="logo" height="200" class="mb-8"></v-img>
        <h2 class="subtitle animate__animated animate__zoomInDown">
          โครงการค่ายยุวชนคอมพิวเตอร์ครั้งที่ 22
        </h2>
        <h3 class="text-white mt-2 callout-showList animate__animated animate__zoomInUp">
          สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
        </h3>
        <div class="mt-5 animate__animated animate__fadeIn" style="animation-delay: 1.3s">
          <v-btn size="x-large" color="indigo" appendIcon="mdi-arrow-right-thick"
            >ลงทะเบียนร่วมโครงการ</v-btn
          >
        </div>
      </div>
      <vue-particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
    </div>
  </div>
</template>
<script>
import { loadFull } from "tsparticles";
import mainParticle from "@/config/animation";
import logo from "@/assets/logo.png";

export default {
  setup() {
    const particlesInit = async (engine) => {
      //await loadFull(engine);
      await loadFull(engine);
    };
    return {
      particlesInit
    };
  },
  data() {
    return {
      particlesOptions: mainParticle,
      logo
    };
  }
};
</script>
<style scoped>
.main-section {
  height: 100dvh;
  /* background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(186, 235, 237, 1) 80%,
    rgba(163, 228, 231, 1) 100%
  ); */
  background: #311e70;
  background: linear-gradient(
    109.6deg,
    rgb(41, 125, 182) 3.6%,
    rgb(77, 58, 151) 51%,
    rgb(103, 55, 115) 92.9%
  );
}

.section-title {
  position: relative;
  z-index: 2;
}
.title {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 10px #fff;
}

.subtitle {
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 0 10px #fff;
}

.callout-showList {
  animation-delay: 0.4s;
}
</style>
