export default function Home() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>GhostSniper</h1>

      <button style={{ marginBottom: '20px' }}>Connecter le wallet</button>

      <div>
        <label>Capital à investir</label>
        <input type="text" value="500" />
      </div>

      <div>
        <label>Take Profit (%)</label>
        <input type="text" value="20" />
      </div>

      <div>
        <label>Slippage (%)</label>
        <input type="text" value="0.5" />
      </div>

      <div>
        <label>
          <input type="checkbox" checked readOnly />
          {' '}Sniping automatique
        </label>
      </div>

      <button>Activer le Snipe Automatique</button>

      <h2 style={{ marginTop: '40px' }}>Historique des Snipes</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Heure</th>
            <th>Entrée</th>
            <th>Sortie</th>
            <th>Résultat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ZAZA</td>
            <td>09:15</td>
            <td>09,38</td>
            <td>38,80</td>
            <td className="result-success">Réussi</td>
          </tr>
          <tr>
            <td>POUP</td>
            <td>08:30</td>
            <td>09,06</td>
            <td>32,30</td>
            <td className="result-positive">+52,00</td>
          </tr>
          <tr>
            <td>LUNU</td>
            <td>07:42</td>
            <td>07,90</td>
            <td>35,63</td>
            <td className="result-negative">-56,00</td>
          </tr>
          <tr>
            <td>SURF</td>
            <td>07:10</td>
            <td>07,30</td>
            <td>33,00</td>
            <td className="result-negative">-33,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
