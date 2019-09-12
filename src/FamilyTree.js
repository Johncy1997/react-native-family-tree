import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, {
    Line,
} from 'react-native-svg';
const Sample = require('./sample.json');

const backgroundColors = [
    "grey",
    "green",
    "blue",
    "yellow",
    "orange",
    "violoet",
    "grey"
]

export default class FamilyTree extends Component {

    constructor(props) {
        super(props);
    }

    hasChildren(member) {
        return member.children && member.children.length;
    }

    renderTree(data, level) {
        return (
            <FlatList
                data={data}
                horizontal={true}
                contentContainerStyle={{padding:50}}
                keyExtractor={(item, index) => `${item.name} + ${item.spouse}`}
                listKey={(item, index) => `${item.name} + ${item.spouse}`}
                initialScrollIndex={0}
                renderItem={({ item, index }) => {
                    const { name, spouse, dob, dod, profile } = item;
                    const info = { name, spouse, dob, dod, profile };
                    return (
                        <View
                            style={{
                                justifyContent: 'center', alignItems: 'center',paddingLeft:25,paddingRight:25
                            }}>
                                <View style={{flexDirection:'row',alignItems:'center',
                                }}>
                                    <View  style={{
                                ...this.props.nodeStyle
                            }}>
                                        <Image style={{width:'100%',height:'100%',borderRadius:50}}
                                source={{ uri: info.profile }}/>
                                        <Text style={{ ...this.props.nodeTitleStyle }}>{info.name}{level}</Text>
                                    </View>
                                </View>
                            {
                                this.hasChildren(item) && <Svg height="50" width="20">
                                    <Line x1="50%" y1="0" x2="50%" y2="150" stroke="#00ffd8" strokeWidth="5" />
                                </Svg>
                            }
                            <View style={{
                                flexDirection: 'row',
                                // backgroundColor: backgroundColors[level - 1],
                            }}>
                                {
                                    this.hasChildren(item) && item.children.map((child, index) => {
                                        const { name, spouse, dob, dod, profile } = child;
                                        const info = { name, spouse, dob, dod, profile };
                                        return (
                                            <View key={child.name + child.spouse}
                                            style={{
                                                flexDirection:'row'
                                                // paddingRight:
                                                // this.hasChildren(child) && (child.children.length - 1) !== index ?
                                                //     level * 30
                                                //     : 0
                                            }}
                                            >
                                                <View>
                                                <Svg height="50" width="100%" >

                                                    <Line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ffd8" strokeWidth="5" />
                                                    {/* Right side horizontal line */}
                                                    {
                                                        this.hasChildren(item) && item.children.length != 1 && item.children.length-1 !== index &&
                                                        <Line x1="100%" y1="2" x2="50%" y2="2" stroke="#00ffd8" strokeWidth="5" />
                                                    }
                                                    {/* Left side horizontal line */}
                                                    {
                                                        this.hasChildren(item) && item.children.length != 1 && index!==0 &&
                                                        <Line x1="50%" y1="2" x2="0" y2="2" stroke="#00ffd8" strokeWidth="5" />
                                                    }
                                                </Svg>
                                                {
                                                    this.renderTree([child], level + 1)
                                                }
                                                </View>
                                                {

                                                }
                                                <View style={{
                                                    height:5,
                                                    backgroundColor:this.hasChildren(item) && (item.children.length - 1) !== index ?'#00ffd8':'transparent',
                                                    width:this.hasChildren(child) && (child.children.length - 1) !== index ?
                                                    level * 30
                                                    : 0}}/>
                                                
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                }}
            />
        )
    }

    render() {
        const {
            title,
            titleStyle
        } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Text style={titleStyle}>{title}</Text>
                {
                    this.renderTree(this.props.data, 1)
                }
            </View>
        )
    }
}

FamilyTree.defaultProps = {
    title: "My Family Tree",
    titleStyle: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    data: Sample,
    nodeStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover"
    },
    nodeTitleStyle: {
        fontSize: 14,
        color: "#00ff00",
        fontWeight: "bold"
    }
}

FamilyTree.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    data: PropTypes.array,
    nodeStyle: PropTypes.object,
    nodeTitleStyle: PropTypes.object
}