import React from 'react';
import styles from './Chip.module.css';

export default function Chip({ 
  children, 
  href, 
  icon: Icon,
  variant = 'warning',
  className = '', 
  ...props 
}) {
  const content = (
    <>
      {Icon && <span className={styles.iconWrapper}>{Icon}</span>}
      <span className={styles.label}>{children}</span>
    </>
  );

  const combinedClassName = `${styles.chip} ${styles[variant] || styles.warning} ${className}`.trim();

  // Jika prop `href` ada, render tag <a> (Link)
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }

  // Jika tidak ada `href`, render tag <span>
  return (
    <span className={combinedClassName} {...props}>
      {content}
    </span>
  );
}
