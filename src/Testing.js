import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {
const manualStarDisplay=()=> {
return (
  <Wrapper>
    <div className='stars'>
      {/* start of stars */}
      <span>
        {stars >= 1 ? (
          <BsStarFill />
        ) : stars >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* end of stars */}
      {/* start of stars */}
      <span>
        {stars >= 2 ? (
          <BsStarFill />
        ) : stars >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* end of stars */}
      {/* start of stars */}
      <span>
        {stars >= 3 ? (
          <BsStarFill />
        ) : stars >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* end of stars */}
      {/* start of stars */}
      <span>
        {stars >= 4 ? (
          <BsStarFill />
        ) : stars >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* end of stars */}
      {/* start of stars */}
      <span>
        {stars === 5 ? (
          <BsStarFill />
        ) : stars >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      {/* end of stars */}
    </div>
    <p className='reviews'>({reviews} customer reviews)</p>
  </Wrapper>
)
}

const Testing = () => {
  return (
    <Wrapper>
      <h3>hello world</h3>
      <p>hello people</p>
      <div className='article'>
        <p>this is article</p>
      </div>
      <button>click me</button>
    </Wrapper>
  )
  }
const Wrapper = styled.section`
h3 {
 color: red;
}
.article {
 p{
  color: green;
 }
}
`
export default Testing