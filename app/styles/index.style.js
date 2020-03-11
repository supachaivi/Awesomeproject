import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#EBEBEB',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30,
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 4,
        marginHorizontal: 8
    },


    
    itemContainer: {
        marginTop: 25,
    },
    textinput: {
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    textinput1: {
        alignSelf: 'center',
        marginTop: 20,
    },
    restaurantimage: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        width: 390,
        height: 250,
    },
    accountimage: {
        marginTop: 25,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        width: 150,
        height: 150,
        borderRadius: 500,
        alignSelf: 'center',
    },
    itemContainer: {
        marginTop: 35,
        alignItems: 'center',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    TextComponentStyle: {
        width: 200,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#ffffff',
        padding: 6,
        fontSize: 20,
        textAlign: 'center',
    },
    logo: {
        width: 50,
        height: 33,
        alignItems: 'center',
        borderRadius: 10,
        // borderColor: 'black',
        // borderWidth: 1
    }
});
