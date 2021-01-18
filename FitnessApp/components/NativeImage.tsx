import React, { useEffect } from 'react';
import { Image } from 'react-native';

const NativeImage = ({source, width, height}: NativeImageProps) => {
    let image = null;
    useEffect(() => {
        image = <Image source={require(source)} />
    }, [image]);
    return (
        {image}
    );
}

export default NativeImage;
