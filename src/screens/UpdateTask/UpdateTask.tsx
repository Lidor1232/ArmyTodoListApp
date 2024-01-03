import React, {FC} from 'react';
import ScreenContainer from '../../components/Screen/ScreenContainer/ScreenContainer';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {UpdateTaskRequest} from './components/UpdateTaskRequest/UpdateTaskRequest';

interface IProps {}

export const UpdateTask: FC<IProps> = React.memo(({}) => {
  return (
    <ScreenContainer style={styles.container}>
      <UpdateTaskRequest />
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: wp('2.5%'),
  },
  title: {
    fontSize: 20,
  },
});
