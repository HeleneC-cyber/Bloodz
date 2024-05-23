import React from 'react';

const BloodTable = () => {
    return (
        <table>
            <thead>
                <th>Groupe A</th>
                <th>Groupe B</th>
                <th>Groupe AB</th>
                <th>Groupe O</th>
            </thead>
            <tbody>
                <tr>
                    <td>Sérieux, méticuleux, honnête, calme, responsable, gentil, organisé, timide, poli</td>
                    <td>Créatif, flexible, passionné, optimiste</td>
                    <td>Amical (mais timide), confiant (mais hésitant), soif de savoir, rationnel mais imaginatif, créatif</td>
                    <td>Ambitieux, passionné, généreux et autonome, leader, enthousiaste et optimiste, romantique</td>
                </tr>
                <tr>
                    <td>Têtu, anxieux, conservateur</td>
                    <td>Égoïste, irresponsable, imprévisible, rebelle, distrait, séducteur</td>
                    <td>Critique, indécis, étourdi, irresponsable, personnalité double</td>
                    <td>Arrogant, froid, jaloux, brouillon</td>
                </tr>
            </tbody>
        </table>
    );
};

export default BloodTable;