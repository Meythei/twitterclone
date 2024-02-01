<template>
  <div>
    <h1>Sign out</h1>
    <button @click="singout">ログアウト</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "singoutView",
  methods: {
    singout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          const router = useRouter();
          router.push("/signin");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
