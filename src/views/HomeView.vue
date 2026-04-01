<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import InquiryForm from '@/components/InquiryForm.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main>
    <HeroBanner />

    <!-- About section -->
    <section id="om" class="py-20 sm:py-28 bg-dusk-blue-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-platinum tracking-tight">
            Hvorfor vælge os?
          </h2>
          <p class="mt-4 text-grey-olive text-base sm:text-lg max-w-2xl mx-auto">
            Vi sætter en ære i at skabe den perfekte stemning for dit event.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 rounded-xl bg-dusk-blue-300/40 border border-dusk-blue">
            <div class="w-12 h-12 rounded-lg bg-icy-blue/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-icy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-platinum mb-2">Skræddersyet Musik</h3>
            <p class="text-sm text-grey-olive leading-relaxed">
              Vi tilpasser playlisten til netop dit event — fra lounge til party, vi spiller det hele.
            </p>
          </div>

          <div class="p-6 rounded-xl bg-dusk-blue-300/40 border border-dusk-blue">
            <div class="w-12 h-12 rounded-lg bg-icy-blue/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-icy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-platinum mb-2">Professionelt Udstyr</h3>
            <p class="text-sm text-grey-olive leading-relaxed">
              Top-of-the-line lydanlæg og lyseffekter der skaber den rigtige atmosfære.
            </p>
          </div>

          <div class="p-6 rounded-xl bg-dusk-blue-300/40 border border-dusk-blue">
            <div class="w-12 h-12 rounded-lg bg-icy-blue/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-icy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-platinum mb-2">Erfaren DJ</h3>
            <p class="text-sm text-grey-olive leading-relaxed">
              Mange års erfaring med alle typer events — bryllupper, firmafester, fødselsdage og meget mere.
            </p>
          </div>
        </div>
      </div>
    </section>

    <InquiryForm />
  </main>

  <AppFooter />
</template>
