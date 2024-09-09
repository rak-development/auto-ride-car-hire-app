export const replaceBrTagWithNewLine = (text: string) =>
  text.replace(/<br\s*[\/]?>/gi, '\n')
