import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

export default function SearchBar({ searchValue, setSearchValue }) {
  return (
  <InputGroup className="mb-3 p-3">
    <InputGroup.Text>Search</InputGroup.Text>
    <Form.Control aria-label="Search box" 
        value={searchValue}
        placeholder="Type here"
        onChange={(event) => setSearchValue(event.target.value)}/>
  </InputGroup>
  )
    }