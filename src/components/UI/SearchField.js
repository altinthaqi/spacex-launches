import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  StyledInputBase,
  Search,
} from "../../layout/NavigationStyled";

function SearchField(props) {
  const handleSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
      />
    </Search>
  );
}

export default SearchField;
