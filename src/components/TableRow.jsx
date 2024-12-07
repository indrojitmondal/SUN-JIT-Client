import React from 'react';

const TableRow = ({game,index}) => {
    console.log('Hello from Table row',game);
    return (
      
               <tr>
                            <td>{index+1}</td>
                            <td><h2>{game.game_title}</h2>
                                <img src={game.game_url} className='' alt="" />
                                 <div>{game.rating}</div>
                            </td>
                            <td>{game.genres}</td>
                           <td>{game.game_description}</td>


                            
                            <td>{game.publication_year}</td>

               </tr>
     
    );
};

export default TableRow;