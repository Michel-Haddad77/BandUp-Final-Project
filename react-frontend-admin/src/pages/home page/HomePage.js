import SideBar from '../../components/side bar/SideBar';
import './styles.css';
import UsersSection from '../../components/users section/UsersSection';

export default function LoginPage() {

  return (
    <div className='page-container'>
      <SideBar />
      <div className='sections-container'>
        <UsersSection/>
        <UsersSection/>
      </div>
    </div>
    
  )
}