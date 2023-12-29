import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function Recipe() {
  let prams = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${prams.name}/information?apiKey=${process.env.REACT_APP_API_KEY2}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [prams.name]);
  return (
    <DETWRAP>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} width={300} alt="" />
      </div>
      <INFO>
        <BUT
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </BUT>
        <BUT
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </BUT>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}> {ingredient.original}</li>
            ))}
          </ul>
        )}
      </INFO>
    </DETWRAP>
  );
}

export default Recipe;

const DETWRAP = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  width: 90%;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 20px;
    text-align: center;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 100%;
  }
`;

const BUT = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  cursor: pointer;
`;

const INFO = styled.div`
  margin-left: 2rem;
  width: 100%;
`;
