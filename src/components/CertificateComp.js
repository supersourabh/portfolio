import React from "react";
import certs from "../assets/data/certificateData.json";

export default function CertificateComp() {
  return (
    <div>
      <div className="text-2xl font-bold w-full">Certificates</div>
      <div className="flex overflow-auto">
        {certs.map((cert, key) => (
            <div>
                <img src={cert.certificate} alt={cert.name} />
                <div>
                    
                </div>
            </div>

        ))}
      </div>
    </div>
  );
}
