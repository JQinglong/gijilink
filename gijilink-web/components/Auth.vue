<script setup>
const supabase = useSupabaseClient()
const config = useRuntimeConfig()
const { auth } = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const options = {
      emailRedirectTo: config.public.baseUrl
    }
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options
    })
    if (error) { throw error }
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <form class="row flex-center flex" @submit.prevent="handleLogin">
      <div class="col-6 form-widget">
        <h1 class="header">
          Supabase + Nuxt 3
        </h1>
        <p class="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            v-model="email"
            class="inputField input input-bordered w-full max-w-xs"
            type="email"
            placeholder="Your email"
          >
        </div>
        <div>
          <input
            type="submit"
            class="button btn btn-primary"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          >
        </div>
      </div>
    </form>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
        Sign in to your account
      </h2>
      <LoginCard>
        <UButton
          class="mt-3"
          icon="i-mdi-github"
          block
          label="Github"
          variant="black"
          @click="
            auth.signInWithOAuth({
              provider: 'github',
            })
          "
        />
      </LoginCard>
    </div>
  </div>
</template>
