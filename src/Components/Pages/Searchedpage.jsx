import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import styled from 'styled-components';

function Searchedpage() {
    const [searchedpage, setSearchedpage] = useState([]);
    let params = useParams();

    const getSearchedpage = async (name) => {
        
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
            const recipes = await data.json();
            setSearchedpage(recipes.results);
        
    };

    useEffect(() => {
        getSearchedpage(params.search);
    }, [params.search]);

  return (
    <div>
       <Grid>
            {searchedpage.map((item) => (
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    </div>
  ) 
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;
export default Searchedpage;
