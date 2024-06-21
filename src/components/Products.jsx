import React from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
const Products = ({ item }) => {
    return (
        <>
            <Container>
                <Image src={item.image} alt="Img" />
                <Content>
                    <Title>{item.title}</Title>
                    <Rating>

                        <StarRating rating={item.rating.rate} />
                        <span>({item.rating.count})</span>
                    </Rating>
                    <Text>Category : {item.category}</Text>
                    <Description>{item.description}</Description>
                    <Price>$ {item.price}</Price>
                </Content>

            </Container >
            <Button>Add to Cart</Button>
        </>
    )
}

export default Products

const Container = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
height: 200px;
padding: 10px;
width: 400px;
margin : 5px;

`

const Image = styled.img`
height: 200px;
width: 100px;
object-fit: contain;
`
const Content = styled.div`
display: flex;
flex-direction: column;
height : 150px;
margin: 10px;
/* justify-content: center; */
/* align-items: center; */
`
const Title = styled.h3`
font-size: 20px;
margin : 5px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width: 300px;
`
const Rating = styled.div`
display: flex;
align-items: center;
margin : 5px;
`
const Text = styled.p`
font-size: 14px;
color : gray;
margin : 5px;

`
const Description = styled.p`
font-size: 14px;
color : gray;
margin : 5px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width: 300px;

`
const Price = styled.p`
font-size: 18px;
font-weight: bold;
margin : 5px;
`
const Button = styled.button`
padding: 10px 20px;
font-size: 16px;
width : 200px;
border-radius: 5px;
background-color: #f0c14b;
border: 1px solid;
align-self: center;
margin : 5px;
`
