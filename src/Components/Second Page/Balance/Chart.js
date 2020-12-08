/* eslint-disable array-callback-return */
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import balance from '../../../Functions/Balance/balance';

function Chart(balanceProps) {
  const {
    totalValue, users, bills,
  } = balanceProps;
  const { getIndex, userPaidTotal } = balance;
  const userData = [];
  const colors = [
    '#f15a24',
    '#fbb03b',
    '#75a0aa',
    '#5163af',
    'gray',
    'brown',
    'yellow',
    'green'];

  const defaultLabelStyle = {
    fontSize: '6px',
  };

  users.map((user, index) => {
    userData.push({
      title: user,
      value: userPaidTotal(bills, getIndex(users, user)),
      color: colors[index],
      label: '1',
    });
  });

  return (
    <PieChart
      radius={40}
      totalValue={totalValue}
      style={{ height: '200px' }}
      data={userData}
      label={({ dataEntry }) => `${dataEntry.title}(${dataEntry.value}€)`}
      labelPosition={106}
      labelStyle={{ ...defaultLabelStyle }}
    />
  );
}

export default Chart;
