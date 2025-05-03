import React from "react";
import "./styles.css"; // Assure-toi que ce fichier CSS est bien relié

export default function Home() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>GhostSniper</h1>
        <button className="wallet-btn">Connecter le wallet</button>
      </header>

      <div className="bot-settings">
        <div className="field-group">
          <label>Capital à investir</label>
          <div className="input-usdc">
            <input type="number" defaultValue="100" />
            <span className="usdc-badge">USDC</span>
          </div>
        </div>

        <div className="field-row">
          <div className="field-group">
            <label>Take Profit (%)</label>
            <input type="number" defaultValue="30" />
          </div>
          <div className="field-group">
            <label>Stop Loss (%)</label>
            <input type="number" defaultValue="10" />
          </div>
        </div>

        <div className="field-group toggle-group">
          <label>Sniping automatique</label>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>

        <button className="launch-btn">Lancer le bot</button>
      </div>

      <div className="history">
        <h2>Historique des Snipes</h2>
        <table>
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
                <div className="progress-bar green" style={{ width: "80%" }}></div>
                <span className="positive">+20%</span>
              </td>
            </tr>
            <tr>
              <td>LULU</td>
              <td>
                <div className="progress-bar red" style={{ width: "40%" }}></div>
                <span className="negative">-11%</span>
              </td>
            </tr>
            <tr>
              <td>RUFI</td>
              <td>
                <div className="progress-bar red" style={{ width: "20%" }}></div>
                <span className="negative">-6%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
