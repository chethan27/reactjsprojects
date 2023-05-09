import React, { useEffect, useState } from 'react'

const Heading = ({storeData, getFilteredData}) => {

    const [tags, setTags] = useState(new Set(['All']));

    useEffect(() => {
        setTags(prevTagsData => {
            const newTagsData = new Set(prevTagsData);
      
            storeData.forEach(x => {
              x.tags.forEach(y => {
                console.log(y)
                newTagsData.add(y);
              });
            });
      
            return newTagsData;
          });
    }, [storeData])

    const searchResult = (e) => {
        if(e.target.value === "") {
            getFilteredData(storeData);
        }
        const searchData = storeData.filter(data => {
            return data.name.toLowerCase().startsWith(e.target.value)
        })
        getFilteredData(searchData);
    }

    const sortData = () => {
        let newData = storeData;
        newData.sort((a, b) => {
            return a.eta - b.eta
        })
        getFilteredData(newData)
    }

    const filterData = (e) => {
        if(e.target.value === "All") {
            getFilteredData(storeData)
        } else {
            const filteredData = storeData.filter(data => {
                return data.tags.includes(e.target.value)
            })
            getFilteredData(filteredData)
        }
    }
 
  return (
    <div className='heading'>
        <input className="ele" type="text" placeholder="search" onChange={searchResult} id="search" ></input>
        <button className="ele" id="sort" onClick={sortData} >Sort</button>
        <select className='ele' id="filter" onChange={filterData}>
            {[...tags].map(tag => {
                return (
                    <option key={tag} value={tag}>
                    {tag}
                </option>
                )
            })
            }
        </select>
    </div>
  )
}

export default Heading