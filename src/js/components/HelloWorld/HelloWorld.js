class HelloWorld extends HTMLElement {
  #posts = []

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  set posts (value) {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
      <section class="blog-posts">
        <slot name="heading"><h2>Blog Posts</h2></slot>
        <div class="posts">
          POSTS
          </div>
      </section>
    `
  }
}

customElements.define('hello-world', HelloWorld)
