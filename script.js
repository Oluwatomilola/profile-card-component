// Profile Card Component
class ProfileCard {
    constructor() {
      this.card = document.querySelector('[data-test-id="profile-card"]');
      this.statusIndicator = document.querySelector('[data-test-id="status-indicator"]');
      this.socialLinks = document.querySelectorAll('[data-test-id="social-link"]');
  
      this.init();
    }
  
    init() {
      console.log('Profile Card initialized');
      this.setupEventListeners();
      this.setRandomStatus();
    }
  
    setupEventListeners() {
      this.statusIndicator.addEventListener('click', () => this.setRandomStatus());
    }
  
    // Randomly change user status color and tooltip
    setRandomStatus() {
      const statuses = [
        { text: 'Online', color: '#22c55e' },
        { text: 'Away', color: '#facc15' },
        { text: 'Do not disturb', color: '#ef4444' },
        { text: 'Offline', color: '#9ca3af' },
      ];
  
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      this.statusIndicator.style.backgroundColor = randomStatus.color;
      this.statusIndicator.setAttribute('title', randomStatus.text);
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new ProfileCard();
  });
  