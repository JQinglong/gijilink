<script setup>
const colorMode = useColorMode()
const themes = [
  'light',
  'dark',
  'cupcake',
  'emerald',
  'retro',
  'valentine',
  'garden',
  'aqua',
  'pastel',
  'acid',
  'lemonade',
  'night',
  'winter'
]
const items = [
  {
    icon: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',//home
    title: 'ホーム',
    to: '/'
  },
  // {
  //   icon: 'mdi-apps',
  //   title: 'memo',
  //   to: '/memo'
  // },
  {
    icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',//forum
    title: '会議体検索',
    to: '/council'
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',//account
    title: '構成員検索',
    to: '/person'
  },
  {
    icon: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155',//comment
    title: '議事検索',
    to: '/speech'
  }
  // {
  //   icon: 'mdi-bookmark',
  //   title: '後で見る',
  //   to: '/later'
  // }
]
const adminitems = [
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'データメンテナンス',
    to: '/admin'
  },
  {
    icon: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z',
    title: 'help',
    to: '/lp'
  }
  // {
  //   icon: 'mdi-cogs',
  //   title: 'システム設定',
  //   to: '/system/'
  // },
]

</script>

<template>
  <div>
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300 p-0">
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer"
          aria-label="open sidebar"
          class="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">議事録リンク - Giji Link</a>
      </div>
      <div class="flex-none">
        <div class="p-2 flex gap-4">
          <select v-model="colorMode.preference" class="select w-full max-w-xs">
            <option disabled selected>
              Theme
            </option>
            <option v-for="theme of themes" :key="theme">
              {{ theme }}
            </option>
          </select>
        </div>
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img alt="User Settings">
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between"> Profile </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Drawer -->
    <div class="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" class="drawer-toggle">
      <div class="drawer-content flex flex-col p-2">
        <!-- pagesの呼び出し -->
        <slot />
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="menu p-4 w-64 min-h-full bg-base-200">
          <!-- Normal Menu -->
          <li v-for="(item, i) in items" :key="i">
            <NuxtLink :to="{path: item.to }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="item.icon"
                />
              </svg>
              {{
                item.title
              }}
            </NuxtLink>
          </li>
          <!-- Admin Menu -->
          <li v-for="(item, i) in adminitems" :key="i">
            <NuxtLink :to="{path: item.to }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="item.icon"
                />
              </svg>
              {{
                item.title
              }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <nav class="grid grid-flow-col gap-4">
        <NuxtLink to="/about">
          About us
        </NuxtLink>
        <a class="link link-hover">Terms of use</a>
      </nav>
      <aside>
        <p>
          Copyright &copy; {{ new Date().getFullYear() }} - All right reserved
          by JQ
        </p>
      </aside>
    </footer>
  </div>
</template>
