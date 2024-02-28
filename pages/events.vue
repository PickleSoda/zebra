<script setup>
// You might choose this based on an API call or logged-in status
const layout = "container";
</script>

<template>
  <div>
    <div class="p-10">
      <div class="absolute top-36 md:top-44 lg:top-20  md:left-10 md:translate-x-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-white">
        <BackButton link="/home" />
      </div>
      <eventsIcon />
    </div>
    <NuxtLayout
      :name="layout"
      class="mt-32"
    >
      <table class="table-auto w-full text-white font-base space-y-5 ">
        <thead>
          <tr>
            <th class="text-white">
              {{ $t('upcomingEvents') }}:
            </th>
            <th class="text-white">
              {{ $t('location') }}:
            </th>
            <th class="text-white">
              {{ $t('date') }}:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-20">
            <td class="text-center">
              <svg
                class="w-36 sm:w-48 mx-auto"
                viewBox="0 0 613 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.899994 42V0H12.9V36H36.9V42H0.899994ZM47.22 42V12H53.22V6H59.22V0H77.22V6H83.22V12H89.22V42H77.22V30H59.22V42H47.22ZM59.22 24H77.22V12H71.22V6H65.22V12H59.22V24ZM105.54 42V36H99.54V0H111.54V36H129.54V0H141.54V36H135.54V42H105.54ZM151.86 42V0H163.86V6H169.86V12H175.86V18H181.86V0H193.86V42H181.86V30H175.86V24H169.86V18H163.86V42H151.86ZM216.18 42V36H210.18V30H204.18V12H210.18V6H216.18V0H240.18V6H246.18V12H234.18V6H222.18V12H216.18V30H222.18V36H234.18V30H246.18V36H240.18V42H216.18ZM256.5 42V0H268.5V18H286.5V0H298.5V42H286.5V24H268.5V42H256.5ZM361.14 42V0H397.14V6H403.14V24H397.14V30H373.14V42H361.14ZM373.14 24H391.14V6H373.14V24ZM413.46 42V12H419.46V6H425.46V0H443.46V6H449.46V12H455.46V42H443.46V30H425.46V42H413.46ZM425.46 24H443.46V12H437.46V6H431.46V12H425.46V24ZM465.78 42V0H501.78V6H507.78V24H495.78V30H501.78V36H507.78V42H489.78V36H483.78V30H477.78V42H465.78ZM477.78 24H489.78V18H495.78V6H477.78V24ZM536.1 42V6H524.1V0H560.1V6H548.1V42H536.1ZM588.42 42V24H582.42V18H576.42V0H588.42V18H600.42V0H612.42V18H606.42V24H600.42V42H588.42Z"
                  fill="#E1BCD0"
                />
              </svg>
            </td>
            <td class="text-center">
              Tbilisi, Gerogia
            </td>
            <td class="text-center">
              03/14/24
            </td>
          </tr>
          <tr class="h-20">
            <td class="text-center">
              <img
                class="w-36 sm:w-48 mx-auto"
                src="/ZEBRA_X_303HZ.svg"
                alt=""
              >
            </td>
            <td class="text-center">
              Tbilisi, Gerogia
            </td>
            <td class="text-center">
              TBA
            </td>
          </tr>
          <tr class="h-20">
            <td class="text-center">
              <img
                class="w-36 sm:w-48 p-1 mx-auto"
                src="/REBIRTH.png"
                alt=""
              >
            </td>
            <td class="text-center">
              PARIS, FRANCE
            </td>
            <td class="text-center">
              TBA
            </td>
          </tr>
        </tbody>
      </table>
      <template #footer>
        <div class="flex flex-nowrap items-center justify-between">
          <nuxt-link
            :to="localePath('/contact')"
            class="p-2 sm:p-4 border-zebraBorder border-opacity-20 rounded-sm text-white border-2 mb-10"
          >
            {{ $t('contact') }}
          </nuxt-link>
          <nuxt-link
            to="https://shop.zebratbilisi.com/"
            class="p-2 sm:p-4 border-zebraBorder border-opacity-20 rounded-sm text-white border-2 mb-10"
          >
            {{ $t('getYourTickets') }}
          </nuxt-link>
        </div>
        <zebra-footer />
      </template>
    </NuxtLayout>
  </div>
</template>