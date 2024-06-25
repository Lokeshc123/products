import React, { useContext } from 'react'
import styled from 'styled-components'
import StarRating from './StarRating'
import { CartContext } from '../Context/CartContext';
const Products = ({ item }) => {
    const { setCart, cart } = useContext(CartContext);
    console.log("Cart Items ", cart);

    const addToCart = (item) => {
        const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart) {
            setCart(cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    }


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
            <Button onClick={() => addToCart(item)}>Add to Cart</Button>
        </>
    )
}

export default Products

const Container = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
height: 200px;
padding: 8px;
width: 400px;
margin :0;

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
