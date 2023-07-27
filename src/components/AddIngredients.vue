<script setup>
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

const emit = defineEmits(['modelValue'])
const props = defineProps(['modelValue'])

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
const { value: fieldAmmountValue, errorMessage: fieldAmmountError } = useField(
    'ammount',
    (v) => {
        if (!v) {
            return 'Ammount is required.'
        }
        return true
    }
)

const onSubmit = handleSubmit((values) => {
    ingredients.value.push(values)
    emit('update:modelValue', ingredients)
})
</script>

<template>
    <form ref="form" @submit="onSubmit" class="p-fluid m-2">
        <div class="field p-inputgroup">
            <InputText 
                id="ingredientTitle" 
                placeholder="Ingredient" 
                v-model="fieldTitleValue" 
                :class="{ 'p-invalid': fieldTitleError }"
                aria-describedby="title-error"
            />
            <InputText 
                id="ingredientAmmount" 
                placeholder="Ammount" 
                v-model="fieldAmmountValue" 
                :class="{ 'p-invalid': fieldAmmountError }"
                aria-describedby="ammount-error"
            />
            <Button icon="pi pi-plus" aria-label="Add" @click="onSubmit"/>
        </div>
        <div class="flex gap-4">
            <small class="p-error" id="title-error">{{
                fieldTitleError || '&nbsp;'
            }}</small>
            <small class="p-error" id="ammount-error">{{
                fieldAmmountError || '&nbsp;'
            }}</small>
        </div>
    </form>
</template>