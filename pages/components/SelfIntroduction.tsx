import { FC } from 'react';
import {ImageURISource} from "react-native";
import {
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  Text
} from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";
import Styles from "./SelfIntroduction.style";

type PropsTypes = {
  bgImage: ImageURISource,
  avatar: ImageURISource,
  name: string,
  location: string,
  dateOfBirth: string,
  moreInfo: {label: string, value: string}[]
}

const SelfIntroduction: FC<PropsTypes> = ({ bgImage, avatar, name, location, dateOfBirth, moreInfo }) => {
  const {width} = useWindowDimensions();

  return (
    <View style={Styles.container}>
      <ImageBackground source={bgImage} style={Styles.image} >
        <View style={{...Styles.informationArea, width: width - 32}}>
          <Image source={avatar} style={Styles.avatar} />
          <Text style={Styles.name}>{name}</Text>
          <View style={{...Styles.informationItem}}>
            <Icon name={'location'} size={20}/>
            <Text style={Styles.informationItemText}>{location}</Text>
          </View>
          <View style={{...Styles.informationItem}}>
            <Icon name={'calendar'} size={20}/>
            <Text style={Styles.informationItemText}>{dateOfBirth}</Text>
          </View>
          {
            moreInfo.map(({label, value}) =>
              <View style={{...Styles.informationItem}} key={label}>
                <Text style={Styles.informationItemLabel}>{label}</Text>
                <Text style={Styles.informationItemText}>{value}</Text>
              </View>
            )
          }
        </View>
      </ImageBackground>
    </View>
  );
};

export default SelfIntroduction;
