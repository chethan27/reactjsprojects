import React, { useEffect, useState } from 'react';
import './styles.css';

const GithubUsers = () => {

    const [userData, setUserData] = useState([]);
    const [followersData, setFollowersData] = useState([]);

    const getDataFromApi = () => {
        //es6 
        fetch('https://api.github.com/users')
            .then(data => data.json())
            .then(data => {
                const newData = data.map(obj => ({ ...obj, toggle: false }));
                setUserData(newData)
            }
        );
    }

    const setFollowers = (data, id) => {
        data = data.splice(0,3).map(name => name.login);
        // use map to add data
        // const updatedData = [ ...userData.slice(0, id) ,{...userData[id], "followers": data} , ...userData.slice(id + 1)];
        setUserData(updatedData);
    }

    const displayFollowers = (name, id) => {

        userData[id].toggle = !userData[id].toggle;
        fetch(`https://api.github.com/users/${name}/followers`)
        .then(data => data.json())
        .then(data =>  setFollowers(data, id) );
    }

    useEffect(() => {
        getDataFromApi();
    }, [])

    useEffect(() => {x
        console.log(userData)
    }, [userData])


  return (
    <div className='container'>
        {
            userData.map(data => {
                return (
                    <>
                        <span >{data.login}</span>
                        <img src={data.avatar_url} alt="hi" style={{width: '100px', height: '100px', borderRadius: '50px'  }} ></img>
                        <button onClick={() => displayFollowers(data.login, data.id-1)}> {data.toggle ? "Hide Followers" : "Show Followers"} </button>
                        <ul>
                            {
                                data.followers && data.toggle ?  data.followers.map(x => {
                                    return (
                                        <span style={{margin: "10px" }}>
                                            {x}
                                        </span>
                                    )
                                }) : null
                            }
                        </ul>
                    </>
                )
            })
        }
    </div>
  )
}

export default GithubUsers