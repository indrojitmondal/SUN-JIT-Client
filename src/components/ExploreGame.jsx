import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
const ExploreGame = () => {
    return (
        <div>
            {/* <section  className="my-10 w-11/12 lg:w-10/12 mx-auto">
                <h1 className="font-bold text-center text-p2 mt-1 md:text-xl">TYPE OF GAMES</h1>
               

                <p>Hello...type of games...</p>
              </section> */}

            <section className="bg-about">
                <div className="my-10 w-11/12 lg:w-10/12 mx-auto">
                    {/* Heading */}
                    <div className="max-w-5xl mx-auto text-center space-y-6">

                        <Slide>
                            <h1 className="font-bold text-center text-p2 mt-1 text-2xl">TYPE OF GAMES</h1>

                        </Slide>

                        <p className="text-text_color text-sm lg:text-base ">
                            Games come in various forms, offering diverse experiences that cater to different interests. From immersive story-driven adventures and strategic puzzles to action-packed challenges and educational simulations, each type of game is designed to entertain, engage, and inspire creativity. By blending innovation with captivating gameplay, games deliver unforgettable moments that resonate with players of all ages.
                        </p>
                    </div>

                    {/* Card Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {/* Card 1 */}
                        <div className="bg-[#E7C1D3] shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://static.vecteezy.com/system/resources/previews/026/452/755/non_2x/action-game-icon-vector.jpg" alt="Concept" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">Action Games</h2>
                                <p className=" ">
                                    Fast-paced games focusing on hand-eye coordination and quick reflexes, often involving combat or challenges
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#EFDA6E] shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://cdn1.iconfinder.com/data/icons/game-design-butterscotch-vol-1/256/Adventure_Game-512.png" alt="Design Process" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">Adventure Games</h2>
                                <p className=" ">
                                    Story-driven games that emphasize exploration, problem-solving, and narrative experiences.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#A4DAC3] shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://cdn-icons-png.flaticon.com/512/8193/8193239.png" alt="Supervision" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">Puzzle Games</h2>
                                <p className="">
                                    Games that challenge the mind with logic, strategy, and critical thinking.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-[#77AAEA] shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://cdn-icons-png.flaticon.com/512/10069/10069102.png" alt="Budget Planning" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">Simulation Games</h2>
                                <p className="">
                                    Games that replicate real-world activities or systems, like building cities, managing businesses, or flying planes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExploreGame;