import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table} >
      <thead className={s.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={s.text}>{item.type}</td>
              <td className={s.text}>{item.amount}</td>
              <td className={s.text}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
