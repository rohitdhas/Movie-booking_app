import styled from "styled-components";

export const DetailsLayout = styled.div`
  display: flex;

  img {
    width: auto;
    height: 550px;
    border-radius: 5px;
  }

  .data_status {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 auto;
    color: royalblue;
  }

  section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    margin: 0 2rem;

    .summary {
      font-size: 1.1rem;
      line-height: 130%;
      margin: 10px 0;

      h3 {
        margin-bottom: 5px;
      }
    }

    button {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      font-size: 1.1rem;
      border-radius: 5px;
      background-color: #06d6a0;
      color: white;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &.booked {
        cursor: not-allowed;
        background-color: darkgray;

        &:hover {
          background-color: #6b6868;
        }
      }

      &:hover {
        background-color: #06a178;
      }
    }
  }

  #show_details {
    padding: 10px;
    background-color: #dbe0ff;
    border-radius: 5px;
    height: max-content;

    * {
      margin: 10px 0;
    }

    .name {
      font-size: 2rem;
      font-weight: bold;
    }

    .genres > span {
      border: 2px solid royalblue;
      margin-right: 10px;
      border-radius: 2px;
      font-size: 1rem;
      color: black;
      padding: 5px;
    }

    .schedule,
    .show_type,
    .status,
    .genres {
      font-size: 1.3rem;
      margin: 15px 0;
    }
  }

  @media (max-width: 750px) {
    img {
      height: 300px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    section {
      margin: 1rem 0;
    }

    #show_details {
      .name {
        font-size: 1.5rem;
      }
    }
  }
`;
