import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {StyleSheet} from "react-native";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {key: 'music', title: 'Music', icon: 'camera'},
                {key: 'albums', title: 'Albums', icon: 'album'},
                {key: 'recents', title: 'Recents', icon: 'history'},
            ],
        };

    }
    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}
const styles = StyleSheet.create({
    textstyle: {
        fontFamily: 'IRANSansWeb(FaNum)',
        fontSize: 20,
        color: 'white',
    },
});