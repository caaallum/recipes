<script setup>
import AddRecipe from './components/AddRecipe.vue'
import axios from 'axios'
import { computedAsync } from '@vueuse/core'
import { useToast } from 'primevue/usetoast';

const toast = useToast()

const recipies = computedAsync(
  async () => {
    const res = await axios.get('/recipe')
    return [JSON.parse(res.data), []]
  }
)

const download = () => {
  toast.add({ severity: 'error', summary: 'Error', detail: 'Not done this yet', life: 3000 });
}
</script>

<template>
  <Toast />
  <div class="flex flex-column w-full h-full justity-content-center align-items-center">
    <div class="flex m-2 gap-3">
      <AddRecipe />
      <Button label="Download Shopping List" icon="pi pi-download" @click="download" />
    </div>
    <PickList class="w-full" v-model="recipies">
      <template #sourceheader> Available </template>
      <template #targetheader> Selected </template>

      <template #item="slotProps">
        <span class="font-bold">{{ slotProps.item.title }}</span>
      </template>
    </PickList>
  </div>
</template>