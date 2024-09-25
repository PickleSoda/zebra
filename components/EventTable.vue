<script setup lang="ts">
const props = defineProps({
  events: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <table class="w-full text-white font-base text-center space-y-5 table-fixed">
      <thead>
        <tr>
          <th class="text-white md:text-xl">{{ title }}</th>
          <th class="text-white md:text-xl">{{ $t('location') }}</th>
          <th class="text-white md:text-xl">{{ $t('date') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(event, index) in events"
          :key="index"
          class="h-20"
        >
          <td class="text-center">
            <a :href="event.href" target="_blank">
              <img
                v-if="event.image"
                :src="event.image"
                alt=""
                class="w-36 sm:w-48 mx-auto"
              />
              <h1 v-else>{{ event.name }}</h1>
            </a>
          </td>
          <td class="text-center md:text-xl">{{ event.location }}</td>
          <td class="text-center">{{ event.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
