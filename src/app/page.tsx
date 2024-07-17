import getUserData from '@/actions/getUserData';
import UserCard from '@/components/UserCard';

export default async function Home() {
  const userData = await getUserData();

  return (
    <div className='grid place-content-center h-[80vh]'>
      <UserCard userData={userData} />
    </div>
  );
}
