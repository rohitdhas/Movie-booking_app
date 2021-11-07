import styled from "styled-components";

export const FormLayout = styled.form`
  background-color: white;
  height: fit-content;
  margin-top: 30px;
  padding: 20px;
  border-radius: 5px;
  transform: translateY(-400px);
  opacity: 0;
  transition: all 0.4s;
  position: relative;

  .icon {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    span {
      font-size: 1.5rem;
      &:hover {
        color: tomato;
      }
    }
  }

  .input {
    display: flex;
    flex-direction: column;

    label {
      margin: 3px 0;
    }

    input {
      padding: 5px;
      outline: none;
      border-radius: 5px;
      border: 1px solid lightgray;

      &:focus {
        border: 1px solid royalblue;
      }
    }
  }

  .name_input {
    padding-top: 10px;
    border-top: 2px solid lightgray;
  }

  &.active {
    transform: translateY(0px);
    opacity: 1;
  }

  * {
    margin: 5px 0;
  }

  button {
    width: 100%;
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
`;

export const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000b9;
  display: flex;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
