import { useState } from 'react';
import { Form, Button, Input } from './SearchBar.styled';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { notify } from 'components';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      notify('Please type at least one letter!');
      setQuery('');
      return;
    }

    onSubmit(query.toLowerCase().trim());

    setQuery('');
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">
        <ImSearch />
      </Button>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        value={query}
        placeholder="Search movies"
        onChange={handleInputChange}
      />
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
