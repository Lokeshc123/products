import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../Context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart } = useContext(CartContext);
    const [emiOption, setEmiOption] = useState('');

    return (
        <Container>
            <ShoppingCart>
                <Header>
                    <Heading>
                        Shopping Cart
                    </Heading>
                    <PriceText>
                        Price
                    </PriceText>
                </Header>
                <List>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </List>
            </ShoppingCart>
            <RightContainer>
                <SubTotalContainer>
                    <BarContainer>
                        <Bar

                            style={{
                                backgroundColor: cart.reduce((acc, item) => acc + (item.quantity * item.price), 0) >= 300 ? "green" : "red",
                                width: `${cart.reduce((acc, item) => acc + (item.quantity * item.price), 0) / 3}%`

                            }} />

                    </BarContainer>
                    <Eligible>
                        {cart.reduce((acc, item) => acc + (item.quantity * item.price), 0) >= 300 ? "Eligible for FREE Shipping" : `${300 - cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)} more to be eligible for FREE Shipping`}
                    </Eligible>
                    <SubTotalText>
                        Subtotal ({cart.length} items) : $ {cart.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2)}
                    </SubTotalText>
                    <CheckBoxContainer>
                        <input type="checkbox" />
                        <span> This order contains a gift</span>
                    </CheckBoxContainer>
                    <Button>
                        Proceed to Checkout
                    </Button>
                    <DropdownContainer>
                        <DropdownLabel htmlFor="emi-select">EMI Available:</DropdownLabel>
                        <Dropdown id="emi-select" value={emiOption} onChange={(e) => setEmiOption(e.target.value)}>
                            <option value="">Select an option</option>
                            <option value="want">You Want</option>
                            <option value="dont">You Don't</option>
                        </Dropdown>
                    </DropdownContainer>
                </SubTotalContainer>

            </RightContainer>
        </Container>
    );
}

export default Cart;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

const ShoppingCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 75%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
`;

const Heading = styled.h2`
    font-size: 24px;
`;

const PriceText = styled.p`
    font-size: 24px;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    width: 100%;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 25%;
    padding: 10px;
`;

const SubTotalContainer = styled.div`
    display: flex;
    border: 1px solid lightgray;
    align-items: center;
    flex-direction: column;
    height: 40%;
    border-radius: 16px;
    width: 100%;
`;

const BarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
`;

const Bar = styled.div`
    height: 30px;
    border-radius: 30px;
    width: 60%;
   
`;

const Text = styled.p`
    font-size: 18px;
    margin-left: 10px;
`;

const Eligible = styled.p`
    font-size: 14px;
    margin-top: 10px;
`;

const SubTotalText = styled.p`
    font-size: 18px;
    margin-top: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    width: 200px;
    border-radius: 5px;
    background-color: #f0c14b;
    border: 1px solid;
    align-self: center;
    margin-top: 10px;
`;

const DropdownContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DropdownLabel = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
`;

const Dropdown = styled.select`
    padding: 10px;
    font-size: 16px;
    width: 200px;
    border-radius: 5px;
    border: 1px solid lightgray;
`;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
   
`;
