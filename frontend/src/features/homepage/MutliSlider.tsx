import React from 'react';
import { useRanger } from 'react-ranger';

const MultiSlider = (props: {
  onDrag: (data: number[]) => void;
  min?: number;
  max?: number;
  defaultValues: number[];
  values: number[];
  className?: string;
}) => {
  const { getTrackProps, handles } = useRanger({
    min: props.min !== undefined ? props.min : 0,
    max: props.max !== undefined ? props.max : 1000,
    stepSize: 5,
    values: props.values,
    onDrag: (d) => props.onDrag(d)
  });

  return (
    <div
      className={props.className}
      {...getTrackProps({
        style: {
          height: '4px',
          background: '#ddd',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
          borderRadius: '2px'
        }
      })}
    >
      {handles.map(({ getHandleProps }, k) => (
        <button
          {...getHandleProps({
            style: {
              width: '20px',
              height: '20px',
              outline: 'none',
              borderRadius: '100%',
              background: 'rgb(100, 176, 145)',
              border: 'none'
            }
          })}
          key={k}
        />
      ))}
    </div>
  );
};

export default MultiSlider;
