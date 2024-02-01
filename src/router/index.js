import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SigninView.vue"),
    },
    {
      path: "/signout",
      name: "signout",
      component: () => import("../views/SignoutView.vue"),
    },
    {
      path: "/mypage",
      name: "MyPostpage",
      component: () => import("../views/MyPostpage.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

// 認証していない場合はログイン画面にリダイレクト
router.beforeEach(async (to, from, next) => {
  // record.meta.requiresAuthはルートのメタフィールドで、ルートが認証を必要かどうかのboolを返す
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.warn("auth required");
    const auth = getAuth();

    // onAuthStateChangedの結果を待つPromise
    const authStateChangedPromise = new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        resolve(user);
      });
    });

    // 結果を待つ
    const user = await authStateChangedPromise;

    if (user) {
      next(); // 認証が完了したら
    } else {
      // 認証されていない場合はログインページにリダイレクト
      next("/signin");
    }
  } else {
    console.log("auth not required");
    // requiresAuthメタが設定されていない場合はそのまま進む
    next();
  }
});

export default router;
