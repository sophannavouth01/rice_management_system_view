import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Admin/Dashboard/Dashboard.vue";
import layoutView from '../layout/Layout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", 
      name: "/login",
      component: () => import("../views/Admin/Auth/Loginform.vue"),

    },      
    
    
    {
      path: "/dashboard",
      name: "dashboard",
      component: layoutView,
      redirect: `/dashboard`,
      children: [
        {
          path: "/dashboard",
          name: "maindashboard",
          component: Dashboard,
          redirect: () => `/dashboard`,
          children: [
            {
              path: "/dashboard",
              name: "dashboard",
              component: () =>
                import("../views/Admin/Dashboard/MainDashboard.vue"),
            }
            
          ],
        },
        
      ],
    },
    {
      path: "/CollageMoney",
      name: "collageMoney",
      children: [
        {
          path: "/CollageMoney",
          name: "collageMoney",
          component: layoutView,
          children: [
            {
              path: "/collectricefees",
              name: "collectricefees",
              component: () =>
                import("../views/Admin/CollageMoney/CollectRiceFees.vue"),
            },
            {
              path: "/pay-commissions",
              name: "pay-commissions",
              component: () =>
                import("../views/Admin/CollageMoney/PayCommissions.vue"),
            }
          ],
        },
        
      ],
    },
    {
      path: "/control",
      name: "control",
      children: [
        {
          path: "/control",
          name: "control",
          component: layoutView,
          children: [
            {
              path: "/collect-rice-fees",
              name: "collect-rice-fees",
              component: () =>
                import("../views/Admin/Control/CollectRiceFees.vue"),
            },
            {
              path: "/total-actual-money",
              name: "total-actual-money",
              component: () =>
                import("../views/Admin/Control/TotalActualMoney.vue"),
            }
          ],
        },
        
      ],
    },
    {
      path: "/factory",
      name: "factory",
      children: [
        {
          path: "/factory",
          name: "factory",
          component: layoutView,
          children: [
            {
              path: "/factory-rice-stock",
              name: "factory-rice-stock",
              component: () =>
                import("../views/Admin/Factory/FactoryRiceStock.vue"),
            },
            {
              path: "/withdraw-and-distribute",
              name: "withdraw-and-distribute",
              component: () =>
                import("../views/Admin/Factory/WithdrawAndDistribute.vue"),
            },
            {
              path: "/buy-rice",
              name: "buy-rice",
              component: () =>
                import("../views/Admin/Factory/BuyRice.vue"),
            },
            {
              path: "/factory-data-and-purchased-rice",
              name: "factory-data-and-purchased-rice",
              component: () =>
                import("../views/Admin/Factory/FactoryDataAndPurchasedRice.vue"),
            }
          ],
        },
        
      ],
    },
    {
      path: "/agent",
      name: "agent",
      children: [
        {
          path: "/agent",
          name: "agent",
          component: layoutView,
          children: [
            {
              path: "/agent-data",
              name: "agent-data",
              component: () =>
                import("../views/Admin/Agent/AgentData.vue"),
            },
            {
              path: "/agent-contracts",
              name: "agent-contracts",
              component: () =>
                import("../views/Admin/Agent/AgentContracts.vue"),
            }
          ],
        },
        
      ],
    },
    {
      path: "/customer",
      name: "customer",
      children: [
        {
          path: "/customer-names",
          name: "customer-names",
          component: layoutView,
          children: [
            {
              path: "/customer-names",
              name: "customer-names",
              component: () =>
                import("../views/Admin/Customer/CustomerName.vue"),
            },
           
          ],
        },
        
      ],
    },

    {
      path: "/staff",
      name: "staff",
      children: [
        {
          path: "/staff",
          name: "staff",
          component: layoutView,
          children: [
            {
              path: "/employee-data",
              name: "employees",
              component: () =>
                import("../views/Admin/Staff/Employee.vue"),
            },
            {
              path: "/payroll",
              name: "payroll",
              component: () =>
                import("../views/Admin/Staff/Payroll.vue"),
            }
          ],
        },
        
      ],
    },
    {
      path: "/setting",
      name: "setting",
      children: [
        {
          path: "/setting",
          name: "setting",
          component: layoutView,
          children: [
            {
              path: "/users",
              name: "users",
              component: () =>
                import("../views/Admin/Setting/Users.vue"),
            },
           
          ],
        },
        
      ],
    },
   
  ]
})

export default router
