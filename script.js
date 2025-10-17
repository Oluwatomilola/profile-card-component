// Profile Card Component
class ProfileCard {
    constructor() {
        this.card = document.querySelector('[data-testid="profile-card"]');
        this.followBtn = document.querySelector('[data-testid="btn-follow"]');
        this.messageBtn = document.querySelector('[data-testid="btn-message"]');
        this.statusIndicator = document.querySelector('[data-testid="status-indicator"]');
        this.profileImage = document.querySelector('[data-testid="profile-image"]');
        this.profileInitial = document.querySelector('[data-testid="profile-initial"]');
        this.profileName = document.querySelector('[data-testid="profile-name"]');
        this.profileTitle = document.querySelector('[data-testid="profile-title"]');
        this.profileDescription = document.querySelector('[data-testid="profile-description"]');
        this.profileStats = document.querySelector('[data-testid="profile-stats"]');
        this.profileStatsItems = document.querySelectorAll('[data-testid="stat-item"]');
        this.profileStatsNumbers = document.querySelectorAll('[data-testid="stat-number"]');
        this.profileStatsLabels = document.querySelectorAll('[data-testid="stat-label"]');
        this.profileActions = document.querySelector('[data-testid="profile-actions"]');
        this.socialLinks = document.querySelector('[data-testid="social-links"]');
        this.socialLinksItems = document.querySelectorAll('[data-testid="social-link"]');
        this.socialLinksIcons = document.querySelectorAll('[data-testid="social-icon"]');
        this.socialLinksTexts = document.querySelectorAll('[data-testid="social-text"]');
        this.socialLinksPlatforms = document.querySelectorAll('[data-testid="social-platform"]');
        this.socialLinksPlatformsIcons = document.querySelectorAll('[data-testid="social-platform-icon"]');
        this.socialLinksPlatformsTexts = document.querySelectorAll('[data-testid="social-platform-text"]');
        this.socialLinksPlatformsPlatforms = document.querySelectorAll('[data-testid="social-platform-platform"]');
        this.socialLinksPlatformsPlatformsIcons = document.querySelectorAll('[data-testid="social-platform-platform-icon"]');
        this.socialLinksPlatformsPlatformsTexts = document.querySelectorAll('[data-testid="social-platform-platform-text"]');
        this.socialLinksPlatformsPlatformsPlatforms = document.querySelectorAll('[data-testid="social-platform-platform-platform"]');
        this.socialLinksPlatformsPlatformsPlatformsIcons = document.querySelectorAll('[data-testid="social-platform-platform-platform-icon"]');
        this.socialLinksPlatformsPlatformsPlatformsTexts = document.querySelectorAll('[data-testid="social-platform-platform-platform-text"]');
        this.socialLinksPlatformsPlatformsPlatformsPlatforms = document.querySelectorAll('[data-testid="social-platform-platform-platform-platform"]');
        this.socialLinksPlatformsPlatformsPlatformsPlatformsIcons = document.querySelectorAll('[data-testid="social-platform-platform-platform-platform-icon"]');
        this.socialLinksPlatformsPlatformsPlatformsPlatformsTexts = document.querySelectorAll('[data-testid="social-platform-platform-platform-platform-text"]');
        this.init();
    }

    init() {
        console.log('Profile Card initialized');
        this.setupEventListeners();
        this.animateStats();
        this.setRandomStatus();
        
    }

    setupEventListeners() {
        this.followBtn.addEventListener('click', () => this.toggleFollow());
        this.messageBtn.addEventListener('click', () => this.showMessage());
        this.statusIndicator.addEventListener('click', () => this.setRandomStatus());
        this.profileImage.addEventListener('click', () => this.showProfileImage());
        this.profileInitial.addEventListener('click', () => this.showProfileInitial());
    }
}

    setRandomStatus() {
        const statuses = ['Online', 'Away', 'Do not disturb', 'Offline'];
        this.statusIndicator.textContent = statuses[Math.floor(Math.random() * statuses.length)];
    }

    showProfileImage() {
        this.profileImage.style.display = 'block';
    }

    showProfileInitial() {
        this.profileInitial.style.display = 'block';
    }

    toggleFollow() {
        this.isFollowing = !this.isFollowing;
        const btn = this.followBtn;
        
        if (this.isFollowing) {
            btn.textContent = 'Following';
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            this.animateFollow();
        } else {
            btn.textContent = 'Follow';
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');
        }
    }

    animateStats() {
        const animateNumber = (element, target) => {
            const start = 0;
            const duration = 1000;
            const startTime = performance.now();
            
            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (target - start) * progress);
                
                element.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };
            
            requestAnimationFrame(update);
        };
    }

    showMessage() {
        this.messageBtn.textContent = this.messageBtn.textContent === 'Message' ? 'Message sent' : 'Message';
    }



// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProfileCard();
});
