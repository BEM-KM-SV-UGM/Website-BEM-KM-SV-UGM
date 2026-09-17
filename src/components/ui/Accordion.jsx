"use client";

import { useState } from "react";

// Component accordion generik.
// `items` berupa array { title, content }.

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title ?? index}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.title}
            </button>
            {isOpen ? <div>{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
