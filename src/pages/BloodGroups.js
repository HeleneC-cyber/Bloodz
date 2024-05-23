import React from 'react';
import BloodGroup from '../components/BloodGroup';
import Nav from '../components/Nav';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import BloodTable from '../components/BloodTable';
import Flower from '../assets/images/flower-transition.svg';
import Footer from '../components/Footer';
import Eye from '../components/Eye';


const BloodGroups = () => {
    const groups = [{ title: 'Groupe A', desc: "Les A seraient des personnes sérieuses, honnêtes, calmes et responsables, gentilles et réservées, ponctuelles, patientes, propres et perfectionnistes, attentives aux détails avec un brin de créativité et seraient de bonnes conductrices ! Elles peuvent sembler prudentes, sensibles, têtues, tatillonnes voire anxieuses." }, { title: 'Groupe B', desc: "Les B seraient, eux, des esprits libres, créatifs, passionnés et optimistes, volontaires, joueurs, flexibles, enthousiastes et entreprenants. Ils peuvent être aussi rebelles, distraits, impulsifs, imprévisibles, irresponsables et rancuniers, voire égoïstes." }, { title: 'Groupe AB', desc: "Les rares AB seraient plutôt décontractés, sociables et emphatiques, organisés, rationnels et adaptables. On les dit toutefois distants, critiques, étourdis, indécis voire impitoyables et difficiles à cerner." }, { title: 'Groupe O', desc: "Les O seraient généralement ambitieux et passionnés, des meneurs naturels qui ont confiance en eux, insouciants, autonomes et suivant leur intuition. En revanche, ils seraient également arrogants, froids et méfiants, insensibles et jaloux, et même accros au travail !" }]
    return (
        <div>
            <Nav />
            <section className='blood-groups-description animation'>
                <Container>
                    
                    <h1>Les groupes sanguins</h1>
                    <p>D'après les japonais, les groupes sanguins seraient liés aux traits de caractères. Découvrez ce que le vôtre dit de vous et laissez-vous guider dans votre quête de rencontre ! </p>
                    {
                        groups.map((bloodItem, index) => {
                            return <BloodGroup key={index} title={bloodItem.title} desc={bloodItem.desc} />
                        })
                    }
                    <Link to='https://dondesang.efs.sante.fr/articles/dis-moi-ton-groupe-sanguin-je-te-dirai-qui-tu-es'> source : dondesang.efs.sante</Link>
                </Container>
            </section>
            <section className='blood-groups-recap'>
                <img src={Flower} alt='fleurs'></img>
                <Container>
                    <div className='table-wrapper'>
                    <BloodTable />
                    </div>
                    <h4>Qui vous correspond ?</h4>
                  <Eye link='/compatibility' dark={true}/>  
                </Container>
            </section>
            <Footer/>
        </div>
    );
};

export default BloodGroups;