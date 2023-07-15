import { Slider } from '@mui/material';
import React from 'react';

interface ScaledBarProps {
    name: string;
    value: number;
};

const ScaledBar = ({
    name,
    value,
}: ScaledBarProps) => {

    console.log('name', name);
    console.log('value', value);
    return (
        <>
            <span>{name}</span>
            <Slider
                value={value}
                step={10}
                min={0}
                max={100}
                marks
                valueLabelDisplay="off"
                // classes={{
                //     root: classes.root,
                //     rail: classes.rail,
                //     track: classes.track,
                //     thumb: classes.thumb,
                //     mark: classes.mark,
                // }}
            />
        </>
    );
};

export default ScaledBar;