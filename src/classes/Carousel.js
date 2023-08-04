const chevronRight =
    '<svg viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
const chevronLeft =
    '<svg viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>'

export class Carousel {
  #slides = null
  #configuration = null
  #parent = null
  #mainContainer = null
  #currentIndex = 0
  #revealOffset = 75
  #autoTransitionIntervalId = null
  #swipe = { active: false, threshold: 75, offset: 0 }
  #classNames = {
    wrapper: "carousel-wrapper",
    slide: "carousel-slide",
    active: "slide-active",
    navigation: {
        dots: "carousel-dots",
        arrows: "carousel-arrow",
        leftArrow: "left-arrow",
        rightArrow: "right-arrow"
    }
  }

  get currentIndex() {
    return this.#currentIndex
  }

  constructor(slides, configuration, parent = document.body) {
    this.#slides = slides
    this.#configuration = configuration
    this.#parent = parent
    this.#init()
  }

  /**
  * Initializes the carousel
  */
  #init() {
      this.#setCarouselWrapper()
      this.#setSlides()
      this.#setNavigation()
      this.#setAutoTransition()
      this.#setSizeCustomProperties()
  }

  /**
 * Navigates in any given direction
 * @param {1 | -1} direction The direction
 */
  #navigate(direction) {
    if (this.#configuration.infinite) {
        this.#currentIndex =
            direction === 1
                ? (this.#currentIndex + 1) % this.#slides.length
                : this.#currentIndex === 0
                ? this.#slides.length - 1
                : this.#currentIndex - 1
    } else {
        this.#currentIndex =
            direction === 1
                ? this.#currentIndex < this.#slides.length - 1
                    ? this.#currentIndex + 1
                    : this.#currentIndex
                : this.#currentIndex > 0
                ? this.#currentIndex - 1
                : this.#currentIndex
    }

    this.#setOffsetCustomProperty(
        direction === 1 ? this.#revealOffset : -this.#revealOffset
    )
    this.#setCurrentSlide(this.#currentIndex)
    this.#setActiveDot(this.#currentIndex)
  }

  /**
     * Goes to an specific slide
     * @param {number} index The slide index
     */
    #goToSlide(index) {
        this.#setOffsetCustomProperty(
            index > this.#currentIndex
                ? this.#revealOffset
                : -this.#revealOffset
        )
        this.#setCurrentSlide(index)
        this.#setActiveDot(index)
        this.#currentIndex = index
    }

    /**
     * Sets the navigation elements and events
     */
    #setNavigation() {
        this.#setDotsNavigation()
        this.#setArrowsNavigation()
        this.#setPointerEvents()
    }

    /**
     * Sets the pointer events
     */
    #setPointerEvents() {
        this.#mainContainer.addEventListener("pointerdown", (e) =>
            this.#handlePointerDown(e)
        )
        this.#mainContainer.addEventListener("pointerup", (e) =>
            this.#handlePointerUp(e)
        )
    }

    /**
     * Sets dots navigation
     */
    #setDotsNavigation() {
        if (!this.#configuration.dots) return

        const dotsNavigation = document.createElement("div")
        dotsNavigation.classList.add(this.#classNames.navigation.dots)

        this.#slides.forEach((slide, i) => {
            const button = document.createElement("button")

            if (i === this.#currentIndex)
                button.classList.add(this.#classNames.active)

            button.title = `See ${slide.title}`
            button.addEventListener("pointerdown", () => this.#goToSlide(i))

            dotsNavigation.append(button)
        })

        this.#mainContainer.append(dotsNavigation)
    }

    /**
     * Sets arrows navigation
     */
    #setArrowsNavigation() {
        if (!this.#configuration.arrows) return

        const arrows = [
            {
                id: "prev",
                icon: chevronLeft,
                className: this.#classNames.navigation.leftArrow,
                label: "Go to previous slide",
                action: () => this.#navigate(-1)
            },
            {
                id: "next",
                icon: chevronRight,
                className: this.#classNames.navigation.rightArrow,
                label: "Go to next slide",
                action: () => this.#navigate(1)
            }
        ]

        arrows.forEach((arrow) => {
            const button = document.createElement("button")

            button.classList = `${this.#classNames.navigation.arrows} ${
                arrow.className
            }`
            button.innerHTML = arrow.icon
            button.title = arrow.label
            button.addEventListener("pointerdown", arrow.action)
            this.#mainContainer.append(button)
        })
    }

    /**
     * Sets the slides
     */
    #setSlides() {
        this.#slides.forEach((slide, i) => {
            const slideDiv = document.createElement("div")

            slideDiv.classList.add(this.#classNames.slide)
            slideDiv.setAttribute("data-slide", i)

            if (slide.backgroundColor)
                slideDiv.style.backgroundColor = slide.backgroundColor
            if (slide.backgroundImage)
                slideDiv.style.backgroundImage = `url(${slide.backgroundImage})`

            if (i === 0) slideDiv.classList.add(this.#classNames.active)

            const slideText = document.createElement("div")
            const h1 = document.createElement("h1")
            const p = document.createElement("p")

            h1.innerText = slide.title
            p.innerText = slide.paragraph
            slideText.append(h1, p)
            slideDiv.append(slideText)
            this.#mainContainer.append(slideDiv)
        })
    }

    /**
     * Sets the carousel wrapper
     */
    #setCarouselWrapper() {
        const div = document.createElement("div")

        div.classList.add(this.#classNames.wrapper)
        this.#parent.append(div)
        this.#mainContainer = div
    }

    /**
     * Handles the pointer down event
     * @param {PointerEvent} e The event
     */
    #handlePointerDown({ clientX }) {
        if (this.#autoTransitionIntervalId)
            clearInterval(this.#autoTransitionIntervalId)

        this.#swipe.active = true
        this.#swipe.offset = clientX
    }

    /**
     * Handles the pointer up event
     * @param {PointerEvent} e The event
     */
    #handlePointerUp({ clientX }) {
        if (!this.#swipe.active) return

        this.#swipe.active = false

        const tapped = this.#swipe.offset === clientX
        const reachedThreshold =
            Math.abs(clientX - this.#swipe.offset) >= this.#swipe.threshold

        if (tapped || !reachedThreshold) return

        if (clientX < this.#swipe.offset) this.#navigate(1)
        else this.#navigate(-1)

        this.#swipe.offset = 0
    }

    /**
     * Sets the current slide
     * @param {number} index The slide index
     */
    #setCurrentSlide(index) {
        [...this.#mainContainer.children].forEach((slide) => {
            if (+slide.dataset.slide === index)
                slide.classList.add(this.#classNames.active)
            else slide.classList.remove(this.#classNames.active)
        })
    }

    /**
     * Sets the active slide dot
     * @param {number} index The slide index
     */
    #setActiveDot(index) {
        const dots = this.#mainContainer.querySelector(
            `.${this.#classNames.navigation.dots}`
        );

        [...dots.children].forEach((dot, i) => {
            if (i === index) dot.classList.add(this.#classNames.active)
            else dot.classList.remove(this.#classNames.active)
        })
    }

    /**
     * Sets the offset value for the CSS animation
     * @param {1 | -1} value The offset value
     */
    #setOffsetCustomProperty(value) {
        this.#mainContainer.style.setProperty(
            "--revealSlideOffset",
            `${value}px`
        )
    }

    /**
     * Sets the auto transition
     */
    #setAutoTransition() {
        if (!this.#configuration.autoTransition) return

        this.#autoTransitionIntervalId = setInterval(() => {
            this.#navigate(1)
        }, this.#configuration.autoTransitionDelay ?? 1000)
    }

    /**
     * Sets the custom properties for the carousel's size
     */
    #setSizeCustomProperties() {
        this.#mainContainer.style.setProperty(
            "--slider-width",
            this.#configuration.width
        )
        this.#mainContainer.style.setProperty(
            "--slider-height",
            this.#configuration.height
        )
    }
}
