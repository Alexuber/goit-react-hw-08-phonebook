import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { contactFilter } from 'redux/filter/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(contactFilter(e.target.value));
  };
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Filter"
        name="filter"
        type="text"
        onChange={changeFilter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        placeholder="Search..."
      />
    </>
  );
};
