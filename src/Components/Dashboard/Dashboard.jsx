import { Button, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUsers } from '../../Store/Slicers/usersSlice';
import UsersTable from '../UsersTable/UsersTable';

const dashboard = () => {
    const endpoint = 'https://dummyjson.com/users';
    const [data, setData] = useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
        const getData = async () => {
            try{
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  setData(data);
                  dispatch(setUsers(data.users))
                } catch (error){
                    console.log(error);
                }
            
        }
        getData();
    },[])

    function display() {
        console.log(data)
    }

  return (
    
    <Container width={"full"}>
        <h1>List of Users</h1>
        <UsersTable/>
    </Container>
    
  )
}

export default dashboard