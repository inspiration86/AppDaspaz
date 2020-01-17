import React, {Component} from "react";
import {Toolbar} from "react-native-material-ui";
 class ToolbarSearch extends Component {
    render() {
        return(
            <Toolbar
                leftElement="menu"
                centerElement="جستجوی محصول"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                }}
                rightElement={{
                    menu: {
                        icon: "more-vert",
                        labels: ["تنظیمات", "تنظیمات"]
                    }
                }}
                onRightElementPress={ (label) => { console.log(label) }}
            />
        );
    }
}
export {ToolbarSearch};