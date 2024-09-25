<script setup lang="ts">
interface Event {
  name: string;
  location: string;
  date: string;
  image?: string;
  href: string;
  color: string;
}

// Define props with proper type annotations
const props = defineProps<{
  events: Event[];
  title: string;
}>();
</script>

<template>
  <div>
    <table class="w-full text-white font-base text-center space-y-5 table-fixed">
      <thead>
        <tr>
          <th class="text-white md:text-xl">
            {{ title }}
          </th>
          <th class="text-white md:text-xl">
            {{ $t('location') }}
          </th>
          <th class="text-white md:text-xl">
            {{ $t('date') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(event , index) in events"
          :key="index"
          class="h-20"
        >
          <td class="text-center">
            <a
              :href="event.href"
              target="_blank"
            >
              <img
                v-if="event.image"
                :src="event.image"
                alt=""
                class="w-36 sm:w-48 mx-auto"
              >
              <h1
                v-else
                class="font-semibold font-jersey text-xl md:text-2xl"
              >{{ event.name }}</h1>
            </a>
          </td>
          <td
            class="text-center md:text-xl"
            :class="`text[${event.color}]`"
          >
            {{ event.location }}
          </td>
          <td class="text-center">
            {{ event.date }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
