<script setup lang="ts">
import { useCouncil } from '~/composables/useCouncil'

interface Props {
    councilId: string;
}
const props = defineProps<Props>()

const { getCouncil, council } = useCouncil()
getCouncil(props.councilId)

const externalLink = (url: string) => {
    if (url) {
        window.open(url, '_blank')
    }
}

</script>

<template>
    <div>

        <div class="card bg-base-100 shadow-xl">
            「CouncilInfo」
            <div class="card-body">
                <h2 class="card-title">{{ council.name }}</h2>
                <span class="badge">{{ council.ministry_id }}</span>
                <div class="card-actions justify-end">
                    <button @click="externalLink(council.url)" class="btn">
                        <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
                    </button>
                </div>
                <p>parentTree</p>
                <p>childTree</p>
                <p>{{ council.description }}</p>
                <div class="card-actions justify-end">
                    <button @click="editItem" class="btn">Edit</button>
                </div>
                <p>{{ council.description }}</p>
                <p>構成員</p>
                council-member-list

                <p>開催状況</p>
                <CouncilMeetingList />
            </div>

        </div>
        <div class="card bg-base-100 shadow-xl">
            <h2 class="card-title">この会議体へのリンク</h2>

        </div>
    </div>
</template>
