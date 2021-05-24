import React from 'react'
import Styled from 'styled-components'

const Box = Styled.div`
    color: rgba(0, 0, 0, 0.87);
    width: 15%;
    position: relative;
    font-size: .875rem;
    background: #FFF;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 35%);
    border-radius: 6px;
    flex-direction: column;
    margin: 30px 10px 30px 10px;
    //top right bottom left    
`

const Top = Styled.div`
    text-align: right;
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
    color: black;
    margin: 0 15px;
`

const Bottom = Styled.div`
    border-top: solid 2px #E6E6E6;
    margin: 0 15px 10px;
    align-items: center;
    padding-top: 10px; 
`

const Card = props => {
  const Flag = Styled.div`
      left:20px;
      top:-10px;
      height:30px;
      
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      
      border-left:20px solid ${props.cardColor || 'red'};
      border-right:20px solid ${props.cardColor || 'red'};
      border-bottom:15px solid transparent;
     
      box-shadow: 1px 0 0 0 rgb(0 0 0 / 30%);
      position: absolute;
`

  return (

    <Box>
      <Flag/>

      <Top>
        <p>납부 금액</p>

        <h3>
          ₩ 1,343,716
          <small> 원</small>
        </h3>

      </Top>

      <Bottom>
        <div>2021년 4월 총 납부금액</div>
      </Bottom>
    </Box>
  )
}
export default Card