<script setup>
</script>

<template>
    <div class="pt-10 pl-10 text-white">
        <NuxtLink :to="localePath('/home')" class="w-fit p-5 border-zebraBorder border-2 text-white text-xl md:text-2xl">
            {{ $t('home') }}
        </NuxtLink>
    </div>
    <div class="absolut top-1/2 pt-10 w-full z-10 mx-auto max-w-5xl bg-zebraBackground pb-10">
        <div class="mx-8 p-2 md:p-8 border-2 border-zebraBorder border-opacity-80 rounded-sm text-center text-white">
            <h1 class="p-2 text-xl">TERMS AND CONDITIONS:</h1>
            <h3 class="text-lg text-zebraBorder">EXCHANGE POLICY</h3>
            <p class="p-2 text-sm">Returns, exchanges, refunds and/or cancellations are not allowed for online purchases. If
                you received your item(s) damaged, please email our support team at contact@zebratbilisi.com and
                orders@awge.com within 7 days of the order's delivery date.</p>
            <h3 class="text-lg text-zebraBorder">SHIPPING POLICY</h3>
            <p class="p-2 text-sm">You will receive an email with your tracking information once it becomes available.
                Please allow a few days for the tracking number to become active, so you can accurately track your package.
            </p>
            <p class="text-sm">In the unfortunate event that your tracking information states your order was delivered but
                you did not receive it, please email contact@zebratbilisi.com and Orders@zebratbilisi.com for further
                assistance. Please note that we are not required to replace your missing merchandise, as it is up to the
                discretion of our customer support team to come up with a resolution per individual case.</p>
            <h3 class="text-lg pt-2 text-zebraBorder">TERMS OF USE</h3>
            <p class="p-2 text-sm">By using our website, you agree to the Terms of Use. We reserve the right to correct any
                errors or omissions, and to change or update information at any time without prior notice (including after
            you have submitted your order).</p>

    </div>

</div></template>