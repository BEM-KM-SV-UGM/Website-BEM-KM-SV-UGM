import React from 'react';
import styles from './Button.module.css'; // Sesuaikan jika menggunakan CSS Modules/Tailwind

export default function Button({ 
  children, 
  href, 
  icon: Icon,
  className = '', 
  ...props 
}) {
  // Konten dalam button (Ikon + Teks/Children)
  const content = (
    <>
      {Icon && <span className={styles.iconWrapper}>{Icon}</span>}
      <span className={styles.label}>{children}</span>
    </>
  );

  const combinedClassName = `${styles.button} ${className}`.trim();

  // Jika prop `href` ada, render tag <a> (Link)
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }

  // Jika tidak ada `href`, render tag <button> standar
  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
