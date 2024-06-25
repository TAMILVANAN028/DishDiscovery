
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
function Nonveg() {
    const [nonveg, setNonveg] = useState([]);
  
    useEffect(() => {
      getNonveg();
    }, []);
  
    const getNonveg = async () => {
       const check =localStorage.getItem("Nonveg")
       if(check)
     { 
          setNonveg(JSON.parse(check));
        }else
        {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=meat`
          );
          const data = await api.json();
          localStorage.setItem("Nonveg",JSON.stringify(data.recipes));
          setNonveg(data.recipes);
          console.log(data.recipes);
  
       }
      
    };
  
    return (
      <div>
        <Wrapper>
          <h3>Non-vegetaraian picks</h3>
          <br/>
          <Splide options={{
            perPage: 3,
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
            {nonveg.map((recipe) => (
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
      height: auto;
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
     height:40%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      color:black; 
      display:flex; 
    }
  `;
  
  export default Nonveg;