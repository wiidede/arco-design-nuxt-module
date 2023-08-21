export default defineComponent({
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const { mergedDisabled, eventHandlers } = useArcoFormItem()
    const handleInput = (ev: any) => {
      const { value } = ev.target
      emit('update:modelValue', value)
      eventHandlers.value?.onChange?.(ev)
    }
    return () => h('input', { disabled: mergedDisabled.value, onInput: handleInput })
  },
})
