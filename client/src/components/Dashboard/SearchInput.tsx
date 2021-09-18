import React, { useState } from 'react';
import { TextField, ClickAwayListener, useTheme } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const SearchInput: React.FC = () => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <ClickAwayListener onClickAway={(): void => setIsActive(false)}>
      <TextField
        fullWidth
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        onClick={(): void => setIsActive(true)}
        InputProps={{
          startAdornment: <Search color="disabled" />,
          sx: { boxShadow: isActive ? theme.shadows[16] : 'none', borderRadius: 5 },
        }}
      />
    </ClickAwayListener>
  );
};

export default SearchInput;
