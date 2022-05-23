import "./mylabel.css";

export interface MyLabelProps {
  /**
   * This is the title Label
   */
  label: string;
  /**
   * This is sizes of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Color Label
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Uppercase to title Label
   */
  allCaps?: boolean;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps,
}: MyLabelProps) => {
  return (
    <span className={`${size} text-${color}`}>{allCaps ? label.toUpperCase() : label}</span>
  );
};
