// Animation Manager Class (The Master of Movement and Mayhem)
class AnimationManagerOfEpicness {
    
    // Animate any element with a given class (like giving it superpowers)
    static animateElementLikeABoss(element, animationClass, durationOfAwesome = 1000) {
        element.classList.add(animationClass);
        
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, durationOfAwesome);
    }

    // Slide in an element like it's making a grand entrance
    static slideInElementWithStyle(element, delayOfDrama = 0) {
        element.style.transform = 'translateX(-100px) rotate(-3deg)';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.transition = 'all 1s ease-out';
            element.style.transform = 'translateX(0) rotate(0deg)';
            element.style.opacity = '1';
        }, delayOfDrama);
    }

    // Make an element pulse like it has a heartbeat
    static pulseElementWithFeeling(element, intensityOfPulse = 1.08) {
        const originalTransform = element.style.transform;
        
        element.style.transition = 'transform 0.3s ease';
        element.style.transform = `scale(${intensityOfPulse})`;
        
        setTimeout(() => {
            element.style.transform = originalTransform;
        }, 300);
    }

    // Make an element glow like it ate some glowing food
    static glowElementWithMagic(element, colorOfGlow = '#00cc00', durationOfGlow = 1000) {
        const originalBoxShadow = element.style.boxShadow;
        
        element.style.transition = `box-shadow ${durationOfGlow}ms ease`;
        element.style.boxShadow = `0 0 20px ${colorOfGlow}, 0 0 40px ${colorOfGlow}`;
        
        setTimeout(() => {
            element.style.boxShadow = originalBoxShadow;
        }, durationOfGlow);
    }

    // Shake an element like it's having a tiny earthquake
    static shakeElementWithExcitement(element, intensityOfShake = 4) {
        const originalTransform = element.style.transform;
        let shakeCount = 0;
        const maxShakes = 8;
        
        const shakeFunction = () => {
            if (shakeCount < maxShakes) {
                const xShake = (Math.random() - 0.5) * intensityOfShake;
                const yShake = (Math.random() - 0.5) * intensityOfShake;
                element.style.transform = `translate(${xShake}px, ${yShake}px)`;
                shakeCount++;
                setTimeout(shakeFunction, 60);
            } else {
                element.style.transform = originalTransform;
            }
        };
        
        shakeFunction();
    }

    // Type out text like an old-school computer terminal
    static typeWriterEffectWithSuspense(element, textToType, speedOfTyping = 70) {
        element.textContent = '';
        let characterIndex = 0;
        
        const typingInterval = setInterval(() => {
            if (characterIndex < textToType.length) {
                element.textContent += textToType.charAt(characterIndex);
                characterIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, speedOfTyping);
    }

    // Fade in an element from the bottom like it's rising from the grave
    static fadeInUpWithDrama(element, delayOfSuspense = 0) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delayOfSuspense);
    }

    // Rotate an element like it's doing a pirouette
    static rotateElementWithGrace(element, degreesOfRotation = 360, durationOfSpin = 1000) {
        element.style.transition = `transform ${durationOfSpin}ms ease-in-out`;
        element.style.transform = `rotate(${degreesOfRotation}deg)`;
        
        setTimeout(() => {
            element.style.transform = 'rotate(0deg)';
        }, durationOfSpin);
    }

    // Make an element wiggle like a happy puppy
    static wiggleElementWithJoy(element, durationOfWiggle = 2000) {
        const wiggleKeyframes = [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-2deg)' },
            { transform: 'rotate(0deg)' }
        ];
        
        element.animate(wiggleKeyframes, {
            duration: durationOfWiggle,
            iterations: 3,
            easing: 'ease-in-out'
        });
    }

    // Make an element bounce like it's on a trampoline
    static bounceElementWithEnergy(element, heightOfBounce = 20, durationOfBounce = 1000) {
        const bounceKeyframes = [
            { transform: 'translateY(0px)' },
            { transform: `translateY(-${heightOfBounce}px)` },
            { transform: 'translateY(0px)' },
            { transform: `translateY(-${heightOfBounce/2}px)` },
            { transform: 'translateY(0px)' }
        ];
        
        element.animate(bounceKeyframes, {
            duration: durationOfBounce,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
    }

    // Make an element wobble like jelly
    static wobbleElementLikeJelly(element, durationOfWobble = 1500) {
        const wobbleKeyframes = [
            { transform: 'rotate(0deg) scale(1)' },
            { transform: 'rotate(1deg) scale(1.02)' },
            { transform: 'rotate(-1deg) scale(0.98)' },
            { transform: 'rotate(1deg) scale(1.01)' },
            { transform: 'rotate(0deg) scale(1)' }
        ];
        
        element.animate(wobbleKeyframes, {
            duration: durationOfWobble,
            easing: 'ease-in-out'
        });
    }

    // Create a rainbow effect on text (because rainbows are awesome)
    static rainbowTextEffect(element, durationOfRainbow = 3000) {
        const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
        let colorIndex = 0;
        
        const rainbowInterval = setInterval(() => {
            element.style.color = rainbowColors[colorIndex];
            colorIndex = (colorIndex + 1) % rainbowColors.length;
        }, durationOfRainbow / rainbowColors.length);
        
        setTimeout(() => {
            clearInterval(rainbowInterval);
            element.style.color = ''; // Reset to original color
        }, durationOfRainbow);
    }
}

// Export the animation manager for global use (sharing is caring!)
window.AnimationManagerOfEpicness = AnimationManagerOfEpicness;