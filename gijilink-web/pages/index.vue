<template>
  <div class="flex flex-row">
    <div class="basis-3/4">
      <div>
        <h1>Index page</h1>
        <NuxtLink to="lp">
          landing page
        </NuxtLink>
        <a href="/lp">LP</a>
        <NuxtLink to="/about">
          About
        </NuxtLink>
        <!-- Page content here -->
        <Account v-if="user" />
        <Auth v-else />
        <Database />
        <CouncilMeetingList />
        <div class="flex flex-col p-4">
          <h1 class="md:text-xl mb-5 font-bold">
            Buttons
          </h1>
          <div class="flex space-x-5 overflow-scroll">
            <button class="btn">
              Button
            </button>
            <button class="btn btn-primary">
              Button
            </button>
            <button class="btn btn-secondary">
              Button
            </button>
            <button class="btn btn-accent">
              Button
            </button>
            <button class="btn btn-ghost">
              Button
            </button>
            <button class="btn btn-link">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="basis-1/4">
      02
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
console.log('user', user)// eslint-disable-line no-console
</script>
