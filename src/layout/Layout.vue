<template>
	<div :class="['bg-[#FAFAFA]', { 'collapsed': isCollapsed }]">
	  <div class="grid grid-cols-5 gap-5 h-screen">
		<!-- sidebar -->
		<div :class="['bg-[#FFFFFF]', 'custom-shadow-right', { 'w-20': isCollapsed }]">
		  <div @click="toggleSidebar" class="w-full my-5 h-auto flex justify-center cursor-pointer">
			<img class="w-[121px] h-[105px]" src="../assets/logo.png" alt="">
		  </div>
		  <router-link to="/dashboard" v-if="!isCollapsed" class="cursor-pointer hover:bg-[#00992B] text-[#00992B] hover:text-white rounded-s-md ml-[20px] flex group relative"> 
			<div class="p-[10px] w-[50px]">
			  <i class="fa-solid fa-house-chimney text-[20px]"></i>
			</div>
			<div class="py-[10px] mx-[10px]">
			  <p class="siemreap-regular text-[16px]">ទំព័រដើម</p>
			</div>
		</router-link>
		  <div v-for="(item, index) in menuItems" :key="index" class="menu-item mt-5 cursor-pointer hover:bg-[#00992B] text-[#00992B] hover:text-white rounded-s-md ml-[20px] flex group relative">
			<div class="p-[10px] w-[50px] flex-none">
			  <i :class="item.iconClass"></i>
			</div>
			<div v-if="!isCollapsed" class="py-[10px] mx-[10px] grow">
			  <p class="siemreap-regular text-[16px]">{{ item.label }}</p>
			</div>
			<div v-if="!isCollapsed" class="py-[10px] mx-[10px] flex-none chevron-right">
			  <i class="fa-solid fa-chevron-right text-[20px]"></i>
			</div>
			<div v-if="item.submenu.length && !isCollapsed" class="w-[400px] hidden absolute left-full top-0 bg-[#00992B] text-white rounded-e-md shadow-lg group-hover:block ">
			  <router-link v-for="(subitem, subindex) in item.submenu" :key="subindex" :to="subitem.route" class="submenu-item hover:bg-[#e8eae8] hover:text-black flex">
				<div class="w-[50px] px-[20px] py-[10px]">
				  <i :class="subitem.iconClass"></i>
				</div>
				<div class="px-[20px] py-[10px] w-auto">
				  <p class="siemreap-regular text-[16px]">{{ subitem.label }}</p>
				</div>
			  </router-link>
			</div>
		  </div>
		  <div class="my-5 cursor-pointer bg-[#EC0404] hover:bg-[#e25252] text-white hover:text-white rounded-s-md ml-[20px] flex group relative">
			<div class="p-[10px] w-[50px] flex-non">
			  <i class="fa-solid fa-arrow-left text-[20px]"></i>
			</div>
			<router-link to="/" v-if="!isCollapsed" class="py-[10px] mx-[10px] grow">
			  <p class="siemreap-regular text-[16px]">ចាកចេញ</p>
			</router-link>
			
		  </div>
		</div>
		<!-- content -->
		<div class="col-span-4">
		  <div class="m-5 rounded-sm flex justify-between bg-white">
			<div class="flex gap-5 py-5 px-5">
			  <p class="text-[#00992B] text-[13px] hidden md:block font-semibold">7:00AM</p>
			  <p class="text-[#00992B] text-[13px] hidden md:block font-semibold">20-December-2023</p>
			  <p class="text-[#EC0404] text-[13px] hidden md:block font-semibold">Update!!</p>
			</div>
			<div class="flex gap-5 py-5 px-5">
			  <p class="text-[#EBB800] text-[13px] hidden md:block font-semibold">Latest Version</p>
			  <p class="text-[#00992B] text-[13px] font-semibold">ZhangYiMing</p>
			</div>
		  </div>
		  <div class="m-5 h-auto ">
			<router-view></router-view>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import {  RouterView } from 'vue-router'

  export default {
	components: {
    RouterView
  },
	data() {
	  return {
		isCollapsed: false,
		menuItems: [
		  {
			label: 'ប្រតិបត្តិការប្រមូលលុយ',
			iconClass: 'fa-solid fa-circle-dollar-to-slot text-[25px]',
			submenu: [
			  {
				label: 'ប្រមូលលុយថ្លៃអង្ករ',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/collectricefees'
			  },
			  {
				label: 'ទូទាត់ប្រាក់កម្រៃ',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/pay-commissions'
			  },
			  {
				label: 'ចំណាយបន្ថែម',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/additional-expenses'
			  },
			  {
				label: 'លុយសរុបជាក់ស្តែង',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/total-actual-money'
			  },
			  {
				label: 'ដកលុយ',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/withdraw-money'
			  },
			  {
				label: 'របាយការណ៍ភ្នាក់ងារ',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/agent-reports'
			  },
			  {
				label: 'បញ្ជីឈ្មោះអតិថិជនដែលត្រូវប្រមូល',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/customer-collection-list'
			  }
			],
		  },
		  {
			label: 'ត្រួតពិនិត្យ',
			iconClass: 'fa-solid fa-clipboard-check text-[25px]',
			submenu: [
			  {
				label: 'ប្រមូលលុយថ្លៃអង្ករ',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/collect-rice-fees'
			  },
			  {
				label: 'លុយសរុបជាក់ស្តែង',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/total-actual-money'
			  },
			],
		  },
		  {
			label: 'រោងម៉ាស៊ីន',
			iconClass: 'fa-solid fa-building-wheat text-[20px]',
			submenu: [
			  {
				label: 'ស្តុកអង្ករនៅក្នុងរោងម៉ាស៊ីន',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/factory-rice-stock'
			  },
			  {
				label: 'ដក និងបែងចែក',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/withdraw-and-distribute'
			  },
			  {
				label: 'ទិញអង្ករ',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/buy-rice'
			  },
			  {
				label: 'ទិន្ន័យរោងម៉ាស៊ីន និងចំនួនអង្គដែលបានទិញ',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/factory-data-and-purchased-rice'
			  },
			],
		  },
		  {
			label: 'ភ្នាក់ងារភូមិ',
			iconClass: 'fa-solid fa-users text-[20px]',
			submenu: [
			  {
				label: 'ទិន្នន័យភ្នាក់ងារ ',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/agent-data'
			  },
			  {
				label: 'កិច្ចសន្យាជាមួយភ្នាក់ងារ',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/agent-contracts'
			  },
			
			],
		  },
		  {
			label: 'អតិថិជន',
			iconClass: 'fa-solid fa-users text-[20px]',
			submenu: [
			  {
				label: 'ឈ្មោះអតិថិជន',
				iconClass: 'fa-solid fa-money-bill-wheat text-[25px]',
				route: '/customer-names'
			  }
			],
		  },
		  {
			label: 'ស្តុកអង្ករ',
			iconClass: 'fa-solid fa-warehouse text-[20px]',
			submenu: [],
			route: '/rice-stock'
		  },
		  {
			label: 'បុគ្គលិក',
			iconClass: 'fa-solid fa-user-tie text-[25px]',
			submenu: [
			  {
				label: 'ទិន្នន័យបុគ្គលិក',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/employee-data'
			  },
			  {
				label: 'ការបើកប្រាក់ខែ',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/payroll'
			  },
			],
		  },
		  {
			label: 'របាយការណ៍',
			iconClass: 'fa-solid fa-clipboard-list text-[20px]',
			submenu: [],
			route: '/reports'
		  },
		  {
			label: 'ការកំណត់',
			iconClass: 'fa-solid fa-gear text-[20px]',
			submenu: [
			  {
				label: 'អ្នកប្រើប្រាស់',
				iconClass: 'fa-solid fa-file-signature text-[25px]',
				route: '/users'
			  },
			//   {
			// 	label: 'System Update',
			// 	iconClass: 'fa-solid fa-file-signature text-[25px]',
			// 	route: '/system-update'
			//   },
			],
		  },
		],
	  };
	},
	methods: {
	  toggleSidebar() {
		this.isCollapsed = !this.isCollapsed;
	  },
	},
  };
  </script>
  
  <style>
  .custom-shadow-right {
	box-shadow: 5px 0 10px -5px #F5F5F5;
  }
  
  .siemreap-regular {
	font-family: "Siemreap", sans-serif;
	font-weight: 400;
	font-style: normal;
  }
  
  .collapsed .grid-cols-5 {
	grid-template-columns: 80px 1fr;
  }
  
  .collapsed .sidebar {
	width: 80px;
  }
  
  .collapsed .submenu {
	display: none;
  }
  
  .menu-item:hover .hidden-chevron {
	display: block;
  }
  
  .hidden-chevron {
	display: none;
  }
  
  .submenu {
	display: none;
	transition: all 0.2s ease-in-out;
  }
  
  .menu-item:hover .submenu {
	display: block;
  }
  
  .menu-item:hover .chevron-right {
	display: none;
  }
  
  .group:hover .submenu {
	display: block;
  }
  </style>
  