import { useState } from 'react';
import Modal from 'react-modal';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: IHeaderProps) {

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="logo"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>        
      </Content>
    </Container>
  );
}