/// <reference types="react" />
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
    /**
    * add a custom color to label
    */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
