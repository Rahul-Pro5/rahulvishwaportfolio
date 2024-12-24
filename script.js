// Menu toggle for mobile version

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// copy to clipboard

function copyToClipboard() {
    const textToCopy = "hi@clavio.studio";
    navigator.clipboard.writeText(textToCopy).then(() => {
        const button = document.querySelector('.animate-button');
        button.classList.add('copied-state');
        button.querySelector('.text').style.display = 'none';
        button.querySelector('.arrow').style.display = 'none';
        button.querySelector('.copied').style.display = 'flex';
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Time on header

function updateTime() {
    const now = new Date();

      // Chennai time (UTC+5:30)
    const chennaiTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    document.getElementById("chennaiTime").innerText = chennaiTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    // New York time (UTC-5 or UTC-4 for daylight saving)
    const newYorkTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    document.getElementById("newYorkTime").innerText = newYorkTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    }

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately