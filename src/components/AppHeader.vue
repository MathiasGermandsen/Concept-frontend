<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-dusk-blue-100/90 backdrop-blur-sm border-b border-dusk-blue/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <a href="#" class="text-xl sm:text-2xl font-bold tracking-tight text-platinum">
          Mobile<span class="text-icy-blue">Disco</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#om" class="text-sm text-grey-olive hover:text-platinum transition-colors">Om Os</a>
          <a href="#kontakt" class="text-sm text-grey-olive hover:text-platinum transition-colors">Kontakt</a>
          <a
            href="#kontakt"
            class="inline-flex items-center px-5 py-2.5 bg-steel-blue text-platinum text-sm font-semibold rounded-lg hover:bg-steel-blue/90 transition-colors"
          >
            Få et tilbud
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-platinum p-2"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <nav v-if="menuOpen" class="md:hidden pb-4 space-y-3">
        <a href="#om" class="block text-sm text-grey-olive hover:text-platinum transition-colors" @click="menuOpen = false">Om Os</a>
        <a href="#kontakt" class="block text-sm text-grey-olive hover:text-platinum transition-colors" @click="menuOpen = false">Kontakt</a>
        <a
          href="#kontakt"
          class="block text-center px-5 py-2.5 bg-steel-blue text-platinum text-sm font-semibold rounded-lg hover:bg-steel-blue/90 transition-colors"
          @click="menuOpen = false"
        >
          Få et tilbud
        </a>
      </nav>
    </div>
  </header>
</template>
