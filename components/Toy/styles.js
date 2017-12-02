import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

export default {
  container: {
    // ...Layout.containerCentered,    
    backgroundColor: '#fff',
    height: Layout.window.width * 0.65,
    width: Layout.window.width * 0.48,
    borderRadius: 5,
    margin: 3,
    alignSelf: 'center',
    borderColor: '#F5F5F5',
    borderWidth: 1
  },
  image: {
    borderRadius: 5,
    height: Layout.window.width * 0.48,
    width: Layout.window.width * 0.475,    
  }, 
  label: {
    // fontSize: 17,
    color: '#36BA8A'
  },
  price: {
    color: '#404040',
    fontSize: 15
  },
  details: { 
    backgroundColor: '#F5F5F5',
    height: Layout.window.width * 0.18,    
    width: Layout.window.width * 0.475,        
    marginTop: -4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5
  },
  moreContainer: {
    ...Layout.containerCentered,
    backgroundColor: '#fff',
    height: Layout.window.width * 0.65,
    width: Layout.window.width * 0.48,
    borderRadius: 5,
    margin: 3,
    alignSelf: 'center',
    borderColor: Colors.secondary,
    borderWidth: 0.5
  },
  more: {
    color: Colors.secondary,
    fontSize: 18
  }
}