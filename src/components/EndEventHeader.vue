<template>
  <v-parallax cover style="height: 100vh;" src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/328526610_897705241430997_8560708285536405888_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_eui2=AeHF8qSvb4fvg7KlfzfLpXDA6sTyAkDaNTPqxPICQNo1Mw8I0X1-tefx71IfrD4VOwqJMPGOblSngXy24tbwQziX&_nc_ohc=huo83w3zR-gAX8fdoxB&_nc_ht=scontent.fbkk22-2.fna&oh=00_AfC6k7sYXYB3AwB55jEc_mtuXxXz_00JUMWYT2qgtTtjEg&oe=651C4DCA">
    <div class="main-section w-100 d-flex m-auto">
      <div class="ma-auto">
        <div class="section-title text-center">
          <!-- <h1 class="title animate__animated animate__zoomInDown">ComCamp 22</h1> -->
          <v-img :src="logo" height="200" class="mb-8"></v-img>
          <h2 class="subtitle animate__animated animate__zoomInDown">
            โครงการค่ายยุวชนคอมพิวเตอร์ครั้งที่ 22
          </h2>
          <h3 class="text-white mt-2 callout-showList animate__animated animate__zoomInUp">
            กิจกรรมนี้ได้สิ้นสุดลงแล้ว <br />
            ขอขอบคุณน้องๆทุกคนที่มาร่วมกิจกรรมค่ายยุวชนคอมพิวเตอร์ในครั้งนี้
          </h3>
          <div class="mt-5 animate__animated animate__fadeIn" style="animation-delay: 1.3s">
            <v-btn size="x-large" class="mx-1" color="blue" prependIcon="mdi-pen">
              ฝากข้อความถึงพี่ๆ
            </v-btn>
            <v-btn size="x-large" class="mx-1" color="indigo" appendIcon="mdi-arrow-right-thick">
              ประมวลภาพกิจกรรม
            </v-btn>
          </div>
        </div>
      </div>
      <vue-particles
        id="tsparticles"
        class="particle-behind"
        :particlesInit="particlesInit"
        :options="particlesOptions"
      />
    </div>
  </v-parallax>
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
  /* background: #311e70;
  background: linear-gradient(
    109.6deg,
    rgb(41, 125, 182) 3.6%,
    rgb(77, 58, 151) 51%,
    rgb(103, 55, 115) 92.9%
  ); */

  background: rgba(0, 0, 0, 0.6);
}

.section-title {
  position: relative;
  z-index: 2;
}

.particle-behind {
  position: absolute;
  top: 0;
  height: 100dvh;
  width: 100dvw;
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
