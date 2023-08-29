const template = (styles, sectionData) => {
  return `
    <style>

      .circle-item {
        position: absolute;
        display: flex;
        width: 100%;
        align-items: center;
        z-index: 1;
      }

      .circle-item__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-width: 2px;
        border-style: solid;
        border-radius: 50%;
        background-color: #FFFFFF;
        border-color: #EAECEE;
      }

      .circle-item__icon {
        width: 28px;
        height: 28px;
        display: block;
        color: #FF700A;
      }

      .circle-item__label {
        padding-left: 40px;
        color: #2C3E50;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .circle-item__text-left {
        justify-content: end;

        .circle-item__circle { order: 1 }
        .circle-item__label { 
          order: 0;
          padding-right: 40px;
          padding-left: 0;
        }
      }

      .circle-item__text-top {
        flex-direction: column;

        .circle-item__circle { order: 1 }
        .circle-item__label { 
          order: 0;
          padding-right: 0;
          padding-left: 0;
          padding-bottom: 40px;
        }
      }

      .circle-item__text-bottom {
        flex-direction: column;
        .circle-item__label {
          padding-top: 40px;
          padding-right: 0;
          padding-left: 0;
        }
      }

    </style>
    <div class='${styles['section-template']} ${sectionData.bgMode} text-center'>
      <div class='container'>
        <div class='${styles['section-template__subheader']}'>${sectionData.subheader}</div>
        <div class='${styles['section-template__header']}'>${sectionData.header}</div>
      </div>
      <div class='container'>
        <div class='${styles['core-values__container']} position-relative'>
          <div class='${styles['core-values__circle']}'>
            <span class='d-block'>${sectionData.valueNumber} CORE VALUES</span>
            <span class='d-block'>That make us the best transportation company in the area</span>
          </div>
          <div id='content-circle' class='${styles['core-values__circle']}'></div>
          <div class='${styles['core-values__circle']}'></div>
        </div>
      </div>
    </div>
  `
}
export default template
