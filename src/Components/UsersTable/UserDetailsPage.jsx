import { Box, Button, ChakraProvider, Image, Input, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';

const UserDetailsPage = ({user}) => {
 //const user = useSelector((state) => state.user.selectedUser);
 const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  function display () {
    console.log("user", user)
  }

  return (
    <>
            <ChakraProvider>

      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size="xl"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>User Details</DrawerHeader>

          <DrawerBody>
            <Button onClick={display}>display</Button>

            <Image maxH={200} src={user.image} alt="lastName"/>

            <SimpleGrid columns={3} spacing={10} mt={5}>
              <Box  minH='80px' >
                <span style={{fontWeight: "bold"}} >Address</span >
                  <Text>{user.address.address}</Text>
                  <Text>{user.address.city}</Text>
                  <Text>{user.address.state}</Text>
                  <Text>{user.address.postalCode}</Text>
              </Box>
              <Box  minH='80px' >
              <span style={{fontWeight: "bold"}} >Age</span >
                <Text>{user.age}</Text>
              </Box>
              <Box  minH='80px' >
              <span style={{fontWeight: "bold"}} >birthDate</span >
                <Text>{user.birthDate}</Text>
              </Box>
              <Box  minH='80px' flexWrap={"initial"} overflowWrap={"normal"} >
              <span style={{ fontWeight: "bold" }}>Company</span>
                  <Text>{user.company.name}</Text>
                  <Text>{user.company.department}</Text>
                  <Text>{user.company.title}</Text>
                  <Text>{user.company.address.address}</Text>
                  <Text>{user.company.address.city}</Text>
              </Box>
              
              <Box  minH='80px' >
                <span style={{fontWeight: "bold"}} >Blood Group</span >
                <Text>{user.bloodGroup}</Text>
              </Box>
              <Box  minH='80px' >
              <span style={{fontWeight: "bold"}} >Wallet</span >
                <Text>{user.crypto.wallet}</Text>
                <Text>{user.crypto.coin}</Text>
                <Text>{user.crypto.network}</Text>

              </Box>
              <Box  minH='80px' >
              <span style={{fontWeight: "bold"}} >eyeColor</span >
                <Text>{user.eyeColor}</Text>
              </Box>
              <Box  minH='80px' >
                  <span style={{ fontWeight: "bold" }}>Hair</span>
                  <Text>{user.hair.color}</Text>
                  <Text>{user.hair.type}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>First Name</span>
                <Text>{user.firstName}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Gender</span>
                <Text>{user.gender}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Height</span>
                <Text>{user.height}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>ID</span>
                <Text>{user.id}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Last Name</span>
                <Text>{user.lastName}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Mac Address</span>
                <Text>{user.macAddress}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Maiden Name</span>
                <Text>{user.maidenName}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Phone</span>
                <Text>{user.phone}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>SSN</span>
                <Text>{user.ssn}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>University</span>
                <Text>{user.university}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Username</span>
                <Text>{user.username}</Text>
              </Box>
              <Box  minH='80px' >
                <span style={{ fontWeight: "bold" }}>Weight</span>
                <Text>{user.weight}</Text>
              </Box>

              
            </SimpleGrid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </ChakraProvider>
    </>
  )
}

export default UserDetailsPage;
