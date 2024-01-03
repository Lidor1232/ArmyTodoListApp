import {StyleSheet} from 'react-native';
import React, {FC, useCallback} from 'react';
import Button from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {onPress} from './CreateTaskButton.controller';

interface IProps {}

export const CreateTaskButton: FC<IProps> = React.memo(({}) => {
  const navigation = useNavigation();

  const _onPress = useCallback(() => {
    onPress({
      navigation,
    });
  }, [navigation]);

  return (
    <Button onPress={_onPress} style={styles.button}>
      Create Task
    </Button>
  );
});

const styles = StyleSheet.create({
  button: {
    marginBottom: 24,
  },
});
