<script setup lang="ts">
import { useCouncil } from '~/composables/useCouncil'

interface Props {
    councilId: string;
}
const props = defineProps<Props>()

const {getCouncil, council } = useCouncil()
getCouncil()



</script>

<template>
    <div>
        「CouncilInfo」
        <h3 class="title grow">{{ council }}</h3>

    </div>
</template>
