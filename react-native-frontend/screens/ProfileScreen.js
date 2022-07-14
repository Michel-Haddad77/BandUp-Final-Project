import { View, StyleSheet, Button, Image } from "react-native";
import ProfileHead from "../components/ProfileHead";
import ButtonsSection from "../components/ButtonsSection";
import VideoSection from "../components/VideoSection";

export default function ProfileScreen(props) {
    return (
        <>
            <ProfileHead/>
            <ButtonsSection/>
            <VideoSection/>
        </>
    );
}

