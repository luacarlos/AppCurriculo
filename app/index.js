import {View, Text, Button,Image} from 'react-native';
import {useRouter} from 'expo-router';

export default function HomeScreen(){
    const router = useRouter();
    return (
        <View style = {{flex:1,justifyContent:'center', alignItems:'center', backgroundColor:'#8f8f8f'}}>
            <View style = {{justifyContent:'center',alignItems:'center', width:1000}}>
                <Text style={{fontSize:40, fontWeight:'bold'}}>Apresentação</Text>
                <Image
                    source = {require('../assets/images/seila.jpg')}
                    style = {{width:250,height:250, borderRadius:150,borderWidth:4,borderColor:'#3f9181'}}
                />
                <Text style={{fontSize:25}}>Luã Carlos dos Santos Abreu</Text>
                <Text style={{fontSize:25}}>18 Anos de Idade</Text>
                <Text style={{fontSize:25}}>Cursando o Voucher Desenvolvedor de Sistemas</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'left',backgroundColor:'#f2ecff',padding:25,borderRadius:12, gap:15}}>
                <Button  title="Formação Profissional" onPress={()=>router.push('/profissional')}/>
                <Button title="Endereço" onPress={()=>router.push('/endereco')}/>
                <Button title="Projetos" onPress={()=>router.push('/projeto')}/>
                <Button title="Contato" onPress={()=>router.push('/contato')}/>
            </View>
        </View>
       
    )

}
