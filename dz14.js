const autoReactions = (function() {
    let intervalId = null;
    let emojiButtonSelector = '';
    let reactionPanelSelector = '[role=button][aria-label="Send a reaction"]';

    const emojiMap = {
        '💖': '[role=button] [aria-label="💖"]',
        '👍': '[role=button] [aria-label="👍"]',
        '🎉': '[role=button] [aria-label="🎉"]',
        '👏': '[role=button] [aria-label="👏"]',
        '😂': '[role=button] [aria-label="😂"]',
        '😮': '[role=button] [aria-label="😮"]',
        '😢': '[role=button] [aria-label="😢"]',
        '🤔': '[role=button] [aria-label="🤔"]',
        '👎': '[role=button] [aria-label="👎"]'
    };

    function startReacting(emoji, delay) {
        if (!emojiMap[emoji]) {
            throw new Error(`Invalid emoji: ${emoji}. Valid emojis are: ${Object.keys(emojiMap).join(', ')}`);
        }
        if (typeof delay !== 'number' || delay <= 0) {
            throw new Error(`Invalid delay: ${delay}. Delay must be a positive number.`);
        }

        emojiButtonSelector = emojiMap[emoji];

        // Open reaction panel if closed
        const reactionPanelButton = document.querySelector(reactionPanelSelector);
        if (reactionPanelButton && reactionPanelButton.getAttribute('aria-pressed') === 'false') {
            reactionPanelButton.click();
        }

        // Ensure the panel stays open
        const checkPanelOpenInterval = setInterval(() => {
            if (reactionPanelButton && reactionPanelButton.getAttribute('aria-pressed') === 'false') {
                stopReacting();
                clearInterval(checkPanelOpenInterval);
            }
        }, 1000);

        // Start clicking the emoji button at the specified interval
        intervalId = setInterval(() => {
            const emojiButton = document.querySelector(emojiButtonSelector);
            if (emojiButton) {
                emojiButton.click();
            }
        }, delay);
    }

    function stopReacting() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    return {
        startReacting,
        stopReacting
    };
})();
