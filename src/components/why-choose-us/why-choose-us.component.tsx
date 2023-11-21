import Container from "react-bootstrap/Container"

import CIRCLE_CONTENT_DATA from '../../circle-content-data.json'

import { type CircleContentDataType } from "../../types/circle-content-data-types"
import { SectionTemplate } from "../section-template/section-template.component"
import { CoreValuesList } from "./core-values-list/core-values-list.component"
import { CoreValuesCircles } from "./core-values-circles/core-values-circles.component"




export const WhyChooseUs = () => {
  const { header, subheader, coreValues }: CircleContentDataType = CIRCLE_CONTENT_DATA
  return (
    <SectionTemplate
      subheader='Why Choose Us'
      header='Proudly Serving the Oakland Area Since 2007'
      bgMode='--bs-white'
    >
      <Container>
        <CoreValuesCircles header={header} subheader={subheader} coreValues={coreValues} />
        <CoreValuesList header={header} subheader={subheader} coreValues={coreValues} />
      </Container>
    </SectionTemplate>
  )
}
