require("../lib/swisscalc.lib.format.js")
require("../lib/swisscalc.lib.operator.js")
require("../lib/swisscalc.lib.operatorCache.js")
require("../lib/swisscalc.lib.shuntingYard.js")
require("../lib/swisscalc.calc.calculator.js")
require("../lib/swisscalc.display.numericDisplay.js")
require("../lib/swisscalc.display.memoryDisplay.js")

import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, PanResponder, Dimensions } from 'react-native'
import CalcButton from '../components/CalcButton'
import CalcDisplay from '../components/CalcDisplay'

export default function CalculatorScreen() {

    const oc = global.swisscalc.lib.operatorCache;
    const [calc, setCalc] = useState(new global.swisscalc.calc.calculator())
    const [display, setDisplay] = useState(0)
    const [orientation, setOrientation] = useState('portrait')

    useEffect(() => {
        console.log('Starting orientation is ' + orientation)

        Dimensions.addEventListener('change', () => {
            const { width, height } = Dimensions.get('window')
            var orientation = (width > height) ? 'landscape' : 'portrait'
            setOrientation(orientation)
        })
    }, []);

    const panResponder = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                if (Math.abs(gestureState.dx) >= 50) {
                    onButtonPress('backspace')
                }
            },
        })
    ).current

    const onButtonPress = (digit) => {
        switch (digit) {
            case 'C':
                calc.clear()
                break
            case '+/-':
                calc.negate()
                break
            case '+':
                calc.addBinaryOperator(oc.AdditionOperator)
                break
            case '-':
                calc.addBinaryOperator(oc.SubtractionOperator)
                break
            case 'x':
                calc.addBinaryOperator(oc.MultiplicationOperator)
                break
            case '/':
                calc.addBinaryOperator(oc.DivisionOperator)
                break
            case '=':
                calc.equalsPressed()
                break
            case '%':
                calc.addUnaryOperator(oc.PercentOperator)
                break
            case 'backspace':
                calc.backspace()
                break
            default:
                calc.addDigit(digit)
        }

        setDisplay(calc.getMainDisplay())
    }

    const renderPortrait = () => {
        return (
            <View style={styles.container}>
                <View style={styles.displayContainer} {...panResponder.panHandlers}>
                    <CalcDisplay display={display} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <CalcButton onButtonPress={onButtonPress} title="C" backgroundColor='#DCC894' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="+/-" backgroundColor='#DCC894' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="%" backgroundColor='#DCC894' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="/" backgroundColor='#DCA394' color='white' />
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onButtonPress={onButtonPress} title="7" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="8" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="9" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="x" backgroundColor='#DCA394' color='white' />
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onButtonPress={onButtonPress} title="4" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="5" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="6" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="-" backgroundColor='#DCA394' color='white' />
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onButtonPress={onButtonPress} title="1" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="2" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="3" backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="+" backgroundColor='#DCA394' color='white' />
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onButtonPress={onButtonPress} title="0" backgroundColor='#607D8B' color='white' style={{ flex: 2 }} />
                        <CalcButton onButtonPress={onButtonPress} title="." backgroundColor='#607D8B' color='white' />
                        <CalcButton onButtonPress={onButtonPress} title="=" backgroundColor='#DCA394' color='white' />
                    </View>
                </View>
            </View>
        )
    }

    const renderLandscape = () => {
        return <View><Text>Landscape mode is not available</Text></View>
    }

    return orientation == 'portrait' ? renderPortrait() : renderLandscape()
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonContainer: {
        paddingBottom: 20
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
