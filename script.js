document.addEventListener('DOMContentLoaded', function() {
    // ... (Smooth scrolling code if you have it) ...

    const commentList = document.getElementById('comment-list');
    const commentForm = document.getElementById('comment-form');
    const newComment = document.getElementById('new-comment');
    const shareButton = document.getElementById('share-button');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = newComment.value.trim();
        if (commentText !== "") {
            const commentDiv = document.createElement('div');
            commentDiv.textContent = commentText;
            commentList.appendChild(commentDiv);
            newComment.value = ""; // Clear the textarea
        }
    });

    shareButton.addEventListener('click', () => {
        const shareText = "Check out this great content on Your Health Hub!"; // Customize
        const shareUrl = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: shareText,
                url: shareUrl
            }).then(() => {
                console.log('Shared successfully!');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            // Simplified share (just shows the text)
            alert(shareText + "\n" + shareUrl);
        }
    });

    // ... any other JavaScript code ...
});