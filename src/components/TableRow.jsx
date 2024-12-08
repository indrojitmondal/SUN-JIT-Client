import React from 'react';
// import StarRatings from './react-star-ratings';
import ReactStars from 'react-stars'
import Swal from 'sweetalert2';

const TableRow = ({ game, index }) => {
    // console.log('Hello from Table row', game);
      const {_id}= game;
    const handleDelete = (id)=>{
        //console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
   
                // fetch(`https://sunjit-server.vercel.app/reviews/${_id}`,{
                //     method: 'DELETE'
                // })
                // .then(res=> res.json())
                // .then(data => {
                //     //console.log(data);
                //    // console.log('Deleted id: ',_id);
                //     if(data.deletedCount>0){
                //         const remainingReviews= myReviews.filter(review=>review._id !==_id);
                //         setMyReviews(remainingReviews);
                //         Swal.fire({
                //             title: "Deleted!",
                //             text: "The review has been deleted.",
                //             icon: "success"
                //           });

                //     }
                // })

             
            }
          });
    }
    return (

        <tr>
            <td className='text-center'>{index + 1}</td>
            <td><h2 className='font-bold'>{game.game_title}</h2>
                <img src={game.game_url} className='' alt="" />
               

                <div className='flex items-center gap-4'>
                    <ReactStars count={5}

                        size={24}
                        activeColor="#ffd700"
                        value={game.rating}
                    >

                    </ReactStars>

                    {game.rating}
                </div>

            </td>
            <td> <p className='lg:px-3'>{game.genres}</p> </td>
            <td>
                 <div>
                    
                 <p className='lg:px-3'> <span className='font-bold'> Game Description: </span> {game.game_description} </p>
                 <h2 className='lg:px-3'><span className='font-bold'>Reviewer's Name: </span> {game.name} </h2>
                 <h2 className='lg:px-3 '> <span className='font-bold'>Reviewer's Email:</span> {game.email} </h2>
   
                 </div>

            </td>



            <td> <p className='lg: px-2'> {game.publication_year} </p> </td>
            
            {/* <td> <button onClick={()=>handleDelete(_id)} className='font-bold px-1'>Delete</button> </td>
         */}
        </tr>

    );
};

export default TableRow;