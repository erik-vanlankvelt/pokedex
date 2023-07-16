import { Slider } from '@mui/material';
import { withStyles } from '@mui/styles';

interface ScaledBarProps {
    name: string;
    value: number;
}

const CustomSlider = withStyles({
    root: { height: 4 },
    rail: { height: 4 },
    track: { height: 4 },
    mark: { height: 4 },
    thumb: { display: 'none' }
})(Slider);

const ScaledBar = ({ name, value }: ScaledBarProps) => {
    return (
        <>
            <span>{name}</span>
            <CustomSlider value={value} step={10} min={0} max={100} marks valueLabelDisplay='off' />
        </>
    );
};

export default ScaledBar;
