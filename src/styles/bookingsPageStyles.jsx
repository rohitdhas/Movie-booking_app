import styled from "styled-components";

const BookingsPageLayout = styled.div`
  h1 {
    text-align: center;
    padding: 2rem;
    border-bottom: 2px solid lightgray;
  }

  #msg {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
  }

  .card {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.5rem;
      cursor: pointer;
      color: tomato;

      &:hover {
        background-color: tomato;
        color: white;
        border-radius: 5px;
      }
    }
  }
`;

export default BookingsPageLayout;
