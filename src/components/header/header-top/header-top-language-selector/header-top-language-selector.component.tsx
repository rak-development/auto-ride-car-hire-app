import { useTranslation } from 'react-i18next'

import styled from '@emotion/styled'

import { LANGUAGES } from '../../../../constants'
import { device } from '../../../../devices-breakpoints'

const LanguageSelection = styled.select`
  font-size: 0.9375rem;
  padding: 0.675em;
  background-color: var(--bs-white);
  border: 1px solid var(--bs-gray-800);
  border-radius: 0.25rem;
  color: var(--bs-gray-800);
  cursor: pointer;

  @media ${device.md} {
    margin-left: 1.25rem;
  }
`

export const HeaderTopLanguageSelector = () => {
  const { i18n } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }

  return (
    <LanguageSelection
      defaultValue={i18n.language}
      onChange={onChangeLang}
      title='Language Selector'
      aria-label='Language Selector'
    >
      {LANGUAGES.map(({ code }) => (
        <option key={code} value={code}>
          {code.toUpperCase()}
        </option>
      ))}
    </LanguageSelection>
  )
}
