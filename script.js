const webShareButton = document.getElementById('web-share-button');

if (navigator.share) {
    // Web Share API IS supported, show the button and add the event listener:
    webShareButton.style.display = 'inline-block'; // Or just leave it as its default display
    webShareButton.addEventListener('click', async () => {
        try {
            await navigator.share({
                title: 'Your Health Hub',
                url: 'YOUR_WEBSITE_URL',
                text: 'Your path to a healthier you starts here.'
            });
            console.log('Successfully shared');
        } catch (error) {
            console.log('Error sharing', error);
            alert("Sharing failed. Please try again."); // User-friendly message
        }
    });
} else {
    // Web Share API is NOT supported, hide the button or provide a fallback:
    webShareButton.style.display = 'none'; // Hide the button
    console.log("Web Share API not supported.");
    // You could add a fallback here, like a simplified share link or instructions
    // for manually copying the URL.
}