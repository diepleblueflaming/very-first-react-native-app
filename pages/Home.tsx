import { FC, useState } from "react";
import {SafeAreaView} from "react-native";
import { Tab, TabView } from '@rneui/themed';
import SelfIntroduction from './components/SelfIntroduction';
import { Model, ModelFace, Model2, Model2Face } from "../assets/images/index";

const Home: FC = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const users = [
    {
      bgImage: Model,
      avatar: ModelFace,
      name: 'Neel Litoriya',
      location: '8th Place, Las Vegas, Clark, Nevada, USA',
      dateOfBirth: '11/11/1999',
      moreInfo: [
        {label: 'Also known as', value: 'N/A'},
        {label: 'Acting', value: 'Directing'},
        {label: 'Biography', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis repudiandae ut vero. Accusantium alias aperiam culpa doloremque eius esse, fuga ipsa minus molestiae molestias nulla soluta suscipit, totam, ullam.'},
      ]
    },
    {
      bgImage: Model2,
      avatar: Model2Face,
      name: 'Eric Fogel',
      location: 'NewYork City, NewYork, USA',
      dateOfBirth: '05/11/1969',
      moreInfo: [
        {label: 'Also known as', value: 'N/A'},
        {label: 'Acting', value: 'Directing'},
        {label: 'Biography', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis repudiandae ut vero. Accusantium alias aperiam culpa doloremque eius esse, fuga ipsa minus molestiae molestias nulla soluta suscipit, totam, ullam.'},
      ]
    }
  ]

  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab
        value={tabIndex}
        onChange={(e) => setTabIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        containerStyle={{
          backgroundColor: 'gray'
        }}
        variant="primary"
      >
        {
          users.map(({name, dateOfBirth}) => <Tab.Item
            key={dateOfBirth}
            title={name}
            titleStyle={{ fontSize: 16 }}
          />)
        }
      </Tab>

      <TabView value={tabIndex} onChange={setTabIndex} animationType="spring">
        {
          users.map(it =>
            <TabView.Item style={{width: '100%'}} key={it.dateOfBirth}>
              <SelfIntroduction
                bgImage={it.bgImage}
                avatar={it.avatar}
                name={it.name}
                location={it.location}
                dateOfBirth={it.dateOfBirth}
                moreInfo={it.moreInfo}
              />
            </TabView.Item>
          )
        }
      </TabView>
    </SafeAreaView>
  );
}

export default Home;
