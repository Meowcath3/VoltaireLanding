class VoltaireAppOfAwesomeness {
    constructor() {
        this.isLoadedAndReady = false;
        this.laserShowInterval = null;
        this.particleMagicInterval = null;
        this.dorkinessFactor = 9000; // It's over 9000!
        
        this.initializeTheDorkiness();
    }

    initializeTheDorkiness() {
        // Wait for the DOM to stop being lazy
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMFinishedBeingLazy());
        } else {
            this.onDOMFinishedBeingLazy();
        }
    }

    onDOMFinishedBeingLazy() {
        this.setupLoadingScreenOfImpatience();
        this.setupEventListenersOfPower();
        this.startLoadingTheAwesome();
    }

    setupLoadingScreenOfImpatience() {
        const progressBarOfSlowness = document.getElementById('progressBarOfAwesomeness');
        let progressOfDoom = 0;
        
        const loadingIntervalOfTediousness = setInterval(() => {
            progressOfDoom += Math.random() * 12 + 3; // Random progress because why not?
            if (progressOfDoom > 100) progressOfDoom = 100;
            
            progressBarOfSlowness.style.width = progressOfDoom + '%';
            
            // Are we there yet? Are we there yet?
            if (progressOfDoom >= 100) {
                clearInterval(loadingIntervalOfTediousness);
                setTimeout(() => this.finishLoadingAndParty(), 800);
            }
        }, 120);
    }

    finishLoadingAndParty() {
        const loadingScreenOfBoredom = document.getElementById('loadingScreenOfDoom');
        const topBarOfMightiness = document.getElementById('topBarOfPower');
        const mainContainerOfWonders = document.getElementById('mainContainerOfWonders');
        const mainTitleOfEpicness = document.getElementById('mainTitleOfDestiny');

        // Fade out the boring loading screen
        loadingScreenOfBoredom.classList.add('fadeout');
        
        // Time to activate the awesomeness!
        setTimeout(() => {
            topBarOfMightiness.classList.add('loaded');
            mainContainerOfWonders.classList.add('loaded');
            mainTitleOfEpicness.classList.add('loaded');
            
            this.isLoadedAndReady = true;
            this.startAllTheCooolAnimations();
            this.animateCardsLikeABoss();
            
            loadingScreenOfBoredom.style.display = 'none';
        }, 1000);
    }

    setupEventListenersOfPower() {
        // Listen for clicks like a very attentive puppy
        document.addEventListener('click', (clickEvent) => {
            if (clickEvent.target.classList.contains('power-button')) {
                this.handleButtonClickOfDestiny(clickEvent.target);
            }
        });

        // Set up the intersection observer (aka the "Are you visible yet?" watcher)
        this.setupIntersectionObserverOfStalking();
        
        // Listen for window resize like it's gossip
        window.addEventListener('resize', () => {
            this.handleResizeLikeAChampion();
        });
    }

    setupIntersectionObserverOfStalking() {
        const observerOptionsOfStalking = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const stalkerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.isLoadedAndReady) {
                    const delayOfSuspense = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, delayOfSuspense * 1000);
                    stalkerObserver.unobserve(entry.target);
                }
            });
        }, observerOptionsOfStalking);

        // Stalk all the feature cards like a creepy but friendly observer
        document.querySelectorAll('.feature-card').forEach(card => {
            stalkerObserver.observe(card);
        });
    }

    startAllTheCooolAnimations() {
        // Start the laser light show!
        this.startLaserShowOfAwesomeness();
        
        // Start the magical particle effects
        this.startParticleMagicShow();
        
        // First laser show after 3 seconds (dramatic pause)
        setTimeout(() => {
            LaserEffectsOfCoolness.triggerLaserShow();
        }, 3000);
    }

    startLaserShowOfAwesomeness() {
        this.laserShowInterval = setInterval(() => {
            LaserEffectsOfCoolness.triggerLaserShow();
        }, 8000); // Every 8 seconds because lasers are cool
    }

    startParticleMagicShow() {
        this.particleMagicInterval = setInterval(() => {
            ParticleEffectsOfMagic.createFloatingOrbOfCuteness();
        }, 2500);
    }

    animateCardsLikeABoss() {
        const cardsOfAwesome = document.querySelectorAll('.feature-card');
        cardsOfAwesome.forEach((card, indexOfCoolness) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, indexOfCoolness * 250);
        });
    }

    handleButtonClickOfDestiny(buttonOfPower) {
        const actionOfImportance = buttonOfPower.dataset.action;
        
        // Add the charging effect (because buttons need to charge up like phones)
        buttonOfPower.classList.add('charging');
        setTimeout(() => {
            buttonOfPower.classList.remove('charging');
        }, 500);
        
        // Create spectacular spark show!
        ParticleEffectsOfMagic.createSparkPartyAroundButton(buttonOfPower);
        
        // Handle different button actions like a responsible adult
        switch(actionOfImportance) {
            case 'activate':
                this.activatePowerModeOfUltimateDestiny();
                break;
            case 'start':
                this.startJourneyOfEpicAdventure();
                break;
            case 'learn':
                this.learnMoreStuffAndThings();
                break;
        }
    }

    activatePowerModeOfUltimateDestiny() {
        console.log('🚀 Power Mode Activated! Prepare for ultimate experience!');
        this.updatePowerLevelDisplay('MAXIMUM POWER!');
        LaserEffectsOfCoolness.triggerLaserShow();
        this.dorkinessFactor += 1000; // More dorkiness!
    }

    startJourneyOfEpicAdventure() {
        console.log('🎯 Epic Journey Commenced! Pack your virtual bags!');
        this.updateStatusDisplay('ADVENTURE MODE: ON');
    }

    learnMoreStuffAndThings() {
        console.log('🤓 Learning Mode Activated! Time to get smarter!');
        this.updateStatusDisplay('BRAIN EXPANSION IN PROGRESS');
    }

    updatePowerLevelDisplay(textOfPower) {
        const powerLevelThingy = document.getElementById('powerLevelOfEpicness');
        powerLevelThingy.textContent = textOfPower;
        
        setTimeout(() => {
            powerLevelThingy.textContent = 'POWER LEVEL: 9000+';
        }, 3500);
    }

    updateStatusDisplay(textOfStatus) {
        const statusThingy = document.getElementById('statusTextOfGlory');
        const originalTextOfBoring = statusThingy.textContent;
        statusThingy.textContent = textOfStatus;
        
        setTimeout(() => {
            statusThingy.textContent = originalTextOfBoring;
        }, 2500);
    }

    handleResizeLikeAChampion() {
        // Handle window resizing like a flexible yoga master
        console.log('🪟 Window got resized! Adapting like a chameleon!');
    }

    destroyEverything() {
        // Clean up all the intervals (be a responsible programmer)
        if (this.laserShowInterval) clearInterval(this.laserShowInterval);
        if (this.particleMagicInterval) clearInterval(this.particleMagicInterval);
        console.log('💥 Voltaire App has been destroyed! Thanks for playing!');
    }
}

// Initialize the dorky app of ultimate awesomeness
const voltaireAppInstance = new VoltaireAppOfAwesomeness();

// Make it globally accessible for debugging and showing off
window.VoltaireApp = voltaireAppInstance;