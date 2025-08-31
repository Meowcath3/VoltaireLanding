// Laser Effects Class (Because Lasers Are Way Cooler Than Thunder)
class LaserEffectsOfCoolness {
    static triggerLaserShow() {
        // Create multiple laser beams for maximum coolness
        this.createVerticalLaserBeam();
        
        setTimeout(() => {
            this.createHorizontalLaserBeam();
        }, 500);
        
        setTimeout(() => {
            this.createDiagonalLaserBeam();
        }, 1000);
    }

    static createVerticalLaserBeam() {
        const laserContainer = document.getElementById('laserLightShow');
        const laserBeamOfDoom = document.createElement('div');
        laserBeamOfDoom.classList.add('laser-beam');
        
        // Random position because randomness is fun
        const randomPosition = Math.random() * window.innerWidth;
        laserBeamOfDoom.style.left = randomPosition + 'px';
        laserBeamOfDoom.style.top = '0px';
        
        laserContainer.appendChild(laserBeamOfDoom);
        
        // Remove the laser after it's done being awesome
        setTimeout(() => {
            if (laserBeamOfDoom.parentNode) {
                laserBeamOfDoom.remove();
            }
        }, 3000);
    }

    static createHorizontalLaserBeam() {
        const laserContainer = document.getElementById('laserLightShow');
        const horizontalLaser = document.createElement('div');
        horizontalLaser.classList.add('laser-beam', 'horizontal');
        
        // Random vertical position
        const randomHeight = Math.random() * window.innerHeight;
        horizontalLaser.style.top = randomHeight + 'px';
        horizontalLaser.style.left = '0px';
        
        laserContainer.appendChild(horizontalLaser);
        
        // Clean up after the laser party
        setTimeout(() => {
            if (horizontalLaser.parentNode) {
                horizontalLaser.remove();
            }
        }, 4000);
    }

    static createDiagonalLaserBeam() {
        const laserContainer = document.getElementById('laserLightShow');
        const diagonalLaser = document.createElement('div');
        diagonalLaser.classList.add('laser-beam');
        
        // Make it diagonal with CSS transform magic
        diagonalLaser.style.transform = 'rotate(45deg)';
        diagonalLaser.style.left = Math.random() * window.innerWidth * 0.8 + 'px';
        diagonalLaser.style.top = '0px';
        diagonalLaser.style.transformOrigin = 'top left';
        
        laserContainer.appendChild(diagonalLaser);
        
        // Diagonal lasers need extra time to be cool
        setTimeout(() => {
            if (diagonalLaser.parentNode) {
                diagonalLaser.remove();
            }
        }, 3500);
    }
}

// Particle Effects Class (The Magic Sparkle Factory)
class ParticleEffectsOfMagic {
    static createFloatingOrbOfCuteness() {
        const orbOfWonder = document.createElement('div');
        orbOfWonder.classList.add('power-orb');
        
        // Random position because life is unpredictable
        const xPosition = Math.random() * window.innerWidth;
        const yPosition = Math.random() * window.innerHeight;
        orbOfWonder.style.left = xPosition + 'px';
        orbOfWonder.style.top = yPosition + 'px';
        
        // Random timing because why be boring?
        const delayOfSuspense = Math.random() * 3;
        const durationOfFloating = 4 + Math.random() * 4;
        orbOfWonder.style.animationDelay = delayOfSuspense + 's';
        orbOfWonder.style.animationDuration = durationOfFloating + 's';
        
        document.body.appendChild(orbOfWonder);
        
        // Clean up the orb after it's done being adorable
        setTimeout(() => {
            if (orbOfWonder.parentNode) {
                orbOfWonder.remove();
            }
        }, (delayOfSuspense + durationOfFloating) * 1000);
    }

