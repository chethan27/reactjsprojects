import React, { useEffect, useState, useRef, useCallback } from 'react';
import useSearchBar from './useSearchBar';

const InfiniteScroll = () => {

  const [query, setQuery] = useState('');
  const [pageNumber, setpageNumber] = useState(1);
  const {hasMore, books, loading, error} =  useSearchBar(query, pageNumber);


  const observer = useRef();
  const lastEle = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect() 
    observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting && hasMore) {
          console.log("visible")
          setpageNumber(prePageNumber => prePageNumber +1)
        }
    })
    if(node) {
      observer.current.observe(node)
    }
    console.log(node)
  }, [loading, hasMore]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setpageNumber(1);
  }
  

  return (
   <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {
        books.map(((book, index) => {
          if(books.length === index+1) {
            return (
              <div ref={lastEle} key={book}>
                {book}
              </div>
            )
          } else {
            return (
              <div key={book}>
                {book}
              </div>
            )
          }
        }))
      }
      <div>{loading && 'Loading'}</div>
      <div>{error && 'Error'}</div>
   </>
  )
}

export default InfiniteScroll;