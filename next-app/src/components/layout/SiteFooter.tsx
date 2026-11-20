import { Fragment } from "react";
import { contactChannels, footerColumns, officeAddress, socialLinks } from "@/data/footer";

export function SiteFooter() {
  return (
    <footer className="home-footer">
      <div className="suite-container">
        <div className="home-footer-grid">
          <div className="footer-details">
            <a className="footer-wordmark" href="#top" aria-label="iQSetters home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/iq-mark.svg" width={39} height={34} loading="lazy" alt="" />
              <span>Setters</span>
            </a>
            <div>
              <h3>Office</h3>
              <address>
                {officeAddress.map((line, index) => (
                  <Fragment key={line}>
                    {line}
                    {index < officeAddress.length - 1 ? <br /> : null}
                  </Fragment>
                ))}
              </address>
            </div>
            <div>
              <h3>Let&rsquo;s talk</h3>
              {contactChannels.map((channel) => (
                <a key={channel.href} href={channel.href}>
                  {channel.label}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav aria-label={column.ariaLabel} key={column.ariaLabel}>
              <h3>{column.heading}</h3>
              {column.links.map((link) => (
                <a key={`${column.heading}-${link.label}`} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="home-footer-bottom">
          <p>&copy; 2026 iQSetters. All rights reserved.</p>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} aria-label={social.label}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            <a href="https://instagram.com/IQSetters/" aria-label="iQSetters on Instagram">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
