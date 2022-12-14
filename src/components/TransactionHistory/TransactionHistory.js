import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.head}>
        <tr>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={css.cell}>{item.type}</td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
