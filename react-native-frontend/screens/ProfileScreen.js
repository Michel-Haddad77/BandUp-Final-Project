import ProfileHead from "../components/ProfileHead";
import ButtonsSection from "../components/ButtonsSection";
import VideoSection from "../components/VideoSection";

export default function ProfileScreen({route}) {
    
    return (
        <>
            <ProfileHead route={route} is_user={false}/>
            <ButtonsSection route = {route}/>
            <VideoSection is_user={false}/>
        </>
    );
}

