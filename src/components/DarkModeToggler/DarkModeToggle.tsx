import React from 'react';
import './DarkModeToggler.scss';

type Props = {
  setDarkModeIsOn: (isOn: boolean) => void,
  darkModeIsOn: boolean,
};

export const DarkModeToggle: React.FC<Props> = ({
  setDarkModeIsOn,
  darkModeIsOn,
}) => {
  return (
    <input
      id="toggle"
      className="toggle"
      type="checkbox"
      onChange={() => setDarkModeIsOn(!darkModeIsOn)}
    />
  );
};
