import React, { useState } from 'react';
import styles from '../styles/globals.module.css';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [autoSnipe, setAutoSnipe] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GhostSniper</h1>

      <button className={styles.walletButton} onClick={() => setWalletConnected(!walletConnected)}>
        {walletConnected ? 'Déconnecter le wallet' : 'Connecter le wallet'}
      </button>

      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Capital à investir ($)</label>
          <input type="number" placeholder="500" />
        </div>

        <div className={styles.inputGroup}>
          <label>Take Profit (%)</label>
          <input type="number" placeholder="20" />
        </div>

        <div className={styles.inputGroup}>
          <label>Stop Loss (%)</label>
          <input type="number" placeholder="10" />
        </div>

        <div className={styles.inputGroup}>
          <label>Slippage (%)</label>
          <input type="number" placeholder="0.5" />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            checked={autoSnipe}
            onChange={() => setAutoSnipe(!autoSnipe)}
          />
          <label>Sniping automatique</label>
        </div>

        <button className={styles.snipeButton}>⚡ Activer le Snipe Automatique</button>
      </div>

      <div className={styles.history}>
        <h2>📊 Historique des Snipes</h2>
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
              <td className={styles.green}>Réussi</td>
            </tr>
            <tr>
              <td>POUP</td>
              <td>08:30</td>
              <td>09,06</td>
              <td>32,30</td>
              <td className={styles.green}>+52,00</td>
            </tr>
            <tr>
              <td>LUNU</td>
              <td>07:42</td>
              <td>07,90</td>
              <td>35,63</td>
              <td className={styles.red}>-56,00</td>
            </tr>
            <tr>
              <td>SURF</td>
              <td>07:10</td>
              <td>07,30</td>
              <td>33,00</td>
              <td className={styles.red}>-33,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
