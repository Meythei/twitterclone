<template>
  <div>
    <h1>Sign in</h1>
    <button @click="signInWithGoogle" class="c-button">ログインする</button>
  </div>
</template>

<script>
import { GoogleAuthProvider, signInWithRedirect, getAuth } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = getAuth();
function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
    .then((result) => {
      console.log(result);
      router.push("/login");
    })
    .catch((e) => {
      console.log(e);
    });
}

export default {
  name: "singinView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signInWithGoogle,
  },
};
</script>
