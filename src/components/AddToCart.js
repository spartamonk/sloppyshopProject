import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({product}) => {
  const { colors, id, stock } = product
  const { addToCart} = useCartContext()
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((currValue) => {
      let newValue = currValue + 1
      if (newValue > stock) {
        return stock
      }
      return newValue
    })
  }

  const decrease = () => {
    setAmount((currValue) => {
      let newValue = currValue - 1
      if (newValue < 1) {
        return 1
      }
      return newValue
    })
  }
  return (
    <Wrapper>
      <div className='colors'>
        <span>colors :</span>
        <div>
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  item === mainColor ? 'color-btn active' : 'color-btn'
                }`}
                style={{ backgroundColor: item }}
                onClick={() => setMainColor(item)}
              >
                {item === mainColor ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
          id={id}
        />
        <Link onClick={()=> addToCart(id, mainColor, amount, product)} className='btn' to='/cart'>
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
