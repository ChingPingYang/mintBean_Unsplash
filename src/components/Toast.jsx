import React from 'react';
import ImageEditor from '@toast-ui/react-image-editor'

const myTheme = {
    // Theme object to extends default dark theme.
  };

const Toast = (props) => {
    
    const imgURL = props.location.state;
    return (
        <ImageEditor
            includeUI={{
            loadImage: {
                path: `${imgURL}`,
                name: 'SampleImage'
            },
            theme: myTheme,
            menu: ['shape', 'filter'],
            initMenu: 'filter',
            uiSize: {
                width: '100%',
                height: '100%'
            },
            menuBarPosition: 'bottom'
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70
            }}
            usageStatistics={true}
        />
    )
}

export default Toast;