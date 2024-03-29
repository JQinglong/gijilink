<script setup>
definePageMeta({
  layout: 'lp'
})
</script>
<template>
  <div>
    <div class="hero min-h-80 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-lg">
          <h1 class="text-5xl font-bold">
            議事録リンク - Giji Link
          </h1>
          <p class="py-6">
            専門家による会議の議事録は貴重な財産です。<br>
            政策がどう決まっていくのか、見てみましょう。<br>
          </p>
          <p class="py-6">
            <NuxtLink
              to="/"
              class="btn btn-primary"
            >
              サービスを利用する
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl m-8">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          どんな会議体があるのか
        </h2>
        <p class="text-left">
          政府は、政策決定そのた行政運営のための様々な会議体を開催しています。<br>
          審議会、懇談会、専門家会議、などなど、様々な会議体が存在します。<br>
          そして、これらは省庁ごとに組織されているため、網羅的にみることはできないと思います。<br>
          本サイトは、どんな会議体がどんな活動をしているのかを見やすく提示することを目的としています。
        </p>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl m-8">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          会議体にはどんな立場の人が参加しているのか
        </h2>
        <p class="text-left">
          多様な意見を収集するために、会議体には様々な立場の人が参加していると思います。<br>
          どの人が、どんな立場で参加し、意見を出しているのか、確認できるように参加者リストを提供します。<br>
          参加者の公開情報もリンクし、立場、背景を理解できるようにします。
        </p>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl m-8">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          この人は、どの会議に参加しているのか
        </h2>
        <p class="text-left">
          参加者の中には、複数の様々な会議体に参加している人もいます。<br>
          参加者と会議体のリンクを作ることで、人に着目した活動の追跡もできるようにします。
        </p>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl m-8">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          議事録リンク
        </h2>
        <p class="text-left">
          議事の発言ごとにパーマリンクを提供します。<br>
          発言に着目して、さらに議論を深めることができ、その議論から本来の発言の文脈に戻ってくることができるようになります。
        </p>
      </div>
    </div>

    <div class="card card-side bg-base-100 shadow-xl m-8">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-16 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          市民による行政活動への参加のために
        </h2>
        <p class="text-left">
          結局のところこれは、市民による、行政の議論への参加のためのツールです。<br>
          会議体において、本当に多様な意見が反映されているのか、これを監視するところからでも行政活動への参加は始められます。<br>
          さらに、会議体への議論について討論をすることで、参加者への働きかけもできるようになるでしょう。<br>
          できることは色々あるはずです。
        </p>
      </div>
    </div>
  </div>
</template>
