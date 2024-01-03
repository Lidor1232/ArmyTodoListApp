import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../../../components/Loader/Loader';

interface IProps {}

export const ListFooter: FC<IProps> = React.memo(({}) => {
  const isFetchAll = useSelector(
    (state: IRootState) => state.tasks.requests.tasksRequest.isFetchAll,
    shallowEqual,
  );

  return (
    <View style={styles.container}>{!isFetchAll ? <Loader /> : null}</View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
});
