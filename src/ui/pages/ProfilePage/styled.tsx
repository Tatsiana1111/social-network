import styled from 'styled-components'

export const MenuDiv = styled.div`
  img {
    margin-right: 10px;
  }

  cursor: pointer;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  font-family: 'Roboto Light', sans-serif;
  font-size: 20px;
  color: #1f3c60;

  :active {
    color: #526884;
  }
`
export const AvatarDiv = styled.div`
  img {
    width: 250px;
    height: 250px;
  }

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 292px;
  height: 292px;
  border-radius: 10px;
`
export const AboutProfileDiv = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 572px;
  height: 292px;
  border-radius: 10px;
  margin: 20px;

  span {
    margin: 20px;
    border-radius: 10px;
    font-family: 'Roboto Light', sans-serif;
    font-size: 24px;
    background-color: white;
  }
`
export const PostDiv = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 572px;
  height: 564px;
  border-radius: 10px;

  div {
    background-color: white;
    border-radius: 10px;
  }

  img {
    background-color: white;
  }

  span {
    margin: 20px;
    border-radius: 10px;
    font-family: 'Roboto Light', sans-serif;
    font-size: 24px;
    background-color: white;
  }
`
