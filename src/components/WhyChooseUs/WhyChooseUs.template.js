const template = (styles, sectionData) => {
  return `
    <div class='${styles['section-template']} ${sectionData.bgMode} text-center'>
      <div class='container'>
        <div class='${styles['section-template__subheader']}'>${sectionData.subheader}</div>
        <div class='${styles['section-template__header']}'>${sectionData.header}</div>
      </div>
      <div class='container'>
        <div class='${styles['core-values__container']} position-relative'>
          <div class='${styles['core-values__circle']}'>
            <span class='d-block'>7 CORE VALUES</span>
            <span class='d-block'>That make us the best transportation company in the area</span>
          </div>
          <div class='${styles['core-values__circle']}'>
            <div 
              class='${styles['core-values__circle-item']}' 
              style='transform: rotate(25deg) translate(0,-255px) rotate(-25deg);'>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
              <span class='${styles['core-values__circle-item-label']}'>FIRST-RATE CUSTOMER SERVICE</span>
            </div>
            <div 
              class='${styles['core-values__circle-item']}'
              style='transform: rotate(76.42857142857143deg) translate(0,-255px) rotate(-76.42857142857143deg'>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
              <span class='${styles['core-values__circle-item-label']}'>CLEAN AND WELL-MAINTAINED VEHICLES</span>
            </div>
            <div 
              class='${styles['core-values__circle-item']}'
              style='transform:rotate(127.85714285714286deg) translate(0,-255px) rotate(-127.85714285714286deg'>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
              <span class='${styles['core-values__circle-item-label']}'>INNOVATIVE USE OF TECHNOLOGY</span>
            </div>
            <div 
              class='${styles['core-values__circle-item']}'
              style='transform:rotate(179.28571428571428deg) translate(0,-255px) rotate(-179.28571428571428deg'>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
              <span class='${styles['core-values__circle-item-label']}'>PUNCTUALITY AND VERACITY</span>
            </div>
            <div 
              class='${styles['core-values__circle-item']}'
              style='transform: rotate(230.714deg) translate(0px, -255px) rotate(-230.714deg); margin-left: -438px;'>
              <span class='${styles['core-values__circle-item-label']}'>PURSUIT OF CONTINUOUS IMPROVEMENT</span>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
            </div>
            <div 
              class='${styles['core-values__circle-item']}'
              style='transform: rotate(282.143deg) translate(0px, -255px) rotate(-282.143deg); margin-left: -378px;'>
              <span class='${styles['core-values__circle-item-label']}'>SAFETY AS OUR HIGHEST PRIORITY</span>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
            </div>
            <div 
              class='${styles['core-values__circle-item']}'
              style='transform: rotate(333.571deg) translate(0px, -255px) rotate(-333.571deg); margin-left: -450px;'>
              <span class='${styles['core-values__circle-item-label']}'>HIGHLY TRAINED PROFESSIONAL DRIVERS</span>
              <span class='${styles['core-values__circle-item-circle']}'>
                <i class='${styles['core-values__circle-item-icon']} fa-solid fa-check'></i>
              </span>
            </div>
          </div>
          <div class='${styles['core-values__circle']}'></div>
        </div>
      </div>
    </div>
  `
}
export default template
