const SearchBar = (props: any) => {
  return (
    <form action="">
      <div>
        <span>search</span>{" "}
        <input
          onChange={props.onChangeSearchTodosInput}
          type="text"
          placeholder="search task"
        />
      </div>
    </form>
  );
};

export default SearchBar;
