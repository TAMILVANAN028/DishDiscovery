import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
     const check =localStorage.getItem("popular")
     if(check)
      { 
        setPopular(JSON.parse(check));
      }else
      {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data.recipes);

      }
    
  };

  return (
    <div>
      <Wrapper>
        <h3>Famous Picks</h3>
        <br/>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          breakpoints: {
            1024: {
              perPage: 2,
              gap: '2rem',
            },
            768: {
              perPage: 1,
              gap: '1rem',
            },
          },
        }}>
          {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
              <Link to={"/recipe/" + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height:50%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    color:black;
  }
`;


export default Popular;
