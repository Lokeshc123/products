import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { fetchDataApi } from '../Api/getData';
import Products from '../components/Products';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
const ProductList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setsearch] = useState('');
    const itemsPerPage = 2;



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchDataApi();
                setData(res);
                setFilteredData(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleSearch = useCallback(debounce((query) => {
        if (query) {
            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
        setCurrentPage(1);
    }, 300), [data]);

    useEffect(() => {
        handleSearch(search);
    }, [search, handleSearch]);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <Container>
            <Header>

                <SearchBar
                    placeholder="Search Products"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                />
                <CartButton onClick={() => navigate("/cart")}>
                    Go to Cart
                </CartButton>
            </Header>
            <List>
                {currentData.map((item) => (
                    <Products key={item.id} item={item} />
                ))}
            </List>
            <Pagination>
                <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}>
                    Next
                </Button>
            </Pagination>
        </Container>
    );
};

export default ProductList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
`;

const Pagination = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const SearchBar = styled.input`
    width: 500px;
    height: 40px;
    border-radius: 16px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid lightgray;
    outline: none;
    
`;
const CartButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    height : 40px;
    border-radius: 5px;
    background-color: #f0c14b;
    border: 1px solid;
    margin-left: 20px;
   
`;
const Header = styled.div`
    display: flex;
   justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
`;