<script setup>
const supabase = useSupabaseClient()
const profiles = ref([]);

async function getProfiles() {
  const { data } = await supabase.from("profiles").select();
  profiles.value = data;
}

onMounted(() => {
  getProfiles();
});
</script>

<template>
  <div>
    data
    <ul>
      <li v-for="profile in profiles" :key="profile.id">
        {{ profile.id }}
        {{ profile.username }}
      </li>
    </ul>
  </div>
</template>