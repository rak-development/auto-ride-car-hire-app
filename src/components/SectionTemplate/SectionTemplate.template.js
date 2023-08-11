const template = () => {
  return `
    <div>
      Section Template
      <slot name='subheader'></slot>
    </div>
  `;
};

export default template;
