import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SingUpRider = () => {

  const { register, handleSubmit, reset } = useForm()

  const submitUser = (data) => {
    // console.log(data)

    // const imageProfile = data.imageProfile[0];
    // const Licence = data.Licence[0];
    // const NamePalate = data.NamePalate[0];
    // const NidFront = data.NidFront[0];
    // const NidBack = data.NidBack[0];

    // const formData = new FormData();

    // formData.append('image', imageProfile)
    // formData.append('image2', Licence)
    // formData.append('image3', NamePalate)
    // formData.append('image4', NidFront)
    // formData.append('image5', NidBack)


    // const formData = new FormData();

    // formData.append('image', data.imageProfile[0]) ;
    // formData.append('image2', data.Licence[0]);
    // formData.append('image3', data.NamePalate[0]);
    // formData.append('image4', data.NidFront[0]);
    // formData.append('image5', data.NidBack[0]);

    // const url = 'https://api.imgbb.com/1/upload?expiration=600&key=b6cd8a0df36da3243e927c420a1219b2';

    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(imgData => {
    //     // console.log(imgData.image.url)     // URL of first image
    //     // console.log(imgData.image2.url)    // URL of second image
    //     // console.log(imgData.image3.url)    // URL of third image
    //     // console.log(imgData.image4.url)    // URL of fourth image
    //     console.log(imgData)
    //   })
    //   .catch(err => console.log(err))

  }


  


  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside
          class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <img
            alt="Pattern"
            src="https://i.ibb.co/m9cd139/pngtree-set-of-colorful-taxi-car-service-transport-vector-illustration-picture-image-1752657.png"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div class="max-w-xl lg:max-w-3xl">
            <h1
              class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Join as a Hero Rider 🦑
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              Join the new Hero Rider Pink to enjoy complimentary upgrades to Priority Pickup, exclusive savings, and preferential pricing on Lux, XL, and Preferred rides.
            </p>

            <form onSubmit={handleSubmit(submitUser)} action="#" class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="FullName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  {...register('FullName')}
                  type="text"
                  id="FullName"
                  name="FullName"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Age"
                  class="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>

                <input
                  {...register('Age')}
                  type="number"
                  id="Age"
                  name="Age"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label for="Email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  {...register('Email')}
                  type="Email"
                  id="Email"
                  name="Email"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div class="col-span-6">
                <label for="Address" class="block text-sm font-medium text-gray-700">
                  Address
                </label>

                <input
                  {...register('Address')}
                  type="text"
                  id="Address"
                  name="Address"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Phone"
                  class="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  {...register('Phone')}
                  type="text"
                  id="Phone"
                  name="Phone"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Area"
                  class="block text-sm font-medium text-gray-700"
                >
                  Area
                </label>

                <input
                  {...register('Area')}
                  type="text"
                  id="Area"
                  name="Area"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Licence"
                  class="block text-sm font-medium text-gray-700"
                >
                  Driving licence front
                </label>

                <input
                  {...register('Licence')}
                  type="file"
                  id="Licence"
                  name="Licence"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="ProfileImg"
                  class="block text-sm font-medium text-gray-700"
                >
                  Profile picture
                </label>

                <input
                  {...register('imageProfile')}
                  type="file"
                  id="ProfileImg"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>


              <div class="col-span-6 sm:col-span-3">
                <label
                  for="NidFront"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nid front page
                </label>

                <input
                  {...register('NidFront')}
                  type="file"
                  id="NidFront"
                  name="NidFront"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="NidBack"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nid back page
                </label>

                <input
                  {...register('NidBack')}
                  type="file"
                  id="NidBack"
                  name="NidBack"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="CarType"
                  class="block text-sm font-medium text-gray-700"
                >
                  Car Type
                </label>

                <select {...register('CarType')} name='CarType' className="select select-bordered select-md w-full max-w-xs">
                  <option>car</option>
                  <option>bike</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="NamePalate"
                  class="block text-sm font-medium text-gray-700"
                >
                  Name palate
                </label>

                <input
                  {...register('NamePalate')}
                  type="file"
                  id="NamePalate"
                  name="NamePalate"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>


              <div class="col-span-6 sm:col-span-3">
                <label
                  for="CarName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Car name
                </label>

                <input
                  {...register('CarName')}
                  type="text"
                  id="CarName"
                  name="CarName"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="CarModel"
                  class="block text-sm font-medium text-gray-700"
                >
                  Car Model
                </label>

                <input
                  {...register('CarModel')}
                  type="text"
                  id="CarModel"
                  name="CarModel"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>


              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  {...register('password')}
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="PasswordConfirmation"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  {...register('PasswordConfirmation')}
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6">
                <label for="MarketingAccept" class="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span class="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div class="col-span-6">
                <p class="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" class="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" class="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type='submit'
                  class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" class="text-gray-700 underline">Log in</a>.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>

  );
};

export default SingUpRider;