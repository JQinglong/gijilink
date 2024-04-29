<script setup lang="ts">
interface Props {
    council: Object;
}

const props = defineProps<Props>()


</script>

<template>
    <div class="card card-side bg-base-100 shadow-xl">
        <figure><img src="" alt="Movie"/></figure>
        <div class="card-body">
            <h2 class="card-title">{{ council.name }}</h2>
            <p>{{ council.description }}</p>
            <div class="card-actions justify-end">
            <NuxtLink
              :to="{path: `/council/${council.id}/`}"
              class="btn btn-primary"
            >
            詳細を見る
            </NuxtLink>
            </div>
        </div>
    </div>
</template>
