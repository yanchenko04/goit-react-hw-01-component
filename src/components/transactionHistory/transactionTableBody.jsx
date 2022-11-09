
import PropTypes from 'prop-types'
import css from './transactionHistory.module.css'


export  default function TransactionTableBody({id, type, amount, currency} ){
    return(
    <tr  className={css.tr} key = {id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
    )
}

TransactionTableBody.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
    
}