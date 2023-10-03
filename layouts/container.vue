<template>
        <div class="w-full mx-auto max-w-5xl bg-zebraBackground pb-10">
            <div class="mx-8 p-2 md:p-8 border-2 border-zebraBorder border-opacity-80 rounded-sm">
                <slot />
            </div>
            <div class="mx-8 mt-8">

                <slot name="footer"/>
            </div>
</div>
</template>