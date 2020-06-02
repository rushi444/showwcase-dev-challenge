import React, { useState, useRef, useEffect, FC } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { IInitialState } from '../../shared/types'
import { getAllSchools } from '../../redux/actions'
import styled from 'styled-components'
import { FormInput } from '../../shared/styles'

interface StateProps {
  searchResults: string[]
}

interface IProps {
  school: string
  setSchool: (arg0: string) => void
}

const SchoolDropdown: FC<IProps> = ({ school, setSchool }) => {
  const [showResults, setShowResults] = useState<boolean>(false)
  const wrapperRef = useRef(null)
  const dispatch = useDispatch()

  const { searchResults } = useSelector<IInitialState, StateProps>((state: IInitialState) => {
    return {
      searchResults: state.searchResults,
    }
  }, shallowEqual)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value)
    dispatch(getAllSchools(school))
    setShowResults(true)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: any) => {
    const { current: wrap }: any = wrapperRef
    if (wrap && !wrap.contains(event.target)) {
      setShowResults(false)
    }
  }
  return (
    <SchoolDropDownContainer ref={wrapperRef}>
      Name of School:
      <FormInput type="text" placeholder="Ex. University of California, Berkeley" value={school} onChange={handleChange} />
      {showResults && (
        <SearchResultsList>
          {searchResults?.map((school, index) => (
            <li
              key={index}
              onClick={() => {
                setSchool(school)
                setShowResults(false)
              }}
            >
              {school}
            </li>
          ))}
        </SearchResultsList>
      )}
    </SchoolDropDownContainer>
  )
}

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  return prevProps.school === nextProps.school
}

export const SchoolDropdownMemo = React.memo(SchoolDropdown, areEqual)

const SchoolDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const SearchResultsList = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  max-height: 200px;
  list-style-type: none;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background-color: white;
  li {
    :hover {
      color: white;
      background-color: #646df6;
    }
  }
`

SearchResultsList.displayName = 'SearchResultsList'
