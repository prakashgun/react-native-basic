import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'


function LibraryList({ libraries }) {

    return (
        <View>
            <FlatList
                data={libraries}
                renderItem={library => {
                    return <ListItem library={library.item} />
                }}
                keyExtractor={library => library.id.toString()}
            />
        </View>
    )
}


const mapStateToProps = state => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
