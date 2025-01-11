import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr className={css['transaction-history-titles']}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css['transaction-history-items']}>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr className={css['transaction-history-item']} key={id}>
              <td className={css['transaction-history-item-type']}>{type}</td>
              <td className={css['transaction-history-item-amount']}>
                {amount}
              </td>
              <td className={css['transaction-history-item-currency']}>
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
