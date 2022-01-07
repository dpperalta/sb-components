/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * This is the message to show in the component
     */
    label: string;
    /**
     * The size for the label in the component
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * If the label must be in caps
     */
    allCaps?: boolean;
    /**
     * Basic colors in the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom color for the font in the label
     */
    fontColor?: string;
    /**
     * Background color for the label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
