import {Pressable, StyleSheet} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface IProps {
  children: ReactNode;
  onPress: () => void;
}

export const OptionButton: FC<IProps> = React.memo(({children, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {children}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});
