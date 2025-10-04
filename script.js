// Personal website script
// This script handles dynamic content loading based on config.

// Configuration object - EDIT THESE VALUES TO CUSTOMIZE YOUR WEBSITE
const config = {
  nickname: "SIZIY", // Change your nickname here
  avatarSrc: "siziygay.png", // Change avatar URL/filename here
  bio: "Crypto investor • NFT holder • Exploring the future of digital assets.", // Change bio here

  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/_siziy_" },
    { label: "Faceit", href: "https://www.faceit.com/ru/players/SIIZIIY" },
      { label: "Steam", href: "https://steamcommunity.com/profiles/76561199008353696" },
      { label: "Opensea", href: "https://opensea.io/item/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/47341196895934426243559072326049072716379440540173890009412674487300325900289" }
  ],
  videos: [
    // Videos are now in the HTML for easier editing
  ]
};

// Function to update static content
function updateStaticContent() {
  const nicknameEl = document.querySelector('.nickname');
  const avatarEl = document.querySelector('.avatar');
  const bioEl = document.querySelector('.personal-info .bio');
  const linksPEl = document.querySelector('.personal-info .social-links');

  if (nicknameEl) nicknameEl.textContent = config.nickname;
  if (avatarEl) avatarEl.src = config.avatarSrc;
  if (bioEl) bioEl.textContent = config.bio;

  // Clear and rebuild social links
  if (linksPEl) {
    linksPEl.innerHTML = '';
    for (let i = 0; i < config.socialLinks.length; i++) {
      const link = config.socialLinks[i];
      const a = document.createElement('a');
      a.href = link.href;
      a.target = '_blank';
      a.textContent = link.label;
      linksPEl.appendChild(a);
      const separator = (i < config.socialLinks.length - 1) ? ' | ' : ' ';
      linksPEl.appendChild(document.createTextNode(separator));
    }
  }
}

// Function to populate videos
function populateVideos() {
  const videoGridEl = document.querySelector('.video-grid');
  if (!videoGridEl) return;

  videoGridEl.innerHTML = ''; // Clear existing

  config.videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = video.title;

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.videoId}`;
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('loading', 'lazy'); // For performance

    videoItem.appendChild(videoTitle);
    videoItem.appendChild(iframe);
    videoGridEl.appendChild(videoItem);
  });
}

// Function to generate random stars
function generateStars() {
  // Remove existing stars
  const existingStars = document.querySelectorAll('.star');
  existingStars.forEach(star => star.remove());

  // Generate new stars
  const numberOfStars = 150;
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 3 + 1; // Size between 1 and 4px
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${top}px`;
    star.style.left = `${left}px`;
    star.style.opacity = opacity;

    document.body.appendChild(star);
  }
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateStaticContent();
  generateStars();
  console.log('Personal website loaded.');
});

// Generate stars on resize
window.addEventListener('resize', generateStars);


