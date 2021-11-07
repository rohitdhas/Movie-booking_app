import styled from "styled-components";

export const HomePageLayout = styled.div`
  h1 {
    padding: 2rem 0;
    text-align: center;
    border-bottom: 2px solid lightgray;
  }

  #icon {
    position: fixed;
    top: 3rem;
    right: 2rem;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;

    span {
      font-size: 4rem;
      color: royalblue;
    }

    &::after {
      position: absolute;
      content: attr(data-booking-count);
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 50%;
      background-color: tomato;
      color: white;
      padding: 5px 10px;
      transform: translateX(-20px);
    }

    &:hover {
      background-color: #f3f0f0;
    }
  }

  .status {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: royalblue;
    margin: 1rem 0;
  }

  @media (max-width: 750px) {
    #icon {
      top: 10px;
      right: 10px;

      &::after {
        font-size: 1rem;
        padding: 5px 7px;
      }
      span {
        font-size: 3rem;
      }
    }
  }
`;

export const CardLayout = styled.div`
  margin: 20px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;

  img {
    width: auto;
    height: 250px;
    border-radius: 5px 0 0 5px;
  }

  .movie_details {
    margin-left: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    * {
      margin: 10px 0;
    }

    .name {
      font-size: 1.4rem;
    }

    .genres {
      font-size: 1.2rem;
      font-weight: bold;

      span {
        background-color: royalblue;
        margin-right: 10px;
        border-radius: 2px;
        font-size: 0.8rem;
        color: white;
        padding: 5px;
      }
    }

    button {
      width: 200px;
      padding: 10px;
      border-radius: 5px;
      background-color: #06d6a0;
      color: white;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #06a178;
      }
    }
  }

  @media (max-width: 400px) {
    img {
      height: 150px;
    }

    .movie_details {
      margin-left: 20px;
    }
  }

  @media (max-width: 550px) {
    .movie_details {
      .genres {
        display: none;
      }
    }
  }

  @media (max-width: 750px) {
    .movie_details {
      * {
        margin: 5px 0;
      }

      .name {
        font-size: 1.2rem;
      }

      button {
        width: 100%;
      }
    }
  }
`;
