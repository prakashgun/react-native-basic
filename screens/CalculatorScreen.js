require("../lib/swisscalc.lib.format.js")
require("../lib/swisscalc.lib.operator.js")
require("../lib/swisscalc.lib.operatorCache.js")
require("../lib/swisscalc.lib.shuntingYard.js")
require("../lib/swisscalc.calc.calculator.js")
require("../lib/swisscalc.display.numericDisplay.js")
require("../lib/swisscalc.display.memoryDisplay.js")

import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CalcButton from '../components/CalcButton'
import CalcDisplay from '../components/CalcDisplay'

export default function CalculatorScreen() {

    var oc = global.swisscalc.lib.operatorCache;
    // const [oc, setOc] = useState(global.swisscalc.lib.operatorCache)
    const [calc, setCalc] = useState(new global.swisscalc.calc.calculator())
    const [display, setDisplay] = useState(0)


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
            case '=':
                calc.equalsPressed()
                break
            case '%':
                calc.addUnaryOperator(oc.PercentOperator)
                break
            default:
                calc.addDigit(digit)
        }

        setDisplay(calc.getMainDisplay())
    }

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
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
