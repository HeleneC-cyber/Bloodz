import React from 'react';
import Nav from '../components/Nav';
import Container from '../components/Container';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Eye from '../components/Eye';

const About = () => {
    return (
        <section >
            <Nav />
            <Container>
                <div className='about animation'>
            <h1>Bienvenue sur BloodZ</h1>
            <p>Le site de rencontre innovant où votre groupe sanguin guide votre quête amoureuse ! </p>
            <p>Chez BloodZ, nous croyons que la compatibilité sanguine peut révéler des affinités profondes et créer des liens authentiques. En associant les dernières avancées scientifiques à notre algorithme de mise en relation, nous vous aidons à trouver des partenaires dont le groupe sanguin s'harmonise parfaitement avec le vôtre. Que vous cherchiez l'amour, l'amitié ou simplement des rencontres enrichissantes, laissez votre sang révéler la magie de la connexion humaine. Rejoignez-nous et découvrez une nouvelle dimension de la compatibilité amoureuse avec BloodZ !</p>
            <h2>Les origines</h2>
            <p>Au début du xxe siècle Karl Landsteiner, un scientifique autrichien, mit au point le premier système de classement des groupes sanguins. Des études ethniques montrèrent ensuite des différences géographiques dans la répartition de ces groupes, ainsi il y aurait un pourcentage plus élevé de groupes sanguins B chez les peuples asiatiques. Ce fait fut utilisé par les nazis pour appuyer l'idée de races dominantes.
</p>
            <p>En 1927, Takeji Furukawa, un professeur vivant à Tokyo, publia Étude du caractère selon le groupe sanguin. L'idée d'une influence du groupe sanguin sur le comportement se répandit rapidement dans le pays et le gouvernement de l'époque lança une enquête pour vérifier cette théorie. L'enquête n'aboutit à aucun résultat concluant. Dans une autre étude, Furukawa compara les répartitions de groupes sanguins chez deux groupes ethniques : les Formosans de Taïwan et les Aïnous du Nord-Est de l'Asie. L'objectif de cette étude était de « pénétrer l'essence des caractéristiques raciales des Taïwanais qui se sont révoltés récemment et comportés si cruellement ». En effet, après sa victoire contre la Chine en 1895, le Japon occupa Taïwan et essuya plusieurs insurrections des Taïwanais en 1930 et 1931 qui tuèrent des centaines de colons japonais. Furukawa expliqua le caractère rebelle des Formosans par le fort pourcentage de groupes sanguins O, en comparaison de la faible représentation de ce groupe chez les Aïnous présentés comme soumis par le professeur. En conclusion, Furukawa recommanda d'augmenter le métissage des Taïwanais avec les Japonais afin de diminuer la proportion d'individus de groupe sanguin O.
</p>
            <p>Dans les années 1930 et 1940, l'empire japonais, en pleine expansion militaire, s'est approprié la théorie des groupes sanguins pour entraîner de meilleurs soldats.
</p>
            <p>La mode des groupes sanguins disparut ensuite avant de revenir dans les années 1970 à la suite d'un livre de Masahiko Nomi (en), un journaliste sans lien avec le monde médical</p>
            <Link to='https://fr.wikipedia.org/wiki/Groupes_sanguins_dans_la_culture_japonaise' >source : Wikipédia</Link>
            <h2>Aujourd'hui</h2>
            <p>Il existe au Japon une croyance populaire selon laquelle le groupe sanguin (血液型, ketsu eki gata?) permet de prédire la personnalité, le caractère et la compatibilité d'un individu avec les autres. Cette croyance s'est exportée dans une certaine mesure dans d'autres pays d'Asie, comme en Corée du Sud ou Taïwan.</p>
            <p>Au Japon, se renseigner sur le groupe sanguin d'une personne est considéré aussi banal que de s'enquérir du signe astrologique dans d'autres pays.
</p>
            <Link to='https://fr.wikipedia.org/wiki/Groupes_sanguins_dans_la_culture_japonaise' >source : Wikipédia</Link>
            <h4>En savoir plus sur les groupes sanguins et les traits de personnalité?</h4>
            <Eye link='/groupes-sanguins' />
            </div>
            </Container>
            <Footer flower = {true} />  
        </section>
    );
};

export default About;