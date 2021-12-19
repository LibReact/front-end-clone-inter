import { CardContainer } from './styles';


// TIPANDO O COMPONENTE, O QUE ELE PODE RECEBER
interface CardProps {
    width?: string;             // ?: Opcional
    children?: React.ReactNode;  // ?: Opcional
    height?: string;            // ?: Opcional
    noShadow?: boolean          // ?: Opcional
}

const Card = ({
    children,
    width='100%',
    height='auto',
    noShadow=false,
}:CardProps) => {
    return (
        <CardContainer width={width} height={height} noShadow={noShadow}>
            {children}
        </CardContainer>
    )
}

export default Card