document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');
    const currentIndexes = {}; // Lưu trữ chỉ số hiện tại của từng carousel

    carousels.forEach((carousel, carouselIndex) => {
        const items = carousel.querySelectorAll('.carousel-item');
        currentIndexes[carouselIndex] = 0; // Khởi tạo chỉ số hiện tại cho từng carousel

        function showSlide(carouselIndex, slideIndex) {
            //console.log(`Showing slide ${slideIndex} in carousel ${carouselIndex}`);
            const currentItems = carousels[carouselIndex].querySelectorAll('.carousel-item');
            currentItems.forEach((item, i) => {
                item.style.display = (i === slideIndex) ? 'block' : 'none';
            });
        }

        showSlide(carouselIndex, currentIndexes[carouselIndex]);

        function nextSlide(carouselIndex) {
            currentIndexes[carouselIndex] = (currentIndexes[carouselIndex] + 1) % items.length;
            //console.log(`Next slide: ${currentIndexes[carouselIndex]} in carousel ${carouselIndex}`);
            showSlide(carouselIndex, currentIndexes[carouselIndex]);
        }

        function prevSlide(carouselIndex) {
            currentIndexes[carouselIndex] = (currentIndexes[carouselIndex] - 1 + items.length) % items.length;
            //console.log(`Previous slide: ${currentIndexes[carouselIndex]} in carousel ${carouselIndex}`);
            showSlide(carouselIndex, currentIndexes[carouselIndex]);
        }

        // Gán sự kiện cho các nút của carousel này
        carousel.querySelector('.next').addEventListener('click', function() {
            nextSlide(carouselIndex);
        });

        carousel.querySelector('.prev').addEventListener('click', function() {
            prevSlide(carouselIndex);
        });

        //console.log(`Initial slide shown: ${currentIndexes[carouselIndex]} in carousel ${carouselIndex}`);
    });
});
