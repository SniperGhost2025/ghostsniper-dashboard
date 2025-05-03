export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0c0c0c",
      color: "#fff",
      padding: "2rem",
      fontFamily: "Arial",
    }}>
      <h1>GHOSTSNIPER BOT</h1>
      <p>👤 Wallet connecté : 0xAdc...B3f</p>
      <p>💰 Montant à sniper : <strong>10 USDC</strong></p>
      <p>🎯 TP : <strong>40%</strong> | 🛑 SL : <strong>20%</strong></p>
      <p>⚙️ Slippage : <strong>2%</strong></p>
      <button style={{ marginTop: "1rem", padding: "10px 20px", background: "#1c1", border: "none", color: "#fff", borderRadius: "6px" }}>
        ⚡ Activer le Bot
      </button>
      <hr style={{ margin: "2rem 0" }} />
      <h3>📊 Historique</h3>
      <p>$ZAZA | +12% | ✅</p>
      <p>$RUGG | -5% | ❌</p>
    </div>
  );
}
