document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video');
    const textBlocks = document.querySelectorAll('.text-block');
    let videoDuration;
    let totalScrollableHeight;

    video.addEventListener('loadedmetadata', function () {
        videoDuration = video.duration;
        const documentHeight = document.body.clientHeight;
        totalScrollableHeight = Math.max(0, documentHeight - window.innerHeight);
        updateVideo();
    });

    function updateVideo() {
        const scrollY = window.scrollY;
        const scrollPercentage = Math.min(1, scrollY / totalScrollableHeight);
        const targetTime = scrollPercentage * videoDuration;

        video.currentTime = targetTime;

        textBlocks.forEach(block => {
            const startTime = parseFloat(block.getAttribute('data-start-time'));
            const endTime = parseFloat(block.getAttribute('data-end-time'));

            if (!isNaN(startTime) && !isNaN(endTime) && isFinite(startTime) && isFinite(endTime)) {
                if (targetTime >= startTime && targetTime <= endTime) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            }
        });

        requestAnimationFrame(updateVideo);
    }

    window.addEventListener('scroll', function () {
        if (!isNaN(videoDuration) && !isNaN(totalScrollableHeight) && isFinite(videoDuration) && isFinite(totalScrollableHeight)) {
            updateVideo();
        }
    });
});