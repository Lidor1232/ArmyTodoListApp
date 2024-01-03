import {StyleSheet} from 'react-native';
import React, {FC, useCallback} from 'react';
import Button from '../../../../../../../components/Button/Button';
import IconCheck from '../../../../../../../assets/svg/checkWhite.svg';
import {COLORS} from '../../../../../../../assets/colors/colors';
import {onPress} from './CompleteTaskButton.controller';
import {ITask} from '../../../../../../../utills/types';

interface IProps {
  item: ITask;
}

export const CompleteTaskButton: FC<IProps> = React.memo(({item}) => {
  const _onPress = useCallback(() => {
    onPress({
      task: item,
    });
  }, [item]);

  return (
    <Button
      style={styles.button}
      icon={<IconCheck height={20} width={20} />}
      onPress={_onPress}>
      Completed!
    </Button>
  );
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.green,
  },
});
