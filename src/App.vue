<script setup>
import AddRecipe from './components/AddRecipe.vue'
import axios from 'axios'
import { computedAsync } from '@vueuse/core'

const recipies = computedAsync(
    async () => {
        const res = await axios.get('/recipe')
        return [JSON.parse(res.data), []]
    }
)
</script>

<template>
<div class="flex flex-column w-full h-full justity-content-center align-items-center">
    <AddRecipe/>
  <PickList class="w-full" v-model="recipies">
      <template #sourceheader> Available </template>
      <template #targetheader> Selected </template>

      <template #item="slotProps">
        <span class="font-bold">{{ slotProps.item.title }}</span>
      </template>
  </PickList>
</div>
</template>