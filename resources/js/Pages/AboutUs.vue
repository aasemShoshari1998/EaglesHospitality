<script setup>
import { Head } from "@inertiajs/vue3";
import { ref, onMounted } from "vue";
const locale = ref(localStorage.getItem("locale"));
onMounted(() => {
    window.addEventListener("locale-changed", (event) => {
        locale.value = event.detail.storage;
    });
});
</script>

<template>
    <Head :title="locale == 'en' ? 'About us' : 'نبذة عنا'" />

    <section
        class="container-fluid container-lg px-xl-5 marginTop marginBottom"
    >
        <section class="row">
            <aside class="col-lg-6">
                <img
                    class="w-100 mx-auto rounded"
                    src="../../../public/aboutUs1.jfif"
                    :alt="
                        locale == 'en'
                            ? 'About company image'
                            : 'صورة نبذة عن الشركة'
                    "
                />
            </aside>
            <aside class="col-lg-6">
                <h1 class="w-75 mx-auto lh-lg fs-5">{{ $t("aboutUs") }}</h1>
            </aside>
        </section>

        <section class="row marginTopHalf">
            <aside class="col-lg-6">
                <h1 class="w-75 mx-auto lh-lg fs-5">{{ $t("aboutUs2") }}</h1>
                <h1 class="w-75 mx-auto lh-lg fs-5">{{ $t("aboutUs3") }}</h1>
            </aside>
            <aside class="col-lg-6">
                <img
                    src="../../../public/aboutUs2.jfif"
                    class="w-100 mx-auto mt-5 rounded"
                    :alt="
                        locale == 'en'
                            ? 'About company image'
                            : 'صورة نبذة عن الشركة'
                    "
                />
            </aside>
        </section>
    </section>
</template>

<!-- <p>{{ $t("aboutUs2") }}</p> -->
<style scoped>
@media (max-width: 992px) {
    .col-lg-6 h1 {
        width: 100% !important;
        margin-top: 50px;
    }
}
</style>
