import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100%;
  width:100%;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg');
  width: 100%;
  background-size: cover;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerButton = styled.a`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid red;
  color: red;
  background:transparent ;
    text-decoration: none;

`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #fff;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 3px solid #d82e2e;
  border-radius: 3px;
  margin: 20px;
  width: 90%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d82e2e;
  width: 70px;
  border: none;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
  font-family: Roboto;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
