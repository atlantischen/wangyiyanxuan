export default [{
    path: "/home",
    component: () => import("../pages/Home/Home.vue"),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/category",
    component: () => import("../pages/Category/Category.vue"),
    meta: {
      isShowFooter: true
    }

  },
  {
    path: "/buy",
    component: () => import("../pages/Buy/Buy.vue"),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/cart",
    component: () => import("../pages/Cart/Cart.vue"),
    meta: {
      isShowFooter: true
    }
  },
  {
    path: "/profile",
    name:'profile',
    component: () => import("../pages/Profile/Profile.vue")
  },
  {
    path: "/login",
    component: () => import("../pages/Login/Login.vue")
  },
   {
     path: "/search",
     component: () => import("../pages/Search/Search.vue")
   },
  {
    path: "/",
    redirect: "/home"
  }
];