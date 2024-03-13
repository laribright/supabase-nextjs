import { Button } from '@/components/ui/button';

const Profile = async () => {
  const handleAddSkill = async (formData: FormData) => {};

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-4 sm:grid-cols-12 gap-6 px-4'>
          <div className='col-span-4 sm:col-span-3'>
            <div className='bg-white shadow rounded-lg p-6'>
              <div className='flex flex-col items-center'>
                <img
                  src={''}
                  className='w-32 h-32 bg-gray-300 object-cover rounded-full mb-4 shrink-0'
                  alt={''}
                />
                <h1 className='text-xl font-bold'>{''}</h1>
                <p className='text-gray-700'>{''}</p>
                <div className='mt-6 flex flex-wrap gap-4 justify-center'>
                  <a
                    href='#'
                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
                  >
                    Contact
                  </a>
                  <a
                    href='#'
                    className='bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded'
                  >
                    Resume
                  </a>
                </div>
              </div>
              <hr className='my-6 border-t border-gray-300' />
              <div className='flex flex-col'>
                <form className='flex'>
                  <input
                    className='border mr-2 rounded-md border-black px-3 py-2'
                    type='text'
                    name='skill'
                    placeholder='skill'
                  />
                  <Button type='submit'>Add</Button>
                </form>
                <span className='text-gray-700 uppercase font-bold tracking-wider mb-2'>
                  Skills
                </span>
                <ul>
                  <li className='mb-2'>JavaScript</li>
                  <li className='mb-2'>React</li>
                  <li className='mb-2'>Node.js</li>
                  <li className='mb-2'>HTML/CSS</li>
                  <li className='mb-2'>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-span-4 sm:col-span-9'>
            <div className='bg-white shadow rounded-lg p-6'>
              <h2 className='text-xl font-bold mb-4'>About Me</h2>
              <p className='text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus est vitae tortor ullamcorper, ut vestibulum velit
                convallis. Aenean posuere risus non velit egestas suscipit. Nunc
                finibus vel ante id euismod. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
                erat volutpat. Nulla vulputate pharetra tellus, in luctus risus
                rhoncus id.
              </p>
              <h2 className='text-xl font-bold mt-6 mb-4'>Experience</h2>
              <div className='mb-6'>
                <div className='flex justify-between flex-wrap gap-2 w-full'>
                  <span className='text-gray-700 font-bold'>Web Developer</span>
                  <p>
                    <span className='text-gray-700 mr-2'>at ABC Company</span>
                    <span className='text-gray-700'>2017 - 2019</span>
                  </p>
                </div>
                <p className='mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
            </div>

            <div className='py-4' />

            <div className='col-span-4 sm:col-span-9'>
              <div className='bg-white shadow rounded-lg p-6'>
                <h2 className='text-xl font-bold mb-4'>About Me</h2>
                <p className='text-gray-700'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                  Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                  luctus risus rhoncus id.
                </p>
                <h2 className='text-xl font-bold mt-6 mb-4'>Experience</h2>
                <div className='mb-6'>
                  <div className='flex justify-between flex-wrap gap-2 w-full'>
                    <span className='text-gray-700 font-bold'>
                      Web Developer
                    </span>
                    <p>
                      <span className='text-gray-700 mr-2'>at ABC Company</span>
                      <span className='text-gray-700'>2017 - 2019</span>
                    </p>
                  </div>
                  <p className='mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
