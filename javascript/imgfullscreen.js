document.addEventListener('DOMContentLoaded', function() {
    const mediaElements = document.querySelectorAll('img, .simple-video');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    document.body.appendChild(overlay);

    mediaElements.forEach(media => {
        media.addEventListener('click', function() {
            const carouselContainer = media.closest('.carousel-container');
            if (!this.classList.contains('fullscreen-media')) {
                const originalWidth = this.clientWidth;
                const originalHeight = this.clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const aspectRatio = originalWidth / originalHeight;

                let newWidth, newHeight;

                if (windowWidth / windowHeight > aspectRatio) {
                    newHeight = windowHeight;
                    newWidth = newHeight * aspectRatio;
                } else {
                    newWidth = windowWidth;
                    newHeight = newWidth / aspectRatio;
                }

                this.style.width = newWidth + 'px';
                this.style.height = newHeight + 'px';
                this.classList.add('fullscreen-media');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Ẩn thanh cuộn khi phóng to

                if (carouselContainer) {
                    const buttons = carouselContainer.querySelectorAll('button');
                    buttons.forEach(button => button.classList.add('hidden')); // Ẩn các nút
                }
            } else {
                this.style.width = '';
                this.style.height = '';
                this.classList.remove('fullscreen-media');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Khôi phục thanh cuộn khi thu nhỏ

                if (carouselContainer) {
                    const buttons = carouselContainer.querySelectorAll('button');
                    buttons.forEach(button => button.classList.remove('hidden')); // Hiển thị lại các nút
                }
            }
        });
    });

    overlay.addEventListener('click', function() {
        const fullscreenMedia = document.querySelector('.fullscreen-media');
        if (fullscreenMedia) {
            fullscreenMedia.style.width = '';
            fullscreenMedia.style.height = '';
            fullscreenMedia.classList.remove('fullscreen-media');
        }
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Khôi phục thanh cuộn khi thu nhỏ

        const buttons = document.querySelectorAll('.carousel-container button');
        buttons.forEach(button => button.classList.remove('hidden')); // Hiển thị lại các nút
    });
});
