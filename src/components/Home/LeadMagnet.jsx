// Aurora redesign: the home page's close. The free audit offer on the brand-gradient
// band with its line and the one action, which goes to contact (the site's job).
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LeadMagnet = () => {
  return (
    <section className="hm-close" aria-labelledby="audit-title">
      <div className="ax-container">
        <div className="ax-cta" data-reveal>
          <h2 id="audit-title" className="ax-h2">
            Get a Free AI &amp; Cybersecurity Audit
          </h2>
          <p className="ax-lead">
            We review your current systems and provide actionable insights to
            improve security, performance, and automation.
          </p>
          <div className="ax-cta__actions">
            <Link href="/contact" className="ax-btn ax-btn--light ax-btn--lg">
              Claim Free Audit
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
