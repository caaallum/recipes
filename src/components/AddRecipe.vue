<script setup>
import { useField, useForm } from 'vee-validate'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AddIngredients from './AddIngredients.vue';

const formVisible = ref(false)

const ingredients = ref([])

const { handleSubmit } = useForm()

const { value: fieldTitleValue, errorMessage: fieldTitleError } = useField(
    'title',
    (v) => {
        if (!v) {
            return 'Title is required.'
        }
        return true
    }
)

const onSubmit = handleSubmit(async (values) => {
    axios.post('/recipe', {
        title: values.title,
        ingredients: ingredients
    })
})

const remove = (v) => {
    ingredients.value.splice(ingredients.value.indexOf(v), 1)
}
</script>

<template>
    <Button label="Add Recipe" severity="success" class="p-button-raised" @click="formVisible = true" />
    <Dialog v-model:visible="formVisible" :draggable="false" :modal="true" header="Add Recipe">
        <form ref="form" @submit="onSubmit" class="p-fluid pt-4">
            <div class="field">
                <span class="p-float-label">
                    <InputText id="title" :class="{ 'p-invalid': fieldTitleError }" aria-describedby="title-error"
                        v-model="fieldTitleValue" />
                    <label for="title">Title</label>
                </span>
                <small class="p-error" id="title-error">{{
                    fieldTitleError || '&nbsp;'
                }}</small>
            </div>
            <DataTable resizableColumns columnResizeMode="fit" class="field p-datatable-sm" :value="ingredients">
                <template #header>
                    <AddIngredients v-model:modelValue="ingredients" />
                </template>
                <Column field="title" header="Title"></Column>
                <Column field="amount" header="Amount"></Column>
                <Column>
                    <template #body="slotProps">
                        <Button severity="danger" icon="pi pi-times" @click="remove(slotProps)" />
                    </template>
                </Column>
            </DataTable>
            <div class="field gap-2">
                <Button type="submit" label="Submit" />
            </div>
        </form>
    </Dialog>
</template>
