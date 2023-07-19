const template = () => {
  return `
    <style>
      .social-icons__el {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.3125rem 0.625rem 0.3125rem 0rem;
      }
    
      .social-icons__icon {
        font-size: 1rem;
      }
    
      .social-icons a {
        color: $gray-600;
        transition: all 200ms ease;
      }
      .social-icons a:hover {
        color: $gray-700;
      }
    </style>

    <div class='d-flex justify-content-end align-items-center'>
      <div class='social-icons__el'>
        <a href="" target="_blank">
          <i class='social-icons__icon fa-brands fa-facebook-f'></i>
        </a>
      </div>
      <div class='social-icons__el me-0'>
        <a href="" target="_blank">
          <i class='social-icons__icon fa-brands fa-twitter'></i>
        </a>
      </div>
    </div>
  `
}
export default template
