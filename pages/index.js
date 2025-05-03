export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>GhostSniper</h1>
        <button className="wallet-button">Connecter le wallet</button>
      </div>

      <div className="card">
        <label>Capital à investir</label>
        <div className="currency-input">
          <input type="number" placeholder="100" />
          <span className="currency-badge">USDC</span>
        </div>

        <div className="input-row">
          <div style={{ width: '100%' }}>
            <label>Take Profit (%)</label>
            <input type="number" placeholder="30" />
          </div>
          <div style={{ width: '100%' }}>
            <label>Stop Loss (%)</label>
            <input type="number" placeholder="10" />
          </div>
        </div>

        <div className="toggle-row">
          <label>Sniping automatique</label>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>

        <button className="launch">Lancer le bot</button>
      </div>

      <div className="snipes-history">
        <h2>Historique des Snipes</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Résultat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PEUP</td>
              <td>
                <div className="progress-container">
                  <div className="progress-bar green" style={{ width: '80%' }}></div>
                </div>
                <span className="result positive">+20%</span>
              </td>
            </tr>
            <tr>
              <td>LULU</td>
              <td>
                <div className="progress-container">
                  <div className="progress-bar red" style={{ width: '40%' }}></div>
                </div>
                <span className="result negative">-11%</span>
              </td>
            </tr>
            <tr>
              <td>RUFI</td>
              <td>
                <div className="progress-container">
                  <div className="progress-bar red" style={{ width: '20%' }}></div>
                </div>
                <span className="result negative">-6%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
