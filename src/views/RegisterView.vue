<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="auto" class="bg-grey-lighten-3">
        <v-container fluid>
          <v-btn size="x-small" icon="mdi-arrow-left-thick" variant="tonal" @click="goBack">
            
          </v-btn>

          <div class="my-5">
            <h3>เงื่อนไขการสมัคร</h3>
            <div style="margin-left: 2em" class="mt-3">
              <ul>
                <li>หากเป็นนักเรียนต้องได้รับอนุญาติจากผู้ปกครอง</li>
              </ul>
            </div>
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" md="">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdm47kvTGXiyuBMokg0wX0x79J0BqFhi4PDbTlKtSOviGBhBw/viewform?embedded=true"
          style="height: 97vh; width: 100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >กำลังโหลด…</iframe
        >
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style></style>
