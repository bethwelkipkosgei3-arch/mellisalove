// Navigation Functions
function goToYes() {
    window.location.href = 'yes.html';
}

function goToNo() {
    window.location.href = 'no.html';
}

function goBack() {
    window.location.href = 'index.html';
}

// Falling Hearts Animation for Yes page
function startHeartAnimation() {
    const container = document.getElementById('hearts-animation');
    
    if (!container) return;
    
    const heartEmojis = ['❤️', '💕', '💖', '💗'];
    
    function createFallingHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        const leftPosition = Math.random() * window.innerWidth;
        const duration = 3 + Math.random() * 2; // 3-5 seconds
        
        heart.style.left = leftPosition + 'px';
        heart.style.top = '-50px';
        heart.style.animationDuration = duration + 's';
        
        container.appendChild(heart);
        
        // Remove element after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Create hearts at intervals
    const intervalId = setInterval(createFallingHeart, 300);
    
    // Stop creating hearts after 8 seconds
    setTimeout(() => {
        clearInterval(intervalId);
    }, 8000);
}

// Falling Money Animation for Yes page
function startMoneyAnimation() {
    const container = document.getElementById('money-animation');
    
    if (!container) return;
    
    const moneyEmojis = ['💰', '💵', '💴', '💶', '💷'];
    
    function createFallingMoney() {
        const money = document.createElement('div');
        money.className = 'falling-money';
        money.textContent = moneyEmojis[Math.floor(Math.random() * moneyEmojis.length)];
        
        const leftPosition = Math.random() * window.innerWidth;
        const duration = 4 + Math.random() * 2; // 4-6 seconds
        const startDelay = Math.random() * 1000; // Random start delay
        
        money.style.left = leftPosition + 'px';
        money.style.top = '-50px';
        money.style.animationDuration = duration + 's';
        money.style.animationDelay = startDelay + 'ms';
        
        container.appendChild(money);
        
        // Remove element after animation completes
        setTimeout(() => {
            money.remove();
        }, (duration * 1000) + startDelay);
    }
    
    // Create money at intervals
    const intervalId = setInterval(createFallingMoney, 400);
    
    // Stop creating money after 10 seconds
    setTimeout(() => {
        clearInterval(intervalId);
    }, 10000);
}

// Sad Animation for No page
function startSadAnimation() {
    // You can add additional sad animations here if needed
    console.log('Sad animation started');
}
