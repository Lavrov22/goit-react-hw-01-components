import PropTypes from 'prop-types';
import { Table, TD } from "components/TransactionHistoryItem/TransactionHistoryItem.styled";

export const TransactionHistoryItem = ({ item: { currency, type, amount } }) => {
    return  <Table>
                <TD>{type}</TD>
                <TD>{amount}</TD>
                <TD>{currency}</TD>
            </Table>
       
}

TransactionHistoryItem.propTypes = {
    item: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
    })
}