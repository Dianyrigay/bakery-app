import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator,  StyleSheet} from 'react-native'
import { Shop } from '../Context/ShopProvider';
import { auth } from '../Firebase/config';


const Categories = ({ navigation }) => {

  const {categories, clearCarrito} = useContext(Shop);

  const handleCategory = (categoryID) => {
    //console.log(categoryID);
    navigation.navigate('Products', {
      category: categoryID
    })
  }

  const handleSignOut = () => {
    clearCarrito();
    signOut(auth).then(() => {

      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View style ={styles.container}>



      {categories.length !== 0 ?
        <FlatList

          data={categories}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleCategory(item.category)}
            >
              <Text style ={styles.cat}>
                {item.category}
              </Text>

            </TouchableOpacity>
          }
          }
          keyExtractor={item => item.id.toString()}
        />


        :
        <ActivityIndicator size={"large"} color={"blue"}/>
      }
       <TouchableOpacity onPress={handleSignOut}>
        <Text  style ={styles.buttoner}>
          Sign out
        </Text>
      </TouchableOpacity>
    </View>

  )
}

export default Categories


const styles = StyleSheet.create({
  paddiner: {
    padding: 20,
    marginTop:20,
  },
  cat: {
    padding: 20,
    marginTop:20,
    backgroundColor:'#da7cec',
    borderRadius:15,
    width: 200,
    fontWeight:'bold',
    textAlign:'center'
  },
  marginer: {
    marginTop:40,
  },
  buttoner: {
    backgroundColor:'#918d91',
    padding: 20,
    marginTop:50,
    textAlign: 'center',
    width: 200,
    bottom: 20,
    position: 'relative',
    borderRadius:15,
    color: 'white',
    fontWeight:'bold'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    textAlign: 'center'

  }

})