<script setup>
import { ref,computed,onMounted } from "vue";
import NavLink from "@/Components/NavLink.vue";

const locale = ref(localStorage.getItem("locale"));

onMounted(() => {
    window.addEventListener("locale-changed", (event) => {
        locale.value = event.detail.storage;
    });
});



const textStartEnd = computed(() => {
    return localStorage.getItem("locale") === "en" ? "text-start" : "text-end";
});
</script>

<template>
    <footer>
        <section class="container-fluid text-white-50 footer pt-5 mt-5">
        <section class="container p-6">
            <section class="row g-5 justify-content-center">
                <article class="col-lg-3 col-md-4">
                    <article class="footer-item">
                        <h3 class="mb-3 text-dark" :class="textStartEnd">
                            {{ $t("footer.contact") }}
                        </h3>
                        <p class="text-dark fw-bold" :class="textStartEnd">
                            {{ $t("footer.address") }}
                        </p>
                        <p class="text-dark fw-bold" :class="textStartEnd">
                            {{ $t("footer.email") }}
                            <span 
                                >zaidghzawi118@gmail.com</span
                            >
                        </p>
                        <p>
                            <p class="text-dark fw-bold">
                                {{ $t("footer.callUs") }}
                            </p>
                            <p
                                class="text-dark fw-bold d-flex align-items-center mb-1"
                                :class="textStartEnd"
                            >
                                +966-540-349-846
                                <img
                                    src="../../../../public/saudi.png"
                                    :alt="locale == 'en'? 'Saudi Arabia flag' : 'علم المملكة العربية السعودية'"
                                    style="width: 40px"
                                    width="40"
                                    height="auto"
                                />
                            </p>
                        </p>

                        <p>
                            <p
                                class="text-dark fw-bold d-flex align-items-center"
                                :class="textStartEnd"
                            >
                                +962-797-389-844
                                <img
                                    src="../../../../public/jordan.png"
                                    :alt="locale == 'en'? 'the Hashemite Kingdom of Jordan flag' : 'علم المملكة الأردنية الهاشمية'"
                                    style="width: 40px"
                                    width="40"
                                    height="auto"
                                />
                            </p>
                        </p>

                        <p class="text-dark fw-bold" :class="textStartEnd">
                            {{ $t("footer.PaymentAccepted") }}
                        </p>
                        <img
                            src="../../../../public/img/payment.png"
                            class="img-fluid"
                            :alt="locale == 'en'? 'Avaiable payment methods image' : 'طرق الدفع المتاحة'"
                        />
                    </article>
                </article>
                <article class="col-lg-3 col-md-4">
                    <article class="d-flex flex-column text-start footer-item">
                        <h3 class="mb-3 text-dark" :class="textStartEnd">
                            {{ $t("footer.shopInfo") }}
                        </h3>
                        <NavLink
                            :href="$route('shop', 'all')"
                            class="fw-bold footerLink hover:text-orange-400 hover:border-orange-400 transition duration-150 ease-in-out"
                            :class="textStartEnd"
                        >
                            {{ $t("header.shop") }}
                        </NavLink>
                        <NavLink
                            :href="$route('about')"
                            class="fw-bold footerLink hover:text-orange-400 hover:border-orange-400 transition duration-150 ease-in-out"
                            :class="textStartEnd"
                        >
                            {{ $t("header.about") }}
                        </NavLink>
                        <NavLink
                            :href="$route('contact')"
                            class="fw-bold footerLink hover:text-orange-400 hover:border-orange-400 transition duration-150 ease-in-out"
                            :class="textStartEnd"
                        >
                            {{ $t("header.contact") }}
                        </NavLink>
                    </article>
                </article>
                <article class="col-lg-3 col-md-4">
                    <article class="d-flex flex-column text-start footer-item">
                        <h3 class="mb-3 text-dark" :class="textStartEnd">
                            {{ $t("footer.account") }}
                        </h3>
                        <NavLink
                            :href="$route('profile.edit')"
                            class="fw-bold footerLink hover:text-orange-400 hover:border-orange-400 transition duration-150 ease-in-out"
                            :class="textStartEnd"
                        >
                            {{ $t("profile.title") }}
                        </NavLink>
                    </article>
                </article>
            </section>
        </section>
    </section>

    <section class="container-fluid copyright bgBlueish py-4">
        <article class="container">
            <article class="row gap-3">
                <article class="mb-3 mb-md-0 text-center">
                    <p class="text-white"
                        ><a
                            href="#"
                            class="text-white"
                            ><i class="fas fa-copyright me-2 text-white"></i
                            >www.nsouraldiafah.com</a
                        >
                        {{ $t("footer.copyRights") }}
                    </p>
                </article>
            </article>
        </article>
    </section>
    </footer>

</template>
