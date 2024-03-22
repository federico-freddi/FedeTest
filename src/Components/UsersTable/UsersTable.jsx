import { Button, ChakraProvider, Flex, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../../Store/Slicers/usersSlice';
import UserDetailsPage from './UserDetailsPage';


const UsersTable = () => {
    const users = useSelector((state) => state.user.users);
  return (
    <ChakraProvider>


    <Flex className='' justify={"center"}  border={"solid 1px"}  >
            <TableContainer className='' bgColor={""} color={"black"} w={"full"} marginTop={"10px"} display={"center"} >
            <Table variant="striped" colorScheme="" w={"full"}>
                <Thead w={"full"}>
                <Tr _hover={{animation:"none", transform:"none", shadow:"none"}}  w={"full"} >
                    <Th color={"gray"}>Id</Th>
                    <Th>Icon</Th>
                    <Th color={"gray"}>firstName</Th>
                    <Th color={"gray"}>lastName</Th>
                    <Th color={"gray"}>email</Th>
                    <Th color={"gray"}>action</Th>
                </Tr>
                </Thead>
                <Tbody color={"black"} align={"start"}    >
                {users && users.map((user, index) => (
                <Tr  key={index} _hover={{animation:"none", transform:"none", shadow:"none", transition: "0.2s"}}>
                    <Td>{user.id}</Td>
                    <Td><Image src={user.image} maxH={50}/></Td>
                    <Td>{user.firstName}</Td>
                    <Td>{user.lastName}</Td>
                    <Td>{user.email}</Td>    
                    <Td><UserDetailsPage user={user}/></Td>
                </Tr>
                 ))}
                </Tbody>
                <Tfoot>
                </Tfoot>
            </Table>
            </TableContainer>
    </Flex>
    </ChakraProvider>

  )
}

export default UsersTable