const Search = () => {
    return (
      <InstantSearch
        indexName="your_index_name"
        searchClient={searchClient}
      >
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    );
  };
  
  const Hit = ({ hit }) => (
    <div>
      <h4>{hit.title}</h4>
      <p>{hit.description}</p>
    </div>
  );
  
  export default Search;
  