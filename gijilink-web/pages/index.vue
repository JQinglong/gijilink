<script setup>
import MinistrySelect from '~/components/ministry/MinistrySelect.vue'

const user = useSupabaseUser()
console.log('user', user)// eslint-disable-line no-console
</script>

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
        「CouncilListHot」
        <CouncilListHot />
        「MinistrySelect」
        <MinistrySelect />
        <Account v-if="user" />
        <Auth v-else />
        「Database」
        <Database />
        「CouncilMeetingList」
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
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            みんなの検索ランキング
          </h2>
          <ul class="menu bg-base-200 rounded-none">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            開発者からのお知らせ
          </h2>
          <ul class="menu bg-base-200 rounded-none">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