    static createSparkPartyAroundButton(buttonElement) {
        const buttonRect = buttonElement.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        const sparkCount = 6 + Math.random() * 6; // Between 6 and 12 sparks
        
        for (let sparkIndex = 0; sparkIndex < sparkCount; sparkIndex++) {
            const sparkOfJoy = document.createElement('div');
            sparkOfJoy.classList.add('spark');
            sparkOfJoy.style.left = centerX + 'px';
            sparkOfJoy.style.top = centerY + 'px';
            
            // Calculate spark trajectory (fancy math for pretty effects)
            const angleOfFlight = (Math.PI * 2 * sparkIndex) / sparkCount + (Math.random() - 0.5) * 0.8;
            const speedOfSpark = 60 + Math.random() * 40;
            const xVelocity = Math.cos(angleOfFlight) * speedOfSpark;
            const yVelocity = Math.sin(angleOfFlight) * speedOfSpark;
            
            document.body.appendChild(sparkOfJoy);
            
            // Animate the spark with style
            sparkOfJoy.animate([
                { 
                    transform: 'translate(0, 0) scale(1)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${xVelocity}px, ${yVelocity}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 500 + Math.random() * 400,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                sparkOfJoy.remove();
            };
        }
    }

    static createEnergyRippleOfPower(centerX, centerY) {
        const rippleOfAwesome = document.createElement('div');
        rippleOfAwesome.style.position = 'absolute';
        rippleOfAwesome.style.left = centerX + 'px';
        rippleOfAwesome.style.top = centerY + 'px';
        rippleOfAwesome.style.width = '8px';
        rippleOfAwesome.style.height = '8px';
        rippleOfAwesome.style.border = '2px solid #00cc00';
        rippleOfAwesome.style.borderRadius = '50%';
        rippleOfAwesome.style.pointerEvents = 'none';
        rippleOfAwesome.style.zIndex = '9999';
        
        document.body.appendChild(rippleOfAwesome);
        
        rippleOfAwesome.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0)', 
                opacity: 1 
            },
            { 
                transform: 'translate(-50%, -50%) scale(15)', 
                opacity: 0 
            }
        ], {
            duration: 1200,
            easing: 'ease-out'
        }).onfinish = () => {
            rippleOfAwesome.remove();
        };
    }

    static createGlitchEffectOfChaos(textElement) {
        const originalText = textElement.textContent;
        const chaosCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';
        let glitchCounter = 0;
        const maxGlitchiness = 4;
        
        const glitchFunction = () => {
            if (glitchCounter < maxGlitchiness) {
                let glitchedText = '';
                for (let charIndex = 0; charIndex < originalText.length; charIndex++) {
                    if (Math.random() < 0.15) {
                        glitchedText += chaosCharacters[Math.floor(Math.random() * chaosCharacters.length)];
                    } else {
                        glitchedText += originalText[charIndex];
                    }
                }
                textElement.textContent = glitchedText;
                glitchCounter++;
                setTimeout(glitchFunction, 80);
            } else {
                textElement.textContent = originalText;
            }
        };
        
        glitchFunction();
    }
}

// Audio Manager Class (For Future Sound Effects)
class AudioManagerOfSoundGoodness {
    static soundEffects = {
        laserZap: null,
        buttonBoop: null,
        powerUpWoosh: null
    };

    static initializeSoundStuff() {
        // Future sound initialization goes here
        // When you add sound files to assets/sounds/, uncomment these:
        /*
        this.soundEffects.laserZap = new Audio('assets/sounds/laser-zap.wav');
        this.soundEffects.buttonBoop = new Audio('assets/sounds/button-boop.wav');
        this.soundEffects.powerUpWoosh = new Audio('assets/sounds/power-up-woosh.wav');
        */
        console.log('🔊 Audio Manager initialized (but no sounds yet because we are lazy)');
    }

    static playLaserSound() {
        if (this.soundEffects.laserZap) {
            this.soundEffects.laserZap.currentTime = 0;
            this.soundEffects.laserZap.play().catch(e => console.log('🔇 Audio failed to play:', e));
        }
    }

    static playButtonSound() {
        if (this.soundEffects.buttonBoop) {
            this.soundEffects.buttonBoop.currentTime = 0;
            this.soundEffects.buttonBoop.play().catch(e => console.log('🔇 Button sound failed:', e));
        }
    }

    static playPowerUpSound() {
        if (this.soundEffects.powerUpWoosh) {
            this.soundEffects.powerUpWoosh.currentTime = 0;
            this.soundEffects.powerUpWoosh.play().catch(e => console.log('🔇 Power up sound failed:', e));
        }
    }
}

// Initialize audio when the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    AudioManagerOfSoundGoodness.initializeSoundStuff();
});

// Export classes for use in other scripts (because sharing is caring)
window.LaserEffectsOfCoolness = LaserEffectsOfCoolness;
window.ParticleEffectsOfMagic = ParticleEffectsOfMagic;
window.AudioManagerOfSoundGoodness = AudioManagerOfSoundGoodness;