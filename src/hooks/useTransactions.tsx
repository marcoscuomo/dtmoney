import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';


interface ITransaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface ITransactionsProviderProps {
    children: ReactNode;
}

type TTransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: TTransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<ITransactionsContextData>(
    {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
  
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TTransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }
        
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}