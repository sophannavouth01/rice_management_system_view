<template>
  <div class="full-screen-bg relative w-screen h-screen overflow-hidden">
    <div
      class="card w-[750px] h-[400px] bg-white rounded-md border-[1px] border-[#d0f3db] absolute bottom-20 right-10 shadow-md shadow-[#D6D6D6]">
      <div class="grid grid-cols-3 grid-rows-3 gap-4 p-4">
        <div class="flex justify-center items-center">
          <div class="w-[217px] h-[190px] ">
            <img class="w-full h-full" src="../assets/logo.png" alt="logo">
          </div>
        </div>
        <div class="col-span-2">
          <h5 class="moul-regular text-center py-4 text-[25px] text-[#00992B]">ប្រព័ន្ធគ្រប់គ្រងប្រតិបត្តិការអង្ករ</h5>
          <div class="max-w-sm mx-auto mt-4 ">
            <div class="relative">
              <select id="branches"
                class="bg-gray-50 border border-gray-300 text-[#848484] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none pr-10">
                <option class="siemreap-regular text-[14px]">សូមជ្រើសរើសសាខា..........</option>
                <option  class="siemreap-regular text-[14px]">បាត់ដំបង</option>
                <option class="siemreap-regular text-[14px]">បន្ទាយមានជ័យ	</option>
                <option class="siemreap-regular text-[14px]">មណ្ឌលគិរី	</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-5 h-5 text-[#848484]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="max-w-sm mx-auto my-5">
            <div class="relative">
              <select id="accounts"
                class="bg-gray-50 border border-gray-300 text-[#848484] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none pr-10">
                <option class="siemreap-regular text-[14px]">សូមជ្រើសរើសគណនី​..........</option>
                <option>ABA</option>
                <option>Aceleda</option>
                <option>PPCBank</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-5 h-5 text-[#848484]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <form class="max-w-sm mx-auto">
            <div class="mb-5">
              <input type="password" id="password"
                class="bg-gray-50 border border-gray-300 text-[#848484] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="លេខសម្ងាត់​.........." required />
            </div>
          </form>
          <div class="mt-16    mx-11">
            <button @click="navigateToOtherPage" class="moul-regular text-white rounded-md w-full py-[10px] text-[20px] bg-[#00992B]">ចូលទៅកាន់ប្រព័ន្ធ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullScreenBackground',
  methods: {
    navigateToOtherPage() {
      this.$router.push({ name: 'dashboard' });
    },
  },
};
</script>

<style scoped>
.full-screen-bg {
  background-image: url('../assets/backgroud.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.moul-regular {
  font-family: "Moul", serif;
  font-weight: 400;
  font-style: normal;
}

.siemreap-regular {
  font-family: "Siemreap", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
