<script setup>
const SoundStore = useSoundStore();
const { playSound } = SoundStore; 
const handleButtonClick = () => {
  playSound("sound-2");
};
</script>

<template>
  <div class=" absolute top-0 bottom-0 left-0 rignt-0 overflow-y-scroll w-full ">
    <!-- <zebraHeader /> -->
    <div class="flex flex-col items-start px-5">
      <div class="pt-10 pl-10 text-white my-14">
        <BackButton link="/home" />
      </div>
      <div
        class="text-white text-center text-4xl font-bold leading-10 w-full"
      >
        ABOUT
      </div>
      <div
        class="bg-neutral-800 self-stretch flex w-full flex-col items-stretch mx-auto max-w-4xl mt-14 pl-6 pr-10 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5"
      >
        <div
          class="text-white text-xl font-bold leading-5 mt-2 max-md:max-w-full"
        >
          <ul>
            <li>
              ZEBRA IS A CREATIVE AGENCY, FOUNDED IN 2019 IN THE CITY OF TBILISI.
              WHAT STARTED AS A CLOTHING LINE EVOLVED INTO A MULTIFACETED PLATFORM
              THAT NOW STANDS AT THE FOREFRONT OF A GLOBAL ARTISTIC MOVEMENT.
            </li>
          </ul>
        </div>
        <div
          class="text-white text-xl font-bold leading-5 mt-10 max-md:max-w-full"
        >
          <ul>
            <li>
              OUR CLASSIC ZEBRA SHIRTS HAS TRANSFORMED INTO ICONIC MERCHANDISE.
              THE ZEBRA SHOP IS NOW A MARKETPLACE, FEATURING NOT ONLY ITS MERCH
              BUT ALSO BRANCH BRANDS AND COLLABORATIONS
            </li>
          </ul>
        </div>
        <div
          class="text-white text-xl font-bold leading-5 mt-12 max-md:max-w-full max-md:mt-10"
        >
          <ul>
            <li>
              FOUNDED IN THE HEART OF TBILISI, ZEBRA ESTABLISHED ITS ROOTS AS A
              CLOTHING LINE, MAKING AN INDELIBLE MARK AT THE 4GB ELECTRONIC MUSIC
              FESTIVAL IN GEORGIA. THE BRAND'S EVOLUTION EXTENDED BEYOND FASHION,
              ENCOMPASSING PERFORMANCES AT WORKSHOPS, FESTIVALS, LOCAL EVENTS AND
              DIFFERENT ORGANIZATIONS.
            </li>
          </ul>
        </div>
        <div
          class="text-white text-xl font-bold leading-5 mt-12 max-md:max-w-full max-md:mt-10"
        >
          <ul>
            <li>
              ZEBRA IS NOT JUST A BRAND; IT'S A DRIVING FORCE BEHIND A ARTISTIC
              MOVEMENT. FROM ITS INCEPTION, THE AGENCY HAS BEEN ON A MISSION TO
              AMPLIFY THE VOICES OF CREATIVE MINDS WORLDWIDE, PIONEERING
              CROSS-BORDER TALENT EXCHANGES.
            </li>
          </ul>
        </div>
        <div
          class="text-white text-xl font-bold leading-5 mt-11 max-md:max-w-full max-md:mt-10"
        >
          <ul>
            <li>
              AS A COMPREHENSIVE CREATIVE AGENCY, WE OFFER MORE THAN JUST FASHION
              AND MUSIC. WITH A FOCUS ON VIDEOGRAPHY, INCLUDING MUSIC VIDEOS AND
              SHORT FILMS, THE AGENCY'S WEBSITE SERVES AS A CENTRAL HUB TO CONNECT
              WITH ZEBRA'S VIDEOGRAPHERS AND PRODUCTION TEAM.
            </li>
          </ul>
        </div>
        <div
          class="text-white text-xl font-bold leading-5 mt-7 max-md:max-w-full"
        >
          <ul>
            <li>
              ZEBRA ENGAGES WITH INTERNATIONAL ARTISTS, CURATING EVENTS THAT BRING
              DIVERSE GLOBAL TALENT TO LOCAL STAGES. THIS COMMITMENT ENRICHES THE
              CULTURAL FABRIC BY BLENDING UNIQUE SOUNDS AND EXPRESSIONS FROM
              AROUND THE WORLD.
            </li>
          </ul>
        </div>
        <div
          class="text-white text-xl font-bold leading-5 mt-12 mb-7 max-md:max-w-full max-md:mt-10"
        >
          <ul>
            <li>
              COLLABORATING WITH EVENT ORGANIZERS, MUSIC FESTIVALS, AND CULTURAL
              INSTITUTIONS GLOBALLY, ZEBRA ACTIVELY SECURES PERFORMANCE
              OPPORTUNITIES FOR LOCAL TALENTS ON THE INTERNATIONAL STAGE. THE
              AGENCY'S COMMITMENT TO FOSTERING ARTISTIC GROWTH ENSURES EXPOSURE
              FOR ITS ARTISTS ON A TRULY GLOBAL SCALE.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>