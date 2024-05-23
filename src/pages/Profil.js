import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Card from '../components/Card';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Profil = () => {
let {id} = useParams()
const [user,setUser] = useState()
useEffect(() => {
fetch('https://dummyjson.com/users/'+id).then(response => response.json()).then(data => setUser(data))
}, [])

    return (
        <section >
            <Nav />
            <Container>
                
                <div className='profil'>
            <h1>Profil de présentation</h1>
            <Card bloodGroup={user?.bloodGroup} firstName={user?.firstName} lastName={user?.lastName} age={user?.age} gender={user?.gender} image={user?.image} id={user?.id}/>
            <div className='profil-desc'>
                <h4>Description</h4>
                <p>Anniversaire : {user?.birthDate}</p>
                <p>Taille : {user?.height} cm</p>
                <p>Cheveux : {user?.hair.color}, {user?.hair.type} </p>
                <p>Yeux : {user?.eyeColor}</p>
                <p>Métier : {user?.company.title}</p>
                <p>Ville : {user?.address.city}</p>
            </div>
            <div className='profil-presentation'>
                <h4>Présentation</h4>
                <p>Lorem ipsum dolor sit amet. Aut quidem molestias est soluta dolorem ut fuga odio ex necessitatibus amet aut illo fugit. Quo accusantium corrupti At quia consequuntur non illum doloribus et quam maiores. Aut sunt deserunt non placeat molestiae est sequi nobis At voluptas voluptatibus At voluptatum rerum et alias reiciendis.</p>
            </div>
            <button><Link to='/compatibility/' > Vous cherchez <br /> quelqu'un d'autre ?</Link></button>
            </div>
            
            </Container>
            <Footer flower = {true}/>
        </section>
    );
};

export default Profil;