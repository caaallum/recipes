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
const { value: fieldAmountValue, errorMessage: fieldAmountError } = useField(
    'amount',
    (v) => {
        if (!v) {
            return 'Amount is required.'
        }
        return true
    }
)

const onSubmit = handleSubmit((values) => {
    ingredients.value.push(values)
    emit('update:modelValue', ingredients.value)

})
</script>

<template>
    <form ref="form" @submit="onSubmit" class="p-fluid m-2">
        <div class="field p-inputgroup">
            <InputText id="ingredientTitle" placeholder="Ingredient" v-model="fieldTitleValue"
                :class="{ 'p-invalid': fieldTitleError }" aria-describedby="title-error" />
            <InputText id="ingredientAmount" placeholder="Amount" v-model="fieldAmountValue"
                :class="{ 'p-invalid': fieldAmountError }" aria-describedby="amount-error" />
            <Button severity="success" icon="pi pi-plus" aria-label="Add" type="submit" />
            <Button severity="danger" icon="pi pi-times" aria-label="Add" type="reset" />
        </div>
        <div class="flex gap-4">
            <small class="p-error" id="title-error">{{
                fieldTitleError || '&nbsp;'
            }}</small>
            <small class="p-error" id="amount-error">{{
                fieldAmountError || '&nbsp;'
            }}</small>
        </div>
    </form>
</template>
