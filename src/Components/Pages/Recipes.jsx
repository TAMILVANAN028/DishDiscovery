import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipes = () => {
    const params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const getDetails = async () => {

            const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setDetails(data); 
    };

    useEffect(() => {
        getDetails();
    }, [params.name]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <RecipeImage src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => handleTabClick("instructions")}>Instructions</Button>
                <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => handleTabClick("ingredients")}>Ingredients</Button>
                {activeTab === "instructions" && (
                    <div>
                        <h4 dangerouslySetInnerHTML={{__html:details.summary}}></h4>
                        <h4 dangerouslySetInnerHTML={{__html:details.instructions}}></h4>
                    </div>
                ) }
                {activeTab ==="ingredients" &&
                (
                    <ul>
                        {details.extendedIngredients.map((ingredient)=>(<li key ={ingredient.id} >{ingredient.original}</li>))}
                        
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
};

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
h2 {
    margin-bottom:1rem;
}

h4{
  font-size:1rem;
  margin-top:1rem;
  font-weight:bold;
}
li {
    font-size: 1rem;
    line-height:1.5rem;
    margin-left:2rem;
}

ul {
    margin-top: 2rem;
    
}`;
    const RecipeImage = styled.img`
    width: 100%; 
    max-width:500px; 
    height:50%;
    border-radius: 8px;
    margin-top: 1rem;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

const Button = styled.button`
    padding: 1rem 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;

    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const Info = styled.div`
    margin-top: 2rem;
    margin-left: 0;
    text-align: center;

    @media (min-width: 768px) {
        margin-left:13rem;
        text-align: left;
    }
`;

export default Recipes;
