
// Web Share API - Share content to native apps (mobile browsers only)
const webShareButton = document.getElementById('web-share-button');

if (navigator.share) {
    webShareButton.style.display = 'inline-block'; // Show the share button if supported

    webShareButton.addEventListener('click', async () => {
        try {
            await navigator.share({
                title: 'Your Health Hub',
                text: 'Check out Your Health Hub for health and wellness tips!',
                url: window.location.href
            });
            console.log('Successfully shared');
        } catch (error) {
            console.log('Error sharing', error);
        }
    });
} else {
    webShareButton.style.display = 'none';
}
