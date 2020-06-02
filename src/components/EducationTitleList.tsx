import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { SchoolTitleObject } from '../shared/types'

interface IProps {
  schoolList: SchoolTitleObject[]
}

export const EducationTitleList: FC<IProps> = ({ schoolList }) => {
  const [focusSchool, setFocusSchool] = useState<string>(schoolList[0]?.id || '')
  return (
    <EducationTitleListContainer>
      {schoolList?.map(({ school, id }) => (
        <p key={id}>
          <a
            style={{ color: id === focusSchool ? '#646df6' : 'black' }}
            onClick={() => setFocusSchool(id)}
            href={`#${id}`}
          >
            {school}
          </a>
        </p>
      ))}
    </EducationTitleListContainer>
  )
}

const EducationTitleListContainer = styled.div`
  height: 100%;
  overflow: auto;
  a {
    color: black;
    text-decoration: none;
  }
`

EducationTitleListContainer.displayName = 'EducationTitleListContainer'
