import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import Total from '../../assets/total.svg';

import { Container } from "./styles";

export function Sumary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="Entradas"/>
                </header>
                <strong>R$-500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={Total} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}