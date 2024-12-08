import React from 'react';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch';

const appId = import.meta.env.VITE_ALGOLIA_ID;
const searchId = import.meta.env.VITE_SEARCH_ID

const searchClient = algoliasearch(appId, searchId);

function AlgoliaSearch() {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <div className="search-container relative">
        {/* Search Input */}
        <SearchBox
          translations={{ placeholder: 'Search...' }}
          className="searchbox border rounded-md p-2 w-full max-w-xs shadow-md focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Results */}
        <div className="results-container absolute bg-white shadow-lg rounded-md mt-2 w-full max-w-xs z-50">
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
}

// Component to render each search result
function Hit({ hit }) {
  return (
    <div className="p-2 border-b">
      <h3 className="text-sm font-semibold">{hit.name}</h3>
      <p className="text-xs text-gray-600">{hit.description}</p>
    </div>
  );
}

export default AlgoliaSearch;
