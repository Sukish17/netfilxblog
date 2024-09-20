import {withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

import {
  NavHeader,
  LogoLink,
  WebsiteLogo,
  OptionsContainer,
  DarkModeButton,
  UserProfileImage,
  MobileMenuButton,
  MobileLogoutButton,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
  DesktopLogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const onClickToggleDarkTheme = () => {
        toggleTheme()
      }

      return (
        <NavHeader isDarkTheme={isDarkTheme}>
          <LogoLink to="/">
            <WebsiteLogo
              src={
                isDarkTheme
                  ? 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                  : 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <OptionsContainer>
            <DarkModeButton
              type="button"
              onClick={onClickToggleDarkTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <FiSun color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </DarkModeButton>
            <Link to='/user'>
            <UserProfileImage
              src="https://static.vecteezy.com/system/resources/previews/042/165/811/non_2x/netflix-logo-transparent-background-free-png.png"
              alt="profile"
            /></Link>
            <MobileMenuButton type="button">
              {isDarkTheme ? (
                <GiHamburgerMenu color="#ffffff" size={25} />
              ) : (
                <GiHamburgerMenu color="#000000" size={25} />
              )}
            </MobileMenuButton>
            <Popup
              modal
              trigger={
                <MobileLogoutButton type="button">
                  <FiLogOut
                    size={25}
                    color={`${isDarkTheme ? '#ffffff' : '#00306e'}`}
                  />
                </MobileLogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <DesktopLogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </DesktopLogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </OptionsContainer>
        </NavHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
