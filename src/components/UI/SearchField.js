import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  StyledInputBase,
  Search,
} from "../../layout/NavigationStyled";

function SearchField(props) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default SearchField;
