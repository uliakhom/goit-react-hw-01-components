import s from "./Transactions.module.css"
import PropTypes from "prop-types"

const Transactions = ({transactions}) => {
    const elements = transactions.map(item => (
        <tr key={item.id} className={s.tableListItem}>
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
        </tr>
    ))
    return (<table className={s.table}>
  <thead className={s.tableHead}>
    <tr>
      <th className={s.headItem}>Type</th>
      <th className={s.headItem}>Amount</th>
      <th className={s.headItem}>Currency</th>
    </tr>
  </thead>

  <tbody className={s.tableBody}>
    {elements}
  </tbody>
</table>)
}

export default Transactions

Transactions.defaultProps = {
  transactions:[]
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  }))
}