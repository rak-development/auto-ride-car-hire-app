const template = () => {
  // background section to be added
  return `
    <div class='section-template'>
      <slot name='wrapper'>
        <slot class='section-subheader' name='subheader'></slot>
        <slot class='section-header' name='header'></slot>
        <slot name='content'></slot>
      </slot>
    </div>
  `
}

export default template
