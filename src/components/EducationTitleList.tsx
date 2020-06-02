import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface SchoolTitleObject {
  school: string
  id: string
}

interface IProps {
  schoolList: SchoolTitleObject[]
}

export const EducationTitleList: FC<IProps> = ({ schoolList }) => {
  const [focusSchool, setFocusSchool] = useState<string>('1')
  return (
    <EducationTitleListContainer>
      {schoolList.map(({school, id}) => (
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
