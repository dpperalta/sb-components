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

export const MyLabel = ( {
    allCaps = false,
    backgroundColor = 'transparent',
    color = 'primary',
    fontColor,
    label = 'No label',
    size = 'normal',
}: MyLabelProps ) => {
    return (
        <span 
            className={ `label ${ size } text-${ color }`  } 
            style={{ color: fontColor, backgroundColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}

export default MyLabel;