import { ref, reactive } from 'vue'
import { submitInquiry } from '@/services/api'

export function useInquiry() {
  const form = reactive({
    customer_name: '',
    email: '',
    phone_number: '',
    event_date: '',
    event_location: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  function resetForm() {
    Object.assign(form, {
      customer_name: '',
      email: '',
      phone_number: '',
      event_date: '',
      event_location: '',
      message: '',
    })
  }

  async function handleSubmit() {
    isSubmitting.value = true
    isSuccess.value = false
    errorMessage.value = ''

    try {
      await submitInquiry({ ...form })
      isSuccess.value = true
      resetForm()
    } catch (err) {
      errorMessage.value = err.message || 'Noget gik galt. Prøv igen.'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    errorMessage,
    handleSubmit,
  }
}
