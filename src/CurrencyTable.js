import React from 'react';

function CurrencyTable({ rates }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(({ name, rate }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{(rate * 1.05).toFixed(4)}</td>
            <td>{rate.toFixed(4)}</td>
            <td>{(rate * 0.95).toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrencyTable;
