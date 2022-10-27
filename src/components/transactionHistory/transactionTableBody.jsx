
import PropTypes from 'prop-types'


export  default function TransactionTableBody({id, type, amount, currency} ){
    return(
    <tr key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}

TransactionTableBody.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    
}