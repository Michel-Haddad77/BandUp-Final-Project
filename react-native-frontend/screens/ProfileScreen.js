import { View, StyleSheet, Button, Image } from "react-native";
import ProfileHead from "../components/ProfileHead";
import ButtonsSection from "../components/ButtonsSection";
import VideoSection from "../components/VideoSection";

export default function ProfileScreen({route}) {
    console.log(route);
    return (
        <>
            <ProfileHead route={route}/>
            <ButtonsSection/>
            <VideoSection/>
        </>
    );
}

