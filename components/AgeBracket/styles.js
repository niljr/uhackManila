import Layout from '../../constants/Layout';

export default {
  container: {
    ...Layout.containerCentered,    
    height: Layout.heightThird,
    width: Layout.window.width * 0.93,
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 7,
    marginBottom: 7,
    alignSelf: 'center'
  },
  image: {
    ...Layout.containerCentered,
    height: Layout.heightThird,
    borderRadius: 5,
    width: Layout.window.width * 0.93,    
  }, 
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    height: Layout.heightThird,
    borderRadius: 5,
    width: Layout.window.width * 0.93,    
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30
  },
  label: {
    fontSize: 30,
    color: '#36BA8A'
  },
  age: {
    color: 'lightgray',
    fontSize: 15
  }
}