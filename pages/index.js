export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>GhostSniper Dashboard</h1>

      <button>🔗 Connecter le wallet</button>

      <div>
        <label>Capital à investir (USDC)</label>
        <input type="text" placeholder="ex: 200" />
      </div>

      <div>
        <label>Take Profit (%)</label>
        <input type="text" placeholder="ex: 40" />
      </div>

      <div>
        <label>Stop Loss (%)</label>
        <input type="text" placeholder="ex: 20" />
      </div>

      <div>
        <label>Slippage (%)</label>
        <input type="text" placeholder="ex: 2" />
      </div>

      <div>
        <label>
          <input type="checkbox" defaultChecked /> Activer Sniping automatique
        </label>
      </div>

      <button>⚡ Lancer le bot</button>

      <h2 style={{ marginTop: '40px' }}>Historique des Snipes</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Entrée</th>
            <th>Sortie</th>
            <th>Résultat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$ZAZA</td>
            <td>10.00</td>
            <td>14.00</td>
            <td className="result-positive">+40%</td>
          </tr>
          <tr>
            <td>$LOST</td>
            <td>10.00</td>
            <td>7.00</td>
            <td className="result-negative">-30%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
