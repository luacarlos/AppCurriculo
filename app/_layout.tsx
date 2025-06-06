import { Stack } from "expo-router";

export default function Layout(){
  return <Stack />;
}

export default function App(){
  return(
    <View style={{justifyContent:'center',gap:25,flexDirection:'column',alignItems:'center',flex:1,backgroundColor:'#23333A'}}>
      <Image
        source = {require('../assets/images/foto.jpg')}
        style = {{width:150,height:150, borderRadius:150,borderWidth:4, backgroundColor:'#fff', borderColor:'#3f9181'}}
      />
      <Text style = {{color:'#def6f0',fontSize:30,fontWeight:600 ,fontFamily:'Sans-serif'}}>
        Luã Carlos
      </Text>    
    </View>
    )
  }
