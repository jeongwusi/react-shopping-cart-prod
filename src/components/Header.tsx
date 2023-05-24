import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';
import CartRouteButton from './main/CartRouteButton';
import ServerDropdown from './ServerDropdown';
import useNavigatePage from '../hooks/useNavigatePage';

interface Props {
  onClickTitle?: () => void;
}

const Header = ({ onClickTitle }: Props) => {
  const { goCart } = useNavigatePage();

  return (
    <S.Header>
      <S.Wrapper>
        <S.TitleButton onClick={onClickTitle}>
          <Logo />
        </S.TitleButton>
        <ServerDropdown />
        <CartRouteButton onClick={goCart} />
        <S.OrderButton>주문 목록</S.OrderButton>
      </S.Wrapper>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 1;
    background: #f2f2f2;
    font-size: 36px;
    font-weight: 900;
    line-height: 80px;
    letter-spacing: 0.1px;

    & svg {
      margin-right: 20px;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 20px;

    @media all and (max-width: 479px) {
      & > :nth-child(1) span {
        display: none;
      }
    }
  `,

  TitleButton: styled.button`
    background-color: transparent;
    cursor: pointer;
    color: var(--text-color);
  `,

  Title: styled.span``,

  OrderButton: styled.button`
    width: 100px;
    color: var(--text-color);
    font-size: 24px;
    font-weight: 700;
    background-color: transparent;
  `,
};

export default Header;