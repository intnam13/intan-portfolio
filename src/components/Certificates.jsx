import React from "react";

const certs = [
  {
    id: "c1",
    title: "QA Facilitator",
    issuer: "binaracademy.com",
    href: "https://www.credential.net/005c6081-1bd7-407a-9ada-fa27354cc0d2#acc.Ia4JT3Pd",
    img: "certificate-images/qa_facilitator_certificate.png",
  },
  {
    id: "c2",
    title: "Java OOP",
    issuer: "codepolitan.com",
    href: "https://www.codepolitan.com/c/RIKPNUD/",
    img: "certificate-images/oop_certificate_valid_2024.png",
  },
];

export default function Certificates() {
  return (
    <section id="certs">
      <h2 className="section-title">Certificates</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certs.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-lg border border-neutral-700 bg-neutral-800/20"
          >
            <strong>{c.title}</strong>
            <div className="text-sm text-neutral-400">{c.issuer}</div>
            {c.img && (
              <img
                src={c.img}
                alt={`${c.title} certificate`}
                className="w-full h-95 object-cover rounded-md mb-3"
              />
            )}
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-400"
            >
              Click here to view Online Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
