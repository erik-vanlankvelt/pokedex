import { Slider, styled } from '@mui/material';

interface ScaledBarProps {
    name: string;
    value: number;
}

const StyledSlider = styled(Slider)(({ theme }) => ({
    '& .MuiSlider-thumb': {
        display: 'none'
    },
    '& .MuiSlider-track': {
        height: 4
    },
    '& .MuiSlider-rail': {
        height: 4
    },
    '& .MuiSlider-mark': {
        height: 4
    }
}));

const ScaledBar = ({ name, value }: ScaledBarProps) => {
    return (
        <>
            <span>{name}</span>
            <StyledSlider
                marks={true}
                max={100}
                min={0}
                step={10}
                sx={{
                    root: { height: 4 },
                    rail: { height: 4 },
                    track: { height: 4 },
                    mark: { height: 4 },
                    thumb: { display: 'none' }
                }}
                value={value}
                valueLabelDisplay='off'
            />
        </>
    );
};

export default ScaledBar;
