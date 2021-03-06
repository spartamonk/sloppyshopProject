import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ data = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(data[0])

  return (
    <Wrapper>
      <img src={mainImage.url} alt='main' className='main' />
      <div className='gallery'>
        {data.map((item, index) => {
          const { url, filename } = item
          return (
            <img
              src={url}
              alt={filename}
              key={index}
              onClick={() => setMainImage(data[index])}
              className={`${url === mainImage.url ? 'active' : null}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
