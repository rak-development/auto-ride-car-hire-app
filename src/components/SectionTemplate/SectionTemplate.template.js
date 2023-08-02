const template = (styles, sectionData, children) => {
  return `
    <div class='${styles["section-template"]} ${
      sectionData.bgMode
    } text-center'>
      <div class='container'>
        <div class='${styles["section-template__subheader"]}'>${
          sectionData.subheader
        }</div>
        <div class='${styles["section-template__header"]}'>${
          sectionData.header
        }</div>
        ${Array.from(children)
          .map((child) => child.outerHTML)
          .join("")}
      </div>
    </div>
  `;
};

export default template;
