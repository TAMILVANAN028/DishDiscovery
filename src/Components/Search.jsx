import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searchedpage/" + input);
    };

    return (
        <Sform onSubmit={submitHandler}>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <SearchIcon />
            </SearchContainer>
        </Sform>
    );
}

const Sform = styled.form`
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
`;

const SearchContainer = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 3rem;
    outline: none;
    width: 100%;

    @media (max-width: 768px) {
        padding: 1rem 2rem;
        font-size: 0.9rem
    }
    `;

const SearchIcon = styled(FaSearch)`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: white;
`;

export default Search;
