export type IntroductionContentType = {
  id: number,
  title: string,
  text: string,
}

export type IntroductionDataType = {
  title: string,
  content: IntroductionContentType[]
}
