import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="my-footer">
      <div className="upper-part-footer">
        <div className="upper-part-footer-sides">
          <p>Conditions d'utilisation</p>
          <p>Avis de confidentialité CCPA</p>
        </div>
        <div className="upper-part-footer-sides">
          <p>Notice Sitemap </p>
          <p>Préférences de cookies</p>
        </div>
      </div>
      <p>© FranceVoyage 2021</p>
    </div>
  );
}

export default Footer;
