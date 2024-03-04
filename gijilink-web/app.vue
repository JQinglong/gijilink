<script setup>
const user = useSupabaseUser();
console.log('user', user)

const colorMode = useColorMode();
const themes = [
  "light",
  "dark",
  "cupcake",
  "emerald",
  "retro",
  "valentine",
  "garden",
  "aqua",
  "pastel",
  "acid",
  "lemonade",
  "night",
  "winter",
];
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
            ></path>
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">議事録リンク - Giji Link</a>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
      <div class="flex-none">
        <div class="p-2 flex gap-4">
          <select class="select w-full max-w-xs" v-model="colorMode.preference">
            <option disabled selected>Theme</option>
            <option v-for="theme of themes" :key="theme">{{ theme }}</option>
          </select>
        </div>
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img alt="User Settings" />
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
    <div class="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col p-2">
        <!-- Page content here -->
        <Account v-if="user" />
        <Auth v-else />
        <div class="flex flex-col p-4">
          <h1 class="md:text-xl mb-5 font-bold">Buttons</h1>
          <div class="flex space-x-5 overflow-scroll">
            <button class="btn">Button</button>
            <button class="btn btn-primary">Button</button>
            <button class="btn btn-secondary">Button</button>
            <button class="btn btn-accent">Button</button>
            <button class="btn btn-ghost">Button</button>
            <button class="btn btn-link">Button</button>
          </div>
        </div>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-48 min-h-full bg-base-200">
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
              Item 2
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Item 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>