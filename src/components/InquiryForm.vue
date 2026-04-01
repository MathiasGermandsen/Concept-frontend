<script setup>
import { useInquiry } from '@/composables/useInquiry'

const { form, isSubmitting, isSuccess, errorMessage, handleSubmit } = useInquiry()

function onSubmit() {
  handleSubmit()
}
</script>

<template>
  <section id="kontakt" class="py-20 sm:py-28 bg-dusk-blue-300">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-platinum tracking-tight">
          Få et tilbud
        </h2>
        <p class="mt-4 text-grey-olive text-base sm:text-lg">
          Udfyld formularen, så vender vi tilbage med et uforpligtende tilbud.
        </p>
      </div>

      <!-- Success message -->
      <div
        v-if="isSuccess"
        class="mb-8 p-4 rounded-lg bg-green-900/30 border border-green-700 text-green-300 text-center"
      >
        Tak for din forespørgsel! Vi vender tilbage hurtigst muligt.
      </div>

      <!-- Error message -->
      <div
        v-if="errorMessage"
        class="mb-8 p-4 rounded-lg bg-red-500/10 border border-red-500/40 text-red-400 text-center"
      >
        {{ errorMessage }}
      </div>

      <form @submit.prevent="onSubmit" class="space-y-6">
        <!-- Name & Email row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="customer_name" class="block text-sm font-medium text-platinum mb-2">
              Navn <span class="text-icy-blue">*</span>
            </label>
            <input
              id="customer_name"
              v-model="form.customer_name"
              type="text"
              required
              placeholder="Dit fulde navn"
              class="w-full px-4 py-3 bg-dusk-blue-100/50 border border-grey-olive/30 rounded-lg text-platinum placeholder-grey-olive/60 focus:outline-none focus:ring-2 focus:ring-steel-blue/50 focus:border-steel-blue transition-colors"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-platinum mb-2">
              E-mail <span class="text-icy-blue">*</span>
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="din@email.dk"
              class="w-full px-4 py-3 bg-dusk-blue-100/50 border border-grey-olive/30 rounded-lg text-platinum placeholder-grey-olive/60 focus:outline-none focus:ring-2 focus:ring-steel-blue/50 focus:border-steel-blue transition-colors"
            />
          </div>
        </div>

        <!-- Phone & Date row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="phone_number" class="block text-sm font-medium text-platinum mb-2">
              Telefonnummer
            </label>
            <input
              id="phone_number"
              v-model="form.phone_number"
              type="tel"
              placeholder="+45 12 34 56 78"
              class="w-full px-4 py-3 bg-dusk-blue-100/50 border border-grey-olive/30 rounded-lg text-platinum placeholder-grey-olive/60 focus:outline-none focus:ring-2 focus:ring-steel-blue/50 focus:border-steel-blue transition-colors"
            />
          </div>
          <div>
            <label for="event_date" class="block text-sm font-medium text-platinum mb-2">
              Dato for event
            </label>
            <input
              id="event_date"
              v-model="form.event_date"
              type="date"
              class="w-full px-4 py-3 bg-dusk-blue-100/50 border border-grey-olive/30 rounded-lg text-platinum placeholder-grey-olive/60 focus:outline-none focus:ring-2 focus:ring-steel-blue/50 focus:border-steel-blue transition-colors"
            />
          </div>
        </div>

        <!-- Location -->
        <div>
          <label for="event_location" class="block text-sm font-medium text-platinum mb-2">
            Lokation
          </label>
          <input
            id="event_location"
            v-model="form.event_location"
            type="text"
            placeholder="Hvor skal eventet holdes?"
            class="w-full px-4 py-3 bg-dusk-blue-100/50 border border-grey-olive/30 rounded-lg text-platinum placeholder-grey-olive/60 focus:outline-none focus:ring-2 focus:ring-steel-blue/50 focus:border-steel-blue transition-colors"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-platinum mb-2">
            Besked
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            placeholder="Fortæl os om dit event — type, antal gæster, ønsker til musik..."
            class="w-full px-4 py-3 bg-dusk-blue-100/50 border border-grey-olive/30 rounded-lg text-platinum placeholder-grey-olive/60 focus:outline-none focus:ring-2 focus:ring-steel-blue/50 focus:border-steel-blue transition-colors resize-y"
          ></textarea>
        </div>

        <!-- Submit -->
        <div class="pt-2">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full sm:w-auto px-8 py-4 bg-steel-blue text-platinum font-semibold rounded-lg hover:bg-steel-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">Sender...</span>
            <span v-else>Send forespørgsel</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
