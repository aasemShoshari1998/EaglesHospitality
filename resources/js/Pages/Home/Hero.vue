<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards, Keyboard, Navigation } from "swiper/modules";
import { Link } from "@inertiajs/vue3";
import { computed, ref, onMounted } from "vue";

const props = defineProps({
    products: Object,
});

const search = defineModel();
const locale = ref(localStorage.getItem("locale"));

onMounted(() => {
    window.addEventListener("locale-changed", (event) => {
        locale.value = event.detail.storage;
    });

    const next = document.querySelector(".swiper-button-next");
    const prev = document.querySelector(".swiper-button-prev");

    if (locale.value === "en") {
        next.style.setProperty("--marginRight", "-150px");
        prev.style.setProperty("--marginLeft", "-150px");
    } else {
        next.style.setProperty("--marginRight", "150px");
        prev.style.setProperty("--marginLeft", "150px");
    }
});

const filteredProducts = computed(() => {
    return props.products.filter((product) =>
        product?.name?.toLowerCase().includes(search?.value?.toLowerCase())
    );
});
</script>

<template>
    <section
        class="hero-section container-fluid py-5 mb-5 bgBlueish marginTopHalf"
    >
        <section class="container-fluid p-md-5">
            <h1 class="display-3 text-white text-center">
                {{ $t("header.company") }}
            </h1>
            <h6 class="text-white text-center">
                {{ $t("header.companyCompliment") }}
            </h6>
            <video class="mt-5" autoplay muted loop id="myVideo">
                <source
                    src="../../../../public/Eagles hospitality.mp4"
                    type="video/mp4"
                />
            </video>
            <section class="hero-inner row align-items-center py-6 m-0">
                <aside class="col-md-6">
                    <form class="position-relative left-lg-20 mt-5">
                        <input
                            class="form-control border-2 border-secondary py-sm-3 px-sm-4 rounded-pill"
                            :class="locale == 'en' ? null : 'text-start'"
                            :placeholder="
                                locale == 'en'
                                    ? 'Keywords'
                                    : 'أدخل كلمات مفتاحية '
                            "
                            data-bs-toggle="modal"
                            data-bs-target="#searchModal"
                        />
                        <Link
                            as="button"
                            type="button"
                            :href="$route('shop', 'all')"
                            class="btn bgBlueish border-2 border-secondary py-sm-3 px-sm-5 position-absolute rounded-pill text-white shopNow hoverColorBlueish"
                        >
                            {{ $t("shopNow.title") }}
                        </Link>
                    </form>
                </aside>
                <aside class="col-md-6">
                    <swiper
                        :effect="'cards'"
                        :grabCursor="true"
                        :modules="[EffectCards, Keyboard, Navigation]"
                        class="mySwiper mt-5"
                        :navigation="true"
                    >
                        <swiper-slide v-for="product in props.products">
                            <Link
                                type="button"
                                as="button"
                                :href="$route('product', product.name)"
                            >
                                <img
                                    width="400"
                                    height="300"
                                    :src="product.imageUrl"
                                    :alt="
                                        locale == 'en'
                                            ? 'Product image'
                                            : 'صورة المنتج'
                                    "
                                />
                            </Link>
                        </swiper-slide>
                    </swiper>
                </aside>
            </section>
        </section>
        <div
            class="modal fade"
            id="searchModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Search by keyword
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body d-flex align-items-center">
                        <div class="position-relative input-group w-75 mx-auto">
                            <input
                                type="search"
                                class="form-control p-3"
                                :placeholder="
                                    locale == 'en'
                                        ? 'Keywords'
                                        : 'أدخل كلمات مفتاحية '
                                "
                                aria-describedby="search-icon-1"
                                v-model="search"
                            />
                            <span
                                id="search-icon-1"
                                class="input-group-text p-3 bgBlueish text-white"
                                ><i class="fa fa-search"></i
                            ></span>
                            <div class="filterProducts">
                                <ul class="bg-white m-0 mb-4 p-0">
                                    <li
                                        v-for="product in filteredProducts"
                                        class="mt-3 hoverSearchItem"
                                        data-bs-dismiss="modal"
                                    >
                                        <Link
                                            as="button"
                                            type="button"
                                            :href="
                                                $route('product', product.name)
                                            "
                                            class="d-flex gap-5 align-items-center w-100 p-4"
                                        >
                                            <img
                                                :src="product.imageUrl"
                                                :alt="
                                                    locale == 'en'
                                                        ? 'Product image'
                                                        : 'صورة المنتج'
                                                "
                                                class="reviewImg"
                                                width="50"
                                                height="50"
                                            />
                                            <p class="colorBlueish">
                                                {{ product.name }}
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
video {
    width: 100%;
}
.hero-inner {
    top: 30%;
    width: 100%;
}
.swiper {
    width: 400px;
    height: 400px;
    overflow: visible !important;
}
.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    background-color: #fff;
}

::v-global(.swiper-button-next:after) {
    margin-right: var(--marginRight, 0);
    color: #fff;
}
::v-global(.swiper-button-prev:after) {
    margin-left: var(--marginLeft, 0);
    color: #fff;
}

::v-global(.swiper-pagination-bullet-active) {
    background-color: #fff !important;
}

@media (max-width: 1200px) {
    .swiper {
        width: 300px;
        height: 300px;
    }
}

@media (max-width: 767px) {
    .swiper {
        width: 200px;
        height: 200px;
    }
}

@media (max-width: 417px) {
    .hero-section {
        margin-top: 100px;
    }
}
</style>
