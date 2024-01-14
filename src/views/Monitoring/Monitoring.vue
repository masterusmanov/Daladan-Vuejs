<template>
    <div class="container mx-auto text-[#212121] px-4 2xl:px-0">
        <h1 class="font-[700] text-[28px] line-height-[130%] font-custom my-[32px]">Monitoring</h1>
        <div class="px-12 py-[20px] rounded-[18px] bg-[#FAFAFA]">
            <div class="flex justify-between items-center">
                <h1 class="text-[24px] font-[700] font-custom">Kunlik</h1>
                <select name="time" id="" class="outline-none bg-[#25B679] text-white px-[24px] py-[11px] rounded-[8px]">
                    <option value="date">Kunlik</option>
                    <option value="week">Haftalik</option>
                    <option value="month">Oylik</option>
                </select>
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                    </div>
                    <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                </div>
            </div>
            <div class="container mx-auto mt-[24px]">
               <Chart/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Chart from '../../components/Chart/Chart.vue'
    import Datepicker from 'flowbite-datepicker/Datepicker';
</script>

<style lang="scss" scoped>

</style>