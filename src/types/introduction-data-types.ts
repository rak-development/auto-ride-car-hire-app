export type IntroductionContentType = {
  id: number,
  title: string,
  text: string,
}

export type IntroductionImagesType = {
  id: number,
  title: string,
  image: string
}

export type IntroductionQuoteType = {
  text: string,
  author: string
}

export type IntroductionDataType = {
  title: string,
  content: IntroductionContentType[],
  images: IntroductionImagesType[],
  quote: IntroductionQuoteType
}
