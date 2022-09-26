import { TransactionHistoryItem } from "components/TransactionHistoryItem/TransactionHistoryItem";
import { Table, Head} from "components/TransactionHistory/TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return  <Table>
                <thead>
                    <tr>
                    <Head>Type</Head>
                    <Head>Amount</Head>
                    <Head>Currency</Head>
                    </tr>
                </thead>

                <tbody>
            {items.map(item => <TransactionHistoryItem key={item.id} item={item} />)}
                </tbody>
            </Table>
}