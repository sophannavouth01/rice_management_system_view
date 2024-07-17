<template>
	<div class="bg-white h-screen ">
		<p class="p-5 text-lg font-semibold underline text-[#00992B]">ប្រមូលលុយថ្លៃអង្ករ</p>
		<div class="flex justify-between px-5 py-3">
			<div class=" ">
				
				<input type="text" id="table-search" v-model="searchQuery"
					class="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search for Name" @input="searchTable" />
			</div>
			<div class="order-last ">
				<button class="px-4 py-2 bg-[#00992B] rounded-md text-white mx-5">Update</button>
				<button class="px-4 py-2 bg-[#00992B] rounded-md text-white">Add</button>
			</div>
		</div>

		<div class=" overflow-x-auto shadow-md sm:rounded-lg px-5 pb-5 ">
			<table class="w-full border-collapse border rounded-lg  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="p-4">
							<div class="flex items-center">
								<input id="checkbox-all-search" type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
								<label for="checkbox-all-search" class="sr-only">checkbox</label>
							</div>
						</th>
						<th scope="col" class="px-6 py-3 border border-gray-200">Farmer Name</th>
						<th scope="col" class="px-6 py-3 border border-gray-200">Rice Type</th>
						<th scope="col" class="px-6 py-3 border border-gray-200">Amount (Kg)</th>
						<th scope="col" class="px-6 py-3 border border-gray-200">Price per Kg ($)</th>
						<th scope="col" class="px-6 py-3 border border-gray-200">Total ($)</th>
						<th scope="col" class="px-6 py-3 border border-gray-200">Action</th>
					</tr>
				</thead>
				<tbody  >
					<tr v-for="item in filteredItems" :key="item.id"
						class="bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td class="w-4 p-4 border border-gray-200">
							<div class="flex items-center">
								<input :id="'checkbox-table-search-' + item.id" type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
								<label :for="'checkbox-table-search-' + item.id" class="sr-only">checkbox</label>
							</div>
						</td>
						<td scope="row" class="px-6 py-4  border border-gray-200  ">
							{{item.farmer }}
						</td>
						<td class="px-6 py-4 border border-gray-200">{{ item.riceType }}</td>
						<td class="px-6 py-4 border border-gray-200">{{ item.amount }}</td>
						<td class="px-6 py-4 border border-gray-200">{{ item.pricePerKg }}</td>
						<td class="px-6 py-4 border border-gray-200">{{ (item.amount * item.pricePerKg).toFixed(2) }}</td>
						<td class="flex items-center px-6 py-4  border-gray-200">
							<i class="fa-regular fa-pen-to-square text-blue-600"></i>
							<i class="fa-solid fa-trash-arrow-up px-5 text-red-600"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const items = ref([
  { id: 1, farmer: 'John Doe', riceType: 'Basmati', amount: 50, pricePerKg: 1.5 },
  { id: 2, farmer: 'Jane Smith', riceType: 'Jasmine', amount: 30, pricePerKg: 2.0 },
  { id: 3, farmer: 'Peter Brown', riceType: 'Brown Rice', amount: 20, pricePerKg: 2.5 },
  { id: 4, farmer: 'Alice Green', riceType: 'Long Grain', amount: 25, pricePerKg: 1.8 },
  { id: 5, farmer: 'Bob White', riceType: 'Medium Grain', amount: 40, pricePerKg: 2.1 },
  { id: 6, farmer: 'Charlie Black', riceType: 'Short Grain', amount: 35, pricePerKg: 1.9 },
  { id: 7, farmer: 'Diana Blue', riceType: 'Wild Rice', amount: 15, pricePerKg: 3.0 },
  { id: 8, farmer: 'Eve Red', riceType: 'Sushi Rice', amount: 45, pricePerKg: 2.2 },
  { id: 9, farmer: 'Frank Yellow', riceType: 'Arborio', amount: 60, pricePerKg: 2.8 },
//   { id: 10, farmer: 'Grace Pink', riceType: 'Sticky Rice', amount: 55, pricePerKg: 1.6 },
//   { id: 11, farmer: 'Hank Purple', riceType: 'Pudding Rice', amount: 50, pricePerKg: 1.7 },
//   { id: 12, farmer: 'Ivy Orange', riceType: 'Parboiled Rice', amount: 35, pricePerKg: 2.3 },
//   { id: 13, farmer: 'Jack Brown', riceType: 'Basmati', amount: 20, pricePerKg: 1.5 },
//   { id: 14, farmer: 'Karen White', riceType: 'Jasmine', amount: 25, pricePerKg: 2.0 },
//   { id: 15, farmer: 'Leo Gray', riceType: 'Brown Rice', amount: 30, pricePerKg: 2.5 },
//   { id: 16, farmer: 'Mia Black', riceType: 'Long Grain', amount: 40, pricePerKg: 1.8 },
//   { id: 17, farmer: 'Nina Blue', riceType: 'Medium Grain', amount: 45, pricePerKg: 2.1 },
//   { id: 18, farmer: 'Owen Red', riceType: 'Short Grain', amount: 50, pricePerKg: 1.9 },
//   { id: 19, farmer: 'Paul Yellow', riceType: 'Wild Rice', amount: 55, pricePerKg: 3.0 },
//   { id: 20, farmer: 'Quincy Green', riceType: 'Sushi Rice', amount: 60, pricePerKg: 2.2 },
]);

const filteredItems = ref([...items.value]);

const searchTable = () => {
	filteredItems.value = items.value.filter(item =>
		item.farmer.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
		item.riceType.toLowerCase().includes(searchQuery.value.toLowerCase())
	);
};
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>