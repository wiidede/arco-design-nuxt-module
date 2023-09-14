<script setup lang="ts">
const disabled = ref(false)
const form = reactive({
  name: '',
})

function handleMessage() {
  AMessage.info('This is an info message')
}
function handleNotification() {
  ANotification.success('This is a success message!')
}
</script>

<template>
  <span>
    arco locale: {{ getArcoLocale() }}
  </span>
  <div :style="{ display: 'flex', justifyContent: 'space-around' }">
    <a-button @click="handleMessage">
      Info Message
    </a-button>
    <a-button status="success" @click="handleNotification">
      Success Notification
    </a-button>
  </div>
  <a-divider />
  <a-row :gutter="24">
    <a-col :span="12">
      <a-card :style="{ width: '360px', margin: 'auto' }" title="Arco Icons">
        <template #extra>
          <a-link>More</a-link>
        </template>
        <icon-thumb-up-fill />
        <icon-heart-fill />
        <icon-star-fill />
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card :style="{ width: '360px', margin: 'auto' }" title="useFormItem">
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
          </AFormItem>
        </AForm>
      </a-card>
    </a-col>
  </a-row>
</template>
