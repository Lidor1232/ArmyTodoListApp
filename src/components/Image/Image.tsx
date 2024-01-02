import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {ImageStyle, ResizeMode, Source} from 'react-native-fast-image';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import {
  onError,
  onGetImageSourceWithFallback,
  onHandleValidationSource,
  onLoading,
} from './image.controller';
import {COLORS} from '../../assets/colors/colors';

interface IProps {
  source: Source | number;
  style?: ImageStyle;
  resizeMode?: ResizeMode;
  onLoadEnd?: () => void;
}

export const Image: FC<IProps> = React.memo(
  ({source, style, resizeMode, onLoadEnd}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const sourceWithFallback = useMemo(
      () =>
        onGetImageSourceWithFallback({
          source,
          isError,
        }),
      [source, isError],
    );

    useEffect(() => {
      onHandleValidationSource({source, onIsError: setIsError, isError});
    }, [source]);

    const _onError = useCallback(() => {
      onError({
        onIsError: setIsError,
        isError,
      });
    }, [isError, setIsError]);

    const _onLoad = useCallback(() => {
      onLoading({isLoading, onIsLoading: setIsLoading});
    }, [isLoading, setIsLoading]);

    const _onLoadEnd = useCallback(() => {
      onLoadEnd && onLoadEnd();
    }, [onLoadEnd]);

    return (
      <FastImage
        source={sourceWithFallback}
        style={{...(isLoading ? styles.imageLoading : null), ...style}}
        onError={_onError}
        onLoad={_onLoad}
        resizeMode={resizeMode}
        onLoadEnd={_onLoadEnd}
      />
    );
  },
);

const styles = StyleSheet.create({
  imageLoading: {
    backgroundColor: COLORS.loadingBackgroundColor,
  },
});
