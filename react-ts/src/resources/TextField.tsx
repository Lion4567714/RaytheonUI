import React from 'react';

// Add '?' after the prop name to make it optional
interface Props {
    text?: string;
};

// Returns HTML component that allows the props (read: inputs) listed above
export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    );
};
