import React from 'react'
import {
    StyleSheet, Text, TouchableWithoutFeedback, View
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

function ListItem({ library, selectLibrary, expanded }) {

    return (
        <TouchableWithoutFeedback onPress={() => selectLibrary(library.id)}>
            <View>
                <CardSection>
                    <Text style={styles.title}>{library.title}</Text>
                </CardSection>
                {expanded && (
                    <CardSection>
                        <Text style={styles.description}>{library.description}</Text>
                    </CardSection>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    },
    description: {
        flex: 1
    }
})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)