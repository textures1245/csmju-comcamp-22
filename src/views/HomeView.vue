<template>
  <EventHeader :openRegister="true" />
  <div class="text-white bg-indigo-darken-3 py-10">
    <v-container>
      <!-- <h1 class="text-red text-center mb-10">
        ชอบ<u>โซตัส</u>ลงค่ายไอที
        <span class="text-white">เป็นกันเองกับพี่มาที่<u>คอมแคมป์</u></span>
      </h1> -->
      <v-row>
        <v-col md="7" class="my-auto">
          <h1>"คอมแคมป์" คืออะไร?</h1>
          <p class="mt-3" style="text-indent: 0.5in; text-align: justify">
            ค่ายยุวชนคอมพิวเตอร์ หรือ คอมแคมป์ สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
            เป็นกิจกรรมที่จัดขึ้นโดยสาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
            เพื่อเปิดโอกาสให้น้องๆที่สนใจในสาขาวิทยาการคอมพิวเตอร์ได้มีโอกาสเรียนรู้และฝึกฝนทักษะด้านคอมพิวเตอร์อย่างสนุกสนานเป็นเวลา
            3 วัน 2 คืน โดยในปี พ.ศ. 2567 จัดขึ้นระหว่างวันที่ 2-4 กุมภาพันธ์ ณ มหาวิทยาลัยแม่โจ้
            จังหวัดเชียงใหม่
          </p>
        </v-col>
        <v-col cols="12" md="5">
          <v-carousel style="height: 300px" show-arrows="hover" hide-delimiters>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- <div class="bg-yellow-darken-1">
    <v-container class="py-10">
      <h1>ต้องเตรียมอะไรบ้าง?</h1>
      <v-row class="mt-2">
        <v-col cols="12" sm="4" class="d-flex flex-column py-4 text-center">
          <v-icon icon="mdi-laptop" class="ma-auto" style="font-size: 100px"></v-icon>
          <h3>คอมพิวเตอร์โน๊ตบุ๊ค</h3>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex flex-column py-4 text-center">
          <v-icon icon="mdi-cellphone-text" class="ma-auto" style="font-size: 76px"></v-icon>
          <h3>โทรศัพท์มือถือ (Iphone เท่านั้น)</h3>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex flex-column py-4 text-center">
          <v-icon icon="mdi-note-edit" class="ma-auto" style="font-size: 90px"></v-icon>
          <h3>โทรศัพท์มือถือ (Iphone เท่านั้น)</h3>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
  <SponsoredCC />
</template>
<script>
import EventHeader from "@/components/EventHeader.vue";
import EndEventHeader from "@/components/EndEventHeader.vue";
import SponsoredCC from "@/components/SponsoredCC.vue";
export default {
  components: {
    EventHeader,
    EndEventHeader,
    SponsoredCC
  },
};
</script>
<style></style>
