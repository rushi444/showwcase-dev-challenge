import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface IProps {
  schoolList: string[]
}

export const EducationTitleList: FC<IProps> = ({ schoolList }) => {
  const [focusSchool, setFocusSchool] = useState<number>(0)
  return (
    <EducationTitleListContainer>
      {schoolList.map((school, index) => (
        <p key={index}>
          <a
            style={{ color: index === focusSchool ? '#646df6' : 'black' }}
            onClick={() => setFocusSchool(index)}
            href={`#${index}`}
          >
            {school}
          </a>
        </p>
      ))}
    </EducationTitleListContainer>
  )
}

const EducationTitleListContainer = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
`

EducationTitleListContainer.displayName = 'EducationTitleListContainer'
