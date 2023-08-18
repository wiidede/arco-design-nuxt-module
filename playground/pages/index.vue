<script setup lang="ts">
const disabled = ref(false)
const form = reactive({
  name: '',
})
</script>

<template>
  <icon-thumb-up-fill />
  <icon-heart-fill />
  <icon-star-fill />
  <a-space style="margin-bottom: 20px;">
    <a-switch v-model="disabled" />
    Disabled: {{ disabled }}
  </a-space>
  <AForm :model="form" :disabled="disabled" :style="{ width: '600px' }">
    <AFormItem
      field="name" label="Username"
      :rules="[{ required: true, message: 'name is required' }, { minLength: 5, message: 'must be greater than 5 characters' }]"
    >
      <MyInput v-model="form.name" placeholder="please enter your username..." />
      (useFormItem)
    </AFormItem>
  </AForm>
</template>
