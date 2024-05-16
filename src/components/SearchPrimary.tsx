// composnents
import Button from "./Button";

// icons
import { SearchIcon } from "./SVGs";

function SearchPrimary(): JSX.Element {
  const content = (
    <div className="search-primary">
      <input
        type="text"
        placeholder="جست و جو در محتوای آموزشی"
        className="search-primary__input"
      />
      <Button type="submit" variant="tertiary">
        <SearchIcon />
      </Button>
    </div>
  );

  return content;
}

export default SearchPrimary;
