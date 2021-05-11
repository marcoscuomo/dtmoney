import { Container } from "./styles";
import { Sumary } from "../Summary";
import React from "react";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard(){
    return(
        <Container>
            <Sumary />
            <TransactionsTable />
        </Container>
    );
}