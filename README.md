**React Native Family Tree**

This library created for rendering simple tree for one family in DFS method.

**DEMO**
![IOS](/assets/iostree.gif)

**Installation**
1. `npm install --save react-native-family-tree`
2. `npm install --save react-native-svg` 
3. `react-native link react-native-svg`

**Usage**
1. `import FamilyTree from 'react-native-family-tree';`
2. In your render method: 
&nbsp;&nbsp;&nbsp;&nbsp;```<FamilyTree
          title="Rethinam and Family"
          pathColor='black'
          siblingGap={10}
          nodeStyle={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
          nodeTitleColor='red'
          familyGap={5}
          strokeWidth={2}
          titleColor='green'
          />```

**Sample Data**
```
[{
    "_comment":"Rethinam and Family",
    "name":"Rethinam",
    "spouse":"Pitchaiammal",
    "dob":"03/03/1925",
    "dod":null,
    "profile":"https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    "children":[
        {
            "_comment":"AmalRaj and Family",
            "name":"AmalRaj",
            "spouse":"Jothi",
            "dob":"03/03/1925",
            "dod":null,
            "order":1,
            "profile":"https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
            "children":[
                {
                    "_comment":"Layola and Family",
                    "name":"Layola",
                    "spouse":null,
                    "dob":"03/03/1925",
                    "dod":null,
                    "order":1,
                    "profile":"https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                },
                {
                    "_comment":"Judith and Family",
                    "name":"Judith",
                    "spouse":null,
                    "dob":"03/03/1925",
                    "dod":null,
                    "order":2,
                    "profile":"https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                },
                {
                    "_comment":"Alen and Family",
                    "name":"Alen",
                    "spouse":null,
                    "dob":"03/03/1925",
                    "dod":null,
                    "order":3,
                    "profile":"https://images.unsplash.com/photo-1520206444322-d2df0dd4e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                }
            ]
        },...
```

**Props**
| KeyName | Description |
| :--- | ---: |
| `title` | The tree heading |
| `titleStyle` | The tree heading style |
| `titleColor` | The tree heading text color |
| :--- | ---: |
| `data` | The family tree data passed in `[{...}]`. Sample format is attached above |
| :--- | ---: |
| `nodeStyle` | Wrapper for each member style |
| `nodeTitleStyle` | Member name text style |
| `nodeTitleColor` | Member name text color |
| `imageStyle` | Style for profile picture of node |
| :--- | ---: |
| `siblingGap` | The padding between two sibling nodes |
| `pathColor` | The connected line color |
| `strokeWidth` | The connected line width |
| :--- | ---: |
| `familyGap` | The gap between two tree (i.e the paddingRight gap between two family in binary tree format)|


Currently I have created for simple static view using [React Native Flatlist](https://facebook.github.io/react-native/docs/flatlist.html) in a recursive mode. It's tested on IOS. In next build will test on Android.

Please fork my repository if you want any other features or raise ideas to improve this library on [Issues](https://github.com/Johncy1997/react-native-family-tree/issues) tab.
