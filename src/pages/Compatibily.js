import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Card from '../components/Card';

const Compatibily = () => {
    const [usersFromApi, setUsersFromApi] = useState([])
    const [displayAllUsers, setDisplayAllUsers] = useState(false)
    const [usersA, setUsersA] = useState([])
    const [usersB, setUsersB] = useState([])
    const [usersAB, setUsersAB] = useState([])
    const [usersO, setUsersO] = useState([])
    const [displayUsersA, setDisplayUsersA] = useState(false)
    const [displayUsersB, setDisplayUsersB] = useState(false)
    const [displayUsersAB, setDisplayUsersAB] = useState(false)
    const [displayUsersO, setDisplayUsersO] = useState(false)

    const filterUsers = () => {
        if (usersFromApi.length < 1) {
            return false
        }
        usersFromApi.map(user => {
            if (user.bloodGroup.includes('A') && !user.bloodGroup.includes('B')) {
                return setUsersA(usersA => [...usersA, user])
            } else if (!user.bloodGroup.includes('A') && user.bloodGroup.includes('B')) {
                return setUsersB(usersB => [...usersB, user])
            } else if (user.bloodGroup.includes('A') && user.bloodGroup.includes('B')) {
                return setUsersAB(usersAB => [...usersAB, user])
            } else if (user.bloodGroup.includes('O')) {
                return setUsersO(usersO => [...usersO, user])
            }

        })
    }

    const handleClickA = ( ) => {
        setDisplayUsersA(!displayUsersA)
        setDisplayUsersB(false)
        setDisplayUsersAB(false)
        setDisplayUsersO(false)
        setDisplayAllUsers(false)
    }
    const handleClickB = ( ) => {
        setDisplayUsersA(false)
        setDisplayUsersB(!displayUsersB)
        setDisplayUsersAB(false)
        setDisplayUsersO(false)
        setDisplayAllUsers(false)
    }
    const handleClickAB = ( ) => {
        setDisplayUsersA(false)
        setDisplayUsersB(false)
        setDisplayUsersAB(!displayUsersAB)
        setDisplayUsersO(false)
        setDisplayAllUsers(false)
    }
    const handleClickO = ( ) => {
        setDisplayUsersA(false)
        setDisplayUsersB(false)
        setDisplayUsersAB(false)
        setDisplayUsersO(!displayUsersO)
        setDisplayAllUsers(false)
    }
    const handleClickAll = ( ) => {
        setDisplayUsersA(false)
        setDisplayUsersB(false)
        setDisplayUsersAB(false)
        setDisplayUsersO(false)
        setDisplayAllUsers(!displayAllUsers)
    }


    useEffect(() => {
        fetch('https://dummyjson.com/users').then(response => response.json()).then(data => setUsersFromApi(data.users)).catch(error => console.error()).finally(() => console.log('Terminé !'))
    }, [])

    useEffect(() => {
        filterUsers()
    }, [usersFromApi])


    return (
        <div className='compatibility'>
            <Nav />
            <Container>
                <h1 className='animation'>Découvrez celui ou celle que vous cherchez...</h1>
                <button className='animation' onClick={handleClickAll}>TOUT</button>
                <div className='btn-group animation'>
                    <button onClick={handleClickA}>Groupe A</button>
                    <button onClick={handleClickB}>Groupe B</button>
                    <button onClick={handleClickAB}>Groupe AB</button>
                    <button onClick={handleClickO}>Groupe O</button>
                </div>
                <div className='cards'>
                    {displayAllUsers && usersFromApi.map((user, index)=> {
                        console.log(user)
                        return <Card key={index} bloodGroup={user.bloodGroup} firstName={user.firstName} age={user.age} gender={user.gender} image={user.image} id={user.id} />
                    })}
                    {displayUsersA && usersA.map((user, index) => {
                        console.log(user)
                        return <Card key={index} bloodGroup={user.bloodGroup} firstName={user.firstName} age={user.age} gender={user.gender} image={user.image} id={user.id} />
                    })}
                    {displayUsersB && usersB.map((user, index) => {
                        console.log(user)
                        return <Card key={index} bloodGroup={user.bloodGroup} firstName={user.firstName} age={user.age} gender={user.gender} image={user.image} id={user.id} />
                    })}
                    {displayUsersAB && usersAB.map((user, index) => {
                        console.log(user)
                        return <Card key={index} bloodGroup={user.bloodGroup} firstName={user.firstName} age={user.age} gender={user.gender} image={user.image} id={user.id} />
                    })}
                    {displayUsersO && usersO.map((user, index) => {
                        console.log(user)
                        return <Card key={index} bloodGroup={user.bloodGroup} firstName={user.firstName} age={user.age} gender={user.gender} image={user.image} id={user.id} />
                    })}
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Compatibily;