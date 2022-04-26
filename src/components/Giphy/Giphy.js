import React, { useEffect, useState } from 'react';
import './Giphy.css'
import Services from '../Services/Services';
import Loading from '../Loading/Loading';

const Giphy = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [limit, setLimit] = useState(20)
    const [lol, setLol] = useState(true)
    const services = new Services;
    const loading = new Loading

    useEffect(() => {
        services.getTrending(limit).then(res => {
            setData(res.data.data)
            console.log(res)
        })
    }, [])


    const onClick = onkeydown = (e) => {
        if (e.keyCode === 13) {
            services.getSearch(search, limit).then(res => {
                setData(res.data.data)
            })
        }
    }
    return (
        <div>
            <div className="search-panel">
                <input type="text" placeholder="Search all the GIFs and Stikers" style={{ width: '1150px', height: '60px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="search-span"
                    onClick={onClick}
                ><i className="fas fa-search"></i></div>
            </div>
            <div className="content">
                {
                    data.map((elem, index) => {
                        return (
                            <div className="gif_card">
                                <iframe key={index} src={elem.embed_url}></iframe>
                            </div>
                        )
                    })
                }
            </div>
            {/* <button onClick={onMore}>More</button> */}
        </div>
    );
}

export default Giphy;