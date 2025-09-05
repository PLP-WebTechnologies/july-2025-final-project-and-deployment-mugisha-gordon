// Hero slider functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.controls = document.querySelectorAll('.control');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.intervalTime = 5000;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Show first slide
        this.showSlide(this.currentSlide);
        
        // Set up event listeners for controls
        this.controls.forEach(control => {
            control.addEventListener('click', (e) => {
                if (e.currentTarget.classList.contains('next')) {
                    this.nextSlide();
                } else if (e.currentTarget.classList.contains('prev')) {
                    this.prevSlide();
                }
                
                // Reset auto slide timer on manual navigation
                this.resetInterval();
            });
        });
        
        // Start auto sliding
        this.startInterval();
        
        // Pause auto sliding when hovering over slider
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => {
                this.clearInterval();
            });
            
            hero.addEventListener('mouseleave', () => {
                this.startInterval();
            });
        }
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show the selected slide
        this.slides[index].classList.add('active');
        this.currentSlide = index;
    }
    
    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0;
        }
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        let prevIndex = this.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1;
        }
        this.showSlide(prevIndex);
    }
    
    startInterval() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.intervalTime);
    }
    
    resetInterval() {
        this.clearInterval();
        this.startInterval();
    }
    
    clearInterval() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize slider when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});