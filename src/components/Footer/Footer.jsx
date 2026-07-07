import React from 'react';
import './Footer.css';
import citapLogo from '../../assets/inovaskill/citap.png';

const Footer = ({ organizerLogo, showCitap }) => {
  const isInovaSkill2026 = window.location.pathname.includes('/inovaskill2026');

  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="footer-realizador">
          <span className="realizador-label">Realizado por</span>
          <div className="citap-logo-box">
            <img src="/fundacao-logo.png" alt="Fundação" className="citap-logo-footer" />
          </div>
          {(isInovaSkill2026 || showCitap) && (
            <div className="citap-logo-box">
              <img src={citapLogo} alt="CITAP" className="citap-logo-footer" />
            </div>
          )}
          {organizerLogo && (
            <div className="citap-logo-box">
              <img
                src={organizerLogo === '/CITEC.png' ? '/CitecPreto.png' : organizerLogo}
                alt="Organizador"
                className="org-logo-footer"
              />
            </div>
          )}
          <div className="footer-copyright">
            © {new Date().getFullYear()} InovaSkill. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
