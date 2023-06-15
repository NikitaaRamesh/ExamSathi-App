import React, {useRef} from 'react';

import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NavigationTabs = () => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  const selectTab = (tabIndex) => {
    Animated.timing(slideAnim, {
      toValue: -windowWidth * tabIndex,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={{flexDirection: 'row', transform: [{translateX: slideAnim}]}}>
          <FirstTab />
          <SecondTab />
          <ThirdTab />
        </Animated.View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            selectTab(0);
          }}>
          <Text>One</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            selectTab(1);
          }}>
          <Text>Two</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            selectTab(2);
          }}>
          <Text>Three</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const FirstTab = () => (
  <View style={styles.tabBox}>
    <Text style={styles.caption}>First Tab</Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
      nulla ac mauris condimentum volutpat. In at tincidunt dolor. Pellentesque
      eu congue turpis. Integer viverra quam neque, id imperdiet dui laoreet id.
      Vestibulum dapibus velit non tortor congue scelerisque. Aliquam sed tempor
      nibh. Nam id eros in ex commodo pulvinar nec in erat. Fusce sodales eget
      felis accumsan fermentum. Aliquam a arcu mattis, consequat dui in, rhoncus
      arcu. Aenean sollicitudin semper diam eu aliquet. Donec dignissim
      fermentum feugiat. Curabitur commodo viverra elit, ut elementum nisl
      gravida vitae. Morbi lobortis luctus dictum. Fusce ornare luctus arcu sit
      amet ultrices. Donec nec ipsum in quam condimentum tempor aliquam id
      tortor. In pharetra orci non eros hendrerit dapibus. Aliquam erat
      volutpat. Nunc blandit dui id augue consequat eleifend. Phasellus et
      molestie felis, vitae accumsan mauris. Vivamus diam ligula, malesuada vel
      eros et, sodales scelerisque purus. Aenean at mi eget lectus mollis
      facilisis a vel lacus. Sed facilisis mauris nec facilisis lobortis. Donec
      augue erat, volutpat a diam a, dictum mattis eros.
    </Text>
  </View>
);

const SecondTab = () => (
  <View style={styles.tabBox}>
    <Text style={styles.caption}>Second Tab</Text>
    <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text>
  </View>
);

const ThirdTab = () => (
  <View style={styles.tabBox}>
    <Text style={styles.caption}>Third Tab</Text>
    <Text style={styles.text}>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
      tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
      consequatur aut perferendis doloribus asperiores repellat.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  tabBox: {
    padding: 10,
    backgroundColor: 'grey',
    height: windowHeight,
  },
  caption: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  tabButton: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
    margin: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'justify',
  },
});

export default NavigationTabs;