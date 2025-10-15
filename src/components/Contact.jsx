import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="mt-2 text-neutral-300">Feel free to reach out:</p>
      <ul className="mt-4 space-y-2 text-neutral-300">
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/intnam13"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            intnam13
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/intan-namira/"
            className="hover:underline"
          >
            Intan Namira
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:intannamira13@gmail.com" className="hover:underline">
            intannamira13@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}
