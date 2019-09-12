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

Currently I have created for simple static view. It's tested on IOS. In next build will test on Android.

Please fork my repository if you want any other features or raise ideas to improve this library on *issues* tab.
