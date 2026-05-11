import Pshskylinetwrrsfacddtl from '../Pshskylinetwrrsscrns/Pshskylinetwrrsfacddtl.tsx';
import Pshskylinetwrrsarchtdtl from '../Pshskylinetwrrsscrns/Pshskylinetwrrsarchtdtl.tsx';

import {createStackNavigator} from '@react-navigation/stack';

import Pshskylinetwrrsloadr from '../Pshskylinetwrrscpnts/Pshskylinetwrrsloadr.tsx';

import Pshskylinetwrrsonrd from '../Pshskylinetwrrsscrns/Pshskylinetwrrsonrd.tsx';

import Pshskylinetwrrstaabs from '../../Pshskylinetwrrstaabs.tsx';

const Stack = createStackNavigator();

const Pshskylinetwrrsstck = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Pshskylinetwrrsloadr"
        component={Pshskylinetwrrsloadr}
      />
      <Stack.Screen
        name="Pshskylinetwrrsonrd"
        component={Pshskylinetwrrsonrd}
      />
      <Stack.Screen
        name="Pshskylinetwrrstaabs"
        component={Pshskylinetwrrstaabs}
      />
      <Stack.Screen
        name="Pshskylinetwrrsfacddtl"
        component={Pshskylinetwrrsfacddtl}
      />
      <Stack.Screen
        name="Pshskylinetwrrsarchtdtl"
        component={Pshskylinetwrrsarchtdtl}
      />
    </Stack.Navigator>
  );
};

export default Pshskylinetwrrsstck;
