class HelloWorld extends HTMLElement {
  #posts = []

  constructor () {
    super()
    this.attachShadow({ mode: 'open' });
    this.posts = [{ id: '1', content: 'Hello' }, { id: '2', content: 'World' }];
  }

  set posts (value) {
    this.#posts = value;
    this.render();
  }

  render () {
    const posts = this.#posts.map(post => `<li data-id="${post.id}">${post.content}</li>`).join('');
    this.shadowRoot.innerHTML = `
      <section class="blog-posts">
        <slot name="heading"><h2>Blog Posts</h2></slot>
        <div class="posts">
          POSTS
        </div>
        <ul>
        ${posts}
        </ul>
      </section>
    `
  }
}

customElements.define('hello-world', HelloWorld)
