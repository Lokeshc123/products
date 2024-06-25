import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../Context/CartContext';

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const { updateCartItemQuantity, removeCartItem, wishlist, setWishlist } = useContext(CartContext);
    console.log("Wishlist", wishlist);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
        updateCartItemQuantity(item.id, newQuantity);
    };

    const handleDelete = () => {
        removeCartItem(item.id);
    };
    const addToWishlist = () => {
        handleDelete();
        setWishlist([...wishlist, item]);
    }

    return (
        <Container>
            <Image src={item.image} alt="Img" />
            <DataContainer>
                <Content>
                    <Title>{item.title}</Title>
                    <StockStatus>In stock</StockStatus>
                    <Text>Eligible for free shipping</Text>
                    <Logo src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="prime" />
                    <CheckboxContainer>
                        <input type="checkbox" />
                        <span>This will be a gift</span>
                    </CheckboxContainer>
                    <Size>Large</Size>
                    <Color>Black</Color>
                    <OptionsContainer>
                        <Dropdown>
                            <label>Qty:</label>
                            <select value={quantity} onChange={handleQuantityChange}>
                                {Array.from({ length: 6 }, (_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </Dropdown>
                        <Button onClick={handleDelete}>Delete</Button>
                        <Button onClick={addToWishlist}>Save to Wishlist</Button>
                    </OptionsContainer>
                </Content>
                <Price>$ {item.price}</Price>
            </DataContainer>
        </Container>
    );
};

export default CartItem;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
`;

const Image = styled.img`
    height: 150px;
    width: 150px;
    object-fit: contain;
`;

const DataContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 80%;
`;

const Title = styled.h3`
    font-size: 20px;
    margin: 0;
`;

const StockStatus = styled.span`
    color: green;
`;

const Text = styled.p`
    font-size: 14px;
    margin: 0;
`;

const Logo = styled.img`
    height: 30px;
    width: 100px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Size = styled.p`
    font-size: 14px;
    margin: 0;
`;

const Color = styled.p`
    font-size: 14px;
    margin: 0;
`;

const Price = styled.h3`
    font-size: 20px;
    margin: 0;
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    width: 100%;
`;

const Dropdown = styled.div`
    margin-right: 10px;
    label {
        margin-right: 5px;
    }
    select {
        padding: 5px;
    }
`;

const Button = styled.button`
    background-color: #f0c14b;
    border: 1px solid #a88734;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        background-color: #ddb347;
    }
`;
