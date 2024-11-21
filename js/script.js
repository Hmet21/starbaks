function initCarousel () {      // cara mengatasi lubang yg kosong di blkng gambar menu kita
    const mainCourse = document.querySelector(".main-course-carousel");   // for main-dish
    const drinks = document.querySelector(".drinks-carousel");      // for drinks
    const snacks = document.querySelector(".snacks-carousel");

    for (let i = 0; i < 5; i++) {
        const mainCourseCarousel = document.querySelector(".main-course-carousel-slide").cloneNode(true); // mengklone for main-dish
        const drinksCarousel = document.querySelector(".drinks-carousel-slide").cloneNode(true); // mengklone for drinks
        const snacksCarousel = document.querySelector(".snacks-carousel-slide").cloneNode(true);

        mainCourse.appendChild(mainCourseCarousel); // for main-dish
        drinks.appendChild(drinksCarousel); // for drinks
        snacks.appendChild(snacksCarousel);
    }
}

initCarousel();

// Form Reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tableName = document.querySelector("#table_name").value;
    const tableSize = document.querySelector("#table_capacity").value;
    const date = document.querySelector("#order_date").value;
    const order = document.querySelector("#order").value;

    const orderText = `Halo, Saya ingin reservasi meja untuk ${tableSize} orang, atas nama ${tableName} pada tanggal/waktu ${date}
    
    Order:
    ${order || "Pesan ditempat"}
    `;

    window.location.replace(`https://wa.me/085756690389?text=${orderText}`);
});


// responsive
const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");


hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("open");
    mobileNavigation.classList.toggle("menu-active");

});






