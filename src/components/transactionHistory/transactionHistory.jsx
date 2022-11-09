
import PropTypes from 'prop-types'
import TransactionTableBody from './transactionTableBody'
import css from './transactionHistory.module.css'


export default function TransactionHistory({items}){
    return(
        <table className={css.transaction_history}>
  <thead className={css.thead}>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>
  <tbody  className={css.tbody}>
  {items.map(item => (
    <TransactionTableBody
    id = {item.id}
    type = {item.type}
    amount = {item.amount}
    currency = {item.currency}

    />
  ))}
  </tbody>
</table>
    )

}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};