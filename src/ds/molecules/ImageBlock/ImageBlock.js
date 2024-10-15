import React from 'react'
import styled from 'styled-components'

const ImageBlock = ({ images }) => {
  return (
    <Wrapper>
      {images.map(i => 
        <img src={i} alt={i} height="200px" width="300px" />
      )}
    </Wrapper>
  )
}

export default ImageBlock

ImageBlock.displayName = "ImageBlock"

const Wrapper = styled.div`
  width: 80%;
  background-color: ${p => p.theme.colors.white};
  padding: 20px;
  box-shadow: 1px 1px 1px ${p => p.theme.colors.primary};
  border-radius: 3px;
  margin: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 0px;
  img {
    padding-bottom: 20px;
  }
  @media (min-width: 768px) {
    width: 60%;
    box-shadow: 1px 1px 3px ${p => p.theme.colors.primary};
  }
`
