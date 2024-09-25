<script setup lang="ts">
import { upcomingEvents } from '~/content/events/upcomingEvents';
import { pastEvents } from '~/content/events/pastEvents';
import EventTable from '~/components/EventTable.vue';

// You might choose this based on an API call or logged-in status
const layout = "container";
</script>

<template>
  <div>
    <div class="p-10">
      <div
        class="absolute top-36 md:top-44 lg:top-20  md:left-10 md:translate-x-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-white"
      >
        <BackButton link="/home" />
      </div>
      <eventsIcon />
    </div>
    <NuxtLayout
      :name="layout"
      class="mt-32"
    >
      <div class="space-y-10">
        <!-- Upcoming Events -->
        <EventTable
          :events="pastEvents"
          :title="$t('pastEvents')"
        />
        <EventTable
          :events="upcomingEvents"
          :title="$t('upcomingEvents')"
        />

        <!-- Past Events -->
      </div>

      <!-- Footer -->
      <template #footer>
        <div
          class="flex flex-wrap items-center justify-center sm:justify-between sm:gap-10"
        >
          <nuxt-link
            :to="localePath('/contact')"
            class="p-2 sm:p-4 border-zebraBorder border-opacity-20 rounded-sm text-white text-center border-2 mb-10 min-w-[200px]"
          >
            {{ $t('contact') }}
          </nuxt-link>
          <a
            href="https://ra.co/promoters/133108"
            target="_blank"
            class="p-2 sm:p-4 border-zebraBorder border-opacity-20 rounded-sm text-white text-center border-2 mb-10 min-w-[200px]"
          >
            RESIDENT ADVISOR
          </a>
          <a
            target="_blank"
            href="https://zebratbs.bigcartel.com/"
            class="p-2 sm:p-4 border-zebraBorder border-opacity-20 rounded-sm text-white text-center border-2 mb-10 min-w-[200px]"
          >
            {{ $t('getYourTickets') }}
          </a>
        </div>
        <zebra-footer />
      </template>
    </NuxtLayout>
  </div>
</template>
