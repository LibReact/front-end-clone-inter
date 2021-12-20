import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import logoInter from '../../assets/images/Inter-orange.png';

import UserCircle from "../UserCircle";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/')
    }


    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="Logo inter" />
                <UserInfo>
                    <UserCircle initials="PF"/>
                    <div>
                        <p>Olá. <span className="primary-color font-bold">Bruno</span></p>
                        <strong>22001123-1</strong><br></br>
                        <a href="#" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header