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
          <li>
            <a>
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <NuxtLink to="/lp">Landing</NuxtLink>
            </a>
          </li>
          <li>
            <a>
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Item 1
            </a>
          </li>
          <li>
            <NuxtLink to="/admin/">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              データメンテナンス
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
</script>
