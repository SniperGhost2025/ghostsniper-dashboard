export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0e0e0e',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>GhostSniper</h1>

      <button style={{
        backgroundColor: '#1c1c1e',
        color: '#fff',
        border: '1px solid #555',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        marginBottom: '1.5rem',
        cursor: 'pointer'
      }}>
        Connecter le wallet
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <input placeholder="Capital à investir"
          value="500"
          style={inputStyle} />
        <input placeholder="Take Profit (%)"
          value="20"
          style={inputStyle} />
        <input placeholder="Slippage (%)"
          value="0.5"
          style={inputStyle} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input type="checkbox" checked readOnly style={{ marginRight: '0.5rem' }} />
          Sniping automatique
        </label>
      </div>

      <button style={{
        backgroundColor: '#3b82f6',
        color: '#fff',
        border: 'none',
        padding: '0.75rem',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        marginBottom: '2rem'
      }}>
        Activer le Snipe Automatique
      </button>

      <h2 style={{ marginBottom: '1rem' }}>Historique des Snipes</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ccc' }}>
        <thead>
          <tr>
            <th style={thStyle}>Token</th>
            <th style={thStyle}>Heure</th>
            <th style={thStyle}>Entrée</th>
            <th style={thStyle}>Sortie</th>
            <th style={thStyle}>Résultat</th>
          </tr>
        </thead>
        <tbody>
          {[
            { token: 'ZAZA', heure: '09:15', entree: '09,38', sortie: '38,80', resultat: 'Réussi', color: 'green' },
            { token: 'POUP', heure: '08:30', entree: '09,06', sortie: '32,30', resultat: '+52,00', color: '#00ffff' },
            { token: 'LUNU', heure: '07:42', entree: '07,90', sortie: '35,63', resultat: '-56,00', color: 'red' },
            { token: 'SURF', heure: '07:10', entree: '07,30', sortie: '33,00', resultat: '-33,00', color: 'red' }
          ].map((row, i) => (
            <tr key={i}>
              <td style={tdStyle}>{row.token}</td>
              <td style={tdStyle}>{row.heure}</td>
              <td style={tdStyle}>{row.entree}</td>
              <td style={tdStyle}>{row.sortie}</td>
              <td style={{ ...tdStyle, color: row.color }}>{row.resultat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const inputStyle = {
  padding: '0.5rem',
  border: '1px solid #555',
  backgroundColor: '#1c1c1e',
  color: '#fff',
  borderRadius: '5px',
  width: '150px'
};

const thStyle = {
  borderBottom: '1px solid #333',
  textAlign: 'left',
  padding: '0.5rem'
};

const tdStyle = {
  padding: '0.5rem',
  borderBottom: '1px solid #222'
};
