import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  icon: Icon,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  const content = (
    <>
      {Icon && <span className={styles.iconWrapper}>{Icon}</span>}
      {children && <span className={styles.label}>{children}</span>}
    </>
  );

  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;
  const combinedClassName = `${styles.button} ${variantClass} ${sizeClass} ${className}`.trim();

  // Jika prop `href` ada dan tidak disabled, render tag <a> (Link)
  if (href && !disabled) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }

  // Jika tidak ada `href` atau disabled, render tag <button> standar
  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      type={props.type || "button"}
      {...props}
    >
      {content}
    </button>
  );
}
