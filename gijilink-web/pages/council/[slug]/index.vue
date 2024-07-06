<script setup>
const route = useRoute()
const slug = route.params.slug

</script>

<template>
  <div>
    <!-- 会議体情報 -->
    会議体情報
    <CouncilInfo :councilId="slug" />
  </div>
</template>
