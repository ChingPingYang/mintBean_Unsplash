import React , { useState, Fragment }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Pictures from './Pictures';
const access_key = process.env.REACT_APP_ACCESS_KEY


const Dashboard = () => {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    
    const handleOnchange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${access_key}`);
            setData(res.data.results);
        } catch(err) {
            console.log(err)
        }
    }
   
    return (
        <Fragment>
            <DashboardWrap>
                <Form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search and choose an image" style={{ width: "200px"}} onChange={handleOnchange} value={query}/>
                    <input type="submit" value="search" />
                </Form>
                <PictureWrap>
                    {data.length > 0 && (
                        data.map(picture => <Pictures key={picture.id} imgURL={picture.urls.regular} />)
                    )}
                </PictureWrap>
            </DashboardWrap>
        </Fragment>
    )
}

const DashboardWrap = styled.div`
    width: 100%;
    flex-grow: 1;
    background-color: ${props => props.theme.darkGray};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    margin: 40px 0px;
    input {
        margin: 0px 5px;
    }
`

const PictureWrap = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`


export default Dashboard;