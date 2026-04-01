<template>
  <footer class="bg-dusk-blue-200 border-t border-dusk-blue">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand -->
        <a href="#" class="text-lg font-bold text-platinum tracking-tight">
          Mobile<span class="text-icy-blue">Disco</span>
        </a>

        <!-- Links -->
        <nav class="flex items-center gap-6 text-sm text-grey-olive">
          <a href="#om" class="hover:text-platinum transition-colors">Om Os</a>
          <a href="#kontakt" class="hover:text-platinum transition-colors">Kontakt</a>
        </nav>
      </div>

      <div class="mt-8 pt-6 border-t border-dusk-blue text-center">
        <p class="text-xs text-grey-olive">
          &copy; {{ new Date().getFullYear() }} MobileDisco. Alle rettigheder forbeholdes.
        </p>
      </div>
    </div>
  </footer>
</template>
