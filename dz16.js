const autoReactions = (function() {
    let intervalId = null;
    let emojiButtonXPath = '';
    let reactionPanelXPath = '//button[contains(@aria-label, "reaction")]';

    const emojiMap = {
        '💖': '//button[contains(@aria-label, "💖")]',
        '👍': '//button[contains(@aria-label, "👍")]',
        '🎉': '//button[contains(@aria-label, "🎉")]',
        '👏': '//button[contains(@aria-label, "👏")]',
        '😂': '//button[contains(@aria-label, "😂")]',
        '😮': '//button[contains(@aria-label, "😮")]',
        '😢': '//button[contains(@aria-label, "😢")]',
        '🤔': '//button[contains(@aria-label, "🤔")]',
        '👎': '//button[contains(@aria-label, "👎")]'
    };

    function getElementByXPath(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function startReacting(emoji, delay) {
        if (!emojiMap[emoji]) {
            throw new Error(`Invalid emoji: ${emoji}. Valid emojis are: ${Object.keys(emojiMap).join(', ')}`);
        }
        if (typeof delay !== 'number' || delay <= 0) {
            throw new Error(`Invalid delay: ${delay}. Delay must be a positive number.`);
        }

        emojiButtonXPath = emojiMap[emoji];

        // Open reaction panel if closed
        const reactionPanelButton = getElementByXPath(reactionPanelXPath);
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
            const emojiButton = getElementByXPath(emojiButtonXPath);
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

// Приклад використання:
// autoReactions.startReacting('💖', 1000);
// autoReactions.stopReacting();
