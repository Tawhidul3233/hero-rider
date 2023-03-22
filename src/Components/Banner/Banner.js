import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Travel at low prices by Hero Rider.
          </h2>

          <p class="hidden text-gray-500 md:mt-4 md:block">
            Want to travel from city to city for next to nothing? Welcome aboard BlaBlaCar bus, your new bus service. Easy and affordable, our buses are always travelling to your next destination.
          </p>

          <div class="mt-4 md:mt-8 ">
            <Link to='/singup/herolearner'
              href="#"
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400 mx-2 my-2"
            >

              Join as a Driving Learner.
            </Link>
            <Link
              to='/singup/herorider'
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400 mx-2"
            >
              Join as a Rider
            </Link>
          </div>
        </div>
      </div>

      <img
        alt="Student"
        src="https://i.ibb.co/gV3STts/screenshot-2.png"
        class="h-56 w-full object-cover sm:h-full"
      />
    </section>

  );
};

export default Banner;