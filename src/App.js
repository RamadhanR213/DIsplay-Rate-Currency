import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyTable from './CurrencyTable';

function App() {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/latest?apikey=22788394512e43f1ac25e665d60d6dc2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const selectedCurrencies = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP'];
        const filteredRates = selectedCurrencies.map(currency => ({
          name: currency,
          rate: parseFloat(data.rates[currency])
        }));
        setRates(filteredRates);
      })
      .catch((err) => {
        setError('Gagal mengambil data. Silakan coba lagi.');
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Currency Exchange Rates</h1>
      {error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : rates && (
        <>
          <div className="d-flex justify-content-center">
            <CurrencyTable rates={rates} />
          </div>
          
          <p className="text-center mt-4">
            Currency rates di atas merupakan nilai berdasarkan mata uang USD.
          </p>
        </>
      )}
    </div>
  );
}

export default App;
